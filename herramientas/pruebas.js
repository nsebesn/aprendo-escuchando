/*
 * Pruebas del contenido. Se corren con:  node herramientas/pruebas.js
 *
 * Revisan lo que no depende del navegador: los números en palabras, el texto que
 * recibe la voz y, sobre todo, que cada pregunta de cada lección esté bien armada.
 * Las preguntas con números al azar se generan cientos de veces.
 */
'use strict';
var path = require('path');
var raiz = path.join(__dirname, '..', 'js');

global.window = global;
['numeros.js', 'texto.js', 'registro.js', 'contenido/recorrido.js',
  'contenido/mat-1.js', 'contenido/mat-2.js', 'contenido/mat-3.js', 'contenido/mat-4.js', 'contenido/mat-5.js',
  'contenido/esp-1.js', 'contenido/esp-2.js', 'contenido/esp-3.js'
].forEach(function (f) { require(path.join(raiz, f)); });

var AE = global.AE, N = AE.Numeros, T = AE.Texto;
var fallos = [], revisadas = 0;
var VECES = 400;

function igual(real, esperado, nombre) {
  if (real !== esperado) fallos.push(nombre + ': esperaba "' + esperado + '" y salió "' + real + '"');
}
function falla(mensaje) { if (fallos.length < 80) fallos.push(mensaje); }

// ---------- 1. Números y fracciones en palabras ----------
igual(N.fraccion(3, 4), 'tres cuartos', 'fracción 3/4');
igual(N.fraccion(1, 2), 'un medio', 'fracción 1/2');
igual(N.fraccion(1, 8), 'un octavo', 'fracción 1/8');
igual(N.fraccion(2, 3), 'dos tercios', 'fracción 2/3');
igual(N.fraccion(5, 12), 'cinco doceavos', 'fracción 5/12');
igual(N.fraccion(11, 12), 'once doceavos', 'fracción 11/12');
igual(N.fraccion(3, 16), 'tres dieciseisavos', 'fracción 3/16');
igual(N.fraccion(7, 30), 'siete treintavos', 'fracción 7/30');
igual(N.fraccion(2, 21), 'dos veintiunavos', 'fracción 2/21');
igual(N.fraccion(21, 4), 'veintiún cuartos', 'fracción 21/4');
igual(N.fraccion(50, 100), 'cincuenta centésimos', 'fracción 50/100');
igual(N.fraccion(0, 8), 'cero octavos', 'fracción 0/8');
igual(N.fraccion(3, 0), 'tres sobre cero', 'fracción 3/0');
igual(N.fraccion(3, 1), 'tres sobre uno', 'fracción 3/1');
igual(N.mixto(2, 1, 3), 'dos enteros y un tercio', 'mixto 2 1/3');
igual(N.mixto(1, 1, 4), 'un entero y un cuarto', 'mixto 1 1/4');
igual(N.cardinal(2400), 'dos mil cuatrocientos', 'cardinal 2400');
igual(N.cardinal(36), 'treinta y seis', 'cardinal 36');

// ---------- 2. Texto para la voz ----------
igual(T.plano('{3/4} es más que {1/2}.'), 'tres cuartos es más que un medio.', 'fracciones en la voz');
igual(T.plano('12 ÷ 3 = 4.'), '12 dividido entre 3 igual a 4.', 'signos en la voz');
igual(T.plano('3 × 4 = 12, y 5 − 2 = 3.'), '3 por 4 igual a 12, y 5 menos 2 igual a 3.', 'por y menos');
igual(T.plano('Se deletrea: ~hola~.'), 'Se deletrea: hache, o, ele, a.', 'deletreo');
igual(T.deletrear('Papá'), 'pe mayúscula, a, pe, a con tilde', 'deletreo con mayúscula y tilde');
igual(T.deletrear('pingüino'), 'pe, i, ene, ge, u con diéresis, i, ene, o', 'deletreo con diéresis');
igual(T.plano('Sale así: [me-sa|me. sa.] Mesa tiene dos sílabas.'), 'Sale así: me. sa. Mesa tiene dos sílabas.', 'ver y decir');
igual(T.frases('Vale 2000 pesos. ¿Cuánto es? Mucho.').length, 3, 'partir en frases');
igual(T.frases('Una *palabra* clave.')[0].terminos[0], 'palabra', 'términos para deletrear');
igual(T.frases('{1 1/2} de arepa.')[0].voz, 'un entero y un medio de arepa.', 'mixto en la voz');

// ---------- 3. Revisión de textos ----------
var SOBRAS = /[{}*~\[\]|]|undefined|NaN|null|Infinity/;
function revisarTexto(crudo, donde) {
  if (typeof crudo !== 'string' || !crudo.trim()) { falla(donde + ': texto vacío'); return; }
  var fr = T.frases(crudo);
  if (!fr.length) { falla(donde + ': no produjo frases'); return; }
  fr.forEach(function (f) {
    if (SOBRAS.test(f.voz)) falla(donde + ': marca sin cerrar o valor roto en la voz -> ' + f.voz);
    if (/[<>]/.test(f.voz)) falla(donde + ': signo que la voz no sabe leer -> ' + f.voz);
    if (/-\d/.test(f.voz)) falla(donde + ': número negativo -> ' + f.voz);
    if (/\b[A-ZÁÉÍÓÚÑ]{3,}\b/.test(f.voz)) falla(donde + ': palabra en mayúsculas sostenidas (la voz la deletrearía) -> ' + f.voz);
  });
}

