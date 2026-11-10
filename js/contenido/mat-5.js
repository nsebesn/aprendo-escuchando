/* Matemáticas, lecciones 14 a 17: fracción de una cantidad, multiplicar, dividir y problemas. */
(function (AE) {
  'use strict';
  var U = AE.util, N = AE.Numeros, f = U.f;

  var PROPIAS = [[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [2, 5], [3, 5], [4, 5], [1, 6], [5, 6]];

  // Dos fracciones distintas de la lista
  function dosFracciones() {
    var x = U.uno(PROPIAS), y;
    do { y = U.uno(PROPIAS); } while (U.iguales(x[0], x[1], y[0], y[1]));
    return [x, y];
  }

  // ------------------------------------------------------------------
  AE.leccion({
    id: 'mat-14',
    area: 'mat',
    titulo: 'La fracción de una cantidad',
    pasos: [
      '## Para qué sirve',
      'Hasta ahora el entero era una sola cosa: una arepa, una hoja. Pero muchas veces el entero es un grupo de cosas: 20 canicas, 12 huevos, 8000 pesos. Hoy aprendes a sacar una fracción de un grupo. Por ejemplo: ¿cuánto son tres cuartos de 20 canicas?',
      '## La explicación',
      'Empecemos con algo que ya haces sin pensar: la mitad. ¿Cuál es la mitad de 10 dulces? Repartes los 10 en 2 grupos iguales y coges un grupo: 5. Eso fue sacar {1/2} de 10.',
      'Lo que hiciste fue dividir entre el denominador. Para un medio, divides entre 2. Para un tercio, divides entre 3. Para un cuarto, divides entre 4.',
      'Ahora la pregunta completa: ¿cuánto son {3/4} de 20 canicas? Va en dos pasos, uno por cada número de la fracción.',
      'Primer paso, el denominador. El 4 dice: parte las 20 canicas en 4 grupos iguales. 20 ÷ 4 = 5. Cada grupo tiene 5 canicas. Cada grupo es un cuarto.',
      'Segundo paso, el numerador. El 3 dice: toma 3 de esos grupos. 3 × 5 = 15. Entonces {3/4} de 20 canicas son 15 canicas.',
      'La receta es: divide entre el denominador, y multiplica por el numerador.',
      '## De dónde sale',
      'Sale de lo que significa cada número. El denominador siempre dice en cuántas partes iguales se parte el entero: por eso se divide. El numerador siempre dice cuántas partes se toman: por eso se multiplica.',
      'Es exactamente lo mismo que hacías con la arepa. Solo que ahora el entero no es una arepa, sino un montón de canicas. Y cada parte no es un pedazo, sino un grupito.',
      'Hazlo con las manos. Consigue 12 fríjoles, piedritas o tapas. Para sacar {2/3}, repártelos en 3 montones iguales: quedan de a 4. Ahora junta 2 de esos montones: tienes 8. Entonces {2/3} de 12 son 8.',
      '## La palabra de',
      'Fíjate en la palabra de. Tres cuartos de 20. La mitad de 10. Cuando una fracción va seguida de la palabra de y una cantidad, hay que hacer esto: dividir y multiplicar.',
      '## Un ejemplo resuelto',
      'En un salón hay 30 estudiantes. {2/5} de ellos llegaron en bus. ¿Cuántos llegaron en bus?',
      'Primer paso: divido entre el denominador. 30 ÷ 5 = 6. Cada quinto del salón son 6 estudiantes. Segundo paso: multiplico por el numerador. 2 × 6 = 12. Llegaron en bus 12 estudiantes.',
      'Reviso si tiene sentido. Dos quintos es menos que la mitad, y 12 es menos que la mitad de 30. Sí tiene sentido.'
    ],
    practica: [
      function () {
        var d = U.al(2, 6), k = U.al(2, 9), T = d * k;
        return U.q(
          '¿Cuánto es ' + f(1, d) + ' de ' + T + '?',
          [k, 'Se divide entre el denominador: ' + T + ' ÷ ' + d + ' = ' + k + '.'],
          [[T - d, 'Ahí restaste. Sacar ' + f(1, d) + ' es repartir en ' + d + ' grupos iguales y coger uno.'],
            [d, 'El ' + d + ' es el denominador: dice en cuántos grupos se reparte. La respuesta es lo que tiene cada grupo.'],
            [k + 1, 'Casi. Comprueba multiplicando: ' + d + ' × ' + (k + 1) + ' = ' + (d * (k + 1)) + ', y eso no es ' + T + '.'],
            [T * d, 'Ahí multiplicaste. Una parte de algo no puede ser más grande que el total.']],
          ['El denominador es ' + d + ': reparto ' + T + ' en ' + d + ' grupos iguales.', T + ' ÷ ' + d + ' = ' + k + '.', 'El numerador es 1: tomo un solo grupo. La respuesta es ' + k + '.']
        );
      },
      function () {
        var d = U.al(3, 8), n = U.al(2, d - 1), k = U.al(2, 6), T = d * k;
        return U.q(
          '¿Cuánto es ' + f(n, d) + ' de ' + T + '?',
          [n * k, 'Primero se divide: ' + T + ' ÷ ' + d + ' = ' + k + '. Después se multiplica: ' + n + ' × ' + k + ' = ' + (n * k) + '.'],
          [[k, 'Ese es el valor de un solo grupo. Falta tomar ' + n + ' grupos: multiplica por el numerador.'],
            [T - n * k, 'Ese número es lo que queda, no lo que se toma.'],
            [n * T, 'Ahí multiplicaste sin dividir antes. Una parte de ' + T + ' no puede ser más grande que ' + T + '.'],
            [n * k + k, 'Tomaste un grupo de más. Son ' + n + ' grupos de ' + k + '.']],
          ['Primer paso, el denominador: ' + T + ' ÷ ' + d + ' = ' + k + '. Cada grupo tiene ' + k + '.', 'Segundo paso, el numerador: tomo ' + n + ' grupos. ' + n + ' × ' + k + ' = ' + (n * k) + '.', 'La respuesta es ' + (n * k) + '.']
        );
      },
      {
        p: 'Para sacar tres cuartos de una cantidad, ¿qué se hace?',
        o: ['Dividir entre 4 y multiplicar por 3', 'Dividir entre 3 y multiplicar por 4', 'Restar 3 y después restar 4'],
        e: ['Se divide entre el denominador, que es 4, y se multiplica por el numerador, que es 3.',
          'Quedó al revés. Se divide entre el número de abajo, el 4, y se multiplica por el de arriba, el 3.',
          'No se resta. El denominador manda a repartir, y el numerador manda a tomar varios grupos.']
      },
      function () {
        var d = U.uno([2, 4, 5]), n = d === 2 ? 1 : U.al(2, d - 1), k = U.al(2, 6) * 100, T = d * k;
        return U.q(
          'Tienes ' + T + ' pesos y gastas ' + f(n, d) + ' de esa plata. ¿Cuántos pesos gastas?',
          [n * k, T + ' ÷ ' + d + ' = ' + k + '. Y ' + n + ' × ' + k + ' = ' + (n * k) + '.'],
          [[T - n * k, 'Eso es lo que te queda, no lo que gastas.'],
            [T, 'Eso sería gastarlo todo. Solo gastas una parte.'],
            [k + 100, 'Revisa los dos pasos: primero ' + T + ' ÷ ' + d + ', y después multiplica por ' + n + '.']],
          ['Divido entre el denominador: ' + T + ' ÷ ' + d + ' = ' + k + '.', 'Multiplico por el numerador: ' + n + ' × ' + k + ' = ' + (n * k) + '.', 'Gastas ' + (n * k) + ' pesos.']
        );
      },
      {
        p: 'En una cubeta hay 12 huevos. Usas {2/3} de los huevos. ¿Cuántos huevos usas?',
        o: ['8', '4', '6'],
        e: ['12 ÷ 3 = 4, y 2 × 4 = 8.',
          'El 4 es un solo tercio. Tú usas dos tercios: 2 × 4 = 8.',
          'El 6 es la mitad de 12. Dos tercios es más que la mitad.'],
        s: ['Divido entre el denominador: 12 ÷ 3 = 4. Cada tercio son 4 huevos.', 'Multiplico por el numerador: 2 × 4 = 8.', 'Usas 8 huevos.']
      },
      {
        p: 'En la frase: tres cuartos de 20, ¿qué palabra avisa que hay que dividir y multiplicar?',
        o: ['La palabra de', 'La palabra tres', 'La palabra 20'],
        e: ['Cuando una fracción va seguida de la palabra de y una cantidad, se saca esa fracción de la cantidad.',
          'El tres es el numerador. La palabra que avisa es la que une la fracción con la cantidad.',
          'El 20 es la cantidad. La palabra que avisa es la que une la fracción con la cantidad.']
      }
    ],
    resumen: 'para sacar una fracción de una cantidad, se divide entre el denominador y se multiplica por el numerador.'
  });

  // ------------------------------------------------------------------
  AE.leccion({
    id: 'mat-15',
    area: 'mat',
    titulo: 'Multiplicar fracciones',
    pasos: [
      '## Para qué sirve',
      'Te queda media torta, y decides comerte la mitad de lo que queda. ¿Qué fracción de la torta entera te comes? Eso es multiplicar fracciones: sacar una parte de otra parte.',
      '## La explicación',
      'En la lección anterior viste que la palabra de, después de una fracción, manda a hacer una operación. La mitad de 10. Tres cuartos de 20. Esa operación, en el fondo, es una multiplicación.',
      'Entonces la mitad de media torta se escribe así: {1/2} × {1/2}. Y quiere decir: un medio de un medio.',
      'Hazlo con la hoja. Dóblala por la mitad y quédate con una parte: tienes {1/2}. Ahora dobla esa parte por la mitad. ¿Qué pedazo de la hoja entera tienes? Ábrela y cuenta: la hoja quedó en cuatro partes, y tú tenías una. Tienes {1/4}.',
      'Entonces {1/2} × {1/2} = {1/4}.',
      '## La regla',
      'Para multiplicar dos fracciones, se multiplica numerador por numerador, y denominador por denominador. Arriba por arriba, y abajo por abajo.',
      'Revisemos con el ejemplo. Arriba: 1 × 1 = 1. Abajo: 2 × 2 = 4. Sale {1/4}. Coincide con lo que tocaste en la hoja.',
      'Otro ejemplo: {2/3} × {4/5}. Arriba: 2 × 4 = 8. Abajo: 3 × 5 = 15. El resultado es {8/15}.',
      'Fíjate: para multiplicar no hace falta igualar los denominadores. Eso solo se necesita para sumar y restar.',
      '## De dónde sale',
      '¿Por qué se multiplican los denominadores? Piensa en la mitad de un cuarto. La hoja estaba en 4 partes, y cada parte la partes en 2. Ahora la hoja tiene 4 × 2 = 8 partes. Los denominadores se multiplican porque cada pedazo se vuelve a partir.',
      'Y los numeradores se multiplican porque cuentan cuántos de esos pedacitos nuevos te quedan en la mano.',
      '## Una sorpresa',
      'Con los números para contar, multiplicar siempre agranda: 3 × 4 = 12. Pero mira lo que pasó aquí: {1/2} × {1/2} dio {1/4}, que es más pequeño.',
      'No es un error. Multiplicar por una fracción menor que un entero es sacar solo una parte de algo. Y una parte siempre es más pequeña que el todo. La mitad de media torta tiene que ser menos que media torta.',
      '## Un número entero por una fracción',
      '¿Cuánto es 3 × {2/5}? Son tres veces dos quintos: {2/5} + {2/5} + {2/5} = {6/5}. Solo se multiplica el numerador: 3 × 2 = 6. El denominador se queda, porque los pedazos siguen siendo quintos.',
      'También puedes pensar que el 3 es {3/1}, o sea, tres enteros. Entonces arriba: 3 × 2 = 6. Abajo: 1 × 5 = 5. Da lo mismo: {6/5}.',
      '## Un ejemplo resuelto',
      'Una botella tiene {3/4} de litro de jugo. Te tomas {2/3} de lo que hay. ¿Qué fracción de litro te tomaste?',
      'Dos tercios de tres cuartos es una multiplicación: {2/3} × {3/4}. Arriba: 2 × 3 = 6. Abajo: 3 × 4 = 12. Sale {6/12}. Simplifico dividiendo entre 6 y queda {1/2}. Te tomaste medio litro.'
    ],
    practica: [
      {
        p: '¿Cuánto es la mitad de un medio? Es decir, {1/2} × {1/2}.',
        o: ['{1/4}', '{2/4}', 'Un entero'],
        e: ['Arriba: 1 × 1 = 1. Abajo: 2 × 2 = 4. Es la hoja doblada dos veces.',
          'Ahí sumaste arriba y multiplicaste abajo. Arriba también se multiplica: 1 × 1 = 1.',
          'Un entero sale de sumar dos mitades. Aquí se saca la mitad de una mitad, y eso es más pequeño.']
      },
      function () {
        var x = dosFracciones(), a = x[0][0], b = x[0][1], c = x[1][0], d = x[1][1], n = a * c, D = b * d;
        var simple = U.mcd(n, D) > 1;
        return U.q(
          '¿Cuánto es ' + f(a, b) + ' × ' + f(c, d) + '?',
          [U.fs(n, D), 'Arriba: ' + a + ' × ' + c + ' = ' + n + '. Abajo: ' + b + ' × ' + d + ' = ' + D + '.' + (simple ? ' Sale ' + f(n, D) + ', que simplificada es ' + U.fs(n, D) + '.' : '')],
          U.otras(n, D, [
            [a + c, b + d, 'Ahí sumaste. Para multiplicar se hace arriba por arriba y abajo por abajo.'],
            [a * d, b * c, 'Ahí multiplicaste en cruz. Eso sirve para comparar y para dividir. Para multiplicar es arriba por arriba y abajo por abajo.'],
            [n, b + d, 'Arriba está bien, pero abajo sumaste. Los denominadores también se multiplican.']
          ]),
          ['Arriba por arriba: ' + a + ' × ' + c + ' = ' + n + '.', 'Abajo por abajo: ' + b + ' × ' + d + ' = ' + D + '.',
            simple ? 'Sale ' + f(n, D) + '. Se puede simplificar: queda ' + U.fs(n, D) + '.' : 'El resultado es ' + f(n, D) + ', y no se puede simplificar.']
        );
      },
      {
        p: 'Cuando multiplicas una cantidad por una fracción menor que un entero, ¿cómo queda el resultado?',
        o: ['Más pequeño que la cantidad', 'Más grande que la cantidad', 'Igual a la cantidad'],
        e: ['Multiplicar por una fracción así es sacar solo una parte, y una parte es más pequeña que el todo.',
          'Eso pasa con los números para contar. Pero multiplicar por una fracción menor que un entero es sacar solo una parte.',
          'Quedaría igual si multiplicaras por 1. Una fracción menor que un entero saca solo una parte.']
      },
      function () {
        var x = U.uno(PROPIAS), a = x[0], b = x[1], k = U.al(2, 5), n = k * a;
        return U.q(
          '¿Cuánto es ' + k + ' × ' + f(a, b) + '?',
          [U.fs(n, b), 'Son ' + k + ' veces ' + f(a, b) + '. Se multiplica el numerador: ' + k + ' × ' + a + ' = ' + n + '. Los pedazos siguen siendo ' + N.parte(b, true) + '.' + (U.mcd(n, b) > 1 ? ' Sale ' + f(n, b) + ', que simplificada es ' + U.fs(n, b) + '.' : '')],
          U.otras(n, b, [
            [a, k * b, 'Ahí multiplicaste el denominador. Eso hace los pedazos más pequeños. El número entero multiplica al numerador.'],
            [k + a, b, 'Ahí sumaste el ' + k + ' al numerador. Hay que multiplicar: son ' + k + ' veces ' + a + ' pedazos.'],
            [n + 1, b, 'El denominador está bien. Revisa la multiplicación de arriba: ' + k + ' × ' + a + '.']
          ]),
          ['Son ' + k + ' veces ' + f(a, b) + '.', 'Multiplico el numerador: ' + k + ' × ' + a + ' = ' + n + '.', 'El denominador se queda en ' + b + '.', 'El resultado es ' + U.fs(n, b) + '.']
        );
      },
      {
        p: 'Para multiplicar dos fracciones, ¿hay que igualar primero los denominadores?',
        o: ['No. Se multiplica arriba por arriba y abajo por abajo', 'Sí, igual que en la suma'],
        e: ['Igualar los denominadores solo hace falta para sumar y restar.',
          'Eso es para sumar y restar. Al multiplicar se hace directo: arriba por arriba y abajo por abajo.']
      },
      {
        p: 'Tienes {1/3} de una panela y regalas la mitad de ese pedazo. ¿Qué fracción de la panela entera regalaste?',
        o: ['{1/6}', '{2/3}', '{1/5}'],
        e: ['La mitad de un tercio es {1/2} × {1/3}. Arriba: 1 × 1 = 1. Abajo: 2 × 3 = 6.',
          'Dos tercios es el doble de lo que tenías. Regalaste la mitad, que es menos.',
          'Ahí sumaste los denominadores. Se multiplican: 2 × 3 = 6.'],
        s: ['La mitad de un tercio es una multiplicación: {1/2} × {1/3}.', 'Arriba: 1 × 1 = 1.', 'Abajo: 2 × 3 = 6.', 'Regalaste {1/6} de la panela.']
      }
    ],
    resumen: 'para multiplicar fracciones se hace arriba por arriba y abajo por abajo. Multiplicar por una fracción es sacar una parte de algo.'
  });

  // ------------------------------------------------------------------
  AE.leccion({
    id: 'mat-16',
    area: 'mat',
    titulo: 'Dividir fracciones',
    pasos: [
      '## Para qué sirve',
      'Tienes 2 arepas y quieres servir porciones de media arepa. ¿Para cuántas personas alcanza? O al revés: tienes media arepa para repartir entre 3 personas. ¿Cuánto le toca a cada una? Las dos preguntas se contestan dividiendo fracciones.',
      '## Qué pregunta la división',
      'Recuerda qué significa dividir. 12 ÷ 3 pregunta: ¿cuántas veces cabe el 3 en el 12? Cabe 4 veces.',
      'Con fracciones es igual. 2 ÷ {1/2} pregunta: ¿cuántas veces cabe media arepa en 2 arepas? Cada arepa tiene 2 mitades. Dos arepas tienen 4 mitades. Cabe 4 veces. Entonces 2 ÷ {1/2} = 4.',
      'Fíjate bien en lo que pasó: dividir entre un medio fue lo mismo que multiplicar por 2. Tiene sentido: contar mitades es contar el doble de pedazos.',
      'Lo mismo pasa con los cuartos. 3 ÷ {1/4} pregunta cuántos cuartos caben en 3 enteros. Cada entero tiene 4 cuartos, así que caben 3 × 4 = 12.',
      '## La regla',
      'Para dividir entre una fracción, se multiplica por esa fracción volteada. Voltear una fracción es poner el numerador abajo y el denominador arriba. A la fracción volteada se le llama *inverso*.',
      'El inverso de {1/2} es {2/1}, que es 2. El inverso de {3/4} es {4/3}.',
      'Los pasos son tres. Uno: la primera fracción se deja igual. Dos: la segunda fracción se voltea. Tres: se multiplican, arriba por arriba y abajo por abajo.',
      'Un ejemplo: {3/4} ÷ {1/8}. La primera se queda: {3/4}. La segunda se voltea: {8/1}. Multiplico. Arriba: 3 × 8 = 24. Abajo: 4 × 1 = 4. Sale {24/4}, que es 6. En tres cuartos de arepa caben 6 octavos.',
      '## De dónde sale',
      '¿Por qué se voltea? Hagamos despacio 2 ÷ {2/3}. La pregunta es: ¿cuántos pedazos de dos tercios caben en 2 enteros?',
      'Primero cuento tercios sueltos. Cada entero tiene 3 tercios. En 2 enteros hay 2 × 3 = 6 tercios. Por eso el denominador, el 3, pasó a multiplicar.',
      'Pero los pedazos que me interesan son de dos tercios cada uno. Entonces agrupo los 6 tercios de 2 en 2: 6 ÷ 2 = 3 pedazos. Por eso el numerador, el 2, pasó a dividir.',
      'Multiplicar por 3 y dividir entre 2 es lo mismo que multiplicar por {3/2}. Y {3/2} es justamente {2/3} volteada. De ahí sale la regla.',
      '## Dividir una fracción entre un número entero',
      'Ahora la otra pregunta: media arepa entre 3 personas. Es {1/2} ÷ 3. El 3 es {3/1}, y volteado es {1/3}. Entonces {1/2} × {1/3} = {1/6}. A cada persona le toca un sexto de arepa.',
      'Tiene sentido: repartir media arepa entre 3 es partir esa mitad en 3 pedacitos. La arepa entera tendría 6 pedacitos de ese tamaño.',
      '## Un cuidado importante',
      'Solo se voltea la segunda fracción, la que va después del signo de dividir. La primera nunca se toca.',
      '## Un ejemplo resuelto',
      'Tienes {3/4} de litro de jugo, y vasos en los que cabe {1/4} de litro. ¿Cuántos vasos llenas? Es {3/4} ÷ {1/4}. La primera se queda. La segunda se voltea: {4/1}. Arriba: 3 × 4 = 12. Abajo: 4 × 1 = 4. Sale {12/4}, que es 3. Llenas 3 vasos.'
    ],
    practica: [
      {
        p: '¿Cuántas veces cabe media arepa en 2 arepas? Es decir, ¿cuánto es 2 ÷ {1/2}?',
        o: ['4', '1', '{2/2}'],
        e: ['Cada arepa tiene 2 mitades, así que en 2 arepas hay 4 mitades.',
          'El 1 sale de sacar la mitad de 2. Pero la pregunta es cuántas mitades caben, no cuánto es la mitad.',
          'Ahí se dividió el 2 entre el 2 de abajo. Dividir entre un medio es multiplicar por 2.']
      },
      {
        p: '¿Cuál es el inverso de la fracción {2/5}?',
        o: ['{5/2}', '{2/5}', '{1/5}'],
        e: ['Voltear es poner el numerador abajo y el denominador arriba.',
          'Esa es la misma fracción, sin voltear.',
          'Ahí solo cambió el numerador. Voltear es intercambiar los dos números.']
      },
      function () {
        var x = dosFracciones(), a = x[0][0], b = x[0][1], c = x[1][0], d = x[1][1], n = a * d, D = b * c;
        var simple = U.mcd(n, D) > 1;
        return U.q(
          '¿Cuánto es ' + f(a, b) + ' ÷ ' + f(c, d) + '?',
          [U.fs(n, D), 'La segunda se voltea: ' + f(d, c) + '. Arriba: ' + a + ' × ' + d + ' = ' + n + '. Abajo: ' + b + ' × ' + c + ' = ' + D + '.' + (simple ? ' Sale ' + f(n, D) + ', que simplificada es ' + U.fs(n, D) + '.' : '')],
          U.otras(n, D, [
            [a * c, b * d, 'Ahí multiplicaste sin voltear la segunda fracción. Eso es multiplicar, no dividir.'],
            [b * c, a * d, 'Ahí volteaste la primera fracción. La que se voltea es la segunda.'],
            [n + 1, D, 'Revisa la multiplicación de arriba: ' + a + ' × ' + d + '.']
          ]),
          ['La primera se queda: ' + f(a, b) + '.', 'La segunda se voltea: ' + f(d, c) + '.', 'Arriba: ' + a + ' × ' + d + ' = ' + n + '. Abajo: ' + b + ' × ' + c + ' = ' + D + '.',
            simple ? 'Sale ' + f(n, D) + '. Simplificada: ' + U.fs(n, D) + '.' : 'El resultado es ' + f(n, D) + '.']
        );
      },
      function () {
        var k = U.al(2, 5), d = U.al(2, 6);
        return U.q(
          '¿Cuántos pedazos de ' + f(1, d) + ' caben en ' + k + ' enteros? Es decir, ¿cuánto es ' + k + ' ÷ ' + f(1, d) + '?',
          [k * d, 'Cada entero tiene ' + d + ' ' + N.parte(d, true) + '. En ' + k + ' enteros hay ' + k + ' × ' + d + ' = ' + (k * d) + '.'],
          [[f(k, d), 'Eso sería repartir ' + k + ' entre ' + d + '. Aquí la pregunta es cuántos pedazos caben.'],
            [k + d, 'Ahí sumaste. Hay que multiplicar: cada entero tiene ' + d + ' pedazos.'],
            [d, 'Ese es el número de pedazos de un solo entero. Hay ' + k + ' enteros.']],
          ['Dividir entre ' + f(1, d) + ' es multiplicar por su inverso, que es ' + d + '.', k + ' × ' + d + ' = ' + (k * d) + '.', 'Caben ' + (k * d) + ' pedazos.']
        );
      },
      function () {
        var x = U.uno(PROPIAS), a = x[0], b = x[1], k = U.al(2, 4), D = b * k;
        return U.q(
          'Repartes ' + f(a, b) + ' de una torta entre ' + k + ' personas, en partes iguales. ¿Qué fracción de la torta le toca a cada una? Es ' + f(a, b) + ' ÷ ' + k + '.',
          [U.fs(a, D), 'El ' + k + ' volteado es ' + f(1, k) + '. Arriba: ' + a + ' × 1 = ' + a + '. Abajo: ' + b + ' × ' + k + ' = ' + D + '.' + (U.mcd(a, D) > 1 ? ' Sale ' + f(a, D) + ', que simplificada es ' + U.fs(a, D) + '.' : '')],
          U.otras(a, D, [
            [a * k, b, 'Ahí multiplicaste por ' + k + '. Al repartir entre ' + k + ', a cada persona le toca menos, no más.'],
            [a, b + k, 'Ahí sumaste el ' + k + ' al denominador. Hay que multiplicar por el inverso, que es ' + f(1, k) + '.'],
            [a + 1, D, 'El denominador está bien. Arriba es ' + a + ' × 1.']
          ]),
          ['La primera se queda: ' + f(a, b) + '.', 'El ' + k + ' es ' + f(k, 1) + ', y volteado es ' + f(1, k) + '.', 'Arriba: ' + a + ' × 1 = ' + a + '. Abajo: ' + b + ' × ' + k + ' = ' + D + '.', 'Cada persona recibe ' + U.fs(a, D) + ' de la torta.']
        );
      },
      {
        p: 'Al dividir dos fracciones, ¿cuál de las dos se voltea?',
        o: ['La segunda', 'La primera', 'Las dos'],
        e: ['Solo se voltea la que va después del signo de dividir. La primera se deja igual.',
          'La primera nunca se toca. Se voltea la que va después del signo de dividir.',
          'Si volteas las dos, el resultado queda al revés. Solo se voltea la segunda.']
      }
    ],
    resumen: 'para dividir entre una fracción, se multiplica por esa fracción volteada. Solo se voltea la segunda.'
  });

  // ------------------------------------------------------------------
  AE.leccion({
    id: 'mat-17',
    area: 'mat',
    titulo: 'Problemas de la vida diaria con fracciones',
    pasos: [
      '## Para qué sirve',
      'Saber hacer las operaciones no basta. En la vida nadie te dice: sume estas dos fracciones. Te cuentan una situación, y tú tienes que descubrir qué operación sirve. Hoy aprendes un método para lograrlo.',
      '## El método de las cuatro preguntas',
      'Primera pregunta: ¿qué me están preguntando? Antes de hacer cuentas, di con tus palabras qué es lo que hay que encontrar.',
      'Segunda pregunta: ¿qué datos me dan? Repite los números del problema y di qué significa cada uno.',
      'Tercera pregunta: ¿qué operación sirve? Aquí ayudan las palabras clave, que te voy a enseñar en un momento.',
      'Cuarta pregunta, después de resolver: ¿tiene sentido la respuesta? Si te comiste parte de una torta, la respuesta no puede ser más grande que la torta.',
      '## Las palabras clave',
      'Se suma cuando se juntan cantidades. Palabras clave: en total, juntos, y después, entre los dos.',
      'Se resta cuando se quita algo, o cuando se compara. Palabras clave: cuánto queda, cuánto falta, cuánto sobra, cuánto más.',
      'Se multiplica cuando se saca una parte de algo. La palabra clave es la palabra de, después de una fracción: la mitad de, tres cuartos de.',
      'Se divide cuando se reparte, o cuando se pregunta cuántas veces cabe. Palabras clave: repartir entre, para cuántos alcanza, cuántas porciones salen.',
      'Las palabras clave son una ayuda, no una regla fija. Lo más seguro es imaginar la situación: ¿las cantidades se juntan, se quitan, se parten o se reparten?',
      '## Primer ejemplo',
      'Problema: Ana caminó {1/4} de kilómetro hasta la tienda, y después {2/4} de kilómetro hasta el colegio. ¿Cuánto caminó en total?',
      '¿Qué me preguntan? Todo lo que caminó. ¿Qué datos hay? Dos trayectos: un cuarto y dos cuartos. ¿Qué operación? Dice en total, y las distancias se juntan: es una suma.',
      'Los denominadores son iguales, así que sumo los numeradores: 1 + 2 = 3. Caminó {3/4} de kilómetro. ¿Tiene sentido? Sí: es más que cada trayecto por separado.',
      '## Segundo ejemplo',
      'Problema: en una jarra había {5/6} de litro de limonada. Se tomaron medio litro. ¿Cuánto queda?',
      '¿Qué me preguntan? Lo que queda. ¿Qué operación? Dice cuánto queda, y hay algo que se quita: es una resta. {5/6} − {1/2}.',
      'Los denominadores son distintos. El mínimo común múltiplo de 6 y 2 es 6. Un medio pasa a {3/6}. Entonces {5/6} − {3/6} = {2/6}, que simplificada es {1/3}. Queda un tercio de litro.',
      '## Tercer ejemplo',
      'Problema: una cuerda mide 3 metros. Se corta en pedazos de {3/4} de metro. ¿Cuántos pedazos salen?',
      '¿Qué me preguntan? Cuántas veces cabe el pedazo en la cuerda. Eso es una división: 3 ÷ {3/4}. La segunda se voltea: 3 × {4/3}. Arriba: 3 × 4 = 12. Abajo: 3. Sale {12/3}, que es 4. Salen 4 pedazos.',
      '¿Tiene sentido? Cuatro pedazos de tres cuartos son 12 cuartos, y 12 cuartos son 3 metros. Sí tiene sentido.'
    ],
    practica: [
      {
        p: 'Luis se comió {2/8} de una torta y Marta se comió {3/8}. ¿Cuánto comieron entre los dos?',
        o: ['{5/8}', '{5/16}', '{1/8}'],
        e: ['Entre los dos quiere decir que se juntan: es una suma. Arriba: 2 + 3 = 5. El denominador se queda en 8.',
          'Ahí también se sumaron los denominadores. Los pedazos siguen siendo octavos.',
          'Ahí se restó. Pero la pregunta es cuánto comieron entre los dos: las cantidades se juntan.'],
        s: ['Me preguntan lo que comieron los dos juntos: es una suma.', 'Los denominadores son iguales. Sumo los numeradores: 2 + 3 = 5.', 'Comieron {5/8} de la torta.']
      },
      {
        p: 'Un problema termina con la pregunta: ¿cuánto queda? ¿Qué operación es la más probable?',
        o: ['Una resta', 'Una suma', 'Una multiplicación'],
        e: ['Cuando algo se quita y preguntan cuánto queda, se resta.',
          'Se suma cuando las cantidades se juntan. Aquí algo se quitó.',
          'Se multiplica cuando se saca una parte de algo, con la palabra de. Aquí algo se quitó y preguntan lo que queda.']
      },
      {
        p: 'En una bolsa hay 24 canicas. {2/3} de las canicas son de Pedro. ¿Cuántas canicas son de Pedro?',
        o: ['16', '8', '12'],
        e: ['24 ÷ 3 = 8, y 2 × 8 = 16.',
          'El 8 es un solo tercio. Pedro tiene dos tercios: 2 × 8 = 16.',
          'El 12 es la mitad de 24. Dos tercios es más que la mitad.'],
        s: ['Dos tercios de 24: la palabra de avisa que hay que dividir y multiplicar.', 'Divido entre el denominador: 24 ÷ 3 = 8.', 'Multiplico por el numerador: 2 × 8 = 16.', 'Pedro tiene 16 canicas.']
      },
      {
        p: 'Tenías {3/4} de una panela y usaste {1/2} de panela para una aguapanela. ¿Cuánta panela te queda?',
        o: ['{1/4}', '{5/4}', '{2/2}'],
        e: ['Es una resta. Un medio pasa a {2/4}. Entonces {3/4} − {2/4} = {1/4}.',
          'Ahí se sumó. Pero usaste panela, así que ahora tienes menos, no más.',
          'Ahí se restó arriba con arriba y abajo con abajo. Además, {2/2} es una panela entera, y no puede quedarte más de lo que tenías.'],
        s: ['Me preguntan lo que queda: es una resta. {3/4} − {1/2}.', 'El mínimo común múltiplo de 4 y 2 es 4. Un medio pasa a {2/4}.', '{3/4} − {2/4} = {1/4}.', 'Te queda un cuarto de panela.']
      },
      {
        p: 'Hay 2 litros de jugo, y en cada vaso cabe {1/4} de litro. ¿Cuántos vasos se llenan?',
        o: ['8', '{2/4}', '6'],
        e: ['Preguntan cuántas veces cabe un cuarto en 2: es una división. 2 ÷ {1/4} = 2 × 4 = 8.',
          'Eso sería repartir 2 entre 4. Aquí la pregunta es cuántos vasos caben.',
          'Cada litro tiene 4 cuartos. Dos litros tienen 8 cuartos, no 6.'],
        s: ['Preguntan cuántas veces cabe un cuarto de litro en 2 litros: es una división.', '2 ÷ {1/4}. La segunda se voltea: 2 × 4.', '2 × 4 = 8. Se llenan 8 vasos.']
      },
      {
        p: 'Una receta lleva {3/4} de taza de harina. Vas a preparar la mitad de la receta. ¿Cuánta harina necesitas?',
        o: ['{3/8}', '{3/2}', '{1/4}'],
        e: ['La mitad de tres cuartos es {1/2} × {3/4}. Arriba: 1 × 3 = 3. Abajo: 2 × 4 = 8.',
          'Ahí se multiplicó por 2, y eso es el doble de la receta. Para la mitad debe dar menos harina.',
          'Ahí se restó un medio. La mitad de una cantidad se saca multiplicando por un medio.'],
        s: ['La mitad de tres cuartos: la palabra de avisa que es una multiplicación.', '{1/2} × {3/4}. Arriba: 1 × 3 = 3. Abajo: 2 × 4 = 8.', 'Necesitas {3/8} de taza.']
      },
      {
        p: 'Después de resolver un problema, ¿qué conviene hacer?',
        o: ['Revisar si la respuesta tiene sentido', 'Pasar rápido al siguiente', 'Cambiar la respuesta por si acaso'],
        e: ['Es la cuarta pregunta del método. Por ejemplo, si te comiste parte de una torta, la respuesta no puede ser más que la torta.',
          'Antes de seguir vale la pena revisar. Muchos errores se descubren preguntándose si la respuesta tiene sentido.',
          'No se cambia por cambiar. Se revisa con calma si tiene sentido, y solo se corrige si no lo tiene.']
      }
    ],
    resumen: 'antes de hacer cuentas, pregúntate qué te piden, qué datos tienes y qué operación sirve. Al final, revisa si la respuesta tiene sentido.'
  });
})(window.AE = window.AE || {});
