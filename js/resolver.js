/*
 * Resuelve un ejercicio de fracciones que alguien escribe, y lo explica paso a paso.
 *
 * No toca la pantalla ni la voz: solo recibe números y devuelve una lista de pasos.
 * Cada paso tiene el texto que se dice y la "escena" de barras que lo acompaña.
 *
 *   AE.Resolver.resolver('sumar', { a: 1, b: 2, c: 1, d: 4 })
 *   -> { pasos: [{ seccion, texto, escena }], resumen, escenaFinal, valor }
 */
(function (AE) {
  'use strict';
  var U = AE.util, N = AE.Numeros;

  // ---------- Maneras de decir las cosas ----------
  function enteros(k) { return k === 1 ? 'un entero' : k + ' enteros'; }
  function veces(k) { return k === 1 ? 'una vez' : k + ' veces'; }
  // Una fracción con denominador 1 es un número entero.
  function fr(n, d) { return d === 1 ? enteros(n) : '{' + n + '/' + d + '}'; }
  function pedazos(d) { return d === 1 ? 'enteros' : N.parte(d, true); }

  // ---------- Escenas: lo que se dibuja y suena en cada paso ----------
  function barra(id, n, d, color, extra) {
    var b = { id: id, n: n, d: d, color: color, rotulo: fr(n, d) };
    Object.keys(extra || {}).forEach(function (k) { b[k] = extra[k]; });
    return b;
  }
  function escena(barras, signo) { return { barras: barras, signo: signo || '' }; }

  // ---------- Piezas que se repiten ----------
  function explicarMcm(x, y) {
    var mayor = Math.max(x, y), menor = Math.min(x, y), L = U.mcm(x, y), k = L / mayor;
    if (L === mayor) {
      return 'El ' + mayor + ' ya está en la tabla del ' + menor + ', porque ' + menor + ' × ' + (mayor / menor) + ' = ' + mayor +
        '. Entonces el mínimo común múltiplo es ' + mayor + '.';
    }
    if (k <= 6) {
      var lista = [];
      for (var i = 1; i <= k; i++) lista.push(mayor * i);
      return 'Digo los múltiplos de ' + mayor + ': ' + lista.join(', ') + '. El primero que el ' + menor + ' divide exacto es ' + L +
        ', porque ' + L + ' ÷ ' + menor + ' = ' + (L / menor) + '. El mínimo común múltiplo es ' + L + '.';
    }
    return 'Voy diciendo los múltiplos de ' + mayor + ' hasta encontrar uno que el ' + menor + ' divida exacto. El primero es ' + L +
      ', porque ' + mayor + ' × ' + k + ' = ' + L + ', y ' + L + ' ÷ ' + menor + ' = ' + (L / menor) + '. El mínimo común múltiplo es ' + L + '.';
  }

  // Explica cómo una fracción pasa al denominador común L.
  function cambiar(n, d, L, cual) {
    var k = L / d;
    if (k === 1) return 'La ' + cual + ' fracción, ' + fr(n, d) + ', ya tiene denominador ' + L + '. Se queda igual.';
    return 'Cambio la ' + cual + ' fracción. El ' + d + ' se multiplica por ' + k + ' para llegar a ' + L + '. Arriba hago lo mismo: ' +
      n + ' × ' + k + ' = ' + (n * k) + '. Queda ' + fr(n * k, L) + '. Es la misma cantidad, en pedazos más pequeños.';
  }

  // Si el resultado vale más que un entero, lo dice también como número mixto.
  function aMixto(n, d, pasos) {
    if (d === 1 || n <= d) return fr(n, d);
    var e = Math.floor(n / d), r = n % d, mixto = '{' + e + ' ' + r + '/' + d + '}';
    pasos.push({
      texto: 'El numerador es mayor que el denominador, así que el resultado vale más que un entero. Lo paso a número mixto: ' +
        n + ' ÷ ' + d + ' = ' + e + ', y sobra ' + r + '. Son ' + mixto + '.',
      escena: escena([barra('r', n, d, 2, { rotulo: mixto })])
    });
    return fr(n, d) + ', o sea, ' + mixto;
  }

  // Cierra un ejercicio: simplifica el resultado n/d y lo pasa a mixto si hace falta.
  function cerrar(n, d, pasos) {
    if (n === 0) {
      pasos.push({ seccion: 'El resultado', texto: 'No queda nada. El resultado es cero.', escena: null });
      return { n: 0, d: 1, texto: 'cero' };
    }
    var g = U.mcd(n, d), s = n / g, t = d / g;
    if (t === 1) {
      if (d > 1) {
        pasos.push({
          seccion: 'El resultado',
          texto: 'El ' + n + ' se deja dividir exacto entre el ' + d + ': ' + n + ' ÷ ' + d + ' = ' + s + '. Eso quiere decir que los pedazos arman ' +
            enteros(s) + ', sin que sobre nada.',
          escena: escena([barra('r', n, d, 2, { rotulo: enteros(s) })])
        });
      }
      return { n: s, d: 1, texto: enteros(s) };
    }
    if (g > 1) {
      pasos.push({
        seccion: 'El resultado',
        texto: 'Reviso si se puede simplificar. El ' + n + ' y el ' + d + ' se dejan dividir entre ' + g + '. Arriba: ' + n + ' ÷ ' + g + ' = ' + s +
          '. Abajo: ' + d + ' ÷ ' + g + ' = ' + t + '. Queda ' + fr(s, t) + '. Es la misma cantidad, dicha con números más pequeños.',
        escena: escena([barra('r', s, t, 2)])
      });
    } else {
      pasos.push({
        seccion: 'El resultado',
        texto: 'Reviso si se puede simplificar. El único número que divide exacto al ' + n + ' y al ' + d + ' es el 1. Entonces ' + fr(n, d) +
          ' ya está en su forma más sencilla.',
        escena: escena([barra('r', n, d, 2)])
      });
    }
    return { n: s, d: t, texto: aMixto(s, t, pasos) };
  }

  function terminar(pasos, resumen, valor) {
    var ultima = null;
    for (var i = pasos.length - 1; i >= 0 && !ultima; i--) ultima = pasos[i].escena;
    return { pasos: pasos, resumen: resumen, escenaFinal: ultima, valor: valor };
  }

  // =====================================================================
  //  Sumar y restar
  // =====================================================================
  function sumarRestar(v, resta) {
    var a = v.a, b = v.b, c = v.c, d = v.d;
    var signo = resta ? '−' : '+', verbo = resta ? 'restar' : 'sumar';
    var X = fr(a, b), Y = fr(c, d);
    var A0 = barra('a', a, b, 0), B0 = barra('b', c, d, 1);
    var pasos = [{
      seccion: 'El ejercicio',
      texto: 'Vamos a ' + verbo + ': ' + X + ' ' + signo + ' ' + Y + '. ' +
        (resta ? 'A la primera cantidad le vamos a quitar la segunda.' : 'Vamos a juntar las dos cantidades.'),
      escena: escena([A0, B0], signo)
    }];

    if (resta && a * d < c * b) {
      pasos.push({
        seccion: 'Paso a paso',
        texto: 'Antes de restar, comparo las dos fracciones multiplicando en cruz. A la primera le toca ' + a + ' × ' + d + ' = ' + (a * d) +
          '. A la segunda le toca ' + c + ' × ' + b + ' = ' + (c * b) + '. Como ' + (a * d) + ' es menos que ' + (c * b) +
          ', la primera fracción es más pequeña que la segunda.',
        escena: escena([A0, B0], signo)
      });
      pasos.push({
        texto: 'No se puede quitar más de lo que hay. Por eso esta resta no se puede hacer así. Prueba otra vez, poniendo primero la fracción más grande.',
        escena: escena([A0, B0], signo)
      });
      return terminar(pasos, 'a ' + X + ' no se le puede quitar ' + Y + ', porque la segunda es más grande que la primera.', null);
    }

    var L, A, C;
    if (b === d) {
      L = b; A = a; C = c;
      pasos.push({
        seccion: 'Paso a paso',
        texto: 'Los denominadores son iguales: los dos son ' + b + '. Eso quiere decir que los pedazos son del mismo tamaño, así que se puede ' +
          verbo + ' de una vez.',
        escena: escena([A0, B0], signo)
      });
    } else {
      L = U.mcm(b, d); A = a * L / b; C = c * L / d;
      pasos.push({
        seccion: 'Paso a paso',
        texto: 'Los denominadores son distintos: ' + b + ' y ' + d + '. Los pedazos no son del mismo tamaño, así que todavía no se puede ' +
          verbo + '. Primero hay que cambiarlos por pedazos iguales.',
        escena: escena([A0, B0], signo)
      });
      pasos.push({
        texto: 'Busco el mínimo común múltiplo de ' + b + ' y ' + d + '. ' + explicarMcm(b, d) + ' Ese va a ser el denominador de las dos fracciones.',
        escena: escena([A0, B0], signo)
      });
      pasos.push({ texto: cambiar(a, b, L, 'primera'), escena: escena([barra('a', A, L, 0), B0], signo) });
      pasos.push({ texto: cambiar(c, d, L, 'segunda'), escena: escena([barra('a', A, L, 0), barra('b', C, L, 1)], signo) });
    }

    var R = resta ? A - C : A + C;
    var resultado = barra('r', R, L, 2, { partes: resta ? [[R, 'c0'], [C, 'quitado']] : [[A, 'c0'], [C, 'c1']] });
    pasos.push({
      texto: (b === d ? '' : 'Ahora los pedazos son del mismo tamaño. ') + (resta ? 'Resto' : 'Sumo') + ' los numeradores: ' + A + ' ' + signo + ' ' + C +
        ' = ' + R + '. El denominador se queda en ' + L + ', porque los pedazos siguen siendo ' + pedazos(L) + '. Sale ' + fr(R, L) + '.',
      escena: escena([barra('a', A, L, 0), barra('b', C, L, 1), resultado], signo)
    });

    var fin = cerrar(R, L, pasos);
    return terminar(pasos, X + ' ' + signo + ' ' + Y + ' = ' + fin.texto + '.', { n: fin.n, d: fin.d });
  }

  // =====================================================================
  //  Multiplicar
  // =====================================================================
  function multiplicar(v) {
    var a = v.a, b = v.b, c = v.c, d = v.d, n = a * c, D = b * d;
    var X = fr(a, b), Y = fr(c, d);
    var A0 = barra('a', a, b, 0), B0 = barra('b', c, d, 1);
    var sentido = b === 1 ? 'Esto quiere decir: ' + veces(a) + ' ' + Y + '.'
      : 'Multiplicar por una fracción es sacar una parte. Esto quiere decir: ' + X + ' de ' + Y + '.';
    var pasos = [{ seccion: 'El ejercicio', texto: 'Vamos a multiplicar: ' + X + ' × ' + Y + '. ' + sentido, escena: escena([A0, B0], '×') }];
    pasos.push({
      seccion: 'Paso a paso',
      texto: 'Para multiplicar no hace falta igualar los denominadores. Se multiplica arriba por arriba, y abajo por abajo.',
      escena: escena([A0, B0], '×')
    });
    pasos.push({ texto: 'Arriba por arriba: ' + a + ' × ' + c + ' = ' + n + '.', escena: escena([A0, B0], '×') });

    // Dibujo: la segunda fracción, con cada pedazo vuelto a partir; en color fuerte, lo que se saca.
    var producto = barra('r', n, D, 2);
    if (a <= b && c <= d && b > 1 && d > 1) {
      var estados = [];
      for (var i = 0; i < D; i++) estados.push(Math.floor(i / b) < c ? (i % b < a ? 'c0' : 'claro') : 'vacio');
      producto = barra('r', n, D, 2, { estados: estados, grupo: b });
    }
    pasos.push({
      texto: 'Abajo por abajo: ' + b + ' × ' + d + ' = ' + D + '.' +
        (b > 1 && d > 1 ? ' Los denominadores se multiplican porque cada pedazo se vuelve a partir.' : '') + ' Sale ' + fr(n, D) + '.',
      escena: escena([B0, producto])
    });
    if (a < b) {
      pasos.push({
        texto: 'Fíjate: el resultado es más pequeño que ' + Y + '. Tiene sentido, porque se sacó solo una parte.',
        escena: escena([B0, producto])
      });
    }
    var fin = cerrar(n, D, pasos);
    return terminar(pasos, X + ' × ' + Y + ' = ' + fin.texto + '.', { n: fin.n, d: fin.d });
  }

  // =====================================================================
  //  Dividir
  // =====================================================================
  function dividir(v) {
    var a = v.a, b = v.b, c = v.c, d = v.d, n = a * d, D = b * c;
    var entero = d === 1;   // se divide entre un número entero: es repartir
    var X = fr(a, b), Y = entero ? String(c) : fr(c, d);
    var partes = c === 1 ? 'una sola parte' : c + ' partes iguales';
    var A0 = barra('a', a, b, 0), B0 = barra('b', c, d, 1, { rotulo: Y });
    var pasos = [{
      seccion: 'El ejercicio',
      texto: 'Vamos a dividir: ' + X + ' ÷ ' + Y + '. ' +
        (entero ? 'Dividir entre ' + c + ' es repartir en ' + partes + '.' : 'La pregunta es: ¿cuántas veces cabe ' + Y + ' en ' + X + '?'),
      escena: escena([A0, B0], '÷')
    }];
    pasos.push({
      seccion: 'Paso a paso',
      texto: 'Para dividir, se multiplica por la segunda cantidad volteada. La primera se deja igual: ' + X + '.',
      escena: escena([A0, B0], '÷')
    });
    pasos.push({
      texto: d === 1
        ? 'La segunda es un número entero. El ' + c + ' es lo mismo que {' + c + '/1}. Volteado queda {1/' + c + '}.'
        : 'La segunda se voltea: el número de abajo sube y el de arriba baja. ' + Y + ' pasa a ser {' + d + '/' + c + '}.' +
          (c === 1 ? ' Eso es lo mismo que ' + d + '.' : ''),
      escena: escena([A0, barra('b', d, c, 1, { rotulo: '{' + d + '/' + c + '}' })], '×')
    });
    pasos.push({
      texto: 'Ahora multiplico. Arriba: ' + a + ' × ' + d + ' = ' + n + '. Abajo: ' + b + ' × ' + c + ' = ' + D + '. Sale ' + fr(n, D) + '.',
      escena: escena([barra('r', n, D, 2)])
    });
    var fin = cerrar(n, D, pasos);

    // Qué significa el resultado, con las dos fracciones en pedazos del mismo tamaño.
    var L = U.mcm(b, d), A = a * L / b, C = c * L / d, grupos = Math.floor(A / C), estados = [];
    for (var i = 0; i < A; i++) estados.push(i < grupos * C ? (Math.floor(i / C) % 2 === 0 ? 'c0' : 'alt') : 'claro');
    var cabe = escena([barra('a', A, L, 0, { estados: estados, rotulo: X }), barra('b', C, L, 1, { rotulo: Y })]);
    var significado;
    if (entero) {
      significado = 'Eso quiere decir que, al repartir ' + X + ' en ' + partes + ', cada parte es ' + fin.texto + '.';
      cabe = escena([barra('r', fin.n, fin.d, 2)]);
    } else if (fin.d === 1) significado = 'Eso quiere decir que ' + Y + ' cabe exactamente ' + veces(fin.n) + ' en ' + X + '.';
    else if (fin.n < fin.d) significado = 'Eso quiere decir que ' + Y + ' no alcanza a caber completa en ' + X + '. Solo cabe una parte de ella.';
    else significado = 'Eso quiere decir que ' + Y + ' cabe ' + veces(grupos) + ' en ' + X + ', y sobra un pedazo.';
    pasos.push({ texto: significado, escena: cabe });
    return terminar(pasos, X + ' ÷ ' + Y + ' = ' + fin.texto + '.', { n: fin.n, d: fin.d });
  }

  // =====================================================================
  //  Simplificar
  // =====================================================================
  var PRIMOS = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  var PISTAS = { 2: 'Los dos son pares. ', 3: 'Los dos están en la tabla del 3. ', 5: 'Los dos terminan en 0 o en 5. ' };

  function simplificar(v) {
    var a = v.a, b = v.b, X = fr(a, b), n = a, d = b, hubo = false;
    var pasos = [{
      seccion: 'El ejercicio',
      texto: 'Vamos a simplificar ' + X + '. Simplificar es escribir la misma cantidad con números más pequeños.',
      escena: escena([barra('r', a, b, 0)])
    }];
    if (b === 1) {
      pasos.push({ seccion: 'El resultado', texto: 'Esto ya es un número entero. No hay nada que simplificar.', escena: null });
      return terminar(pasos, X + ' ya es un número entero.', { n: a, d: 1 });
    }
    while (U.mcd(n, d) > 1) {
      var g = U.mcd(n, d), p = PRIMOS.filter(function (x) { return g % x === 0; })[0] || g;
      pasos.push({
        seccion: hubo ? undefined : 'Paso a paso',
        texto: (hubo ? 'Todavía se puede. ' : 'Busco un número que divida exacto al ' + n + ' y al ' + d + '. ') + (PISTAS[p] || '') +
          'Divido entre ' + p + '. Arriba: ' + n + ' ÷ ' + p + ' = ' + (n / p) + '. Abajo: ' + d + ' ÷ ' + p + ' = ' + (d / p) + '. Queda ' + fr(n / p, d / p) + '.',
        escena: escena([barra('r', n / p, d / p, 0)])
      });
      n /= p; d /= p; hubo = true;
    }
    if (!hubo) {
      pasos.push({
        seccion: 'El resultado',
        texto: 'Busco un número, aparte del 1, que divida exacto al ' + a + ' y al ' + b + '. Pruebo con el 2, con el 3, con el 5 y con los que siguen. No hay ninguno. Entonces ' +
          X + ' ya está en su forma más sencilla. Es una fracción irreducible.',
        escena: escena([barra('r', a, b, 2)])
      });
    } else {
      pasos.push({
        seccion: 'El resultado',
        texto: 'Ya no hay ningún número, aparte del 1, que divida exacto a los dos. La forma más sencilla de ' + X + ' es ' + fr(n, d) + '. Es la misma cantidad.',
        escena: escena([barra('r', n, d, 2)])
      });
    }
    var texto = aMixto(n, d, pasos);
    return terminar(pasos, hubo ? X + ' simplificada es ' + texto + '.' : X + ' ya está en su forma más sencilla.', { n: n, d: d });
  }

  // =====================================================================
  //  Comparar
  // =====================================================================
  function comparar(v) {
    var a = v.a, b = v.b, c = v.c, d = v.d, x = a * d, y = c * b;
    var X = fr(a, b), Y = fr(c, d);
    var A0 = barra('a', a, b, 0), B0 = barra('b', c, d, 1), dos = escena([A0, B0]);
    var pasos = [{ seccion: 'El ejercicio', texto: 'Vamos a comparar ' + X + ' y ' + Y + ', para saber cuál es mayor.', escena: dos }];

    if (b === d) {
      pasos.push({
        seccion: 'Paso a paso',
        texto: 'Las dos tienen el mismo denominador: ' + b + '. Los pedazos son del mismo tamaño, así que gana la que tiene más pedazos. Comparo los numeradores: ' + a + ' y ' + c + '.',
        escena: dos
      });
    } else if (a === c) {
      pasos.push({
        seccion: 'Paso a paso',
        texto: 'Las dos tienen el mismo numerador: ' + a + '. Tienen la misma cantidad de pedazos, así que gana la que tiene los pedazos más grandes. Y los pedazos más grandes son los del denominador más pequeño.',
        escena: dos
      });
    } else {
      pasos.push({ seccion: 'Paso a paso', texto: 'Los numeradores y los denominadores son distintos, así que multiplico en cruz.', escena: dos });
      pasos.push({ texto: 'El ' + a + ' de la primera por el ' + d + ' de la segunda: ' + a + ' × ' + d + ' = ' + x + '. Ese número le pertenece a la primera fracción.', escena: dos });
      pasos.push({ texto: 'El ' + c + ' de la segunda por el ' + b + ' de la primera: ' + c + ' × ' + b + ' = ' + y + '. Ese número le pertenece a la segunda fracción.', escena: dos });
      pasos.push({
        texto: 'Esos dos números son los numeradores que saldrían si las dos fracciones se pasaran a pedazos del mismo tamaño: ' + fr(x, b * d) + ' y ' + fr(y, b * d) + '.',
        escena: escena([barra('a', x, b * d, 0), barra('b', y, b * d, 1)])
      });
    }

    var cierre, resumen, gana = x > y ? 1 : x < y ? 2 : 0;
    if (gana === 0) {
      cierre = 'Las dos dan lo mismo. Las fracciones valen igual: son equivalentes.';
      resumen = X + ' y ' + Y + ' valen lo mismo.';
    } else {
      var mayor = gana === 1 ? X : Y, menor = gana === 1 ? Y : X;
      cierre = (b === d ? 'Como ' + Math.max(a, c) + ' es más que ' + Math.min(a, c)
        : a === c ? 'Como ' + Math.min(b, d) + ' es el denominador más pequeño'
        : 'Como ' + Math.max(x, y) + ' es más que ' + Math.min(x, y)) +
        ', gana la ' + (gana === 1 ? 'primera' : 'segunda') + '. ' + mayor + ' es mayor que ' + menor + '.';
      resumen = mayor + ' es mayor que ' + menor + '.';
    }
    pasos.push({ seccion: 'El resultado', texto: cierre, escena: dos });
    var fin = terminar(pasos, resumen, null);
    fin.gana = gana;
    return fin;
  }

  // =====================================================================
  //  Fracción de una cantidad
  // =====================================================================
  function deCantidad(v) {
    var n = v.a, d = v.b, T = v.t, X = fr(n, d);
    var pasos = [{ seccion: 'El ejercicio', texto: 'Vamos a sacar ' + X + ' de ' + T + '.', escena: escena([barra('a', n, d, 0)]) }];

    if (T % d === 0) {
      var k = T / d, R = n * k;
      // Se dibuja la cantidad como una fila de unidades agrupadas, si no es demasiado larga.
      var unidades = function (tomadas) {
        var estados = [];
        for (var i = 0; i < Math.max(T, tomadas); i++) estados.push(i < tomadas ? 'c0' : 'claro');
        return escena([barra('u', tomadas, Math.max(T, 1), 0, { estados: estados, grupo: k, d: T, rotulo: tomadas ? R + ' de ' + T : String(T) })]);
      };
      pasos.push({
        seccion: 'Paso a paso',
        texto: 'Primer paso, el denominador. El ' + d + ' dice: reparte ' + T + ' en ' + d + ' grupos iguales. ' + T + ' ÷ ' + d + ' = ' + k + '. Cada grupo tiene ' + k + '.',
        escena: unidades(0)
      });
      pasos.push({
        texto: 'Segundo paso, el numerador. El ' + n + ' dice: toma ' + (n === 1 ? 'un grupo' : n + ' grupos') + '. ' + n + ' × ' + k + ' = ' + R + '.',
        escena: unidades(R)
      });
      pasos.push({
        seccion: 'El resultado',
        texto: 'Entonces ' + X + ' de ' + T + ' es ' + R + '.' +
          (n < d ? ' Tiene sentido: es menos que ' + T + ', porque se tomó solo una parte.'
            : n === d ? ' Es todo, porque la fracción vale un entero.'
            : ' Es más que ' + T + ', porque la fracción vale más que un entero.'),
        escena: unidades(R)
      });
      return terminar(pasos, X + ' de ' + T + ' es ' + R + '.', { n: R, d: 1 });
    }

    var P = n * T;
    pasos.push({
      seccion: 'Paso a paso',
      texto: 'El ' + T + ' no se deja repartir exacto en ' + d + ' grupos: sobra ' + (T % d) + '. Entonces lo resuelvo como una multiplicación: ' + X + ' × ' + T + '.',
      escena: escena([barra('a', n, d, 0)])
    });
    pasos.push({
      texto: 'Multiplico el numerador por la cantidad: ' + n + ' × ' + T + ' = ' + P + '. El denominador se queda en ' + d + '. Sale ' + fr(P, d) + '.',
      escena: escena([barra('r', P, d, 2)])
    });
    var fin = cerrar(P, d, pasos);
    return terminar(pasos, X + ' de ' + T + ' es ' + fin.texto + '.', { n: fin.n, d: fin.d });
  }

  // =====================================================================
  //  Lo que se ofrece en el menú
  // =====================================================================
  function campo(clave, nombre, ayuda, inicial, min, max) {
    return { clave: clave, nombre: nombre, ayuda: ayuda, inicial: inicial, min: min || 1, max: max || 99 };
  }
  var ARRIBA = 'Es el número de arriba.', ABAJO = 'Es el número de abajo.';
  var PRIMERA = [campo('a', 'el numerador de la primera fracción', ARRIBA, 1), campo('b', 'el denominador de la primera fracción', ABAJO, 2)];
  var SEGUNDA = [campo('c', 'el numerador de la segunda fracción', ARRIBA, 1), campo('d', 'el denominador de la segunda fracción', ABAJO, 4)];
  var DOS = PRIMERA.concat(SEGUNDA);
  function dosFracciones(signo) { return [{ f: ['a', 'b'] }, signo, { f: ['c', 'd'] }]; }

  var OPERACIONES = [
    { id: 'sumar', nombre: 'Sumar dos fracciones.', campos: DOS, vista: dosFracciones('+'), resolver: function (v) { return sumarRestar(v, false); } },
    { id: 'restar', nombre: 'Restar dos fracciones.', campos: DOS, vista: dosFracciones('−'), resolver: function (v) { return sumarRestar(v, true); } },
    { id: 'multiplicar', nombre: 'Multiplicar dos fracciones.', campos: DOS, vista: dosFracciones('×'), resolver: multiplicar },
    { id: 'dividir', nombre: 'Dividir dos fracciones.', campos: DOS, vista: dosFracciones('÷'), resolver: dividir },
    { id: 'simplificar', nombre: 'Simplificar una fracción.',
      campos: [campo('a', 'el numerador de la fracción', ARRIBA, 6), campo('b', 'el denominador de la fracción', ABAJO, 8)],
      vista: [{ f: ['a', 'b'] }], resolver: simplificar },
    { id: 'comparar', nombre: 'Comparar dos fracciones.', campos: DOS, vista: [{ f: ['a', 'b'] }, 'y', { f: ['c', 'd'] }], resolver: comparar },
    { id: 'de', nombre: 'Sacar una fracción de una cantidad.',
      campos: [campo('a', 'el numerador de la fracción', ARRIBA, 3), campo('b', 'el denominador de la fracción', ABAJO, 4, 2),
        campo('t', 'la cantidad', 'Es el número del que se va a sacar la fracción.', 20, 1, 9999)],
      vista: [{ f: ['a', 'b'] }, 'de', { v: 't' }], resolver: deCantidad }
  ];

  AE.Resolver = {
    OPERACIONES: OPERACIONES,
    resolver: function (id, valores) {
      var op = OPERACIONES.filter(function (o) { return o.id === id; })[0];
      if (!op) throw new Error('Operación desconocida: ' + id);
      return op.resolver(valores);
    }
  };
})(window.AE = window.AE || {});
