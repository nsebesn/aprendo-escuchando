/*
 * Arma las dos formas de entregar el programa.
 * Se corre con:  node herramientas/construir.js
 *
 *   Aprendo-Escuchando.html   un solo archivo, para compartir por memoria USB o por chat
 *   docs/                     la versión para publicar en un enlace web: se puede instalar
 *                             en el celular y sigue funcionando sin internet
 */
'use strict';
var fs = require('fs');
var path = require('path');
var crypto = require('crypto');
var raiz = path.join(__dirname, '..');

function leer(relativo) { return fs.readFileSync(path.join(raiz, relativo), 'utf8'); }
function escribir(relativo, contenido) {
  var destino = path.join(raiz, relativo);
  fs.mkdirSync(path.dirname(destino), { recursive: true });
  fs.writeFileSync(destino, contenido);
}

// ---------- 1. Todo el programa dentro de una sola página ----------
var scripts = 0;
var pagina = leer('index.html')
  .replace(/<link rel="stylesheet" href="([^"]+)">/g, function (_, archivo) {
    return '<style>\n' + leer(archivo) + '</style>';
  })
  .replace(/<script src="([^"]+)"><\/script>/g, function (_, archivo) {
    var codigo = leer(archivo);
    if (/<\/script/i.test(codigo)) throw new Error(archivo + ' contiene una etiqueta de cierre de script');
    scripts++;
    return '<script>\n' + codigo + '</script>';
  });
if (/<script src=|<link rel="stylesheet"/.test(pagina)) throw new Error('Quedó algún archivo sin incluir');
if (pagina.indexOf('<!--nota-web-->') < 0) throw new Error('Falta la marca nota-web en index.html');

// ---------- 2. Archivo único ----------
escribir('Aprendo-Escuchando.html', pagina.replace(/[ \t]*<!--nota-web-->\n/, ''));

// ---------- 3. Versión web ----------
var ICONOS = ['icono-180.png', 'icono-192.png', 'icono-512.png'];

var CABEZA = [
  '<meta name="theme-color" content="#000000">',
  '<meta name="description" content="Matemáticas y español de grado sexto para aprender oyendo. Pensado para estudiantes ciegos.">',
  '<link rel="manifest" href="manifest.webmanifest">',
  '<link rel="icon" href="icono-192.png">',
  '<link rel="apple-touch-icon" href="icono-180.png">',
  '<meta name="mobile-web-app-capable" content="yes">',
  '<meta name="apple-mobile-web-app-capable" content="yes">',
  '<meta name="apple-mobile-web-app-status-bar-style" content="black">',
  '<meta name="apple-mobile-web-app-title" content="Aprendo">'
].join('\n');

var NOTA = '      <li><strong>Para dejarlo en el celular:</strong> después de abrirlo una vez con internet, sigue funcionando sin internet. En el menú del navegador elija «Agregar a la pantalla de inicio» para que quede como una aplicación.</li>';

// El programa queda guardado en el aparato; así abre aunque no haya internet.
var REGISTRO = [
  '<script>',
  "if ('serviceWorker' in navigator) {",
  "  window.addEventListener('load', function () {",
  "    navigator.serviceWorker.register('sw.js').catch(function () { /* sin guardado: funciona igual con internet */ });",
  '  });',
  '}',
  '</script>'
].join('\n');

var web = pagina
  .replace('</head>', CABEZA + '\n</head>')
  .replace(/[ \t]*<!--nota-web-->/, NOTA);
var cierre = web.lastIndexOf('</body>');
web = web.slice(0, cierre) + REGISTRO + '\n' + web.slice(cierre);

var manifiesto = JSON.stringify({
  name: 'Aprendo Escuchando',
  short_name: 'Aprendo',
  description: 'Matemáticas y español de grado sexto para aprender oyendo.',
  lang: 'es',
  start_url: './',
  scope: './',
  display: 'standalone',
  orientation: 'portrait',
  background_color: '#000000',
  theme_color: '#000000',
  icons: [
    { src: 'icono-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
    { src: 'icono-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    { src: 'icono-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
  ]
}, null, 2) + '\n';

// La versión cambia cuando cambia el contenido; así los aparatos se actualizan solos.
var version = crypto.createHash('sha1').update(web).update(manifiesto).digest('hex').slice(0, 10);

var guardian = [
  '/* Guarda el programa en el aparato para que abra sin internet. Lo genera herramientas/construir.js */',
  "var CAJA = 'aprendo-escuchando-" + version + "';",
  'var ARCHIVOS = ' + JSON.stringify(['./', 'index.html', 'manifest.webmanifest'].concat(ICONOS)) + ';',
  '',
  "self.addEventListener('install', function (e) {",
  '  e.waitUntil(caches.open(CAJA).then(function (caja) { return caja.addAll(ARCHIVOS); }).then(function () { return self.skipWaiting(); }));',
  '});',
  '',
  '// Al llegar una versión nueva, se borra la anterior.',
  "self.addEventListener('activate', function (e) {",
  '  e.waitUntil(caches.keys().then(function (nombres) {',
  '    return Promise.all(nombres.filter(function (n) { return n !== CAJA; }).map(function (n) { return caches.delete(n); }));',
  '  }).then(function () { return self.clients.claim(); }));',
  '});',
  '',
  '// Primero se busca en lo guardado; si no está, se pide por internet.',
  "self.addEventListener('fetch', function (e) {",
  "  if (e.request.method !== 'GET') return;",
  '  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(function (guardado) {',
  '    return guardado || fetch(e.request);',
  '  }));',
  '});',
  ''
].join('\n');

escribir('docs/index.html', web);
escribir('docs/manifest.webmanifest', manifiesto);
escribir('docs/sw.js', guardian);
escribir('docs/.nojekyll', '');
ICONOS.forEach(function (nombre) {
  fs.copyFileSync(path.join(raiz, 'iconos', nombre), path.join(raiz, 'docs', nombre));
});

console.log('Archivo único: Aprendo-Escuchando.html (' + Math.round(pagina.length / 1024) + ' KB, ' + scripts + ' archivos de código incluidos)');
console.log('Versión web:   docs/ (versión ' + version + ')');
