/* Sonidos cortos que orientan sin necesidad de ver. No usan archivos: se generan aquí. */
(function (AE) {
  'use strict';
  var ctx = null;
  var vivos = [];   // notas de una secuencia que todavía pueden estar sonando

  // Cada nota: [frecuencia, cuándo empieza, cuánto dura, volumen]
  var MELODIAS = {
    listo: [[1175, 0, 0.08, 0.06]],                              // "ya terminé de hablar, te toca"
    mover: [[520, 0, 0.05, 0.08]],                               // cambié de paso o de opción
    tope: [[150, 0, 0.14, 0.16]],                                // no se puede ir más allá
    entrar: [[440, 0, 0.08, 0.1], [660, 0.08, 0.11, 0.1]],       // entré a algo
    atras: [[660, 0, 0.08, 0.1], [440, 0.08, 0.11, 0.1]],        // salí de algo
    bien: [[659, 0, 0.13, 0.15], [988, 0.12, 0.24, 0.15]],       // respuesta correcta
    mal: [[262, 0, 0.17, 0.13], [208, 0.16, 0.28, 0.13]],        // respuesta equivocada (suave, sin regaño)
    fiesta: [[523, 0, 0.13, 0.14], [659, 0.13, 0.13, 0.14], [784, 0.26, 0.13, 0.14], [1047, 0.39, 0.34, 0.14]]
  };

  function contexto() {
    if (!ctx) {
      var Clase = window.AudioContext || window.webkitAudioContext;
      if (!Clase) return null;
      try { ctx = new Clase(); } catch (e) { return null; }
    }
    if (ctx.state === 'suspended' && ctx.resume) ctx.resume();
    return ctx;
  }

  AE.Sonidos = {
    registro: [],
    despertar: contexto,
    tocar: function (nombre) {
      var melodia = MELODIAS[nombre];
      if (!melodia) return;
      AE.Sonidos.registro.push(nombre);
      if (AE.Sonidos.registro.length > 40) AE.Sonidos.registro.shift();
      var c = contexto();
      if (!c) return;
      var t0 = c.currentTime + 0.01;
      melodia.forEach(function (n) { nota(c, t0, n); });
    },
    // Toca una fila de notas [frecuencia, inicio, duración, volumen]. Devuelve cuánto dura, en milisegundos.
    secuencia: function (notas) {
      AE.Sonidos.silenciar();
      if (!notas || !notas.length) return 0;
      AE.Sonidos.registro.push('barras:' + notas.length);
      var c = contexto(), fin = 0;
      notas.forEach(function (n) { fin = Math.max(fin, n[1] + n[2]); });
      if (c) {
        var t0 = c.currentTime + 0.03;
        vivos = notas.map(function (n) { return nota(c, t0, n); });
      }
      return Math.round(fin * 1000);
    },
    // Calla la secuencia que esté sonando (los sonidos cortos de aviso no se tocan).
    silenciar: function () {
      vivos.forEach(function (osc) { try { osc.stop(); } catch (e) { /* ya había terminado */ } });
      vivos = [];
    }
  };

  function nota(c, t0, n) {
    var osc = c.createOscillator(), gan = c.createGain();
    osc.type = 'sine';
    osc.frequency.value = n[0];
    gan.gain.setValueAtTime(0.0001, t0 + n[1]);
    gan.gain.exponentialRampToValueAtTime(n[3], t0 + n[1] + 0.015);
    gan.gain.exponentialRampToValueAtTime(0.0001, t0 + n[1] + n[2]);
    osc.connect(gan);
    gan.connect(c.destination);
    osc.start(t0 + n[1]);
    osc.stop(t0 + n[1] + n[2] + 0.03);
    return osc;
  }
})(window.AE = window.AE || {});
