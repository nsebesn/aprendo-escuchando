/* Números y fracciones dichos en palabras, para que la voz los lea bien. */
(function (AE) {
  'use strict';

  var BASICOS = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez',
    'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve',
    'veinte', 'veintiuno', 'veintidós', 'veintitrés', 'veinticuatro', 'veinticinco', 'veintiséis',
    'veintisiete', 'veintiocho', 'veintinueve'];
  var DECENAS = ['', '', '', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
  var CENTENAS = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos',
    'setecientos', 'ochocientos', 'novecientos'];
  var PARTES = { 2: 'medio', 3: 'tercio', 4: 'cuarto', 5: 'quinto', 6: 'sexto', 7: 'séptimo', 8: 'octavo',
    9: 'noveno', 10: 'décimo', 100: 'centésimo', 1000: 'milésimo' };

  // "veintiuno" -> "veintiún", "treinta y uno" -> "treinta y un" (antes de un nombre)
  function apocopar(t) {
    return t.replace(/veintiuno$/, 'veintiún').replace(/uno$/, 'un');
  }

  function sinTilde(t) {
    return t.replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u');
  }

  function cardinal(n) {
    n = Math.floor(Math.abs(Number(n) || 0));
    if (n < 30) return BASICOS[n];
    if (n < 100) return DECENAS[Math.floor(n / 10)] + (n % 10 ? ' y ' + BASICOS[n % 10] : '');
    if (n === 100) return 'cien';
    if (n < 1000) return CENTENAS[Math.floor(n / 100)] + (n % 100 ? ' ' + cardinal(n % 100) : '');
    if (n < 1000000) {
      var miles = Math.floor(n / 1000), resto = n % 1000;
      return (miles === 1 ? 'mil' : apocopar(cardinal(miles)) + ' mil') + (resto ? ' ' + cardinal(resto) : '');
    }
    return String(n);
  }

  // Nombre de la parte según el denominador: 4 -> cuarto, 12 -> doceavo
  function parte(d, plural) {
    var base = PARTES[d];
    if (!base) {
      var c = sinTilde(cardinal(d)).replace(/ y /g, 'i').replace(/ /g, '');
      base = c.replace(/uno$/, 'un').replace(/a$/, '') + 'avo';
    }
    return base + (plural ? 's' : '');
  }

  function cuantos(n) {
    return n === 1 ? 'un' : apocopar(cardinal(n));
  }

  // 3, 4 -> "tres cuartos"
  function fraccion(n, d) {
    n = Number(n); d = Number(d);
    if (d === 0) return cardinal(n) + ' sobre cero';
    if (d === 1) return cardinal(n) + ' sobre uno';
    return cuantos(n) + ' ' + parte(d, n !== 1);
  }

  // 2, 1, 3 -> "dos enteros y un tercio"
  function mixto(e, n, d) {
    e = Number(e);
    return (e === 1 ? 'un entero' : cardinal(e) + ' enteros') + ' y ' + fraccion(n, d);
  }

  AE.Numeros = { cardinal: cardinal, parte: parte, fraccion: fraccion, mixto: mixto };
})(window.AE = window.AE || {});
