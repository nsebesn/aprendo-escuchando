/*
 * La voz del programa. Usa la voz en español que ya trae el aparato.
 * Habla frase por frase: así resalta en pantalla la frase que suena
 * y se puede interrumpir en cualquier momento.
 */
(function (AE) {
  'use strict';
  var P = AE.Progreso;
  var synth = window.speechSynthesis || null;
  var NIVELES = [0.6, 0.75, 0.9, 1.05, 1.2, 1.4];
  var turno = 0, espera = null, guardia = null, enCurso = null, resaltado = null;

  var V = AE.Voz = {
    disponible: !!synth,
    activa: P.datos.vozActiva !== false,
    nivel: typeof P.datos.nivelVoz === 'number' ? P.datos.nivelVoz : 2,
    voces: [],
    elegida: null,
    hablando: false,
    registro: []      // lo último que se dijo (sirve para pruebas y para el modo con lector de pantalla)
  };

  var BUENAS = /paulina|m[oó]nica|marisol|soledad|jimena|ang[eé]lica|francisca|isabela|sabina|salom[eé]|dalia|helena|laura|google|natural/i;
  var RARAS = /eddy|flo\b|grandma|grandpa|reed|rocko|sandy|shelley/i;

  // Menos puntos = mejor. Se prefiere español de Colombia y de América Latina.
  function puntos(v) {
    var l = String(v.lang || '').toLowerCase().replace('_', '-'), p;
    if (l === 'es-co') p = 0; else if (l === 'es-419') p = 1; else if (l === 'es-mx') p = 2;
    else if (l === 'es-us') p = 3; else if (l === 'es-es') p = 5; else p = 4;
    p *= 10;
    if (RARAS.test(v.name)) p += 100;
    if (BUENAS.test(v.name)) p -= 3;
    if (navigator.onLine === false && v.localService === false) p += 200;
    return p;
  }

  V.cargarVoces = function () {
    if (!synth) return;
    var todas = synth.getVoices() || [];
    V.voces = todas.filter(function (v) { return /^es([-_]|$)/i.test(v.lang || ''); })
      .sort(function (a, b) { return puntos(a) - puntos(b); });
    var guardada = P.datos.nombreVoz;
    V.elegida = V.voces.filter(function (v) { return v.name === guardada; })[0] || V.voces[0] || null;
  };

  function marcar(el) {
    if (resaltado) resaltado.classList.remove('sonando');
    resaltado = el || null;
    if (resaltado) {
      resaltado.classList.add('sonando');
      if (resaltado.scrollIntoView) resaltado.scrollIntoView({ block: 'nearest' });
    }
  }

  function detener() {
    clearTimeout(espera);
    clearTimeout(guardia);
    if (synth) synth.cancel();
    AE.Sonidos.silenciar();
    enCurso = null;
    marcar(null);
    V.hablando = false;
  }

  /*
   * lista: [{ voz: 'texto', el: elementoQueSeResalta, lento: true }]
   * opciones: { alTerminar, retraso (ms), sinAviso, notas }
   *   notas: lo que suena al terminar de hablar y antes del aviso final (las barras de fracciones)
   */
  V.decir = function (lista, opciones) {
    opciones = opciones || {};
    var mio = ++turno;
    detener();
    lista = (lista || []).filter(function (x) { return x && x.voz && /\S/.test(x.voz); });
    var todo = lista.map(function (x) { return x.voz; }).join(' ');
    V.registro.push(todo);
    if (V.registro.length > 60) V.registro.shift();

    if (!V.activa || !synth) {
      // Modo para lector de pantalla: el texto va a una zona que el lector anuncia.
      var vivo = document.getElementById('vivo');
      if (vivo) vivo.textContent = todo;
      if (opciones.alTerminar) {
        espera = setTimeout(function () { if (mio === turno) opciones.alTerminar(); }, 600 + todo.length * 60);
      }
      return;
    }

    V.hablando = true;
    var i = 0;
    function sigue() {
      if (mio !== turno) return;
      if (i >= lista.length) {
        marcar(null);
        var cerrar = function () {
          if (mio !== turno) return;
          V.hablando = false;
          if (!opciones.sinAviso) AE.Sonidos.tocar('listo');
          if (opciones.alTerminar) opciones.alTerminar();
        };
        var dura = opciones.notas && opciones.notas.length ? AE.Sonidos.secuencia(opciones.notas) : 0;
        if (dura) espera = setTimeout(cerrar, dura + 200); else cerrar();
        return;
      }
      var item = lista[i++], hecho = false;
      var u = new window.SpeechSynthesisUtterance(item.voz);
      if (V.elegida) { u.voice = V.elegida; u.lang = String(V.elegida.lang).replace('_', '-'); }
      else u.lang = 'es-MX';
      u.rate = NIVELES[V.nivel] * (item.lento ? 0.8 : 1);
      u.pitch = 1;
      u.volume = 1;
      function fin() {
        if (hecho) return;
        hecho = true;
        clearTimeout(guardia);
        sigue();
      }
      u.onend = fin;
      u.onerror = fin;
      enCurso = u;   // se guarda la referencia para que el navegador no la descarte a mitad de frase
      marcar(item.el);
      // Guardia: algunos navegadores a veces no avisan cuando terminan de hablar.
      (function vigilar(ms) {
        guardia = setTimeout(function () {
          if (mio !== turno || hecho) return;
          if (synth.speaking || synth.pending) vigilar(1500); else fin();
        }, ms);
      })(3000 + item.voz.length * 130);
      synth.speak(u);
    }
    // Pausa corta: le da tiempo al navegador de callar lo anterior.
    espera = setTimeout(sigue, 90 + (opciones.retraso || 0));
  };

  V.callar = function () {
    turno++;
    detener();
  };

  // Debe llamarse dentro del primer toque o tecla: los navegadores no dejan hablar antes.
  V.despertar = function () {
    if (!synth) return;
    try {
      synth.cancel();
      var u = new window.SpeechSynthesisUtterance(' ');
      u.volume = 0;
      synth.speak(u);
    } catch (e) { /* nada */ }
    V.cargarVoces();
  };

  // cambio: +1 más rápido, -1 más despacio. Devuelve false si ya está en el límite.
  V.cambiarVelocidad = function (cambio) {
    var nuevo = V.nivel + cambio;
    if (nuevo < 0 || nuevo >= NIVELES.length) return false;
    V.nivel = nuevo;
    P.datos.nivelVoz = nuevo;
    P.guardar();
    return true;
  };

  // Pasa a la siguiente voz en español del aparato. Devuelve su nombre, o null si solo hay una.
  V.siguienteVoz = function () {
    if (V.voces.length < 2) return null;
    var k = V.voces.indexOf(V.elegida);
    V.elegida = V.voces[(k + 1) % V.voces.length];
    P.datos.nombreVoz = V.elegida.name;
    P.guardar();
    return V.elegida.name;
  };

  V.activar = function (si) {
    V.callar();
    V.activa = !!si;
    P.datos.vozActiva = V.activa;
    P.guardar();
    document.body.classList.toggle('con-lector', !V.activa);
    var vivo = document.getElementById('vivo');
    if (vivo && V.activa) vivo.textContent = '';
  };

  if (synth) {
    V.cargarVoces();
    if (synth.addEventListener) synth.addEventListener('voiceschanged', V.cargarVoces);
    else synth.onvoiceschanged = V.cargarVoces;
  }
})(window.AE = window.AE || {});
