/*
 * El motor: decide qué se muestra y qué se dice según lo que haga el estudiante.
 *
 * Hay dos clases de pantalla:
 *   Lista    un menú para escoger (áreas, lecciones, ajustes)
 *   Leccion  una fila de tarjetas: pasos para oír, preguntas para responder y un cierre
 *
 * Acciones que entiende (vienen del teclado o de los toques, ver controles.js):
 *   siguiente, anterior, arriba, abajo, elegir, repetir, menu, deletrear, rapido, lento
 */
(function (AE) {
  'use strict';
  var T = AE.Texto, V = AE.Voz, S = AE.Sonidos, P = AE.Progreso, U = AE.util;
  function $(id) { return document.getElementById(id); }

  var M = AE.Motor = { modo: 'teclado', iniciado: false };
  var pila = [];

  // ---------- Frases de ayuda, según el aparato ----------
  var PISTAS = {
    teclado: {
      seguir: 'Flecha derecha para seguir.',
      lista: 'Flecha abajo y flecha arriba para moverte. Enter para elegir.',
      pregunta: 'Flecha abajo para oír las opciones una por una. Enter para elegir.',
      salir: 'Enter para volver.',
      primero: 'Primero escoge una opción con la flecha abajo.',
      respondida: 'Ya respondiste esta pregunta. Flecha derecha para seguir.'
    },
    tactil: {
      seguir: 'Desliza a la derecha para seguir.',
      lista: 'Desliza hacia abajo o hacia arriba para moverte. Doble toque para elegir.',
      pregunta: 'Desliza hacia abajo para oír las opciones una por una. Doble toque para elegir.',
      salir: 'Doble toque para volver.',
      primero: 'Primero escoge una opción deslizando hacia abajo.',
      respondida: 'Ya respondiste esta pregunta. Desliza a la derecha para seguir.'
    }
  };
  var NOMBRES = {
    teclado: { siguiente: 'la flecha derecha', anterior: 'la flecha izquierda', arriba: 'la flecha arriba',
      abajo: 'la flecha abajo', elegir: 'la tecla Enter', repetir: 'la barra espaciadora',
      menu: 'la tecla Escape', deletrear: 'la letra ele', numero: 'un número' },
    tactil: { siguiente: 'deslizar a la derecha', anterior: 'deslizar a la izquierda',
      arriba: 'deslizar hacia arriba', abajo: 'deslizar hacia abajo', elegir: 'un doble toque',
      repetir: 'un solo toque', menu: 'dejar el dedo quieto', deletrear: 'un toque con dos dedos' }
  };
  var ELOGIOS = ['¡Correcto!', '¡Muy bien!', '¡Eso es!', '¡Exacto!', '¡Así es!'];
  var ANIMOS = ['Todavía no.', 'Esa no es, pero vamos a entender por qué.',
    'No es esa. Con calma, que equivocarse también enseña.'];

  M.pista = function (tipo) { return PISTAS[M.modo][tipo]; };

  // Las pistas se dicen solas las primeras veces; después, solo al pedir que repita.
  function pista(tipo, siempre) {
    var veces = P.datos.pistas[tipo] || 0;
    if (!siempre) {
      if (veces >= 4) return null;
      P.datos.pistas[tipo] = veces + 1;
      P.guardar();
    }
    return PISTAS[M.modo][tipo];
  }

  // ---------- Dibujo en pantalla ----------
  function limpiar(migas, titulo) {
    $('migas').textContent = migas || '';
    $('titulo').textContent = titulo || '';
    $('texto').innerHTML = '';
    $('opciones').innerHTML = '';
    $('retro').innerHTML = '';
    $('lugar').textContent = '';
    $('app').scrollTop = 0;
  }

  // Agrega un párrafo visible y devuelve sus frases listas para la voz.
  // destino: dónde se pone; por defecto, la zona de texto que va antes de las opciones.
  function parrafo(crudo, clase, etiqueta, destino) {
    var p = document.createElement(etiqueta || 'p');
    if (clase) p.className = clase;
    var salida = T.frases(crudo).map(function (f) {
      var s = document.createElement('span');
      s.className = 'frase';
      s.innerHTML = f.html + ' ';
      p.appendChild(s);
      return { voz: f.voz, el: s };
    });
    (destino || $('texto')).appendChild(p);
    return salida;
  }

  // Texto que se dice pero no se muestra.
  function soloVoz(crudo) {
    return T.frases(crudo).map(function (f) { return { voz: f.voz }; });
  }

  // Texto que se dice mientras se resalta un elemento que ya está en pantalla.
  function vozDe(crudo, el) {
    return T.frases(crudo).map(function (f) { return { voz: f.voz, el: el }; });
  }

  function opciones(lista, foco) {
    var ol = $('opciones');
    ol.innerHTML = '';
    return lista.map(function (o, k) {
      var li = document.createElement('li'), b = document.createElement('button');
      var n = document.createElement('span'), t = document.createElement('span');
      b.type = 'button';
      b.tabIndex = -1;
      b.className = 'opcion' + (o.clase ? ' ' + o.clase : '') + (k === foco ? ' foco' : '');
      b.setAttribute('data-opcion', k);
      n.className = 'num';
      n.textContent = k + 1;
      t.className = 'txt';
      t.innerHTML = T.frases(o.crudo).map(function (f) { return f.html; }).join(' ');
      b.appendChild(n);
      b.appendChild(t);
      li.appendChild(b);
      ol.appendChild(li);
      return b;
    });
  }

  function enfocar(botones, foco) {
    botones.forEach(function (b, k) { b.classList.toggle('foco', k === foco); });
    if (botones[foco] && botones[foco].scrollIntoView) botones[foco].scrollIntoView({ block: 'nearest' });
  }

  // =====================================================================
  //  Lista: un menú
  // =====================================================================
  function Lista(cfg) {
    this.cfg = cfg;
    this.i = cfg.foco || 0;
  }

  Lista.prototype.entrar = function (motivo) {
    var c = this.cfg;
    this.its = typeof c.items === 'function' ? c.items() : c.items;
    if (this.i >= this.its.length) this.i = this.its.length - 1;
    if (this.i < 0) this.i = 0;
    limpiar(c.migas, c.titulo);
    var habla = soloVoz(c.titulo + '.');
    var intro = c.intro ? parrafo(c.intro) : [];
    if (motivo !== 'vuelta') habla = habla.concat(intro);
    this.botones = opciones(this.its.map(function (it) {
      return { crudo: it.texto + (it.nota ? ' ' + it.nota : ''), clase: it.hecho ? 'hecho' : '' };
    }), this.i);
    if (motivo !== 'vuelta') habla = habla.concat(soloVoz(c.cuenta || ('Hay ' + this.its.length + ' opciones.')));
    habla = habla.concat(this.vozItem(true), soloVoz(pista('lista', motivo === 'repetir')));
    this.verLugar();
    V.decir(habla);
  };

  Lista.prototype.verLugar = function () {
    $('lugar').textContent = 'Opción ' + (this.i + 1) + ' de ' + this.its.length;
  };

  Lista.prototype.vozItem = function (conLugar) {
    var it = this.its[this.i];
    var lugar = conLugar && !this.cfg.sinLugar ? 'Opción ' + (this.i + 1) + ' de ' + this.its.length + ': ' : '';
    return vozDe(lugar + it.texto + (it.nota ? ' ' + it.nota : ''), this.botones[this.i]);
  };

  Lista.prototype.accion = function (a, extra) {
    var n = this.its.length;
    if (a === 'abajo' || a === 'arriba') {
      var j = this.i + (a === 'abajo' ? 1 : -1);
      if (j < 0 || j >= n) {
        S.tocar('tope');
        V.decir(soloVoz(j < 0 ? 'Esta es la primera opción.' : 'Esta es la última opción.').concat(this.vozItem(false)));
        return;
      }
      this.i = j;
      S.tocar('mover');
      enfocar(this.botones, j);
      this.verLugar();
      V.decir(this.vozItem(false));
    } else if (a === 'numero' || a === 'opcion') {
      var k = a === 'numero' ? extra - 1 : extra;
      if (k < 0 || k >= n) return;
      this.i = k;
      enfocar(this.botones, k);
      this.verLugar();
      if (a === 'opcion') { S.tocar('entrar'); this.its[k].alElegir(); }
      else { S.tocar('mover'); V.decir(this.vozItem(false)); }
    } else if (a === 'elegir' || a === 'siguiente') {
      S.tocar('entrar');
      this.its[this.i].alElegir();
    } else if (a === 'anterior' || a === 'menu') {
      if (this.cfg.raiz) {
        S.tocar('tope');
        V.decir(soloVoz('Ya estás en el menú principal.').concat(this.vozItem(true)));
      } else M.volver();
    } else if (a === 'repetir') {
      this.entrar('repetir');
    } else if (a === 'deletrear') {
      V.decir(soloVoz('Aquí no hay palabras para deletrear.'));
    }
  };

  // =====================================================================
  //  Leccion: pasos, preguntas y cierre
  // =====================================================================
  function construir(def, soloPractica) {
    var cartas = [], seccion = '', abre = false, numero = 0;
    function agregar(x) {
      if (typeof x === 'string') {
        if (x.indexOf('## ') === 0) { seccion = x.slice(3); abre = true; return; }
        if (soloPractica) return;
        cartas.push({ tipo: 'paso', seccion: seccion, abre: abre, texto: x });
        abre = false;
      } else if (x && x.espera) {
        cartas.push({ tipo: 'accion', seccion: seccion, abre: abre, texto: x.texto, espera: x.espera, bien: x.bien, ayuda: x.ayuda });
        abre = false;
      } else {
        cartas.push({ tipo: 'pregunta', fuente: x, n: ++numero });
      }
    }
    (def.pasos || []).forEach(agregar);
    var practica = def.practica || [];
    if (practica.length) {
      if (!soloPractica) {
        seccion = 'Práctica';
        abre = true;
        agregar('Ahora te toca a ti. Te voy a hacer ' + practica.length + ' preguntas. Si te equivocas, no pasa nada: te explico y seguimos.');
      }
      practica.forEach(agregar);
    }
    cartas.push({ tipo: 'final' });
    return { cartas: cartas, preguntas: numero };
  }

  function Leccion(def, opc) {
    this.def = def;
    this.opc = opc || {};
    var c = construir(def, this.opc.soloPractica);
    this.cartas = c.cartas;
    this.total = c.preguntas;
    this.aciertos = 0;
    this.pendientes = [];
    this.conRepaso = false;
    this.i = Math.max(0, Math.min(this.opc.desde || 0, this.cartas.length - 1));
    this.fresca = true;
  }

  Leccion.prototype.lugar = function () {
    return 'Paso ' + (this.i + 1) + ' de ' + (this.cartas.length - 1);
  };

  Leccion.prototype.guardarLugar = function () {
    if (this.opc.soloPractica || this.def.sinGuardar) return;
    var j = this.i;
    if (this.cartas[j].tipo === 'final') return;
    while (j > 0 && this.cartas[j].tipo !== 'paso') j--;
    P.datos.posicion[this.def.id] = j;
    P.guardar();
  };

  Leccion.prototype.entrar = function (motivo) {
    var c = this.cartas[this.i];
    this.guardarLugar();
    if (c.tipo === 'pregunta') this.verPregunta(c, motivo);
    else if (c.tipo === 'final') this.verFinal(c);
    else this.verPaso(c, motivo);
    this.fresca = false;
  };

  Leccion.prototype.anuncio = function () {
    return this.fresca && this.opc.anuncio ? soloVoz(this.opc.anuncio) : [];
  };

  Leccion.prototype.verPaso = function (c, motivo) {
    limpiar(this.opc.migas, this.def.titulo);
    var repite = motivo === 'repetir';
    var habla = repite ? soloVoz(this.lugar() + '.') : [];
    habla = habla.concat(this.anuncio());
    if (c.seccion) {
      var h = parrafo(c.seccion, 'seccion', 'h2');
      if (c.abre || repite) habla = habla.concat(h.map(function (x) { return { voz: x.voz + '.', el: x.el }; }));
    }
    habla = habla.concat(parrafo(c.texto));
    if (c.tipo === 'paso' || c.hecha) habla = habla.concat(soloVoz(pista('seguir', repite)));
    $('lugar').textContent = this.lugar();
    V.decir(habla);
  };

  Leccion.prototype.verPregunta = function (c, motivo) {
    var yo = this;
    if (!c.datos) {
      c.datos = typeof c.fuente === 'function' ? c.fuente() : c.fuente;
      c.orden = U.barajar(c.datos.o.map(function (_, k) { return k; }));
      c.foco = -1;
    }
    var d = c.datos, repite = motivo === 'repetir';
    limpiar(this.opc.migas, this.def.titulo);
    var rotulo = c.repaso ? 'Repaso' : 'Pregunta ' + c.n + ' de ' + this.total;
    var habla = this.anuncio().concat(parrafo(rotulo, 'seccion', 'h2').map(function (x) {
      return { voz: x.voz + '.', el: x.el };
    }));
    var pregunta = parrafo(d.p, 'pregunta');
    this.botones = opciones(c.orden.map(function (real, k) {
      var clase = '';
      if (c.respondida) clase = real === 0 ? 'bien' : (k === c.eleccion ? 'mal' : '');
      return { crudo: d.o[real], clase: clase };
    }), c.respondida ? c.eleccion : c.foco);
    $('lugar').textContent = this.lugar();

    if (c.respondida) {
      var retro = [];
      c.retro.forEach(function (r) { retro = retro.concat(parrafo(r, 'retro ' + (c.acerto ? 'bien' : 'mal'), 'p', $('retro'))); });
      habla = (motivo === 'respuesta' ? [] : habla.concat(pregunta)).concat(retro, soloVoz(pista('seguir', repite)));
      V.decir(habla, { retraso: motivo === 'respuesta' ? 450 : 0 });
      return;
    }
    habla = habla.concat(pregunta);
    c.orden.forEach(function (real, k) {
      habla = habla.concat(vozDe('Opción ' + (k + 1) + ': ' + d.o[real], yo.botones[k]));
    });
    V.decir(habla.concat(soloVoz(pista('pregunta', repite))));
  };

  Leccion.prototype.moverFoco = function (c, k) {
    var n = c.orden.length;
    if (k < 0 || k >= n) {
      S.tocar('tope');
      V.decir(soloVoz(k < 0 ? 'Esta es la primera opción.' : 'No hay más opciones. ' + PISTAS[M.modo].lista));
      return;
    }
    c.foco = k;
    S.tocar('mover');
    enfocar(this.botones, k);
    V.decir(vozDe('Opción ' + (k + 1) + ': ' + c.datos.o[c.orden[k]], this.botones[k]));
  };

  Leccion.prototype.responder = function (c) {
    var d = c.datos, real = c.orden[c.foco];
    c.respondida = true;
    c.eleccion = c.foco;
    c.acerto = real === 0;
    if (c.acerto) {
      if (!c.repaso) this.aciertos++;
      S.tocar('bien');
      c.retro = [U.uno(ELOGIOS) + ' ' + d.e[0]];
    } else {
      if (!c.repaso) this.pendientes.push(c.fuente);
      S.tocar('mal');
      c.retro = [U.uno(ANIMOS) + ' ' + d.e[real],
        'La respuesta correcta es: ' + String(d.o[0]).replace(/[.\s]+$/, '') + '.'];
      c.retro.push(d.s && d.s.length ? 'Vamos paso a paso. ' + d.s.join(' ') : d.e[0]);
    }
    this.verPregunta(c, 'respuesta');
  };

  // Pasa a la tarjeta siguiente. Antes del cierre, repasa una vez las preguntas falladas.
  Leccion.prototype.avanzar = function () {
    var sig = this.cartas[this.i + 1];
    if (sig && sig.tipo === 'final' && this.pendientes.length && !this.conRepaso) {
      this.conRepaso = true;
      var extra = [{ tipo: 'paso', seccion: 'Repaso', abre: true,
        texto: 'Antes de terminar, repasemos las preguntas en las que hubo dudas. Ya oíste la explicación, así que ahora van a salir mejor.' }];
      this.pendientes.forEach(function (f) { extra.push({ tipo: 'pregunta', fuente: f, repaso: true }); });
      Array.prototype.splice.apply(this.cartas, [this.i + 1, 0].concat(extra));
    }
    if (this.i < this.cartas.length - 1) {
      this.i++;
      S.tocar('mover');
      this.entrar('paso');
    }
  };

  Leccion.prototype.verFinal = function (c) {
    var def = this.def, practica = this.opc.soloPractica;
    limpiar(this.opc.migas, def.titulo);
    if (!c.hecho) {
      c.hecho = true;
      S.tocar('fiesta');
      if (!practica && !def.sinGuardar) {
        P.datos.terminadas[def.id] = { aciertos: this.aciertos, total: this.total };
        delete P.datos.posicion[def.id];
        P.guardar();
      }
    }
    var habla = parrafo(practica ? '¡Terminaste la práctica!' : (def.cierre || '¡Terminaste la lección!'), 'seccion', 'h2')
      .map(function (x) { return { voz: x.voz, el: x.el }; });
    if (this.total) {
      var nota = this.aciertos === this.total ? '¡Excelente trabajo!'
        : this.aciertos * 2 >= this.total ? 'Vas muy bien.'
        : 'Vale la pena oír esta lección otra vez otro día. Cada vez se entiende mejor.';
      habla = habla.concat(parrafo('Acertaste ' + this.aciertos + ' de ' + this.total + ' preguntas a la primera. ' + nota));
    }
    if (!practica && def.resumen) habla = habla.concat(parrafo('Para recordar: ' + def.resumen, 'resumen'));
    $('lugar').textContent = 'Fin';
    V.decir(habla.concat(soloVoz(pista('salir', true))), { retraso: 700 });
  };

  Leccion.prototype.deletrear = function (c) {
    var crudo = c.tipo === 'pregunta' ? [c.datos.p].concat(c.datos.o).join(' ') : (c.texto || '');
    var vistos = {}, terminos = [];
    T.frases(crudo).forEach(function (f) {
      f.terminos.forEach(function (t) { if (!vistos[t]) { vistos[t] = true; terminos.push(t); } });
    });
    if (!terminos.length) {
      V.decir(soloVoz('En este paso no hay palabras marcadas para deletrear.'));
      return;
    }
    V.decir(terminos.slice(0, 6).map(function (t) {
      return { voz: t + ': ' + T.deletrear(t) + '.', lento: true };
    }));
  };

  // Tarjetas del recorrido inicial: esperan que el estudiante haga una acción concreta.
  Leccion.prototype.practicarAccion = function (c, a, extra) {
    var yo = this;
    if (a === c.espera) {
      c.hecha = true;
      S.tocar('bien');
      V.decir(soloVoz(c.bien), { retraso: 400, sinAviso: true, alTerminar: function () { yo.avanzar(); } });
    } else if (a === 'menu') {
      this.salir(false);
    } else {
      var nombre = a === 'otra' ? (extra || 'otra tecla') : (NOMBRES[M.modo][a] || 'otra cosa');
      S.tocar('tope');
      V.decir(soloVoz('Eso fue ' + nombre + '. ' + c.ayuda));
    }
  };

  Leccion.prototype.salir = function (terminada) {
    if (this.opc.alSalir) this.opc.alSalir(!!terminada);
    else M.volver();
  };

  Leccion.prototype.accion = function (a, extra) {
    var c = this.cartas[this.i];
    var esperaAccion = c.tipo === 'accion' && !c.hecha;
    if (a === 'repetir' && !(esperaAccion && c.espera === 'repetir')) { this.entrar('repetir'); return; }
    if (esperaAccion) { this.practicarAccion(c, a, extra); return; }
    if (a === 'otra') return;
    if (a === 'menu') { this.salir(false); return; }
    if (a === 'deletrear') { this.deletrear(c); return; }
    if (a === 'anterior') {
      if (this.i > 0) { this.i--; S.tocar('mover'); this.entrar('paso'); }
      else { S.tocar('tope'); V.decir(soloVoz('Este es el primer paso. ' + PISTAS[M.modo].seguir)); }
      return;
    }
    if (c.tipo === 'final') {
      if (a === 'siguiente' || a === 'elegir') this.salir(true);
      return;
    }
    if (c.tipo === 'pregunta' && !c.respondida) {
      if (a === 'abajo') this.moverFoco(c, c.foco + 1);
      else if (a === 'arriba') this.moverFoco(c, c.foco < 0 ? 0 : c.foco - 1);
      else if (a === 'numero') { if (extra >= 1 && extra <= c.orden.length) this.moverFoco(c, extra - 1); }
      else if (a === 'opcion') { c.foco = extra; this.responder(c); }
      else if (a === 'elegir') {
        if (c.foco < 0) { S.tocar('tope'); V.decir(soloVoz(PISTAS[M.modo].primero)); }
        else this.responder(c);
      } else if (a === 'siguiente') {
        S.tocar('tope');
        V.decir(soloVoz('Para seguir, primero responde la pregunta. ' + PISTAS[M.modo].pregunta));
      }
      return;
    }
    if (a === 'siguiente' || a === 'elegir') this.avanzar();
    else if (a === 'arriba' || a === 'abajo') {
      S.tocar('tope');
      V.decir(soloVoz(c.tipo === 'pregunta' ? PISTAS[M.modo].respondida : PISTAS[M.modo].seguir));
    }
  };

  // =====================================================================
  //  Navegación entre pantallas
  // =====================================================================
  M.Lista = Lista;
  M.Leccion = Leccion;

  M.actual = function () { return pila[pila.length - 1]; };

  M.abrir = function (pantalla) {
    pila.push(pantalla);
    pantalla.entrar('nuevo');
  };

  // Vuelve n pantallas hacia atrás (por defecto, una).
  M.volver = function (n) {
    n = n || 1;
    while (n-- > 0 && pila.length > 1) pila.pop();
    S.tocar('atras');
    M.actual().entrar('vuelta');
  };

  M.reemplazar = function (pantalla) {
    pila = [pantalla];
    pantalla.entrar('nuevo');
  };

  M.ponerModo = function (modo) {
    if (M.modo === modo) return;
    M.modo = modo;
    document.body.classList.toggle('tactil', modo === 'tactil');
  };

  M.decir = function (crudo, opciones) { V.decir(soloVoz(crudo), opciones); };

  M.accion = function (a, extra) {
    if (!M.iniciado || !pila.length) return;
    if (a === 'rapido' || a === 'lento') {
      var pudo = V.cambiarVelocidad(a === 'rapido' ? 1 : -1);
      S.tocar(pudo ? 'mover' : 'tope');
      M.decir(pudo ? (a === 'rapido' ? 'Ahora hablo más rápido.' : 'Ahora hablo más despacio.')
        : (a === 'rapido' ? 'Ya estoy hablando lo más rápido que puedo.' : 'Ya estoy hablando lo más despacio que puedo.'));
      return;
    }
    M.actual().accion(a, extra);
  };

  // Se llama con el primer toque o la primera tecla.
  M.iniciar = function (modo) {
    if (M.iniciado) return;
    M.iniciado = true;
    M.modo = modo;
    document.body.classList.toggle('tactil', modo === 'tactil');
    document.body.classList.toggle('con-lector', !V.activa);
    S.despertar();
    V.despertar();
    $('portada').hidden = true;
    $('app').hidden = false;
    $('pie').hidden = false;
    AE.empezar();
  };
})(window.AE = window.AE || {});