function revisarPregunta(q, donde) {
  revisadas++;
  if (!q || typeof q !== 'object') { falla(donde + ': la pregunta no es un objeto'); return 0; }
  revisarTexto(q.p, donde + ' pregunta');
  if (!Array.isArray(q.o) || !Array.isArray(q.e)) { falla(donde + ': faltan opciones o explicaciones'); return 0; }
  if (q.o.length < 2 || q.o.length > 4) falla(donde + ': tiene ' + q.o.length + ' opciones');
  if (q.o.length !== q.e.length) falla(donde + ': ' + q.o.length + ' opciones y ' + q.e.length + ' explicaciones');
  var vistas = {};
  q.o.forEach(function (o, k) {
    revisarTexto(String(o), donde + ' opción ' + (k + 1));
    var clave = T.plano(String(o)).toLowerCase();
    if (vistas[clave]) falla(donde + ': opción repetida -> ' + clave + ' | ' + q.p);
    vistas[clave] = true;
  });
  q.e.forEach(function (e, k) { revisarTexto(e, donde + ' explicación ' + (k + 1)); });
  if (q.s !== undefined) {
    if (!Array.isArray(q.s) || !q.s.length) falla(donde + ': solución vacía');
    else q.s.forEach(function (s, k) { revisarTexto(s, donde + ' solución ' + (k + 1)); });
  }
  return q.o.length;
}

// ---------- 4. Lecciones ----------
var ids = {}, totalPasos = 0, totalPreguntas = 0, pocas = [];
AE.lecciones.forEach(function (l) {
  var donde = l.id || '(sin id)';
  if (!l.id || ids[l.id]) falla(donde + ': id repetido o faltante');
  ids[l.id] = true;
  if (l.area !== 'mat' && l.area !== 'esp') falla(donde + ': área desconocida');
  revisarTexto(l.titulo, donde + ' título');
  revisarTexto(l.resumen, donde + ' resumen');
  if (!Array.isArray(l.pasos) || l.pasos.length < 8) falla(donde + ': muy pocos pasos');
  if (l.pasos[0].indexOf('## ') !== 0) falla(donde + ': debe empezar con una sección');

  var cola = (l.pasos || []).concat(l.practica || []);
  var numero = 0;
  cola.forEach(function (x, k) {
    if (typeof x === 'string') {
      totalPasos++;
      revisarTexto(x.replace(/^## /, ''), donde + ' paso ' + (k + 1));
      if (x.indexOf('## ') !== 0 && T.plano(x).length > 620) falla(donde + ' paso ' + (k + 1) + ': demasiado largo para oírlo de una vez (' + T.plano(x).length + ' letras)');
    } else if (typeof x === 'function') {
      numero++; totalPreguntas++;
      var cuenta = {};
      for (var i = 0; i < VECES; i++) {
        var n = revisarPregunta(x(), donde + ' pregunta ' + numero + ' (al azar)');
        cuenta[n] = (cuenta[n] || 0) + 1;
      }
      if (cuenta[2] && cuenta[3]) pocas.push(donde + ' pregunta ' + numero + ': a veces sale con solo 2 opciones (' + cuenta[2] + ' de ' + VECES + ')');
    } else {
      numero++; totalPreguntas++;
      revisarPregunta(x, donde + ' pregunta ' + numero);
    }
  });
  if (numero < 5) falla(donde + ': tiene solo ' + numero + ' preguntas');
});

var mat = AE.lecciones.filter(function (l) { return l.area === 'mat'; }).length;
var esp = AE.lecciones.filter(function (l) { return l.area === 'esp'; }).length;
igual(mat, 17, 'lecciones de matemáticas');
igual(esp, 14, 'lecciones de español');

// ---------- 5. Recorrido inicial ----------
['teclado', 'tactil'].forEach(function (modo) {
  var def = AE.recorrido[modo], acciones = [];
  def.pasos.forEach(function (x, k) {
    if (typeof x === 'string') { revisarTexto(x.replace(/^## /, ''), 'recorrido ' + modo + ' paso ' + (k + 1)); return; }
    acciones.push(x.espera);
    ['texto', 'bien', 'ayuda'].forEach(function (campo) { revisarTexto(x[campo], 'recorrido ' + modo + ' ' + x.espera + ' ' + campo); });
  });
  igual(acciones.join(','), 'repetir,siguiente,anterior,abajo,arriba,elegir,menu', 'acciones del recorrido ' + modo);
});

// ---------- Resultado ----------
if (process.argv.indexOf('--muestra') >= 0) {
  AE.lecciones.forEach(function (l) {
    (l.practica || []).forEach(function (x) {
      if (typeof x !== 'function') return;
      var q = x();
      console.log('\n[' + l.id + '] ' + T.plano(q.p));
      q.o.forEach(function (o, k) { console.log('   ' + (k === 0 ? '✔' : '✘') + ' ' + T.plano(String(o)) + '  ->  ' + T.plano(q.e[k])); });
      if (q.s) console.log('   pasos: ' + q.s.map(T.plano).join(' | '));
    });
  });
}

console.log('\nLecciones: ' + AE.lecciones.length + ' (' + mat + ' de matemáticas, ' + esp + ' de español)');
console.log('Pasos de explicación: ' + totalPasos);
console.log('Preguntas distintas: ' + totalPreguntas + '   Preguntas revisadas (con las generadas al azar): ' + revisadas);
if (pocas.length) console.log('\nAvisos:\n  ' + pocas.join('\n  '));
if (fallos.length) {
  console.log('\nFALLARON ' + fallos.length + ' revisiones:\n  ' + fallos.join('\n  '));
  process.exit(1);
}
console.log('\nTodas las revisiones pasaron.');
