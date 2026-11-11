/* Menús del programa: principal, áreas, lecciones, recorrido inicial y ajustes de la voz. */
(function (AE) {
  'use strict';
  var M = AE.Motor, V = AE.Voz, P = AE.Progreso, S = AE.Sonidos;

  var AREAS = {
    mat: {
      nombre: 'Matemáticas',
      intro: 'Estas son las lecciones de matemáticas. Van en orden: cada una se apoya en la anterior. Las tres primeras son las bases, y desde la cuarta empiezan las fracciones.'
    },
    esp: {
      nombre: 'Español',
      intro: 'Estas son las lecciones de español. Van en orden: empiezan por las letras y los sonidos, y terminan con la comprensión de lectura.'
    }
  };

  function lecciones(area) {
    return AE.lecciones.filter(function (l) { return l.area === area; });
  }

  function menuPrincipal(saludo) {
    return new M.Lista({
      raiz: true,
      titulo: 'Menú principal',
      intro: saludo,
      items: [
        { texto: 'Matemáticas.', alElegir: function () { abrirArea('mat'); } },
        { texto: 'Español.', alElegir: function () { abrirArea('esp'); } },
        { texto: 'Resolver mi propio ejercicio de fracciones.', alElegir: function () { AE.abrirCalculadora(); } },
        { texto: 'Cómo se maneja el programa.', alElegir: function () { abrirRecorrido(false); } },
        { texto: 'Ajustes de la voz.', alElegir: abrirAjustes }
      ]
    });
  }

  function abrirArea(id) {
    var area = AREAS[id], todas = lecciones(id);
    var lista = new M.Lista({
      migas: 'Menú principal',
      titulo: area.nombre,
      intro: area.intro,
      cuenta: 'Hay ' + todas.length + ' lecciones.',
      sinLugar: true,
      items: function () {
        return todas.map(function (def, k) {
          var hecha = !!P.datos.terminadas[def.id];
          return {
            texto: 'Lección ' + (k + 1) + '. ' + def.titulo + '.',
            nota: hecha ? 'Ya la terminaste.' : '',
            hecho: hecha,
            alElegir: function () { abrirLeccion(def, k, area, lista, todas.length); }
          };
        });
      }
    });
    // Empieza en la primera lección que falta por terminar.
    for (var k = 0; k < todas.length; k++) {
      if (!P.datos.terminadas[todas[k].id]) { lista.i = k; break; }
    }
    M.abrir(lista);
  }

  function abrirLeccion(def, k, area, lista, cuantas) {
    var migas = area.nombre + ' · Lección ' + (k + 1);
    var nombre = 'Lección ' + (k + 1) + ': ' + def.titulo + '.';
    var sub;

    function empezar(desde) {
      M.abrir(new M.Leccion(def, {
        desde: desde,
        migas: migas,
        anuncio: (desde > 0 ? 'Seguimos con la ' : '') + (desde > 0 ? nombre.charAt(0).toLowerCase() + nombre.slice(1) : nombre),
        alSalir: function (terminada) {
          if (terminada) { lista.i = Math.min(k + 1, cuantas - 1); M.volver(2); }
          else { sub.i = 0; M.volver(); }
        }
      }));
    }

    function practicar() {
      M.abrir(new M.Leccion(def, {
        soloPractica: true,
        migas: migas + ' · Práctica',
        anuncio: 'Práctica de la lección ' + (k + 1) + '.',
        alSalir: function () { sub.i = 0; M.volver(); }
      }));
    }

    sub = new M.Lista({
      migas: area.nombre,
      titulo: 'Lección ' + (k + 1) + ': ' + def.titulo,
      items: function () {
        var pos = P.datos.posicion[def.id] || 0, its = [];
        if (pos > 0) its.push({ texto: 'Continuar donde ibas.', alElegir: function () { empezar(pos); } });
        its.push({ texto: pos > 0 ? 'Empezar otra vez desde el principio.' : 'Empezar la lección.', alElegir: function () { empezar(0); } });
        if (def.practica && def.practica.length && !def.sinPractica) {
          its.push({ texto: 'Solo practicar con preguntas.', alElegir: practicar });
        }
        its.push({ texto: 'Volver a la lista de lecciones.', alElegir: function () { M.volver(); } });
        return its;
      }
    });
    M.abrir(sub);
  }

  // Recorrido para aprender las teclas o los toques. Se abre solo la primera vez.
  function abrirRecorrido(primeraVez) {
    var def = AE.recorrido[M.modo];
    M.abrir(new M.Leccion(def, {
      migas: 'Para empezar',
      alSalir: function () {
        P.datos.vioTutorial = true;
        P.guardar();
        if (primeraVez) M.reemplazar(menuPrincipal('Este es el menú principal. Desde aquí entras a todo.'));
        else M.volver();
      }
    }));
  }

  function abrirAjustes() {
    var lista = new M.Lista({
      migas: 'Menú principal',
      titulo: 'Ajustes de la voz',
      intro: 'Aquí puedes cambiar cómo hablo.',
      items: [
        { texto: 'Hablar más despacio.', alElegir: function () {
          M.decir(V.cambiarVelocidad(-1) ? 'Listo. Ahora hablo más despacio. Así sueno.' : 'Ya estoy hablando lo más despacio que puedo.');
        } },
        { texto: 'Hablar más rápido.', alElegir: function () {
          M.decir(V.cambiarVelocidad(1) ? 'Listo. Ahora hablo más rápido. Así sueno.' : 'Ya estoy hablando lo más rápido que puedo.');
        } },
        { texto: 'Cambiar de voz.', alElegir: function () {
          var nombre = V.siguienteVoz();
          M.decir(nombre ? 'Esta es otra voz. Si te gusta, déjala. Si no, vuelve a elegir cambiar de voz.'
            : 'Este aparato solo tiene una voz en español.');
        } },
        { texto: 'Apagar o encender los toques que acompañan a las fracciones.', alElegir: function () {
          P.datos.sonidoBarras = P.datos.sonidoBarras === false;
          P.guardar();
          M.decir(P.datos.sonidoBarras ? 'Listo. Las fracciones vuelven a sonar con sus toques.' : 'Listo. Las fracciones ya no van a sonar con toques.');
        } },
        { texto: 'Apagar o encender mi voz. Apágala solo si usas un lector de pantalla.', alElegir: function () {
          V.activar(!V.activa);
          M.decir(V.activa ? 'Mi voz está encendida otra vez.' : 'Voz del programa apagada. Ahora el lector de pantalla lee los textos.');
        } },
        { texto: 'Volver al menú principal.', alElegir: function () { M.volver(); } }
      ]
    });
    M.abrir(lista);
  }

  AE.empezar = function () {
    if (!P.datos.vioTutorial) {
      // Debajo queda el menú; encima, el recorrido inicial.
      abrirRecorrido(true);
    } else {
      M.reemplazar(menuPrincipal('Hola otra vez. Qué bueno que volviste.'));
    }
    // Aviso para la persona adulta si el aparato no tiene voz en español.
    setTimeout(function () {
      var aviso = document.getElementById('aviso-voz');
      if (!aviso) return;
      if (!V.disponible) {
        aviso.textContent = 'Este navegador no puede hablar. Abra el programa en Chrome, Edge o Safari.';
        aviso.hidden = false;
      } else if (!V.voces.length) {
        aviso.textContent = 'No encontré una voz en español en este aparato. Si no se oye bien, instale una voz en español en los ajustes de texto a voz.';
        aviso.hidden = false;
      }
    }, 4000);
  };
})(window.AE = window.AE || {});
