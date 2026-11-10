/*
 * Traduce lo que hace el estudiante (teclas, toques, clics) en acciones del motor.
 *
 * Teclado:  flecha derecha = siguiente   flecha izquierda = anterior
 *           flecha abajo / arriba = moverse entre opciones
 *           Enter = elegir   barra espaciadora = repetir   Escape = menú
 *           L = deletrear    + y - = velocidad de la voz
 *
 * Pantalla táctil (toda la pantalla sirve, no hay que atinarle a nada):
 *           deslizar a la derecha = siguiente   a la izquierda = anterior
 *           deslizar abajo / arriba = moverse entre opciones
 *           doble toque = elegir   un toque = repetir
 *           dejar el dedo quieto = menú   toque con dos dedos = deletrear
 */
(function (AE) {
  'use strict';
  var M = AE.Motor;

  // ---------- Teclado ----------
  var TECLAS = {
    ArrowRight: 'siguiente', Right: 'siguiente',
    ArrowLeft: 'anterior', Left: 'anterior',
    ArrowUp: 'arriba', Up: 'arriba',
    ArrowDown: 'abajo', Down: 'abajo',
    Enter: 'elegir',
    ' ': 'repetir', Spacebar: 'repetir',
    Escape: 'menu', Esc: 'menu',
    l: 'deletrear', L: 'deletrear',
    '+': 'rapido', '-': 'lento'
  };
  var OTRAS = {
    Tab: 'la tecla Tabulador', Backspace: 'la tecla de borrar', Delete: 'la tecla Suprimir',
    Shift: 'la tecla Mayúsculas', CapsLock: 'la tecla Bloqueo de mayúsculas',
    Home: 'la tecla Inicio', End: 'la tecla Fin', PageUp: 'la tecla Retroceder página',
    PageDown: 'la tecla Avanzar página', Insert: 'la tecla Insertar'
  };
  var SIN_EFECTO = /^(Control|Alt|AltGraph|Meta|OS|F\d+|ContextMenu|NumLock|ScrollLock|Pause|PrintScreen|Dead|Unidentified)$/;

  function nombreTecla(tecla) {
    if (/^[a-zñ]$/i.test(tecla)) return 'la letra ' + AE.Texto.deletrear(tecla.toLowerCase());
    return OTRAS[tecla] || 'otra tecla';
  }

  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey || SIN_EFECTO.test(e.key)) return;
    e.preventDefault();
    if (e.repeat) return;   // tecla sostenida: cuenta una sola vez
    M.ponerModo('teclado');
    if (!M.iniciado) {
      if (e.key !== 'Shift' && e.key !== 'CapsLock' && e.key !== 'Tab') M.iniciar('teclado');
      return;
    }
    var a = TECLAS[e.key];
    if (a) M.accion(a);
    else if (/^[1-9]$/.test(e.key)) M.accion('numero', Number(e.key));
    else M.accion('otra', nombreTecla(e.key));
  });

  // ---------- Pantalla táctil ----------
  var MOVIDO = 16, DESLIZAR = 45, LARGO = 1300, ENTRE_TOQUES = 320;
  var gesto = null, relojLargo = null, relojToque = null;

  function largo() {
    if (!gesto || gesto.movido || gesto.dedos > 1) return;
    gesto.largo = true;
    if (navigator.vibrate) navigator.vibrate(80);
    if (M.iniciado) M.accion('menu');
  }

  document.addEventListener('touchstart', function (e) {
    M.ponerModo('tactil');
    if (!gesto) {
      var t = e.touches[0];
      gesto = { x: t.clientX, y: t.clientY, fx: t.clientX, fy: t.clientY, dedos: e.touches.length, movido: false, largo: false };
      clearTimeout(relojLargo);
      relojLargo = setTimeout(largo, LARGO);
    } else {
      gesto.dedos = Math.max(gesto.dedos, e.touches.length);
    }
    if (gesto.dedos > 1) clearTimeout(relojLargo);
  }, { passive: false });

  document.addEventListener('touchmove', function (e) {
    e.preventDefault();   // la página no se arrastra: todo gesto es una orden
    if (!gesto) return;
    var t = e.touches[0];
    gesto.fx = t.clientX;
    gesto.fy = t.clientY;
    if (Math.abs(gesto.fx - gesto.x) > MOVIDO || Math.abs(gesto.fy - gesto.y) > MOVIDO) {
      gesto.movido = true;
      clearTimeout(relojLargo);
    }
  }, { passive: false });

  document.addEventListener('touchend', function (e) {
    e.preventDefault();   // evita que el toque también cuente como clic
    if (e.touches.length > 0) return;   // todavía hay dedos en la pantalla
    clearTimeout(relojLargo);
    var g = gesto;
    gesto = null;
    if (!g) return;
    if (!M.iniciado) { M.iniciar('tactil'); return; }
    if (g.largo) return;

    var dx = g.fx - g.x, dy = g.fy - g.y;
    if (g.dedos > 1) {
      if (Math.abs(dx) < DESLIZAR && Math.abs(dy) < DESLIZAR) M.accion('deletrear');
      return;
    }
    if (Math.abs(dx) >= DESLIZAR || Math.abs(dy) >= DESLIZAR) {
      clearTimeout(relojToque);
      relojToque = null;
      if (Math.abs(dx) > Math.abs(dy)) M.accion(dx > 0 ? 'siguiente' : 'anterior');
      else M.accion(dy > 0 ? 'abajo' : 'arriba');
      return;
    }
    // Fue un toque. Se espera un instante por si viene el segundo.
    if (relojToque) {
      clearTimeout(relojToque);
      relojToque = null;
      M.accion('elegir');
    } else {
      relojToque = setTimeout(function () {
        relojToque = null;
        M.accion('repetir');
      }, ENTRE_TOQUES);
    }
  }, { passive: false });

  document.addEventListener('touchcancel', function () {
    clearTimeout(relojLargo);
    gesto = null;
  });

  // ---------- Ratón (y lectores de pantalla, que activan los botones con un clic) ----------
  document.addEventListener('mousedown', function (e) {
    if (e.target.closest && e.target.closest('button')) e.preventDefault();   // el botón no se queda con el foco
  });

  document.addEventListener('click', function (e) {
    if (!M.iniciado) { M.iniciar(M.modo); return; }
    var boton = e.target.closest && e.target.closest('[data-accion]');
    if (boton) { M.accion(boton.getAttribute('data-accion')); return; }
    var opcion = e.target.closest && e.target.closest('[data-opcion]');
    if (opcion) M.accion('opcion', Number(opcion.getAttribute('data-opcion')));
  });

  document.addEventListener('contextmenu', function (e) { e.preventDefault(); });

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) AE.Voz.callar();
  });
})(window.AE = window.AE || {});
