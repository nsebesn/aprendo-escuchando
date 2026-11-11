/*
 * "Resolver mi propio ejercicio": la calculadora que explica.
 *
 * Tres pantallas, una detrás de otra:
 *   1. Un menú para elegir la operación.
 *   2. Numeros: se pone cada número del ejercicio, uno por uno.
 *   3. Una lección armada en el momento, con la solución paso a paso (la arma resolver.js).
 */
(function (AE) {
  'use strict';
  var M = AE.Motor, V = AE.Voz, S = AE.Sonidos, D = M.dibujo;
  function $(id) { return document.getElementById(id); }
  function crear(etiqueta, clase, texto) {
    var el = document.createElement(etiqueta);
    if (clase) el.className = clase;
    if (texto !== undefined) el.textContent = texto;
    return el;
  }

  var ENTRE_TECLAS = 1500;   // milisegundos para seguir escribiendo el mismo número (12 = un 1 y un 2)

  // =====================================================================
  //  Pantalla para poner los números
  // =====================================================================
  function Numeros(op, alTerminar) {
    var yo = this;
    this.op = op;
    this.alTerminar = alTerminar;
    this.k = 0;
    this.valores = {};
    this.ultimaTecla = 0;
    op.campos.forEach(function (c) { yo.valores[c.clave] = c.inicial; });
  }

  Numeros.prototype.campo = function () { return this.op.campos[this.k]; };

  // El ejercicio escrito en grande, con el número que se está poniendo resaltado.
  Numeros.prototype.expresion = function () {
    var v = this.valores, activa = this.campo().clave, p = crear('p', 'expresion');
    function numero(clave, clase) {
      return crear('span', clase + (clave === activa ? ' activo' : ''), String(v[clave]));
    }
    this.op.vista.forEach(function (pieza) {
      if (typeof pieza === 'string') { p.appendChild(crear('span', 'operador', pieza)); return; }
      if (pieza.v) { p.appendChild(numero(pieza.v, 'valor')); return; }
      var frac = crear('span', 'frac');
      frac.appendChild(numero(pieza.f[0], 'num'));
      frac.appendChild(numero(pieza.f[1], 'den'));
      p.appendChild(frac);
    });
    return p;
  };

  // Las barras de las fracciones que se llevan escritas; cambian mientras se ponen los números.
  Numeros.prototype.escena = function () {
    var v = this.valores, barras = [];
    this.op.vista.forEach(function (pieza) {
      if (!pieza.f) return;
      var n = v[pieza.f[0]], d = v[pieza.f[1]];
      barras.push({ id: pieza.f[0], n: n, d: d, color: barras.length, rotulo: d > 1 ? '{' + n + '/' + d + '}' : String(n) });
    });
    return { barras: barras, signo: '' };
  };

  Numeros.prototype.pintar = function () {
    D.limpiar('Resolver mi ejercicio', this.op.nombre.replace(/\.$/, ''));
    $('texto').appendChild(this.expresion());
    var c = this.campo();
    var frases = D.parrafo('Pon ' + c.nombre + '. ' + c.ayuda + ' Ahora vale ' + this.valores[c.clave] + '.');
    AE.Barras.dibujar($('pizarra'), this.escena());
    // Botones para quien usa el ratón. En pantalla táctil se usan los gestos y estos botones se esconden.
    D.opciones([{ crudo: 'Subir el número' }, { crudo: 'Bajar el número' }], -1);
    $('opciones').className = 'para-raton';
    $('texto').appendChild(crear('p', 'nota-tactil', 'Desliza hacia arriba para subir el número y hacia abajo para bajarlo. Doble toque para seguir.'));
    $('lugar').textContent = 'Número ' + (this.k + 1) + ' de ' + this.op.campos.length;
    return frases;
  };

  Numeros.prototype.entrar = function (motivo) {
    var habla = motivo === 'nuevo' ? D.soloVoz(this.op.nombre + ' Vamos a poner los números, uno por uno.') : [];
    habla = habla.concat(this.pintar(), D.soloVoz(D.pista('numero', motivo === 'repetir')));
    V.decir(habla);
  };

  // Cambia el número y lo dice, sin repetir toda la explicación.
  Numeros.prototype.poner = function (valor) {
    this.valores[this.campo().clave] = valor;
    this.pintar();
    V.decir(D.soloVoz(String(valor)), { sinAviso: true });
  };

  Numeros.prototype.confirmar = function () {
    var c = this.campo(), valor = this.valores[c.clave], v = this.valores;
    if (valor < c.min) {
      S.tocar('tope');
      M.decir(c.min === 1 ? 'Ese número no sirve aquí. Tiene que ser por lo menos 1.' : 'Aquí el número tiene que ser por lo menos ' + c.min + '.');
      return;
    }
    if (this.k === this.op.campos.length - 1) {
      S.tocar('entrar');
      this.alTerminar(this.valores);
      return;
    }
    // Al cerrar una fracción, se dice completa antes de pedir el siguiente número.
    var dicha = '';
    this.op.vista.forEach(function (pieza) {
      if (pieza.f && pieza.f[1] === c.clave) dicha = v[pieza.f[1]] > 1 ? 'La fracción es {' + v[pieza.f[0]] + '/' + v[pieza.f[1]] + '}.' : 'Es el número entero ' + v[pieza.f[0]] + '.';
    });
    this.k++;
    this.ultimaTecla = 0;
    S.tocar('mover');
    V.decir(D.soloVoz(dicha).concat(this.pintar(), D.soloVoz(D.pista('numero'))));
  };

  Numeros.prototype.accion = function (a, extra) {
    var c = this.campo(), valor = this.valores[c.clave];
    if (a === 'opcion') a = extra === 0 ? 'arriba' : 'abajo';
    if (a === 'arriba' || a === 'abajo') {
      var nuevo = valor + (a === 'arriba' ? 1 : -1);
      if (nuevo < c.min || nuevo > c.max) {
        S.tocar('tope');
        M.decir(nuevo < c.min ? 'No puede ser menos de ' + c.min + '.' : 'No puede ser más de ' + c.max + '.');
        return;
      }
      S.tocar('mover');
      this.poner(nuevo);
    } else if (a === 'numero') {
      // Varias teclas seguidas forman un número de varias cifras.
      var ahora = Date.now(), sigue = ahora - this.ultimaTecla < ENTRE_TECLAS;
      var armado = sigue ? valor * 10 + extra : extra;
      if (armado > c.max) armado = extra;
      this.ultimaTecla = ahora;
      this.poner(armado);
    } else if (a === 'elegir' || a === 'siguiente') {
      this.confirmar();
    } else if (a === 'anterior') {
      if (this.k === 0) { M.volver(); return; }
      this.k--;
      this.ultimaTecla = 0;
      S.tocar('mover');
      this.entrar('paso');
    } else if (a === 'menu') {
      M.volver();
    } else if (a === 'repetir') {
      this.entrar('repetir');
    } else if (a === 'deletrear') {
      M.decir('Aquí no hay palabras para deletrear.');
    }
  };

  // =====================================================================
  //  La solución, como una lección armada en el momento
  // =====================================================================
  function explicar(op, valores) {
    var solucion = op.resolver(valores), pasos = [];
    solucion.pasos.forEach(function (p) {
      if (p.seccion) pasos.push('## ' + p.seccion);
      pasos.push({ texto: p.texto, escena: p.escena || null });
    });
    M.abrir(new M.Leccion({
      id: 'calculadora',
      titulo: op.nombre.replace(/\.$/, ''),
      sinGuardar: true,
      cierre: 'Ejercicio resuelto.',
      rotuloResumen: 'Resultado: ',
      resumen: solucion.resumen,
      escenaFinal: solucion.escenaFinal,
      pasos: pasos
    }, {
      migas: 'Resolver mi ejercicio',
      // Al terminar se vuelve al menú de operaciones; al salir antes, a los números, para poder cambiarlos.
      alSalir: function (terminada) { M.volver(terminada ? 2 : 1); }
    }));
  }

  AE.abrirCalculadora = function () {
    var items = AE.Resolver.OPERACIONES.map(function (op) {
      return { texto: op.nombre, alElegir: function () { M.abrir(new Numeros(op, function (valores) { explicar(op, valores); })); } };
    });
    items.push({ texto: 'Volver al menú principal.', alElegir: function () { M.volver(); } });
    M.abrir(new M.Lista({
      migas: 'Menú principal',
      titulo: 'Resolver mi propio ejercicio',
      intro: 'Aquí pones tu propio ejercicio de fracciones, y yo lo resuelvo paso a paso. Después de cada paso vas a oír unos toques. Cada toque es un pedazo: un toque agudo es un pedazo que se toma, y un toque grave es un pedazo que no se toma.',
      items: items
    }));
  };

  AE.Calculadora = { Numeros: Numeros, explicar: explicar };
})(window.AE = window.AE || {});
