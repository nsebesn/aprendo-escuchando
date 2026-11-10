/*
 * Convierte el texto de las lecciones en dos cosas: lo que se ve y lo que se dice.
 *
 * Marcas que se pueden usar dentro de un texto:
 *   {3/4}          fracción: se ve apilada y se dice "tres cuartos"
 *   {2 1/3}        número mixto: se dice "dos enteros y un tercio"
 *   *palabra*      palabra importante: se ve resaltada y se puede deletrear
 *   ~palabra~      se deletrea ahí mismo, letra por letra
 *   [ver|decir]    se muestra una cosa y se dice otra
 */
(function (AE) {
  'use strict';
  var N = AE.Numeros;
  var ABRE = '', CIERRA = '';
  var MARCAS = /\{(\d+) (\d+)\/(\d+)\}|\{(\d+)\/(\d+)\}|\*([^*]+)\*|~([^~]+)~|\[([^\]|]*)\|([^\]]*)\]/g;
  var HUECO = /(\d+)/g;

  var LETRAS = { a: 'a', b: 'be larga', c: 'ce', d: 'de', e: 'e', f: 'efe', g: 'ge', h: 'hache', i: 'i',
    j: 'jota', k: 'ka', l: 'ele', m: 'eme', n: 'ene', 'ñ': 'eñe', o: 'o', p: 'pe', q: 'cu', r: 'erre',
    s: 'ese', t: 'te', u: 'u', v: 've corta', w: 'doble u', x: 'equis', y: 'ye', z: 'zeta' };
  var CON_TILDE = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u' };

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // "Papá" -> "pe mayúscula, a, pe, a con tilde"
  function deletrear(palabra) {
    return String(palabra).split('').map(function (ch) {
      if (ch === ' ') return 'espacio';
      var min = ch.toLowerCase(), nombre;
      if (CON_TILDE[min]) nombre = CON_TILDE[min] + ' con tilde';
      else if (min === 'ü') nombre = 'u con diéresis';
      else nombre = LETRAS[min] || ch;
      if (ch !== min) nombre += ' mayúscula';
      return nombre;
    }).join(', ');
  }

  function fraccionHtml(n, d, e) {
    var voz = e != null ? N.mixto(e, n, d) : N.fraccion(n, d);
    return (e != null ? '<span class="entero">' + e + '</span>' : '') +
      '<span class="frac" role="img" aria-label="' + voz + '">' +
      '<span class="num">' + n + '</span><span class="den">' + d + '</span></span>';
  }

  // Parte un texto en frases. No corta en puntos que están dentro de un número.
  function partir(s) {
    var salida = [], re = /([.!?…]+["»)]*)(\s+|$)/g, inicio = 0, m;
    while ((m = re.exec(s))) {
      var frase = s.slice(inicio, m.index + m[1].length).trim();
      if (frase) salida.push(frase);
      inicio = re.lastIndex;
      if (m[0].length === 0) re.lastIndex++;
    }
    var resto = s.slice(inicio).trim();
    if (resto) salida.push(resto);
    return salida;
  }

  // Cambia los signos por palabras para que la voz no los lea mal.
  function aVoz(s) {
    return s.replace(/×/g, ' por ').replace(/÷/g, ' dividido entre ').replace(/\+/g, ' más ')
      .replace(/−/g, ' menos ').replace(/=/g, ' igual a ').replace(/</g, ' es menor que ')
      .replace(/>/g, ' es mayor que ').replace(/\s+/g, ' ').replace(/\s+([.,;:!?])/g, '$1').trim();
  }

  // Devuelve una lista de frases: { html, voz, terminos }
  function frases(crudo) {
    if (crudo == null || crudo === '') return [];
    var piezas = [];
    var s = String(crudo).replace(MARCAS, function (todo, e, n1, d1, n2, d2, termino, letras, ver, decir) {
      var p;
      if (e !== undefined) p = { html: fraccionHtml(n1, d1, e), voz: N.mixto(e, n1, d1) };
      else if (n2 !== undefined) p = { html: fraccionHtml(n2, d2), voz: N.fraccion(n2, d2) };
      else if (termino !== undefined) p = { html: '<strong>' + esc(termino) + '</strong>', voz: termino, termino: termino };
      else if (letras !== undefined) p = { html: '<span class="letras">' + esc(letras.split('').join(' · ')) + '</span>', voz: deletrear(letras) };
      else p = { html: esc(ver), voz: decir };
      piezas.push(p);
      return ABRE + (piezas.length - 1) + CIERRA;
    });
    return partir(s).map(function (f) {
      var terminos = [];
      var html = esc(f).replace(HUECO, function (_, i) { return piezas[i].html; });
      var voz = f.replace(HUECO, function (_, i) {
        if (piezas[i].termino) terminos.push(piezas[i].termino);
        return ' ' + piezas[i].voz + ' ';
      });
      return { html: html, voz: aVoz(voz), terminos: terminos };
    });
  }

  function plano(crudo) {
    return frases(crudo).map(function (f) { return f.voz; }).join(' ');
  }

  AE.Texto = { frases: frases, plano: plano, deletrear: deletrear, esc: esc };
})(window.AE = window.AE || {});
