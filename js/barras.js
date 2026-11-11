/*
 * Barras de fracciones: la misma idea mostrada de dos maneras.
 *
 *   En pantalla: cada fracción es una barra partida en pedazos iguales,
 *   con los pedazos que se toman en color. Sirve a quien tiene algo de visión
 *   y a quien acompaña.
 *
 *   En sonido: un toque por cada pedazo. Agudo si el pedazo se toma, grave si no.
 *   Sirve a quien no ve.
 *
 * Una "escena" es lo que se muestra en un paso:
 *   { barras: [{ id, n, d, color, rotulo, partes, estados, grupo }], signo: '+' }
 *
 *   n, d      se pintan los primeros n pedazos de una barra partida en d
 *   color     0 amarillo, 1 azul, 2 verde
 *   partes    en vez de n: tramos seguidos, [[cuántos, estado], ...]
 *   estados   en vez de n: el estado de cada pedazo, uno por uno
 *   grupo     cada cuántos pedazos va una separación más gruesa
 *
 * Estados de un pedazo: c0, c1, c2 (tomado, en cada color), alt (tomado, color alterno),
 * claro (parte de algo, pero no tomado), quitado (se restó) y vacio.
 */
(function (AE) {
  'use strict';
  var MAX_PEDAZOS = 40, MAX_ENTEROS = 4, MAX_SONIDOS = 32;
  var TONOS = { c0: 880, c1: 1047, c2: 784, alt: 988, claro: 523, quitado: 262, vacio: 330 };
  var recordado = {};   // id de barra -> en cuántos pedazos estaba partida la última vez que se dibujó

  // Completa una barra: cuántos enteros ocupa y el estado de cada pedazo.
  function normalizar(b) {
    var estados = [];
    if (b.estados) estados = b.estados.slice();
    else if (b.partes) b.partes.forEach(function (p) { for (var k = 0; k < p[0]; k++) estados.push(p[1]); });
    else for (var i = 0; i < b.n; i++) estados.push('c' + (b.color || 0));
    var enteros = Math.max(1, Math.ceil(estados.length / b.d));
    while (estados.length < enteros * b.d) estados.push('vacio');
    return { id: b.id, d: b.d, enteros: enteros, estados: estados, grupo: b.grupo || 0, rotulo: b.rotulo || '' };
  }

  function dibujable(escena) {
    if (!escena || !escena.barras || !escena.barras.length) return false;
    return escena.barras.every(function (b) {
      if (!(b.d >= 1) || b.d > MAX_PEDAZOS) return false;
      return normalizar(b).enteros <= MAX_ENTEROS;
    });
  }

  // Arma una escena con las fracciones que se nombran en un texto de lección (máximo tres).
  function deTexto(crudo) {
    var re = /\{(?:(\d+) )?(\d+)\/(\d+)\}/g, m, vistas = {}, barras = [];
    while ((m = re.exec(String(crudo))) && barras.length < 3) {
      var d = Number(m[3]), n = Number(m[2]) + (m[1] ? Number(m[1]) * d : 0);
      if (d < 2 || d > 24 || n > 3 * d || vistas[n + '/' + d]) continue;
      vistas[n + '/' + d] = true;
      barras.push({ id: 't' + barras.length, n: n, d: d, color: barras.length, rotulo: m[0] });
    }
    return barras.length ? { barras: barras, signo: '' } : null;
  }

  // La escena convertida en notas: [frecuencia, cuándo empieza, cuánto dura, volumen]
  function notas(escena) {
    if (!dibujable(escena) || escena.barras.length > 3) return [];
    var filas = escena.barras.map(normalizar), total = 0;
    filas.forEach(function (f) { total += f.estados.length; });
    if (total > MAX_SONIDOS) return [];
    var salida = [], t = 0;
    filas.forEach(function (f) {
      f.estados.forEach(function (e, i) {
        var suave = e === 'vacio' || e === 'quitado';
        salida.push([TONOS[e] || TONOS.vacio, t, 0.075, suave ? 0.07 : 0.12]);
        t += 0.11;
        if ((i + 1) % f.d === 0 && i + 1 < f.estados.length) t += 0.13;   // pausa entre un entero y el siguiente
      });
      t += 0.34;   // pausa entre una barra y la siguiente
    });
    return salida;
  }

  // ---------- Dibujo ----------
  function crear(etiqueta, clase) {
    var el = document.createElement(etiqueta);
    if (clase) el.className = clase;
    return el;
  }

  // Dibuja la escena dentro de un contenedor. Devuelve true si dibujó algo.
  function dibujar(contenedor, escena) {
    contenedor.innerHTML = '';
    if (!dibujable(escena)) {
      contenedor.hidden = true;
      return false;
    }
    contenedor.hidden = false;
    var filas = escena.barras.map(normalizar), nuevo = {};
    var unidades = Math.max.apply(null, filas.map(function (f) { return f.enteros; }));

    filas.forEach(function (f, k) {
      var antes = recordado[f.id];
      // Si la barra ya estaba y ahora tiene más pedazos, se anima el corte de cada pedazo.
      var corte = antes && f.d > antes && f.d % antes === 0 ? f.d / antes : 0;
      var fila = crear('div', 'fila' + (antes ? ' quieta' : ''));
      var signo = crear('span', 'signo');
      signo.textContent = k === 0 ? '' : (f.id === 'r' ? '=' : (k === 1 ? escena.signo : ''));
      var rotulo = crear('span', 'rotulo');
      rotulo.innerHTML = AE.Texto.frases(f.rotulo).map(function (x) { return x.html; }).join(' ');
      var pista = crear('div', 'pista');

      for (var e = 0; e < f.enteros; e++) {
        var entero = crear('div', 'entero');
        entero.style.width = (100 / unidades) + '%';
        for (var i = 0; i < f.d; i++) {
          var pos = e * f.d + i;
          var seg = crear('span', 'seg ' + f.estados[pos]);
          if (corte && i % corte !== 0) seg.className += ' corte';
          if (f.grupo && i > 0 && i % f.grupo === 0) seg.className += ' grupo';
          seg.style.setProperty('--i', pos);
          entero.appendChild(seg);
        }
        pista.appendChild(entero);
      }
      fila.appendChild(signo);
      fila.appendChild(rotulo);
      fila.appendChild(pista);
      contenedor.appendChild(fila);
      nuevo[f.id] = f.d;
    });
    recordado = nuevo;
    return true;
  }

  AE.Barras = {
    normalizar: normalizar,
    dibujable: dibujable,
    deTexto: deTexto,
    notas: notas,
    dibujar: dibujar,
    olvidar: function () { recordado = {}; }
  };
})(window.AE = window.AE || {});
