/* Matemáticas, lecciones 1 a 3: las bases que se necesitan antes de las fracciones. */
(function (AE) {
  'use strict';
  var U = AE.util;

  var REPARTOS = [
    ['naranjas', 'cajas', 'cada caja'], ['lápices', 'estuches', 'cada estuche'],
    ['canicas', 'bolsas', 'cada bolsa'], ['arepas', 'platos', 'cada plato'],
    ['huevos', 'canastas', 'cada canasta'], ['dulces', 'niños', 'cada niño']
  ];

  // ------------------------------------------------------------------
  AE.leccion({
    id: 'mat-01',
    area: 'mat',
    titulo: 'Repartir en partes iguales',
    pasos: [
      '## Para qué sirve',
      'Imagina que tienes 12 galletas y llegan 3 amigos. Quieres que a todos les toque lo mismo, para que nadie se ponga bravo. ¿Cuántas galletas le das a cada uno? Eso es lo que vamos a aprender: a repartir de manera justa.',
      'Repartir en partes iguales es la idea más importante de esta lección. Y también es la base de las fracciones, que vienen más adelante. Por eso empezamos aquí.',
      '## La explicación',
      'Vamos a repartir las 12 galletas entre los 3 amigos. Hazlo como se reparten las cartas de un juego: una para el primero, una para el segundo, una para el tercero. Y vuelves a empezar.',
      'Primera vuelta: le das una galleta a cada uno. Ya repartiste 3. Te quedan 9.',
      'Segunda vuelta: otra galleta a cada uno. Ya van 6 repartidas. Te quedan 6.',
      'Tercera vuelta: otra a cada uno. Ya van 9. Te quedan 3.',
      'Cuarta vuelta: otra a cada uno. Ya van 12. No te queda ninguna.',
      'Diste 4 vueltas. Eso quiere decir que cada amigo tiene 4 galletas. Todos tienen lo mismo. Eso es repartir en *partes iguales*.',
      'En matemáticas, repartir en partes iguales se llama *dividir*. Se dice así: 12 dividido entre 3 es igual a 4. Y se escribe así: 12 ÷ 3 = 4.',
      'Cada número tiene su trabajo. El 12 es lo que hay para repartir. El 3 es entre cuántos se reparte. Y el 4 es lo que le toca a cada uno.',
      '## De dónde sale',
      '¿Cómo sé que 4 es la respuesta correcta? Lo compruebo al revés. Si cada uno de los 3 amigos tiene 4 galletas, junto todo: 4 + 4 + 4 = 12. Vuelvo a tener las 12 galletas. Entonces está bien.',
      'Sumar el 4 tres veces es lo mismo que multiplicar: 3 × 4 = 12. Por eso dividir y multiplicar son operaciones contrarias. Una deshace lo que hace la otra, como abrir y cerrar una puerta.',
      'A veces el reparto no sale exacto. Si tienes 13 galletas para 3 amigos, cada uno recibe 4 y te sobra una galleta. Lo que sobra se llama *residuo*. Cuando no sobra nada, decimos que la división es exacta.',
      '## Un ejemplo resuelto',
      'Hay 20 canicas para guardar en 5 bolsas, y todas las bolsas deben tener lo mismo. La pregunta es: ¿cuántas canicas van en cada bolsa?',
      'Paso uno: ¿qué voy a repartir? 20 canicas. Paso dos: ¿entre cuántos? Entre 5 bolsas. Paso tres: busco un número que, repetido 5 veces, dé 20.',
      'Pruebo con el 4. Cinco veces 4 es 4 + 4 + 4 + 4 + 4, que da 20. Sirve. Entonces 20 ÷ 5 = 4. En cada bolsa van 4 canicas.'
    ],
    practica: [
      {
        p: 'Tienes 10 dulces y los repartes en partes iguales entre 2 niños. ¿Cuántos dulces le tocan a cada uno?',
        o: ['5', '2', '10'],
        e: ['Porque 5 + 5 = 10. A cada niño le tocan 5 y no sobra nada.',
          'El 2 es el número de niños, no lo que le toca a cada uno.',
          'Si un niño recibiera los 10 dulces, al otro no le tocaría nada. Eso no es repartir en partes iguales.'],
        s: ['Hay 10 dulces y 2 niños.', 'Busco un número que, repetido 2 veces, dé 10.', '5 + 5 = 10.', 'Entonces 10 ÷ 2 = 5.']
      },
      function () {
        var b = U.al(2, 6), c = U.al(2, 9), a = b * c, r = U.uno(REPARTOS);
        return U.q(
          'Hay ' + a + ' ' + r[0] + ' y se reparten en partes iguales entre ' + b + ' ' + r[1] + '. ¿Cuánto le toca a ' + r[2] + '?',
          [c, 'Porque ' + b + ' × ' + c + ' = ' + a + '. Si junto lo de todos, vuelvo a tener ' + a + '.'],
          [[b, 'Ese número es entre cuántos se reparte, no lo que le toca a cada parte.'],
            [a - b, 'Ahí restaste. Repartir no es quitar una sola vez: hay que buscar cuánto le toca a cada parte.'],
            [c + 1, 'Casi. Comprueba multiplicando: ' + b + ' × ' + (c + 1) + ' = ' + (b * (c + 1)) + ', y eso es más de ' + a + '.'],
            [c + 2, 'Comprueba multiplicando: ' + b + ' × ' + (c + 2) + ' = ' + (b * (c + 2)) + ', y eso es más de ' + a + '.']],
          ['Hay ' + a + ' para repartir entre ' + b + '.', 'Busco un número que, repetido ' + b + ' veces, dé ' + a + '.',
            b + ' × ' + c + ' = ' + a + '.', 'Entonces ' + a + ' ÷ ' + b + ' = ' + c + '.']
        );
      },
      {
        p: '¿Qué quiere decir repartir en partes iguales?',
        o: ['Que a todos les toca la misma cantidad', 'Que al más grande le toca más', 'Que cada uno coge lo que quiera'],
        e: ['Partes iguales significa que nadie recibe más ni menos que los demás.',
          'Si a uno le toca más, las partes ya no son iguales.',
          'Si cada uno coge lo que quiere, unos quedan con más y otros con menos. Eso no es repartir en partes iguales.']
      },
      {
        p: 'En la división 15 ÷ 3 = 5, ¿qué significa el 3?',
        o: ['Entre cuántos se reparte', 'Lo que hay para repartir', 'Lo que le toca a cada uno'],
        e: ['El número que va después de la palabra entre dice entre cuántos se reparte.',
          'Lo que hay para repartir es el primer número, el 15.',
          'Lo que le toca a cada uno es el resultado, el 5.']
      },
      function () {
        var b = U.al(2, 5), c = U.al(2, 6), r = U.al(1, b - 1), a = b * c + r;
        return U.q(
          'Repartes ' + a + ' galletas en partes iguales entre ' + b + ' amigos, dándole a cada uno lo más que se pueda. ¿Cuántas galletas sobran?',
          [r, 'A cada amigo le tocan ' + c + ', porque ' + b + ' × ' + c + ' = ' + (b * c) + '. De ' + (b * c) + ' a ' + a + ' hay ' + r + ' de diferencia: eso es lo que sobra.'],
          [[0, 'No sale exacto. ' + b + ' × ' + c + ' = ' + (b * c) + ', y hay ' + a + ' galletas. Algo sobra.'],
            [c, 'Ese número es lo que le toca a cada amigo, no lo que sobra.'],
            [b, 'Si sobraran ' + b + ', todavía alcanzaría para darle una más a cada amigo.']],
          ['Busco cuántas le tocan a cada uno sin pasarme: ' + b + ' × ' + c + ' = ' + (b * c) + '.',
            'Con una más para cada uno me pasaría: ' + b + ' × ' + (c + 1) + ' = ' + (b * (c + 1)) + '.',
            'Entonces reparto ' + (b * c) + ' y me sobran ' + a + ' − ' + (b * c) + ' = ' + r + '.']
        );
      },
      function () {
        var b = U.al(2, 6), c = U.al(2, 9), a = b * c;
        return U.q(
          'Ya sabes que ' + b + ' × ' + c + ' = ' + a + '. Entonces, ¿cuánto es ' + a + ' ÷ ' + b + '?',
          [c, 'Dividir es lo contrario de multiplicar. Si ' + b + ' veces ' + c + ' da ' + a + ', entonces ' + a + ' repartido entre ' + b + ' da ' + c + '.'],
          [[a, 'El ' + a + ' es lo que se reparte, no el resultado.'],
            [b, 'El ' + b + ' es entre cuántos se reparte. La pregunta es cuánto le toca a cada uno.'],
            [a + b, 'Ahí sumaste. Dividir es repartir, y el resultado es más pequeño que lo que se reparte.']],
          ['La multiplicación dice: ' + b + ' grupos de ' + c + ' forman ' + a + '.', 'La división pregunta lo contrario: si reparto ' + a + ' en ' + b + ' grupos, ¿cuánto hay en cada grupo?', 'Hay ' + c + '.']
        );
      }
    ],
    resumen: 'dividir es repartir en partes iguales. Para comprobar una división, se multiplica.'
  });

  // ------------------------------------------------------------------
  AE.leccion({
    id: 'mat-02',
    area: 'mat',
    titulo: 'Multiplicar es sumar varias veces lo mismo',
    pasos: [
      '## Para qué sirve',
      'Vas a la tienda y compras 3 bolsas de naranjas. Cada bolsa trae 4 naranjas. ¿Cuántas naranjas llevas en total? Puedes contarlas una por una, pero hay una forma más rápida: multiplicar.',
      'Multiplicar te va a servir todo el tiempo en las fracciones. Por eso vale la pena entenderlo bien desde ya.',
      '## La explicación',
      'Tienes 3 bolsas y en cada una hay 4 naranjas. Para saber el total, sumas las naranjas de cada bolsa: 4 + 4 + 4. Eso da 12.',
      'Fíjate que sumaste el mismo número, el 4, varias veces. Lo sumaste 3 veces. Cuando sumas el mismo número varias veces, eso se llama *multiplicar*.',
      'Se dice así: 3 veces 4. O también: 3 por 4. Y se escribe así: 3 × 4 = 12. La palabra por quiere decir veces.',
      'Hagámoslo con palmadas. Da 4 palmadas seguidas y haz una pausa. Otras 4 y pausa. Otras 4. Hiciste 3 grupos de 4 palmadas. En total diste 12 palmadas. Eso es 3 × 4.',
      'El resultado de una multiplicación se llama *producto*. En 3 × 4 = 12, el producto es 12.',
      '## De dónde sale',
      'Algo muy útil: el orden no cambia el resultado. 3 × 4 da lo mismo que 4 × 3. ¿Por qué? Te lo explico con una cubeta de huevos.',
      'Imagina una cubeta pequeña que tiene 3 filas, y en cada fila hay 4 huevos. Si pasas la mano fila por fila, cuentas 4, y 4, y 4. Son 3 veces 4.',
      'Ahora gira la cubeta. Los mismos huevos quedan en 4 filas de 3. Cuentas 3, y 3, y 3, y 3. Son 4 veces 3. No pusiste ni quitaste ningún huevo, así que el total es el mismo: 12.',
      'Hay dos casos especiales. Multiplicar por 1 deja el número igual: una vez 7 es 7. Y multiplicar por 0 da 0: si tienes cero bolsas, no tienes ninguna naranja, sin importar cuántas trae cada bolsa.',
      'Multiplicar y dividir son operaciones contrarias. Si sabes que 3 × 4 = 12, entonces también sabes que 12 ÷ 3 = 4, y que 12 ÷ 4 = 3. Con una sola multiplicación aprendes dos divisiones.',
      '## Las tablas',
      'Las tablas de multiplicar son las multiplicaciones más usadas, ya resueltas. No son magia: cada tabla es contar saltando. La tabla del 2 es contar de 2 en 2: 2, 4, 6, 8, 10. La tabla del 5 es contar de 5 en 5: 5, 10, 15, 20, 25.',
      'Si olvidas un resultado, no te asustes. Siempre puedes volver a la suma. ¿Cuánto es 4 × 6? Sumo el 6 cuatro veces: 6, 12, 18, 24. Es 24.',
      '## Un ejemplo resuelto',
      'Un bus tiene 5 filas de sillas, y en cada fila hay 4 sillas. ¿Cuántas sillas hay en total?',
      'Hay 5 grupos de 4. Eso es 5 × 4. Cuento de 4 en 4, cinco veces: 4, 8, 12, 16, 20. Hay 20 sillas.'
    ],
    practica: [
      {
        p: '¿Cuál de estas sumas es lo mismo que 3 × 5?',
        o: ['5 + 5 + 5', '3 + 5', '3 + 3 + 3'],
        e: ['3 por 5 quiere decir 3 veces el 5. Y 5 + 5 + 5 = 15.',
          '3 + 5 da 8. Multiplicar no es sumar los dos números una sola vez: es repetir uno de ellos.',
          'Ahí el 3 solo aparece tres veces, y da 9. Para que fuera 3 × 5, el 3 tendría que aparecer cinco veces.']
      },
      function () {
        var a = U.al(2, 6), b = U.al(2, 9), p = a * b, cuenta = [];
        for (var k = 1; k <= a; k++) cuenta.push(b * k);
        return U.q(
          '¿Cuánto es ' + a + ' × ' + b + '?',
          [p, 'Porque ' + a + ' veces el ' + b + ' da ' + p + '.'],
          [[a + b, 'Ahí sumaste los dos números. Multiplicar es repetir: ' + a + ' veces el ' + b + '.'],
            [p + b, 'Te pasaste una vez. Ese es el resultado de ' + (a + 1) + ' × ' + b + '.'],
            [p - b, 'Te faltó una vez. Ese es el resultado de ' + (a - 1) + ' × ' + b + '.']],
          [a + ' × ' + b + ' quiere decir ' + a + ' veces el ' + b + '.', 'Cuento de ' + b + ' en ' + b + ': ' + cuenta.join(', ') + '.', 'El resultado es ' + p + '.']
        );
      },
      function () {
        var a = U.al(2, 6), b = U.al(a + 1, 9);
        return U.q(
          'Ya sabes que ' + a + ' × ' + b + ' = ' + (a * b) + '. Entonces, ¿cuánto es ' + b + ' × ' + a + '?',
          [a * b, 'El orden no cambia el resultado. Son los mismos huevos de la cubeta, contados por el otro lado.'],
          [[a * b + 1, 'El resultado no cambia al voltear el orden. No hay que sumar ni quitar nada.'],
            [a + b, 'Ahí sumaste. Sigue siendo una multiplicación, solo que con el orden volteado.'],
            [b * b, 'Ahí multiplicaste el ' + b + ' por sí mismo. La pregunta es ' + b + ' × ' + a + '.']],
          ['En la multiplicación el orden no importa.', a + ' filas de ' + b + ' es lo mismo que ' + b + ' filas de ' + a + '.', 'Entonces el resultado es el mismo: ' + (a * b) + '.']
        );
      },
      {
        p: 'Tienes cero bolsas de dulces. Cada bolsa trae 8 dulces. ¿Cuántos dulces tienes?',
        o: ['0', '8', '1'],
        e: ['Si no tienes ninguna bolsa, no tienes ningún dulce. Cualquier número multiplicado por 0 da 0.',
          'Tendrías 8 si tuvieras una bolsa. Pero tienes cero bolsas.',
          'No importa cuántos dulces trae cada bolsa: si no hay bolsas, no hay dulces.']
      },
      function () {
        var a = U.al(2, 5), b = U.al(2, 6);
        var caso = U.uno([['cajas', 'colores', 'cada caja trae'], ['bolsas', 'panes', 'cada bolsa trae'],
          ['equipos', 'jugadores', 'cada equipo tiene'], ['mesas', 'platos', 'cada mesa tiene']]);
        return U.q(
          'Hay ' + a + ' ' + caso[0] + ', y ' + caso[2] + ' ' + b + ' ' + caso[1] + '. ¿Cuántos ' + caso[1] + ' hay en total?',
          [a * b, 'Son ' + a + ' grupos de ' + b + '. Eso es ' + a + ' × ' + b + ' = ' + (a * b) + '.'],
          [[a + b, 'Ahí sumaste ' + a + ' + ' + b + '. Pero no es un solo grupo: son ' + a + ' grupos, y cada uno tiene ' + b + '.'],
            [a * b + a, 'Te pasaste. Cuenta otra vez de ' + b + ' en ' + b + ', ' + a + ' veces.'],
            [b, 'Ese es el número que tiene un solo grupo. Hay ' + a + ' grupos.']],
          ['Hay ' + a + ' grupos y cada uno tiene ' + b + '.', 'Eso es ' + a + ' veces ' + b + ', o sea ' + a + ' × ' + b + '.', 'El total es ' + (a * b) + '.']
        );
      },
      function () {
        var a = U.al(2, 6), b = U.al(2, 9), p = a * b;
        return U.q(
          'Si ' + a + ' × ' + b + ' = ' + p + ', ¿cuánto es ' + p + ' ÷ ' + a + '?',
          [b, 'Multiplicar y dividir son contrarias. Si ' + a + ' grupos de ' + b + ' forman ' + p + ', entonces ' + p + ' repartido en ' + a + ' grupos deja ' + b + ' en cada uno.'],
          [[a, 'El ' + a + ' es entre cuántos se reparte. El resultado es el otro número de la multiplicación.'],
            [p, 'El ' + p + ' es lo que se reparte, no el resultado.'],
            [p - a, 'Ahí restaste. Dividir es repartir en grupos iguales.'],
            [p + a, 'Ahí sumaste. Al repartir, el resultado es más pequeño que lo que se reparte.']],
          ['La multiplicación dice que ' + a + ' grupos de ' + b + ' forman ' + p + '.', 'Si reparto ' + p + ' en ' + a + ' grupos iguales, en cada grupo quedan ' + b + '.']
        );
      }
    ],
    resumen: 'multiplicar es sumar el mismo número varias veces. El orden no cambia el resultado.'
  });

  // ------------------------------------------------------------------
  AE.leccion({
    id: 'mat-03',
    area: 'mat',
    titulo: 'Múltiplos y divisores',
    pasos: [
      '## Para qué sirve',
      'En las fracciones vas a necesitar dos herramientas todo el tiempo: los múltiplos y los divisores. Con los múltiplos vas a poder sumar fracciones. Con los divisores vas a poder simplificarlas. Hoy las conocemos con calma.',
      '## Los múltiplos',
      'Los *múltiplos* de un número son los que salen al contar saltando de ese número en ese número. Los múltiplos de 3 son: 3, 6, 9, 12, 15, 18, y siguen sin terminar nunca.',
      'Es lo mismo que la tabla de multiplicar. 3 × 1 = 3. 3 × 2 = 6. 3 × 3 = 9. Cada resultado de la tabla del 3 es un múltiplo de 3.',
      'Hazlo con palmadas. Cuenta en voz baja y da una palmada cada tres números. Uno, dos, tres: palmada. Cuatro, cinco, seis: palmada. Los números donde cae la palmada son los múltiplos de 3.',
      '¿Cómo saber si un número es múltiplo de otro? Divide. Si la división es exacta y no sobra nada, sí es múltiplo. 20 es múltiplo de 5, porque 20 ÷ 5 = 4 y no sobra nada. En cambio 22 no es múltiplo de 5, porque sobran 2.',
      'Los múltiplos de 2 tienen nombre propio: se llaman números *pares*. Son 2, 4, 6, 8, 10 y los que siguen. Los números que no son pares se llaman impares.',
      '## Los divisores',
      'Ahora al revés. Los *divisores* de un número son los números que lo reparten exacto, sin que sobre nada.',
      'Busquemos los divisores de 12. Piensa en 12 galletas. ¿Las puedo repartir entre 2 sin que sobre? Sí: 6 para cada uno. Entonces 2 es divisor de 12. ¿Entre 3? Sí: 4 para cada uno. ¿Entre 4? Sí: 3 para cada uno.',
      '¿Entre 5? No: cada uno recibe 2 y sobran 2. Entonces 5 no es divisor de 12. ¿Entre 6? Sí: 2 para cada uno.',
      'Los divisores de 12 son: 1, 2, 3, 4, 6 y 12. El 1 siempre es divisor, porque repartir entre uno solo es dárselo todo. Y el número mismo también: 12 galletas entre 12 personas, una para cada una.',
      '## De dónde sale',
      'Múltiplo y divisor son la misma relación, vista desde los dos lados. Como 3 × 4 = 12, decimos que 12 es múltiplo de 3. Y también decimos que 3 es divisor de 12. Si una frase es cierta, la otra también.',
      'Un truco para no confundirte. Los múltiplos son iguales o más grandes que el número, porque salen de multiplicar. Los divisores son iguales o más pequeños, porque salen de dividir.',
      '## Un ejemplo resuelto',
      '¿Cuáles son los divisores de 10? Pruebo en orden. Entre 1: sí. Entre 2: sí, da 5. Entre 3: no, sobra 1. Entre 4: no, sobran 2. Entre 5: sí, da 2. Del 6 al 9 no se puede. Entre 10: sí.',
      'Entonces los divisores de 10 son: 1, 2, 5 y 10.'
    ],
    practica: [
      function () {
        var k = U.al(3, 9), m = k * U.al(2, 6);
        var malas = [m + 1, m - 1, m + 2, m - 2].filter(function (x) { return x % k !== 0; });
        return U.q(
          '¿Cuál de estos números es múltiplo de ' + k + '?',
          [m, 'Porque ' + m + ' ÷ ' + k + ' = ' + (m / k) + ' y no sobra nada. Está en la tabla del ' + k + '.'],
          malas.map(function (x) {
            return [x, 'Si divides ' + x + ' entre ' + k + ', sobra ' + (x % k) + '. Como sobra, no es múltiplo de ' + k + '.'];
          }),
          ['Un múltiplo de ' + k + ' es un número de la tabla del ' + k + '.', 'Pruebo dividiendo cada opción entre ' + k + '.', 'La única que se divide exacto es ' + m + ', porque ' + k + ' × ' + (m / k) + ' = ' + m + '.']
        );
      },
      function () {
        var n = U.uno([12, 15, 18, 20, 24, 30]);
        var si = [2, 3, 4, 5, 6].filter(function (x) { return n % x === 0; });
        var no = [4, 5, 7, 8, 9].filter(function (x) { return n % x !== 0; });
        var d = U.uno(si);
        return U.q(
          '¿Cuál de estos números es divisor de ' + n + '?',
          [d, 'Porque ' + n + ' ÷ ' + d + ' = ' + (n / d) + ' y no sobra nada.'],
          U.barajar(no).map(function (x) {
            return [x, 'Si repartes ' + n + ' entre ' + x + ', sobra ' + (n % x) + '. Como sobra, ' + x + ' no es divisor de ' + n + '.'];
          }),
          ['Un divisor de ' + n + ' es un número que lo reparte exacto.', 'Pruebo: ' + n + ' ÷ ' + d + ' = ' + (n / d) + ', sin que sobre nada.', 'Entonces ' + d + ' es divisor de ' + n + '.']
        );
      },
      {
        p: 'Sabemos que 12 es múltiplo de 3. ¿Cuál de estas frases dice lo mismo?',
        o: ['3 es divisor de 12', '3 es múltiplo de 12', '12 es divisor de 3'],
        e: ['Múltiplo y divisor son la misma relación vista desde los dos lados. Como 3 × 4 = 12, el 12 es múltiplo de 3 y el 3 es divisor de 12.',
          'Los múltiplos de 12 son 12, 24, 36: todos iguales o más grandes que 12. El 3 es más pequeño, así que no puede ser múltiplo de 12.',
          'Un divisor es igual o más pequeño que el número. 12 es más grande que 3, así que no puede ser su divisor.']
      },
      function () {
        var k = U.al(3, 9), n = U.al(3, 5), lista = [];
        for (var i = 1; i <= n; i++) lista.push(k * i);
        var sig = k * (n + 1);
        return U.q(
          'Los múltiplos de ' + k + ' van así: ' + lista.join(', ') + '. ¿Cuál sigue?',
          [sig, 'Se le suma ' + k + ' al último: ' + (k * n) + ' + ' + k + ' = ' + sig + '.'],
          [[k * n + 1, 'Los múltiplos de ' + k + ' no van de uno en uno. Van saltando de ' + k + ' en ' + k + '.'],
            [sig + k, 'Te saltaste uno. Ese es el que viene después del que sigue.'],
            [sig - 1, 'Casi. Cuenta ' + k + ' a partir de ' + (k * n) + '.']],
          ['Los múltiplos de ' + k + ' se consiguen contando de ' + k + ' en ' + k + '.', 'El último que dije fue ' + (k * n) + '.', (k * n) + ' + ' + k + ' = ' + sig + '.']
        );
      },
      {
        p: '¿Cuál de estos números es par?',
        o: ['14', '9', '21'],
        e: ['14 es múltiplo de 2, porque 14 ÷ 2 = 7 y no sobra nada.',
          'Si repartes 9 entre 2, sobra 1. Entonces 9 es impar.',
          'Si repartes 21 entre 2, sobra 1. Entonces 21 es impar.']
      },
      {
        p: '¿Cuál número es divisor de cualquier número?',
        o: ['El 1', 'El 2', 'El 10'],
        e: ['Repartir entre uno solo es dárselo todo, y nunca sobra nada. Por eso el 1 es divisor de todos los números.',
          'El 2 solo es divisor de los números pares. Por ejemplo, no es divisor de 7.',
          'El 10 solo es divisor de algunos números, como 20 o 30. No es divisor de 12, por ejemplo.']
      }
    ],
    resumen: 'los múltiplos salen de multiplicar y los divisores salen de dividir. Si 12 es múltiplo de 3, entonces 3 es divisor de 12.'
  });
})(window.AE = window.AE || {});
