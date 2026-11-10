/* Matemáticas, lecciones 11 a 13: sumar y restar fracciones. */
(function (AE) {
  'use strict';
  var U = AE.util, N = AE.Numeros, f = U.f;

  // ------------------------------------------------------------------
  AE.leccion({
    id: 'mat-11',
    area: 'mat',
    titulo: 'Sumar y restar fracciones con el mismo denominador',
    pasos: [
      '## Para qué sirve',
      'Una receta dice: un cuarto de taza de azúcar, y después otros dos cuartos. ¿Cuánta azúcar es en total? Para saberlo hay que sumar fracciones. Empezamos con el caso más fácil: cuando las fracciones tienen el mismo denominador.',
      '## La explicación',
      'Una mandarina tiene 8 gajos. Por la mañana te comes 2 gajos. Por la tarde te comes 3. ¿Cuántos gajos te comiste? 2 + 3 = 5 gajos.',
      'Ahora dilo con fracciones. Cada gajo es un octavo de la mandarina. Te comiste {2/8}, y después {3/8}. En total te comiste {5/8}.',
      'Fíjate en lo que pasó. Los numeradores se sumaron: 2 + 3 = 5. Pero el denominador se quedó igual: siguió siendo 8.',
      'Esa es la regla. Para sumar fracciones con el mismo denominador, se suman los numeradores, y el denominador se deja igual. Se escribe así: {2/8} + {3/8} = {5/8}.',
      '## De dónde sale',
      '¿Por qué el denominador no se suma? Porque el denominador no es una cantidad: es el nombre de los pedazos. Dice de qué tamaño son.',
      'Si tienes 2 naranjas y te dan 3 naranjas, tienes 5 naranjas. La palabra naranjas no se suma: sigue siendo naranjas. Aquí pasa igual: 2 octavos más 3 octavos son 5 octavos. La palabra octavos no cambia.',
      'Hay otra forma de convencerte. ¿Cuánto es {1/2} + {1/2}? Media arepa y otra media arepa forman una arepa entera. Y eso es lo que da la regla: arriba, 1 + 1 = 2. Abajo, el 2 se queda. Sale {2/2}, que es un entero.',
      'Si alguien sumara también los denominadores, le saldría {2/4}. Pero {2/4} es media arepa. Habría juntado dos mitades y seguiría teniendo una sola mitad. Eso no puede ser. Por eso los denominadores no se suman.',
      '## La resta',
      'La resta funciona igual. Se restan los numeradores, y el denominador se deja igual. Si tienes {5/8} de una mandarina y regalas {2/8}, te quedan {3/8}, porque 5 − 2 = 3.',
      '## Después de sumar o restar',
      'Revisa siempre el resultado. Si se puede simplificar, simplifícalo. Por ejemplo, {1/4} + {1/4} = {2/4}, y {2/4} simplificada es {1/2}.',
      'Y si el numerador queda igual al denominador, el resultado es un entero. Por ejemplo, {3/5} + {2/5} = {5/5}, que es un entero.',
      '## Un ejemplo resuelto',
      'Una jarra tiene {7/10} de litro de jugo. Sirves {4/10} de litro. ¿Cuánto queda? Es una resta, y los denominadores son iguales. Resto los numeradores: 7 − 4 = 3. El denominador sigue siendo 10. Quedan {3/10} de litro.'
    ],
    practica: [
      function () {
        var d = U.al(5, 12), a = U.al(1, d - 3), b = U.al(1, d - a - 1), s = a + b;
        return U.q(
          '¿Cuánto es ' + f(a, d) + ' + ' + f(b, d) + '?',
          [f(s, d), 'Se suman los numeradores: ' + a + ' + ' + b + ' = ' + s + '. El denominador se queda en ' + d + ', porque los pedazos siguen siendo ' + N.parte(d, true) + '.'],
          [[f(s, 2 * d), 'Ahí también sumaste los denominadores. El denominador es el nombre de los pedazos y no cambia: siguen siendo ' + N.parte(d, true) + '.'],
            [f(s + 1, d), 'El denominador está bien. Revisa la suma de arriba: ' + a + ' + ' + b + '.'],
            [f(a * b, d), 'Ahí multiplicaste los numeradores. Hay que sumarlos: ' + a + ' + ' + b + '.']],
          ['Los denominadores son iguales, así que los pedazos son del mismo tamaño.', 'Sumo los numeradores: ' + a + ' + ' + b + ' = ' + s + '.', 'El denominador se queda igual: ' + d + '.', 'El resultado es ' + f(s, d) + '.']
        );
      },
      function () {
        var d = U.al(5, 12), a = U.al(3, d - 1), b = U.al(1, a - 1), r = a - b;
        return U.q(
          '¿Cuánto es ' + f(a, d) + ' − ' + f(b, d) + '?',
          [f(r, d), 'Se restan los numeradores: ' + a + ' − ' + b + ' = ' + r + '. El denominador se queda en ' + d + '.'],
          [[f(r, 0), 'Ahí también restaste los denominadores, y abajo quedó cero. No se puede partir un entero en cero partes. El denominador no se toca.'],
            [f(a + b, d), 'Ahí sumaste en vez de restar.'],
            [f(r + 1, d), 'El denominador está bien. Revisa la resta de arriba: ' + a + ' − ' + b + '.']],
          ['Los denominadores son iguales, así que los pedazos son del mismo tamaño.', 'Resto los numeradores: ' + a + ' − ' + b + ' = ' + r + '.', 'El denominador se queda igual: ' + d + '.', 'El resultado es ' + f(r, d) + '.']
        );
      },
      {
        p: '¿Por qué al sumar fracciones con el mismo denominador, el denominador no se suma?',
        o: ['Porque el denominador es el nombre de los pedazos, y los pedazos siguen siendo del mismo tamaño', 'Porque el denominador siempre vale cero', 'Porque así es más rápido'],
        e: ['Es como sumar naranjas: 2 naranjas más 3 naranjas son 5 naranjas. El nombre no cambia.',
          'El denominador nunca vale cero: dice en cuántas partes se partió el entero.',
          'No es por rapidez. Es porque al juntar pedazos del mismo tamaño, el tamaño de cada pedazo no cambia.']
      },
      {
        p: '¿Cuánto es {1/2} + {1/2}?',
        o: ['Un entero', '{2/4}', '{1/4}'],
        e: ['Arriba: 1 + 1 = 2. Abajo se queda el 2. Sale {2/2}, que es un entero: dos mitades forman la arepa completa.',
          'Ahí se sumaron los denominadores. Pero {2/4} es una sola mitad, y juntaste dos mitades.',
          'Un cuarto es menos que cada una de las mitades que juntaste. Al sumar, el resultado tiene que ser más.']
      },
      function () {
        var d = U.al(5, 10), a = U.al(1, d - 3), b = U.al(1, d - a - 1), s = a + b;
        var caso = U.uno([
          ['Camila pintó ' + f(a, d) + ' de una pared por la mañana y ' + f(b, d) + ' por la tarde. ¿Qué fracción de la pared pintó en total?', 'pintó'],
          ['Un tanque tenía ' + f(a, d) + ' de agua y le echaron ' + f(b, d) + ' más. ¿Qué fracción del tanque tiene agua ahora?', 'tiene'],
          ['Andrés leyó ' + f(a, d) + ' de un libro el lunes y ' + f(b, d) + ' el martes. ¿Qué fracción del libro ha leído?', 'leyó']
        ]);
        return U.q(
          caso[0],
          [f(s, d), 'Las cantidades se juntan: es una suma. Arriba: ' + a + ' + ' + b + ' = ' + s + '. El denominador se queda en ' + d + '.'],
          [[f(s, 2 * d), 'Ahí también sumaste los denominadores. Los pedazos siguen siendo ' + N.parte(d, true) + '.'],
            [f(s + 1, d), 'El denominador está bien. Revisa la suma de arriba: ' + a + ' + ' + b + '.']],
          ['Las dos cantidades se juntan: es una suma.', 'Los denominadores son iguales. Sumo los numeradores: ' + a + ' + ' + b + ' = ' + s + '.', 'El resultado es ' + f(s, d) + '.']
        );
      },
      {
        p: '¿Cuánto es {3/5} + {2/5}?',
        o: ['Un entero', '{5/10}', '{6/5}'],
        e: ['Arriba: 3 + 2 = 5. Abajo se queda el 5. Sale {5/5}, y cuando el numerador y el denominador son iguales, es un entero.',
          'Ahí se sumaron los denominadores. Los pedazos siguen siendo quintos.',
          'Revisa la suma de arriba: 3 + 2 = 5, no 6.']
      }
    ],
    resumen: 'cuando los denominadores son iguales, se suman o se restan los numeradores, y el denominador se deja igual.'
  });

  // ------------------------------------------------------------------
  var PARES = [[2, 3], [2, 4], [3, 4], [4, 6], [2, 5], [3, 5], [4, 5], [6, 8], [3, 6], [4, 8], [6, 9], [2, 6], [4, 10], [5, 10], [3, 9], [6, 10]];

  // Pasos para hallar el mínimo común múltiplo recitando la tabla del número mayor.
  function pasosMcm(a, b) {
    var mayor = Math.max(a, b), menor = Math.min(a, b), pasos = ['El número más grande es ' + mayor + '. Voy diciendo sus múltiplos.'];
    for (var m = mayor; ; m += mayor) {
      if (m % menor === 0) {
        pasos.push(m + ': ¿el ' + menor + ' lo divide exacto? Sí, ' + m + ' ÷ ' + menor + ' = ' + (m / menor) + '.');
        pasos.push('El mínimo común múltiplo es ' + m + '.');
        return pasos;
      }
      pasos.push(m + ': ¿el ' + menor + ' lo divide exacto? No.');
    }
  }

  AE.leccion({
    id: 'mat-12',
    area: 'mat',
    titulo: 'El mínimo común múltiplo',
    pasos: [
      '## Para qué sirve',
      'Para sumar fracciones con distinto denominador hay que encontrar un denominador que les sirva a las dos. La herramienta para encontrarlo se llama mínimo común múltiplo. Tiene un nombre largo, pero es una idea sencilla. Vamos palabra por palabra.',
      '## La explicación',
      'Empecemos por la última palabra. *Múltiplo*: ya la conoces. Los múltiplos de un número son los de su tabla. Los de 4 son: 4, 8, 12, 16, 20, 24. Los de 6 son: 6, 12, 18, 24, 30.',
      '*Común* quiere decir compartido: que es de los dos. Un múltiplo común de 4 y de 6 es un número que está en las dos tablas. El 12 está en las dos. El 24 también.',
      '*Mínimo* quiere decir el más pequeño. De todos los múltiplos comunes, el más pequeño es el 12. Entonces el mínimo común múltiplo de 4 y 6 es 12.',
      'En resumen: el mínimo común múltiplo es el número más pequeño que está en las dos tablas al mismo tiempo.',
      '## Cómo encontrarlo de memoria',
      'No hace falta decir las dos tablas completas. Hay un método que solo necesita una. Toma el número más grande de los dos y ve diciendo sus múltiplos, uno por uno. En cada uno pregúntate: ¿el otro número lo divide exacto?',
      'Con 4 y 6. El más grande es 6. Primer múltiplo: 6. ¿El 4 lo divide exacto? No, sobran 2. Segundo múltiplo: 12. ¿El 4 lo divide exacto? Sí: 12 ÷ 4 = 3. Ahí paro. El mínimo común múltiplo es 12.',
      '## Dos casos que ahorran trabajo',
      'Primer caso: cuando un número ya es múltiplo del otro. Con 3 y 6: el 6 ya está en la tabla del 3. Entonces el mínimo común múltiplo es el mismo 6. No hay que buscar más.',
      'Segundo caso: cuando los dos números no comparten ningún divisor aparte del 1, como 3 y 5. Entonces el mínimo común múltiplo es la multiplicación de los dos: 3 × 5 = 15.',
      '## De dónde sale',
      '¿Por qué nos interesa? Piensa en dos amigos que dan palmadas. Uno da una palmada cada 4 segundos. El otro, cada 6 segundos. Empiezan al mismo tiempo. ¿Cuándo vuelven a sonar juntas las dos palmadas?',
      'El primero suena en los segundos 4, 8 y 12. El segundo, en los segundos 6 y 12. Coinciden por primera vez en el segundo 12. Ese es el mínimo común múltiplo: el primer momento en que los dos ritmos se encuentran.',
      'En las fracciones pasa igual. El mínimo común múltiplo de los denominadores es el primer tamaño de pedazo que les sirve a las dos fracciones.',
      '## ¿Y por qué el más pequeño?',
      'Cualquier múltiplo común serviría. Para 4 y 6 también sirve el 24. Pero con el más pequeño los números quedan más pequeños, y las cuentas son más fáciles.',
      '## Un ejemplo resuelto',
      'Busquemos el mínimo común múltiplo de 6 y 8. El más grande es 8. Primer múltiplo: 8. ¿El 6 lo divide exacto? No. Sigue el 16. ¿El 6 lo divide? No, sobran 4. Sigue el 24. ¿El 6 lo divide? Sí: 24 ÷ 6 = 4. El mínimo común múltiplo de 6 y 8 es 24.'
    ],
    practica: [
      function () {
        var par = U.uno(PARES), a = par[0], b = par[1], L = U.mcm(a, b), cand = [];
        if (a * b !== L) cand.push([a * b, 'El ' + (a * b) + ' sí está en las dos tablas, pero no es el más pequeño. Hay uno antes.']);
        if (b !== L) cand.push([b, 'El ' + b + ' no está en la tabla del ' + a + '. Tiene que estar en las dos.']);
        cand.push([a + b, 'Ahí sumaste los dos números. Hay que buscar un número que esté en las dos tablas.']);
        cand.push([2 * L, 'El ' + (2 * L) + ' sí está en las dos tablas, pero no es el más pequeño.']);
        return U.q('¿Cuál es el mínimo común múltiplo de ' + a + ' y ' + b + '?',
          [L, 'Es el número más pequeño que está en la tabla del ' + a + ' y en la tabla del ' + b + '.'],
          cand, pasosMcm(a, b));
      },
      {
        p: 'En mínimo común múltiplo, ¿qué quiere decir la palabra común?',
        o: ['Que está en las dos tablas', 'Que es un número corriente', 'Que es el más grande de todos'],
        e: ['Común quiere decir compartido: es múltiplo de los dos números a la vez.',
          'Aquí común no quiere decir corriente. Quiere decir compartido por los dos números.',
          'Común no habla de tamaño. Y además se busca el más pequeño, no el más grande.']
      },
      {
        p: 'El 8 ya es múltiplo de 4. ¿Cuál es el mínimo común múltiplo de 4 y 8?',
        o: ['8', '32', '4'],
        e: ['Como el 8 ya está en la tabla del 4, él mismo es el primer número que está en las dos tablas.',
          'El 32 sí está en las dos tablas, pero no es el más pequeño. El 8 ya sirve.',
          'El 4 no está en la tabla del 8, porque los múltiplos de 8 empiezan en 8.']
      },
      function () {
        var par = U.uno([[2, 3], [3, 4], [2, 5], [4, 6], [3, 5], [4, 5], [6, 8], [4, 10], [6, 9], [6, 10]]);
        var a = par[0], b = par[1], L = U.mcm(a, b), bien = L * U.al(1, 2);
        var soloA = [], soloB = [];
        for (var x = 4; x <= 40; x++) {
          if (x % a === 0 && x % b !== 0) soloA.push(x);
          if (x % b === 0 && x % a !== 0) soloB.push(x);
        }
        var m1 = U.uno(soloA), m2 = U.uno(soloB);
        return U.q(
          '¿Cuál de estos números está en la tabla del ' + a + ' y también en la tabla del ' + b + '?',
          [bien, 'Porque ' + bien + ' ÷ ' + a + ' = ' + (bien / a) + ', y ' + bien + ' ÷ ' + b + ' = ' + (bien / b) + '. No sobra nada en ninguna.'],
          [[m1, 'El ' + m1 + ' está en la tabla del ' + a + ', pero no en la del ' + b + '.'],
            [m2, 'El ' + m2 + ' está en la tabla del ' + b + ', pero no en la del ' + a + '.']],
          ['Pruebo cada opción dividiendo entre ' + a + ' y entre ' + b + '.', 'El ' + bien + ' se deja dividir exacto entre los dos.', 'Por eso es un múltiplo común.']
        );
      },
      {
        p: 'Un tambor suena cada 2 segundos y una campana cada 5 segundos. Empiezan juntos. ¿A los cuántos segundos vuelven a sonar al mismo tiempo por primera vez?',
        o: ['10', '7', '5'],
        e: ['El tambor suena en 2, 4, 6, 8 y 10. La campana, en 5 y 10. Se encuentran en el 10, que es el mínimo común múltiplo de 2 y 5.',
          'El 7 sale de sumar 2 + 5. Pero en el segundo 7 no suena ninguno: no está en la tabla del 2 ni en la del 5.',
          'En el segundo 5 suena la campana, pero el tambor no: el 5 no está en la tabla del 2.'],
        s: ['El tambor suena en los múltiplos de 2: 2, 4, 6, 8, 10.', 'La campana suena en los múltiplos de 5: 5, 10.', 'El primer número que está en las dos listas es el 10.']
      },
      {
        p: 'El 3 y el 5 no comparten ningún divisor aparte del 1. ¿Cuál es su mínimo común múltiplo?',
        o: ['15', '8', '5'],
        e: ['Cuando no comparten divisores, se multiplican: 3 × 5 = 15.',
          'El 8 sale de sumar. Pero el 8 no está en la tabla del 3 ni en la del 5.',
          'El 5 no está en la tabla del 3.']
      }
    ],
    resumen: 'el mínimo común múltiplo es el número más pequeño que está en las dos tablas. Se encuentra diciendo los múltiplos del número mayor hasta que el menor lo divida exacto.'
  });

  // ------------------------------------------------------------------
  var DENOMINADORES = [[2, 3], [2, 4], [3, 4], [2, 5], [3, 6], [4, 6], [2, 6], [3, 5], [4, 8], [2, 8], [5, 10], [2, 10], [3, 9], [4, 5]];

  // Frase que explica cómo pasa n/d al denominador común L.
  function convertir(n, d, L) {
    var k = L / d;
    if (k === 1) return 'La fracción ' + f(n, d) + ' ya tiene denominador ' + L + ': se queda igual.';
    return 'Para ' + f(n, d) + ': el ' + d + ' se multiplica por ' + k + ' para llegar a ' + L + '. Arriba también: ' + n + ' × ' + k + ' = ' + (n * k) + '. Queda ' + f(n * k, L) + '.';
  }

  function cierre(n, L) {
    var g = U.mcd(n, L);
    if (g === 1) return 'Paso cuatro: ' + f(n, L) + ' no se puede simplificar. Ese es el resultado.';
    return 'Paso cuatro: se puede simplificar dividiendo entre ' + g + '. El resultado es ' + U.fs(n, L) + '.';
  }

  function operacion(resta) {
    var par, b, d, a, c, L, A, C, intentos = 0;
    do {
      par = U.uno(DENOMINADORES);
      if (Math.random() < 0.5) par = [par[1], par[0]];
      b = par[0]; d = par[1];
      a = U.al(1, b - 1); c = U.al(1, d - 1);
      L = U.mcm(b, d); A = a * L / b; C = c * L / d;
      intentos++;
    } while (intentos < 200 && (resta ? A <= C : A + C >= L));
    var R = resta ? A - C : A + C, signo = resta ? ' − ' : ' + ';
    var cand = resta ? [
      [A + C, L, 'Ahí sumaste en vez de restar.'],
      [Math.abs(a - c), L, 'El denominador común está bien, pero te faltó cambiar los numeradores. Por lo que se multiplica abajo, se multiplica arriba.'],
      [R + 1, L, 'El denominador común está bien. Revisa la resta de los numeradores: ' + A + ' − ' + C + '.']
    ] : [
      [a + c, b + d, 'Ahí sumaste arriba con arriba y abajo con abajo. Eso no sirve, porque los pedazos son de distinto tamaño.'],
      [a + c, L, 'El denominador común está bien, pero te faltó cambiar los numeradores. Por lo que se multiplica abajo, se multiplica arriba.'],
      [R + 1, L, 'El denominador común está bien. Revisa la suma de los numeradores: ' + A + ' + ' + C + '.']
    ];
    return U.q(
      '¿Cuánto es ' + f(a, b) + signo + f(c, d) + '?',
      [U.fs(R, L), 'Con denominador ' + L + ' queda ' + f(A, L) + signo + f(C, L) + ' = ' + f(R, L) + (U.mcd(R, L) > 1 ? ', que simplificada es ' + U.fs(R, L) + '.' : '.')],
      U.otras(R, L, cand).filter(function (m) { return m[0] !== '{0/' + L + '}'; }),
      ['Paso uno: el mínimo común múltiplo de ' + b + ' y ' + d + ' es ' + L + '.',
        'Paso dos. ' + convertir(a, b, L), convertir(c, d, L),
        'Paso tres: ' + f(A, L) + signo + f(C, L) + ' = ' + f(R, L) + '.',
        cierre(R, L)]
    );
  }

  AE.leccion({
    id: 'mat-13',
    area: 'mat',
    titulo: 'Sumar y restar fracciones con distinto denominador',
    pasos: [
      '## Para qué sirve',
      'Te comiste media arepa en el desayuno y un cuarto de arepa en la tarde. ¿Cuánta arepa te comiste en total? Ahora los pedazos son de distinto tamaño: medios y cuartos. Esta lección junta todo lo que has aprendido para resolverlo.',
      '## El problema',
      'No puedo sumar directamente {1/2} + {1/4}, porque los pedazos no son del mismo tamaño. Un medio es un pedazo grande. Un cuarto es un pedazo más pequeño. Uno más uno daría dos, pero ¿dos qué? Ni dos medios, ni dos cuartos.',
      'Pasa lo mismo con la plata. Si tienes un billete de 2000 y una moneda de 500, no puedes decir que tienes 2 de algo. Primero piensas todo en la misma moneda: el billete vale 4 monedas de 500. Entonces tienes 4 + 1 = 5 monedas de 500.',
      'Con las fracciones hacemos lo mismo: primero cambiamos todo a pedazos del mismo tamaño, y después sumamos.',
      '## Los cuatro pasos',
      'Paso uno: buscar el mínimo común múltiplo de los denominadores. Ese va a ser el denominador común: el tamaño de pedazo que les sirve a las dos.',
      'Paso dos: cambiar cada fracción por una equivalente que tenga ese denominador. Recuerda: por lo que multipliques abajo, multiplicas arriba.',
      'Paso tres: sumar o restar los numeradores, y dejar el denominador igual. Eso ya lo sabes hacer.',
      'Paso cuatro: revisar si el resultado se puede simplificar.',
      '## El primer ejemplo',
      'Sumemos {1/2} + {1/4}. Paso uno: el mínimo común múltiplo de 2 y 4 es 4, porque el 4 ya está en la tabla del 2.',
      'Paso dos. La fracción {1/4} ya tiene denominador 4: se queda igual. La fracción {1/2} hay que cambiarla. El 2 se multiplica por 2 para llegar a 4, así que arriba también: 1 × 2 = 2. Queda {2/4}.',
      'Paso tres: {2/4} + {1/4} = {3/4}. Paso cuatro: tres cuartos no se puede simplificar. Te comiste {3/4} de arepa.',
      'Compruébalo con la hoja doblada en cuatro. Media hoja son dos cuartos. Si le agregas un cuarto más, tocas tres de las cuatro partes.',
      '## El segundo ejemplo',
      'Ahora uno más difícil: {2/3} + {1/4}. Paso uno: el mínimo común múltiplo de 3 y 4. Digo los múltiplos de 4: 4, 8, 12. El 3 divide exacto al 12. El denominador común es 12.',
      'Paso dos. Para {2/3}: el 3 se multiplica por 4 para llegar a 12. Arriba: 2 × 4 = 8. Queda {8/12}. Para {1/4}: el 4 se multiplica por 3. Arriba: 1 × 3 = 3. Queda {3/12}.',
      'Paso tres: {8/12} + {3/12} = {11/12}. Paso cuatro: el 11 y el 12 no comparten divisores, así que no se simplifica. El resultado es {11/12}.',
      '## La resta',
      'La resta es idéntica, solo que en el paso tres se resta. Hagamos {3/4} − {1/6}. El mínimo común múltiplo de 4 y 6 es 12. Tres cuartos pasa a {9/12}, porque 3 × 3 = 9. Un sexto pasa a {2/12}, porque 1 × 2 = 2. Y {9/12} − {2/12} = {7/12}.',
      '## El error más común',
      'Mucha gente suma arriba con arriba y abajo con abajo. Para {1/2} + {1/4} les da {2/6}. Pero {2/6} es un tercio, y un tercio es menos que el medio con el que empezaste. Sumaste algo y te quedó menos: imposible. Por eso primero se igualan los pedazos.'
    ],
    practica: [
      {
        p: 'Vas a sumar {1/2} + {1/3}. ¿Qué es lo primero que hay que hacer?',
        o: ['Buscar un denominador común', 'Sumar los numeradores', 'Sumar los denominadores'],
        e: ['Los pedazos son de distinto tamaño. Primero hay que igualarlos, buscando el mínimo común múltiplo de 2 y 3.',
          'Todavía no se pueden sumar los numeradores, porque cuentan pedazos de distinto tamaño.',
          'Los denominadores nunca se suman. Hay que buscar uno que les sirva a las dos fracciones.']
      },
      function () { return operacion(false); },
      {
        p: '¿Por qué no se puede sumar directamente un medio con un cuarto?',
        o: ['Porque los pedazos son de distinto tamaño', 'Porque las fracciones no se pueden sumar', 'Porque un medio es más pequeño que un cuarto'],
        e: ['Primero hay que cambiar todo a pedazos del mismo tamaño, como cuando se cambia un billete por monedas.',
          'Las fracciones sí se pueden sumar. Solo hay que igualar primero el tamaño de los pedazos.',
          'Un medio es más grande que un cuarto. Y el problema no es cuál es mayor, sino que los pedazos son distintos.']
      },
      function () { return operacion(true); },
      function () { return operacion(false); },
      {
        p: 'Alguien dice que {1/2} + {1/4} es igual a {2/6}. ¿Cómo sabes que está mal, sin hacer la cuenta?',
        o: ['Porque {2/6} es menos que un medio, y al sumar tiene que dar más', 'Porque el 6 es un número par', 'Porque las fracciones no pueden tener un 2 arriba'],
        e: ['Dos sextos es un tercio, y un tercio es menos que un medio. Si a un medio le agregas algo, no puede quedar menos.',
          'Que el 6 sea par no tiene nada de malo. El problema es que el resultado quedó más pequeño que lo que había.',
          'Una fracción sí puede tener un 2 arriba. El problema es que el resultado quedó más pequeño que lo que había.']
      }
    ],
    resumen: 'para sumar o restar con distinto denominador: busca el mínimo común múltiplo, cambia las fracciones a ese denominador, opera los numeradores y simplifica.'
  });
})(window.AE = window.AE || {});
