/* Lista de lecciones y herramientas para armar preguntas con números distintos cada vez. */
(function (AE) {
  'use strict';

  AE.lecciones = [];
  AE.leccion = function (def) { AE.lecciones.push(def); };

  function mcd(a, b) {
    a = Math.abs(a); b = Math.abs(b);
    while (b) { var t = a % b; a = b; b = t; }
    return a;
  }

  var U = AE.util = {
    // número entero al azar entre a y b, incluidos los dos
    al: function (a, b) { return a + Math.floor(Math.random() * (b - a + 1)); },
    uno: function (lista) { return lista[Math.floor(Math.random() * lista.length)]; },
    barajar: function (lista) {
      var r = lista.slice();
      for (var i = r.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1)), t = r[i];
        r[i] = r[j]; r[j] = t;
      }
      return r;
    },
    mcd: mcd,
    mcm: function (a, b) { return a * b / mcd(a, b); },
    // fracción con la marca que entiende el programa: f(3, 4) -> "{3/4}"
    f: function (n, d) { return '{' + n + '/' + d + '}'; },
    // fracción simplificada; si el denominador queda en 1, devuelve el número entero
    fs: function (n, d) {
      var g = mcd(n, d) || 1;
      return d / g === 1 ? String(n / g) : '{' + (n / g) + '/' + (d / g) + '}';
    },
    // ¿valen lo mismo n1/d1 y n2/d2?
    iguales: function (n1, d1, n2, d2) { return n1 * d2 === n2 * d1; },
    /*
     * Respuestas equivocadas en forma de fracción.
     *   candidatas: [[numerador, denominador, qué error representa], ...]
     * Descarta las que valen lo mismo que la respuesta correcta n/d, para que nunca haya dos correctas.
     */
    otras: function (n, d, candidatas) {
      return candidatas.filter(function (c) {
        return c[0] >= 0 && c[1] >= 0 && (c[1] === 0 || c[0] * d !== n * c[1]);
      }).map(function (c) { return ['{' + c[0] + '/' + c[1] + '}', c[2]]; });
    },
    /*
     * Arma una pregunta.
     *   bien:  [respuesta correcta, por qué es correcta]
     *   malas: [[respuesta equivocada, qué error representa], ...]  se usan las dos primeras que no se repitan
     *   pasos: solución paso a paso, que se dice cuando el estudiante se equivoca
     */
    q: function (pregunta, bien, malas, pasos) {
      var o = [String(bien[0])], e = [bien[1]];
      for (var k = 0; k < malas.length && o.length < 3; k++) {
        var t = String(malas[k][0]);
        if (o.indexOf(t) < 0) { o.push(t); e.push(malas[k][1]); }
      }
      return { p: pregunta, o: o, e: e, s: pasos };
    },
    // Elige al azar una pregunta de un banco, sin repetir hasta agotarlo.
    banco: function (preguntas) {
      var cola = [];
      return function () {
        if (!cola.length) cola = U.barajar(preguntas);
        return cola.pop();
      };
    }
  };
})(window.AE = window.AE || {});
