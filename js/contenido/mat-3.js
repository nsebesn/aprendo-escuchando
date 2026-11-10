/* Matemáticas, lecciones 8 a 10: fracciones equivalentes, simplificar y comparar. */
(function (AE) {
  'use strict';
  var U = AE.util, f = U.f;

  // Fracciones que ya no se pueden simplificar, para armar ejercicios a partir de ellas.
  var BASES = [[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [4, 5], [1, 6], [5, 6]];

  // ------------------------------------------------------------------
  AE.leccion({
    id: 'mat-08',
    area: 'mat',
    titulo: 'Fracciones equivalentes',
    pasos: [
      '## Para qué sirve',
      'Dos personas pueden decir cosas distintas y estar hablando de lo mismo. Una dice: me comí media arepa. La otra dice: me comí dos cuartos de arepa. Comieron exactamente igual. Hoy vas a aprender por qué, y eso te va a servir para comparar, sumar y restar fracciones.',
      '## La explicación',
      'Toma la hoja de papel y dóblala una vez por la mitad. Ábrela. Pon la mano sobre una de las dos partes: estás tocando {1/2} de la hoja.',
      'Ahora dobla la hoja dos veces, para que tenga cuatro partes. Ábrela y pon la mano en el mismo lugar de antes. Ese pedazo de papel es el mismo, pero ahora tiene un doblez por la mitad: son dos partes de las cuatro. Estás tocando {2/4}.',
      'No cambió el papel que tocas. Cambió el nombre. {1/2} y {2/4} son la misma cantidad. A las fracciones que valen lo mismo, aunque se escriban distinto, se les llama *fracciones equivalentes*.',
      'Si doblas una vez más, la hoja queda en ocho partes, y la mitad de la hoja son cuatro de ellas. Entonces {1/2}, {2/4} y {4/8} son equivalentes.',
      '## La regla',
      'Para conseguir una fracción equivalente, se multiplican el numerador y el denominador por el mismo número. Con {1/2}: multiplico arriba y abajo por 2. Arriba: 1 × 2 = 2. Abajo: 2 × 2 = 4. Sale {2/4}.',
      'Puedes multiplicar por cualquier número, siempre que sea el mismo arriba y abajo. Con {2/3}, multiplicando por 4. Arriba: 2 × 4 = 8. Abajo: 3 × 4 = 12. Entonces {2/3} es equivalente a {8/12}.',
      '## De dónde sale',
      '¿Por qué funciona? Cuando multiplicas el denominador por 2, estás partiendo cada pedazo en dos. Ahora hay el doble de pedazos, pero cada uno es la mitad de grande.',
      'Lo que tú tenías también quedó partido: ahora tienes el doble de pedazos. Por eso el numerador también se multiplica por 2. Tienes el doble de pedazos, pero cada uno es la mitad de grande. La cantidad es la misma.',
      'Es como cambiar un billete de 2000 pesos por dos monedas de 1000. Tienes más piezas, pero cada pieza vale menos. La plata es la misma.',
      '## Un cuidado importante',
      'La regla es multiplicar, no sumar. Si a {1/2} le sumas 1 arriba y 1 abajo, sale {2/3}. Y eso no vale lo mismo: dos tercios es más que un medio. Sumar lo mismo arriba y abajo cambia la cantidad.',
      '## También se puede dividir',
      'El camino de vuelta también sirve. Si divides el numerador y el denominador entre el mismo número, obtienes una fracción equivalente con números más pequeños. Con {4/8}, dividiendo entre 4. Arriba: 4 ÷ 4 = 1. Abajo: 8 ÷ 4 = 2. Vuelves a {1/2}.',
      '## Cómo comprobar',
      'Para saber si dos fracciones son equivalentes, multiplica en cruz: el numerador de una por el denominador de la otra. Si los dos resultados son iguales, las fracciones son equivalentes.',
      'Probemos con {2/3} y {8/12}. El 2 de la primera por el 12 de la segunda da 24. El 8 de la segunda por el 3 de la primera también da 24. Dan lo mismo, así que sí son equivalentes.',
      '## Un ejemplo resuelto',
      'Quiero escribir {3/5} con denominador 10. ¿Por cuánto multipliqué el 5 para llegar a 10? Por 2. Entonces hago lo mismo arriba: 3 × 2 = 6. La fracción es {6/10}.'
    ],
    practica: [
      function () {
        var b = U.uno(BASES), k = U.al(2, 5), a = b[0], d = b[1];
        return U.q(
          '¿Cuál de estas fracciones es equivalente a ' + f(a, d) + '?',
          [f(a * k, d * k), 'Se multiplicó arriba y abajo por ' + k + '. Arriba: ' + a + ' × ' + k + ' = ' + (a * k) + '. Abajo: ' + d + ' × ' + k + ' = ' + (d * k) + '.'],
          U.barajar(U.otras(a, d, [
            [a + k, d + k, 'Ahí se sumó ' + k + ' arriba y abajo. Sumar cambia la cantidad. Hay que multiplicar.'],
            [a * k, d, 'Solo se multiplicó el numerador. Así hay más pedazos del mismo tamaño: es más cantidad.'],
            [a, d * k, 'Solo se multiplicó el denominador. Así los pedazos son más pequeños y tienes los mismos: es menos cantidad.']
          ])),
          ['Una fracción equivalente sale de multiplicar arriba y abajo por el mismo número.', 'Con el ' + k + ': arriba, ' + a + ' × ' + k + ' = ' + (a * k) + '. Abajo, ' + d + ' × ' + k + ' = ' + (d * k) + '.', 'La equivalente es ' + f(a * k, d * k) + '.']
        );
      },
      function () {
        var b = U.uno(BASES), k = U.al(2, 5), a = b[0], d = b[1], D = d * k;
        return U.q(
          'Quieres escribir ' + f(a, d) + ' con denominador ' + D + '. ¿Qué numerador le pones?',
          [a * k, 'El denominador se multiplicó por ' + k + ', porque ' + d + ' × ' + k + ' = ' + D + '. Arriba se hace lo mismo: ' + a + ' × ' + k + ' = ' + (a * k) + '.'],
          [[a + (D - d), 'Ahí sumaste. El denominador creció ' + (D - d) + ', pero la regla es multiplicar, no sumar.'],
            [a, 'Si dejas el mismo numerador y agrandas el denominador, los pedazos se vuelven más pequeños y la cantidad cambia.'],
            [k, 'El ' + k + ' es el número por el que se multiplica. Falta multiplicar el numerador: ' + a + ' × ' + k + '.']],
          ['¿Por cuánto se multiplicó el ' + d + ' para llegar a ' + D + '? Por ' + k + '.', 'Hago lo mismo arriba: ' + a + ' × ' + k + ' = ' + (a * k) + '.', 'La fracción es ' + f(a * k, D) + '.']
        );
      },
      {
        p: '¿Qué le pasa a la cantidad cuando multiplicas el numerador y el denominador por el mismo número?',
        o: ['No cambia', 'Se hace más grande', 'Se hace más pequeña'],
        e: ['Hay más pedazos, pero cada uno es más pequeño. La cantidad total es la misma.',
          'Los números son más grandes, pero la cantidad no. Tienes más pedazos, y cada uno es más pequeño.',
          'Los pedazos sí son más pequeños, pero también tienes más. La cantidad total no cambia.']
      },
      function () {
        var b = U.uno(BASES), k = U.al(2, 5), a = b[0], d = b[1], si = Math.random() < 0.5;
        var n2 = si ? a * k : a + k, d2 = si ? d * k : d + k;
        var cruz = 'Multiplico en cruz. El ' + a + ' por el ' + d2 + ' da ' + (a * d2) + '. El ' + n2 + ' por el ' + d + ' da ' + (n2 * d) + '.';
        return U.q(
          '¿Son equivalentes las fracciones ' + f(a, d) + ' y ' + f(n2, d2) + '?',
          [si ? 'Sí, son equivalentes' : 'No, no son equivalentes', cruz + (si ? ' Dan lo mismo.' : ' No dan lo mismo.')],
          [[si ? 'No, no son equivalentes' : 'Sí, son equivalentes', cruz + (si ? ' Dan lo mismo, así que sí son equivalentes.' : ' Como no dan lo mismo, no son equivalentes.')]],
          ['Para comprobar, multiplico en cruz.', 'El ' + a + ' por el ' + d2 + ' da ' + (a * d2) + '.', 'El ' + n2 + ' por el ' + d + ' da ' + (n2 * d) + '.',
            si ? 'Los dos resultados son iguales: son equivalentes.' : 'Los resultados son distintos: no son equivalentes.']
        );
      },
      {
        p: 'Juan se comió media arepa. Sara se comió dos cuartos de una arepa igual. ¿Quién comió más?',
        o: ['Comieron lo mismo', 'Juan', 'Sara'],
        e: ['{1/2} y {2/4} son fracciones equivalentes: la misma cantidad con distinto nombre.',
          'Media arepa no es más que dos cuartos. Dos cuartos juntos forman exactamente una mitad.',
          'Sara tiene más pedazos, pero son más pequeños. Dos cuartos juntos forman exactamente una mitad.']
      },
      {
        p: 'A la fracción {1/2} le sumas 1 arriba y 1 abajo, y sale {2/3}. ¿Es equivalente a {1/2}?',
        o: ['No, porque sumar cambia la cantidad', 'Sí, porque hice lo mismo arriba y abajo', 'Sí, porque los números crecieron igual'],
        e: ['La regla es multiplicar o dividir por el mismo número. Sumar no sirve: dos tercios es más que un medio.',
          'Hacer lo mismo arriba y abajo solo funciona con multiplicar o dividir. Con sumar, la cantidad cambia.',
          'Que crezcan igual no basta. Dos tercios es más que un medio.']
      }
    ],
    resumen: 'si multiplicas o divides el numerador y el denominador por el mismo número, la fracción cambia de nombre pero no de cantidad.'
  });

  // ------------------------------------------------------------------
  var PARES_COMUNES = [[6, 8], [6, 9], [4, 10], [9, 12], [10, 15], [8, 12], [12, 18], [6, 15], [14, 21], [10, 25], [8, 20], [15, 20]];
  var IRREDUCIBLES = [[2, 3], [3, 4], [3, 5], [4, 5], [5, 6], [2, 5], [5, 8], [3, 7], [4, 9], [7, 10]];
  var REDUCIBLES = [[2, 4], [3, 6], [4, 6], [6, 8], [5, 10], [6, 9], [4, 8], [2, 6], [8, 10], [9, 12]];

  AE.leccion({
    id: 'mat-09',
    area: 'mat',
    titulo: 'Simplificar fracciones',
    pasos: [
      '## Para qué sirve',
      'Si alguien te dice que se comió {50/100} de una torta, tienes que pensar un rato. Si te dice que se comió la mitad, lo entiendes de una. Es la misma cantidad, dicha con números más pequeños. Simplificar es eso: decir una fracción de la forma más sencilla.',
      '## La explicación',
      '*Simplificar* una fracción es cambiarla por otra equivalente que tenga números más pequeños. Se hace dividiendo el numerador y el denominador entre el mismo número.',
      'Probemos con {6/8}. Busco un número que divida exacto al 6 y también al 8. El 2 sirve. Arriba: 6 ÷ 2 = 3. Abajo: 8 ÷ 2 = 4. Entonces {6/8} simplificada es {3/4}.',
      'Ese número que divide a los dos se llama divisor común. Aquí es donde sirven los divisores que aprendiste en la lección 3.',
      '## De dónde sale',
      '¿Por qué se puede? Porque es el camino de vuelta de las fracciones equivalentes. Multiplicar arriba y abajo era partir cada pedazo en pedazos más pequeños. Dividir arriba y abajo es juntar los pedazos pequeños para armar pedazos más grandes.',
      'Imagina una barra de chocolate de 8 cuadritos, y tú tienes 6. Si juntas los cuadritos de dos en dos, la barra queda en 4 pedazos dobles, y tú tienes 3 de ellos. Tienes el mismo chocolate. Antes eran {6/8}, ahora son {3/4}.',
      '## Hasta dónde se simplifica',
      'Se simplifica hasta que ya no haya ningún número, aparte del 1, que divida a los dos. En ese momento la fracción está en su forma más sencilla. Se le llama *fracción irreducible*.',
      'A veces hay que simplificar varias veces. Con {12/18}: los dos son pares, así que divido entre 2 y sale {6/9}. Todavía se puede: el 6 y el 9 se dejan dividir entre 3. Sale {2/3}. Ya no hay más, porque el 2 y el 3 solo comparten el 1.',
      'También se puede hacer en un solo paso, si encuentras el divisor común más grande. Para 12 y 18 es el 6. Arriba: 12 ÷ 6 = 2. Abajo: 18 ÷ 6 = 3. Llegas de una vez a {2/3}.',
      '## Cómo buscar el divisor común',
      'Prueba en orden con números pequeños. ¿Los dos son pares? Entonces divide entre 2. ¿Los dos están en la tabla del 3? Divide entre 3. ¿Los dos terminan en 0 o en 5? Divide entre 5.',
      '## Un cuidado importante',
      'Simplificar no cambia la cantidad. Solo cambia la manera de escribirla. {6/8} de una arepa y {3/4} de la misma arepa son exactamente el mismo pedazo.',
      '## Un ejemplo resuelto',
      'Simplifiquemos {10/15}. ¿Son pares los dos? No: el 15 no es par. ¿Están en la tabla del 3? El 15 sí, pero el 10 no. ¿Terminan en 0 o en 5? Sí, los dos. Divido entre 5. Arriba: 10 ÷ 5 = 2. Abajo: 15 ÷ 5 = 3. El resultado es {2/3}.'
    ],
    practica: [
      function () {
        var b = U.uno(BASES), k = U.uno([2, 3, 4, 5, 6]), a = b[0], d = b[1], n = a * k, D = d * k;
        var cand = [];
        if (k === 4 || k === 6) cand.push([n / 2, D / 2, 'Vas bien, pero todavía se puede simplificar más: el ' + (n / 2) + ' y el ' + (D / 2) + ' se dejan dividir entre ' + (k / 2) + '.']);
        cand.push([a, D, 'Solo dividiste el numerador. Hay que dividir los dos entre el mismo número.']);
        cand.push([n, d, 'Solo dividiste el denominador. Hay que dividir los dos entre el mismo número.']);
        var malas = cand.map(function (c) { return [f(c[0], c[1]), c[2]]; });
        return U.q(
          'Simplifica ' + f(n, D) + ' hasta que no se pueda más.',
          [f(a, d), 'Se dividió arriba y abajo entre ' + k + '. Arriba: ' + n + ' ÷ ' + k + ' = ' + a + '. Abajo: ' + D + ' ÷ ' + k + ' = ' + d + '.'],
          malas,
          ['Busco el número más grande que divida exacto al ' + n + ' y al ' + D + '. Es el ' + k + '.', 'Arriba: ' + n + ' ÷ ' + k + ' = ' + a + '.', 'Abajo: ' + D + ' ÷ ' + k + ' = ' + d + '.', 'La fracción simplificada es ' + f(a, d) + '.']
        );
      },
      function () {
        var par = U.uno(PARES_COMUNES), n = par[0], d = par[1], g = U.mcd(n, d);
        var no = U.barajar([2, 3, 4, 5, 6, 7, 8, 9, 10].filter(function (c) { return n % c !== 0 || d % c !== 0; }));
        return U.q(
          'Quieres simplificar ' + f(n, d) + '. ¿Cuál de estos números divide exacto al ' + n + ' y también al ' + d + '?',
          [g, 'Arriba: ' + n + ' ÷ ' + g + ' = ' + (n / g) + '. Abajo: ' + d + ' ÷ ' + g + ' = ' + (d / g) + '. No sobra nada en ninguno.'],
          no.map(function (c) {
            var razon = n % c === 0 ? 'El ' + c + ' divide exacto al ' + n + ', pero no al ' + d + '.'
              : d % c === 0 ? 'El ' + c + ' divide exacto al ' + d + ', pero no al ' + n + '.'
              : 'El ' + c + ' no divide exacto ni al ' + n + ' ni al ' + d + '.';
            return [c, razon + ' Tiene que dividir a los dos.'];
          }),
          ['Pruebo cada opción con los dos números.', 'El ' + g + ' divide al ' + n + ': da ' + (n / g) + '.', 'El ' + g + ' divide al ' + d + ': da ' + (d / g) + '.', 'Entonces sirve el ' + g + '.']
        );
      },
      {
        p: '¿Qué le pasa a la cantidad cuando simplificas una fracción?',
        o: ['No cambia', 'Se hace más pequeña', 'Se hace más grande'],
        e: ['Simplificar solo cambia la manera de escribir la fracción. Es el mismo pedazo.',
          'Los números se hacen más pequeños, pero la cantidad no. Tienes menos pedazos, y cada uno es más grande.',
          'La cantidad no crece. Es el mismo pedazo, dicho con números más pequeños.']
      },
      function () {
        var bien = U.uno(IRREDUCIBLES), malas = U.barajar(REDUCIBLES).slice(0, 2);
        return U.q(
          '¿Cuál de estas fracciones ya no se puede simplificar más?',
          [f(bien[0], bien[1]), 'El único número que divide exacto al ' + bien[0] + ' y al ' + bien[1] + ' es el 1.'],
          malas.map(function (m) {
            var g = U.mcd(m[0], m[1]);
            return [f(m[0], m[1]), 'Esa todavía se puede simplificar: el ' + m[0] + ' y el ' + m[1] + ' se dejan dividir entre ' + g + '.'];
          }),
          ['Reviso cada fracción: ¿hay un número, aparte del 1, que divida a los dos?', 'En ' + f(bien[0], bien[1]) + ' no hay ninguno.', 'Esa es la que ya no se puede simplificar.']
        );
      },
      {
        p: '¿Cuándo se dice que una fracción es irreducible?',
        o: ['Cuando el único número que divide al numerador y al denominador es el 1', 'Cuando el numerador es 1', 'Cuando el denominador es un número par'],
        e: ['Irreducible quiere decir que ya no se puede reducir, o sea, simplificar más.',
          'Las fracciones con numerador 1 sí son irreducibles, pero hay muchas otras. Por ejemplo, {2/3} también lo es.',
          'Que el denominador sea par no dice nada. {2/4} tiene denominador par y sí se puede simplificar.']
      },
      {
        p: 'Simplifica {50/100} hasta que no se pueda más.',
        o: ['{1/2}', '{5/10}', '{25/50}'],
        e: ['Los dos se dejan dividir entre 50. Arriba: 50 ÷ 50 = 1. Abajo: 100 ÷ 50 = 2.',
          'Vas bien, pero todavía se puede: el 5 y el 10 se dejan dividir entre 5.',
          'Vas bien, pero todavía se puede: el 25 y el 50 se dejan dividir entre 25.'],
        s: ['Los dos terminan en 0: divido entre 10 y queda {5/10}.', 'Los dos se dejan dividir entre 5: queda {1/2}.', 'Ya no se puede más.']
      }
    ],
    resumen: 'simplificar es dividir el numerador y el denominador entre el mismo número, hasta que solo compartan el 1. La cantidad no cambia.'
  });

  // ------------------------------------------------------------------
  var DUELOS = [[2, 3, 3, 4], [1, 2, 2, 5], [3, 5, 1, 2], [2, 3, 3, 5], [3, 4, 4, 5], [1, 3, 2, 5],
    [5, 6, 3, 4], [2, 5, 1, 3], [3, 8, 1, 2], [5, 8, 2, 3], [4, 7, 1, 2], [2, 7, 1, 3]];

  AE.leccion({
    id: 'mat-10',
    area: 'mat',
    titulo: 'Comparar fracciones',
    pasos: [
      '## Para qué sirve',
      '¿Qué es más: tres cuartos de panela o dos tercios de panela? ¿Quién caminó más? ¿Cuál vaso tiene más jugo? Para contestar hay que saber comparar fracciones. Hay tres casos, y vamos del más fácil al más difícil.',
      '## Caso uno: el mismo denominador',
      'Si las dos fracciones tienen el mismo denominador, los pedazos son del mismo tamaño. Gana la que tiene más pedazos, o sea, la del numerador más grande. Entre {2/5} y {4/5}, es mayor {4/5}.',
      '## Caso dos: el mismo numerador',
      'Si las dos fracciones tienen el mismo numerador, tienen la misma cantidad de pedazos. Entonces gana la que tiene los pedazos más grandes. Y los pedazos más grandes son los del denominador más pequeño.',
      'Entre {3/4} y {3/8}: las dos tienen 3 pedazos. Pero los cuartos son más grandes que los octavos. Entonces es mayor {3/4}.',
      '## Caso tres: todo distinto',
      'Cuando cambian el numerador y el denominador, no se puede comparar de una. Es como comparar 3 pasos de un niño pequeño con 2 pasos de un adulto: los pasos no miden lo mismo.',
      'La solución es ponerlas a hablar de pedazos del mismo tamaño. Para eso usamos las fracciones equivalentes: cambiamos las dos fracciones por otras que tengan el mismo denominador.',
      'Comparemos {2/3} y {3/4}. Necesito un denominador que les sirva a las dos: un número que esté en la tabla del 3 y en la tabla del 4. El 12 sirve.',
      'Paso {2/3} a doceavos. El 3 se multiplicó por 4 para llegar a 12, así que arriba también: 2 × 4 = 8. Queda {8/12}.',
      'Paso {3/4} a doceavos. El 4 se multiplicó por 3, así que arriba también: 3 × 3 = 9. Queda {9/12}.',
      'Ahora sí puedo comparar: {8/12} contra {9/12}. Nueve doceavos es más. Entonces {3/4} es mayor que {2/3}.',
      '## Un atajo: multiplicar en cruz',
      'Hay un camino más corto. Multiplica el numerador de cada fracción por el denominador de la otra. Para {2/3} y {3/4}: el 2 de la primera por el 4 de la segunda da 8. El 3 de la segunda por el 3 de la primera da 9.',
      'El 8 le pertenece a la primera fracción y el 9 a la segunda. Como 9 es mayor, gana la segunda: {3/4}.',
      '## De dónde sale el atajo',
      'No es magia. Esos dos números, el 8 y el 9, son los mismos numeradores que salieron cuando pasamos todo a doceavos. Multiplicar en cruz es pasar al mismo denominador sin tener que escribirlo.',
      '## Un ejemplo resuelto',
      '¿Qué es más: {3/5} o {1/2}? Multiplico en cruz. El 3 de la primera por el 2 de la segunda da 6. El 1 de la segunda por el 5 de la primera da 5. Como 6 es más que 5, gana la primera: {3/5} es mayor que {1/2}.'
    ],
    practica: [
      {
        p: '¿Cuál es mayor: {3/7} o {5/7}?',
        o: ['{5/7}', '{3/7}', 'Son iguales'],
        e: ['Tienen el mismo denominador, así que los pedazos son del mismo tamaño. Cinco pedazos son más que tres.',
          'Los pedazos son del mismo tamaño, porque el denominador es el mismo. Gana la que tiene más pedazos: la del 5.',
          'No son iguales. Tienen el mismo denominador, pero una toma más pedazos que la otra.']
      },
      function () {
        var n = U.al(2, 5), d1 = U.al(n + 1, 8), d2 = U.al(d1 + 1, 12);
        return U.q(
          '¿Cuál es mayor: ' + f(n, d1) + ' o ' + f(n, d2) + '?',
          [f(n, d1), 'Las dos tienen ' + n + ' pedazos. Pero los pedazos de la primera son más grandes, porque su denominador, ' + d1 + ', es más pequeño.'],
          [[f(n, d2), 'El ' + d2 + ' es un número más grande, pero eso hace los pedazos más pequeños. Con la misma cantidad de pedazos, gana la de pedazos más grandes.'],
            ['Son iguales', 'No son iguales. Tienen la misma cantidad de pedazos, pero de distinto tamaño.']],
          ['El numerador es el mismo: las dos tienen ' + n + ' pedazos.', 'Los pedazos más grandes son los del denominador más pequeño, que es ' + d1 + '.', 'Gana ' + f(n, d1) + '.']
        );
      },
      function () {
        var x = U.uno(DUELOS), voltear = Math.random() < 0.5;
        var a = voltear ? x[2] : x[0], b = voltear ? x[3] : x[1], c = voltear ? x[0] : x[2], d = voltear ? x[1] : x[3];
        var p1 = a * d, p2 = c * b, gana1 = p1 > p2;
        return U.q(
          '¿Cuál es mayor: ' + f(a, b) + ' o ' + f(c, d) + '?',
          [gana1 ? f(a, b) : f(c, d), 'Al multiplicar en cruz, a la primera le toca ' + p1 + ' y a la segunda ' + p2 + '. Gana la del número más grande.'],
          [[gana1 ? f(c, d) : f(a, b), 'Multiplica en cruz: a la primera le toca ' + p1 + ' y a la segunda ' + p2 + '. Esta es la del número más pequeño.'],
            ['Son iguales', 'No son iguales. Al multiplicar en cruz salen números distintos: ' + p1 + ' y ' + p2 + '.']],
          ['Multiplico en cruz.', 'El ' + a + ' de la primera por el ' + d + ' de la segunda da ' + p1 + '.', 'El ' + c + ' de la segunda por el ' + b + ' de la primera da ' + p2 + '.',
            (gana1 ? p1 + ' es más que ' + p2 + ', así que gana la primera: ' + f(a, b) : p2 + ' es más que ' + p1 + ', así que gana la segunda: ' + f(c, d)) + '.']
        );
      },
      function () {
        var d = U.uno([4, 6, 8, 10, 12]), mitad = d / 2, n = U.al(1, d - 1);
        var textos = ['Más que un medio', 'Menos que un medio', 'Igual a un medio'];
        var cual = n > mitad ? 0 : n < mitad ? 1 : 2;
        var razon = 'La mitad de ' + d + ' es ' + mitad + '. Entonces un medio sería ' + f(mitad, d) + '. ' +
          (cual === 0 ? 'Como ' + n + ' es más que ' + mitad + ', la fracción es más que un medio.'
            : cual === 1 ? 'Como ' + n + ' es menos que ' + mitad + ', la fracción es menos que un medio.'
            : 'El numerador es justo ' + mitad + ': la fracción es igual a un medio.');
        return U.q(
          'La fracción ' + f(n, d) + ', ¿es más o menos que un medio?',
          [textos[cual], razon],
          [0, 1, 2].filter(function (k) { return k !== cual; }).map(function (k) { return [textos[k], razon]; }),
          ['Un medio es tomar la mitad de las partes.', 'La mitad de ' + d + ' es ' + mitad + '.', 'Comparo el numerador, ' + n + ', con ' + mitad + '.']
        );
      },
      {
        p: 'Dos fracciones tienen el mismo numerador. ¿Cuál es la mayor?',
        o: ['La que tiene el denominador más pequeño', 'La que tiene el denominador más grande', 'Siempre son iguales'],
        e: ['Tienen la misma cantidad de pedazos, y los pedazos más grandes son los del denominador más pequeño.',
          'Un denominador más grande quiere decir pedazos más pequeños. Con la misma cantidad de pedazos, esa es la menor.',
          'No son iguales: tienen la misma cantidad de pedazos, pero de distinto tamaño.']
      },
      {
        p: 'Para comparar {2/3} y {3/4} las pasas al mismo denominador. ¿Cuál denominador les sirve a las dos?',
        o: ['12', '7', '4'],
        e: ['El 12 está en la tabla del 3 y en la tabla del 4.',
          'El 7 sale de sumar 3 + 4, pero no está en la tabla del 3 ni en la del 4.',
          'El 4 no está en la tabla del 3, así que los tercios no se pueden pasar a cuartos.']
      }
    ],
    resumen: 'con el mismo denominador gana el numerador más grande. Con el mismo numerador gana el denominador más pequeño. Y si todo es distinto, se multiplica en cruz.'
  });
})(window.AE = window.AE || {});
