/* Matemáticas, lecciones 4 a 7: qué es una fracción y cómo se nombra. */
(function (AE) {
  'use strict';
  var U = AE.util, N = AE.Numeros, f = U.f;

  // ------------------------------------------------------------------
  AE.leccion({
    id: 'mat-04',
    area: 'mat',
    titulo: 'Qué es una fracción',
    pasos: [
      '## Para qué sirve',
      'Hasta ahora contamos cosas enteras: 3 arepas, 5 galletas. Pero muchas veces lo que tenemos es un pedazo: media arepa, un pedacito de panela, un rato de la clase. Para hablar de pedazos con exactitud existen las fracciones.',
      '## La explicación',
      'Primero necesitamos una cosa completa. A esa cosa completa la vamos a llamar *el entero*. Puede ser una arepa, una hoja de papel, una barra de chocolate o una hora.',
      'Ahora partimos el entero en *partes iguales*. Tienen que ser iguales: todas del mismo tamaño.',
      'Hazlo con tus manos. Consigue una hoja de papel. La hoja completa es el entero. Dóblala por la mitad, juntando un borde con el otro, y pasa el dedo por el doblez para marcarlo bien.',
      'Abre la hoja y toca el doblez. El doblez divide la hoja en dos partes del mismo tamaño. Cada parte se llama *un medio*, o una mitad. Dos medios forman la hoja entera.',
      'Vuelve a doblar la hoja por la mitad, y luego dóblala otra vez por la mitad. Ábrela y toca los dobleces. Ahora hay cuatro partes iguales. Cada una se llama *un cuarto*.',
      'Si tomas una de esas cuatro partes, tienes un cuarto de la hoja. Si tomas tres, tienes tres cuartos de la hoja. Eso es una *fracción*: un número que dice cuántas partes tomas, de las partes iguales en que partiste el entero.',
      'Una fracción siempre responde dos preguntas. La primera: ¿en cuántas partes iguales partí el entero? La segunda: ¿cuántas de esas partes tomo?',
      '## De dónde sale',
      '¿Por qué las partes tienen que ser iguales? Imagina que partes una arepa con un amigo, pero le das un pedazo grande y te quedas con uno chiquito. Hay dos pedazos, pero no es justo, y nadie diría que te tocó la mitad.',
      'Solo cuando los pedazos son del mismo tamaño puedo decir con seguridad cuánto tiene cada uno. Por eso la fracción exige partes iguales: para que el número diga la verdad.',
      'La palabra fracción viene de fracturar, que significa romper o partir. Una fracción es un entero partido.',
      '## Los nombres de las partes',
      'El nombre de cada parte depende de en cuántas se partió el entero. En 2 partes: medios. En 3: tercios. En 4: cuartos. En 5: quintos. En 6: sextos.',
      'Y siguen así. En 7 partes: séptimos. En 8: octavos. En 9: novenos. En 10: décimos.',
      '## Un ejemplo resuelto',
      'Una mandarina tiene 8 gajos del mismo tamaño. Te comes 3. ¿Qué fracción de la mandarina te comiste?',
      'Primera pregunta: ¿en cuántas partes iguales está partida? En 8. Entonces las partes se llaman octavos. Segunda pregunta: ¿cuántas tomaste? 3. Te comiste {3/8} de la mandarina.'
    ],
    practica: [
      {
        p: 'Partes una arepa en 4 partes iguales y te comes una. ¿Qué fracción de la arepa te comiste?',
        o: ['{1/4}', '{1/2}', '{4/4}'],
        e: ['La arepa se partió en 4, así que cada parte es un cuarto. Tomaste una: un cuarto.',
          'Un medio sería si la arepa se hubiera partido en 2 partes. Aquí se partió en 4.',
          'Cuatro cuartos sería comerte las 4 partes, o sea la arepa entera. Solo te comiste una.']
      },
      {
        p: 'Un entero se parte en 3 partes iguales. ¿Cómo se llama cada parte?',
        o: ['Un tercio', 'Un medio', 'Un cuarto'],
        e: ['Cuando el entero se parte en 3, las partes se llaman tercios.',
          'Los medios salen cuando el entero se parte en 2.',
          'Los cuartos salen cuando el entero se parte en 4.']
      },
      {
        p: 'Parto una panela en dos pedazos: uno grande y uno pequeño. ¿Puedo decir que cada pedazo es un medio?',
        o: ['No, porque los pedazos no son iguales', 'Sí, porque son dos pedazos', 'Sí, porque es la misma panela'],
        e: ['Para hablar de medios, las dos partes tienen que ser del mismo tamaño.',
          'No basta con que sean dos pedazos. Tienen que ser iguales. Si no, el número no dice la verdad.',
          'Que sea la misma panela no alcanza. Lo que importa es que las partes sean iguales.']
      },
      function () {
        var d = U.uno([5, 6, 8, 10]), n;
        do { n = U.al(1, d - 2); } while (n === d - n);
        return U.q(
          'Una barra de chocolate tiene ' + d + ' cuadritos iguales. Te comes ' + (n === 1 ? 'uno' : n) + '. ¿Qué fracción de la barra te comiste?',
          [f(n, d), 'La barra está partida en ' + d + ' partes iguales y tomaste ' + (n === 1 ? 'una' : n) + '.'],
          [[f(d - n, d), 'Esa es la fracción que quedó en la barra, no la que te comiste.'],
            [f(n, d - n), 'Ahí comparaste lo que te comiste con lo que sobró. La fracción se compara con el total de partes, que es ' + d + '.']],
          ['Primero: ¿en cuántas partes iguales está partida la barra? En ' + d + '.', 'Segundo: ¿cuántas tomaste? ' + n + '.', 'La fracción es ' + f(n, d) + '.']
        );
      },
      {
        p: '¿Qué dos cosas dice siempre una fracción?',
        o: ['En cuántas partes iguales se partió el entero, y cuántas se toman', 'Cuánto pesa el entero, y cuánto cuesta', 'Cuántos enteros hay, y de qué color son'],
        e: ['Esas son las dos preguntas que responde toda fracción.',
          'Una fracción no habla de peso ni de precio. Habla de partes iguales y de cuántas se toman.',
          'Una fracción no habla de colores. Habla de partes iguales y de cuántas se toman.']
      },
      {
        p: 'Doblas una hoja por la mitad, y luego otra vez por la mitad. Al abrirla, ¿cuántas partes iguales tiene?',
        o: ['4', '2', '3'],
        e: ['El primer doblez hace 2 partes. El segundo parte cada una en 2: quedan 4 partes iguales, que son cuartos.',
          'Con un solo doblez quedan 2 partes. Pero doblaste dos veces.',
          'Cada doblez parte por la mitad todas las partes que había: de 2 pasa a 4, no a 3.']
      }
    ],
    resumen: 'una fracción dice cuántas partes se toman, de las partes iguales en que se partió un entero.'
  });

  // ------------------------------------------------------------------
  AE.leccion({
    id: 'mat-05',
    area: 'mat',
    titulo: 'Numerador y denominador',
    pasos: [
      '## Para qué sirve',
      'Ya sabes decir una fracción con palabras: tres cuartos. Ahora vas a aprender cómo se escribe con números, y qué significa cada número. Así podrás entender cualquier fracción que te dicten o que encuentres.',
      '## La explicación',
      'Una fracción se escribe con dos números, uno encima del otro, separados por una raya acostada. Por ejemplo, {3/4} se escribe con un 3 arriba, una raya en el medio y un 4 abajo.',
      'El número de abajo se llama *denominador*. Dice en cuántas partes iguales se partió el entero. En {3/4}, el denominador es 4: el entero se partió en 4 partes iguales.',
      'El número de arriba se llama *numerador*. Dice cuántas de esas partes se toman. En {3/4}, el numerador es 3: se toman 3 partes.',
      'Cuando te dicten una fracción, también puedes oír: 3 sobre 4. Significa lo mismo: el 3 está sobre el 4, es decir, encima.',
      '## De dónde salen esos nombres',
      'Denominador viene de denominar, que significa dar nombre. El denominador le da el nombre a las partes. Si es 4, las partes se llaman cuartos. Si es 8, se llaman octavos.',
      'Numerador viene de numerar, que significa contar. El numerador cuenta cuántas partes hay: una, dos, tres.',
      'Un truco para no confundirlos: denominador empieza por la letra de, igual que la palabra debajo. El denominador va debajo.',
      'Piénsalo así. El denominador va abajo porque es la base: primero hay que partir el entero, y solo después se pueden contar las partes. El numerador se apoya encima de esa base.',
      '## Cómo se lee',
      'Primero se dice el numerador, como un número normal. Después se dice el denominador, con su nombre especial. Un 2 arriba y un 5 abajo se lee: {2/5}.',
      'Recuerda los nombres. Con 2 abajo: medios. Con 3: tercios. Con 4: cuartos. Con 5: quintos. Con 6: sextos. Con 7: séptimos. Con 8: octavos. Con 9: novenos. Con 10: décimos.',
      'Cuando el denominador es más grande que 10, se dice el número y se le agrega la terminación avos. Con 11 abajo: onceavos. Con 12: doceavos. Con 20: veinteavos. Por ejemplo, un 5 arriba y un 12 abajo se lee: {5/12}.',
      'Cuando el numerador es 1, se dice un, y el nombre va sin la ese del final. [1 sobre 4|Uno sobre cuatro] se lee: un cuarto. [1 sobre 2|Uno sobre dos] se lee: un medio.',
      '## Un ejemplo resuelto',
      'Te dictan: 5 sobre 8. ¿Qué significa? El 8 va abajo, es el denominador: el entero se partió en 8 partes iguales, o sea, en octavos. El 5 va arriba, es el numerador: se toman 5 partes. La fracción se lee: {5/8}.'
    ],
    practica: [
      function () {
        var d = U.al(3, 12), n = U.al(1, d - 1);
        if (n === d - n) n = n > 1 ? n - 1 : n + 1;
        return U.q(
          'En la fracción ' + f(n, d) + ', ¿cuál es el denominador?',
          [d, 'El denominador es el número de abajo. Dice que el entero se partió en ' + d + ' partes iguales.'],
          [[n, 'El ' + n + ' es el numerador: el número de arriba, que cuenta las partes que se toman.'],
            [n + d, 'Ahí sumaste los dos números. El denominador es solamente el de abajo.']],
          ['La fracción ' + f(n, d) + ' se escribe con un ' + n + ' arriba y un ' + d + ' abajo.', 'El denominador va debajo: es el ' + d + '.']
        );
      },
      function () {
        var d = U.al(3, 12), n = U.al(1, d - 1);
        if (n === d - n) n = n > 1 ? n - 1 : n + 1;
        return U.q(
          'En la fracción ' + f(n, d) + ', ¿cuál es el numerador?',
          [n, 'El numerador es el número de arriba. Dice que se toma' + (n === 1 ? ' una parte.' : 'n ' + n + ' partes.')],
          [[d, 'El ' + d + ' es el denominador: el número de abajo, que dice en cuántas partes se partió el entero.'],
            [d - n, 'Ese número son las partes que no se toman. El numerador cuenta las que sí se toman.']],
          ['La fracción ' + f(n, d) + ' se escribe con un ' + n + ' arriba y un ' + d + ' abajo.', 'El numerador va arriba: es el ' + n + '.']
        );
      },
      {
        p: '¿Qué dice el denominador de una fracción?',
        o: ['En cuántas partes iguales se partió el entero', 'Cuántas partes se toman', 'Cuántos enteros hay'],
        e: ['El denominador da el nombre de las partes: medios, tercios, cuartos.',
          'Eso lo dice el numerador, que es el número de arriba.',
          'El denominador no cuenta enteros. Dice en cuántas partes iguales se partió un entero.']
      },
      function () {
        var d = U.uno([3, 4, 5, 6, 7, 8, 9, 10, 12]), n = U.al(2, d - 1);
        return U.q(
          'Una fracción tiene un ' + n + ' arriba y un ' + d + ' abajo. ¿Cómo se lee?',
          [N.fraccion(n, d), 'Primero el numerador, ' + N.cardinal(n) + '. Después el denominador con su nombre especial: ' + N.parte(d, true) + '.'],
          [[N.fraccion(d, n), 'La leíste al revés. Primero se dice el número de arriba, que es ' + n + '.'],
            [N.cardinal(n) + ' ' + N.cardinal(d), 'El denominador no se lee como un número normal. Tiene nombre especial: ' + N.parte(d, true) + '.']],
          ['El de arriba se lee normal: ' + N.cardinal(n) + '.', 'El de abajo, ' + d + ', tiene nombre especial: ' + N.parte(d, true) + '.', 'Se lee: ' + N.fraccion(n, d) + '.']
        );
      },
      {
        p: '¿Cómo se escribe la fracción dos tercios?',
        o: ['Un 2 arriba, una raya y un 3 abajo', 'Un 3 arriba, una raya y un 2 abajo', 'Un 2 y un 3, uno al lado del otro'],
        e: ['El numerador, 2, va arriba. El denominador, 3, que da el nombre de tercios, va abajo.',
          'Eso sería tres medios. En dos tercios, el 3 es el que da el nombre, así que va abajo.',
          'Los números de una fracción van uno encima del otro, separados por una raya.']
      },
      {
        p: 'Una torta se parte en 6 partes iguales y se reparten 5. ¿Qué fracción de la torta se repartió?',
        o: ['{5/6}', '{6/5}', '{1/6}'],
        e: ['El 6 va abajo porque la torta se partió en 6. El 5 va arriba porque se repartieron 5 partes.',
          'Ahí los números quedaron al revés. Abajo va el número de partes en que se partió la torta, que es 6.',
          'Un sexto es lo que quedó sin repartir. La pregunta es cuánto se repartió.']
      }
    ],
    resumen: 'el denominador va debajo y dice en cuántas partes iguales se partió el entero. El numerador va arriba y cuenta las partes que se toman.'
  });

  // ------------------------------------------------------------------
  AE.leccion({
    id: 'mat-06',
    area: 'mat',
    titulo: 'Entre más partes, más pequeño cada pedazo',
    pasos: [
      '## Para qué sirve',
      'Aquí hay una trampa en la que cae casi todo el mundo. Como 8 es más grande que 4, mucha gente cree que un octavo es más grande que un cuarto. Y es al revés. Hoy vas a entender por qué, para no caer nunca en esa trampa.',
      '## La explicación',
      'Imagina una arepa. Si la repartes entre 2 personas, a cada una le toca la mitad: un buen pedazo. Si repartes esa misma arepa entre 8 personas, a cada una le toca un pedacito.',
      'La arepa es la misma. Lo que cambia es entre cuántos se reparte. Entre más personas, menos le toca a cada una.',
      'El denominador es ese número: entre cuántos se reparte el entero. Por eso, cuando el denominador crece, cada parte se vuelve más pequeña.',
      'Compruébalo con la hoja de papel. Dóblala una vez por la mitad y toca una de las partes: es un medio. Dóblala otra vez: ahora cada parte es un cuarto, y es más pequeña. Dóblala una vez más: cada parte es un octavo, más pequeña todavía.',
      'Cada vez que doblas hay más partes, pero cada parte es más pequeña. Tus dedos lo sienten: {1/2} es más grande que {1/4}, y {1/4} es más grande que {1/8}.',
      '## De dónde sale',
      'En los números para contar, 8 es más que 4, porque 8 cosas son más cosas. Pero en una fracción el denominador no cuenta cosas: dice en cuántos pedazos se cortó el entero. Entre más cortes, pedazos más chiquitos.',
      'Piensa en una gaseosa repartida en vasos. Si la sirves en 3 vasos, cada vaso queda lleno. Si la sirves en 10 vasos, cada vaso queda con un poquito. La gaseosa no creció. Solo se repartió entre más.',
      '## Cuando el denominador es el mismo',
      'Ahora otro caso. Si dos fracciones tienen el mismo denominador, los pedazos son del mismo tamaño. Entonces gana la que tiene más pedazos, o sea, la del numerador más grande.',
      'Por ejemplo, {3/8} y {5/8}. Las dos hablan de octavos. Cinco pedazos son más que tres pedazos del mismo tamaño. Entonces {5/8} es mayor.',
      '## Un ejemplo resuelto',
      '¿Qué es más: {1/3} de una panela, o {1/6} de la misma panela?',
      'Las dos fracciones toman un solo pedazo. La diferencia está en el tamaño del pedazo. En tercios, la panela se partió en 3. En sextos, se partió en 6. Con menos cortes, los pedazos son más grandes. Entonces {1/3} es más que {1/6}.'
    ],
    practica: [
      function () {
        var a = U.al(2, 6), b = U.al(a + 1, 10);
        return U.q(
          '¿Cuál es más grande: ' + f(1, a) + ' o ' + f(1, b) + '?',
          [f(1, a), 'Con ' + a + ' partes los pedazos son más grandes que con ' + b + ' partes. Entre menos se reparte, más le toca a cada uno.'],
          [[f(1, b), 'Esa es la trampa. El ' + b + ' es un número más grande, pero partir en ' + b + ' deja pedazos más pequeños que partir en ' + a + '.'],
            ['Son iguales', 'No son iguales. Las dos toman un solo pedazo, pero los pedazos son de distinto tamaño.']],
          ['Las dos fracciones toman un solo pedazo.', 'En la primera, el entero se partió en ' + a + '. En la segunda, en ' + b + '.', 'Con menos partes, cada pedazo es más grande. Gana ' + f(1, a) + '.']
        );
      },
      function () {
        var d = U.al(5, 12), a = U.al(1, d - 2), b = U.al(a + 1, d - 1);
        return U.q(
          '¿Cuál es más grande: ' + f(a, d) + ' o ' + f(b, d) + '?',
          [f(b, d), 'Las dos tienen el mismo denominador, así que los pedazos son del mismo tamaño. ' + b + ' pedazos son más que ' + a + '.'],
          [[f(a, d), 'Los pedazos son del mismo tamaño, porque el denominador es el mismo. Entonces gana la que tiene más pedazos, que es la del numerador ' + b + '.'],
            ['Son iguales', 'No son iguales. Tienen el mismo denominador, pero una toma más pedazos que la otra.']],
          ['El denominador es el mismo: ' + d + '. Los pedazos son del mismo tamaño.', 'Entonces solo comparo los numeradores: ' + b + ' es más que ' + a + '.', 'Gana ' + f(b, d) + '.']
        );
      },
      {
        p: '¿Por qué {1/8} es más pequeño que {1/4}?',
        o: ['Porque al partir en 8, cada pedazo queda más pequeño que al partir en 4', 'Porque 8 es más pequeño que 4', 'Porque las fracciones con 8 siempre valen menos'],
        e: ['Entre más partes se hacen del mismo entero, más pequeña es cada una.',
          '8 no es más pequeño que 4. Lo que pasa es que el denominador dice en cuántos pedazos se parte el entero, y más pedazos quiere decir pedazos más chiquitos.',
          'No siempre. {7/8} es más que {1/4}. Lo que es más pequeño es cada pedazo, no cualquier fracción con 8.']
      },
      function () {
        var ds = U.barajar([2, 3, 4, 5, 6, 8, 10]).slice(0, 3).sort(function (x, y) { return x - y; });
        return U.q(
          '¿Cuál de estas fracciones es la más pequeña?',
          [f(1, ds[2]), 'Tiene el denominador más grande, ' + ds[2] + '. El entero se partió en más pedazos, así que cada pedazo es el más pequeño.'],
          [[f(1, ds[0]), 'Esa es la más grande. Con solo ' + ds[0] + ' partes, cada pedazo es el más grande de los tres.'],
            [f(1, ds[1]), 'Esa queda en el medio. Hay otra con más partes, y por eso con pedazos más pequeños.']],
          ['Las tres toman un solo pedazo.', 'La más pequeña es la que partió el entero en más pedazos.', 'El denominador más grande es ' + ds[2] + '. La más pequeña es ' + f(1, ds[2]) + '.']
        );
      },
      {
        p: 'Repartes una torta entre más personas que antes. ¿Qué pasa con el pedazo que le toca a cada una?',
        o: ['Es más pequeño', 'Es más grande', 'Queda igual'],
        e: ['La torta es la misma, pero ahora se reparte entre más. A cada persona le toca menos.',
          'Sería más grande si se repartiera entre menos personas.',
          'No puede quedar igual: la misma torta ahora tiene que alcanzar para más personas.']
      },
      {
        p: 'Una gaseosa se reparte en vasos iguales. ¿En cuál caso queda más gaseosa en cada vaso?',
        o: ['Cuando se reparte en 3 vasos', 'Cuando se reparte en 6 vasos', 'Cuando se reparte en 9 vasos'],
        e: ['Con menos vasos, a cada vaso le toca más. Un tercio es más que un sexto y que un noveno.',
          'Con 6 vasos a cada uno le toca un sexto, que es menos que un tercio.',
          'Con 9 vasos a cada uno le toca un noveno: el pedazo más pequeño de los tres.']
      }
    ],
    resumen: 'entre más grande es el denominador, más pequeño es cada pedazo. Y si el denominador es el mismo, gana el numerador más grande.'
  });

  // ------------------------------------------------------------------
  AE.leccion({
    id: 'mat-07',
    area: 'mat',
    titulo: 'El entero, las fracciones grandes y los números mixtos',
    pasos: [
      '## Para qué sirve',
      'A veces tomas todas las partes de un entero. Y a veces necesitas más de un entero: por ejemplo, te comes una arepa completa y la mitad de otra. Hoy aprendes a decir eso con fracciones.',
      '## Cuando tomas todas las partes',
      'Parte una arepa en 4 partes iguales y cómete las 4. ¿Cuánto te comiste? Cuatro cuartos. Pero también es cierto que te comiste la arepa entera. Entonces {4/4} es lo mismo que un entero.',
      'Pasa con cualquier número. {2/2} es un entero. {8/8} es un entero. Siempre que el numerador y el denominador son iguales, la fracción vale uno, porque tomaste todas las partes que había.',
      '## Tres clases de fracciones',
      'Si el numerador es menor que el denominador, tomaste menos partes de las que hay. La fracción vale menos que un entero. Se llama *fracción propia*. Por ejemplo, {3/4}.',
      'Si el numerador es mayor que el denominador, tomaste más partes de las que tiene un solo entero. La fracción vale más que un entero. Se llama *fracción impropia*. Por ejemplo, {5/4}.',
      '¿Cómo puedo tomar cinco cuartos, si una arepa solo tiene cuatro? Necesito otra arepa. Parto dos arepas en cuartos. De la primera tomo los cuatro cuartos, y de la segunda tomo un cuarto más. En total, cinco cuartos.',
      '## El número mixto',
      'Cinco cuartos es una arepa entera y un cuarto de otra. Eso se puede escribir así: {1 1/4}. Se llama *número mixto*, porque mezcla un número entero con una fracción.',
      '## De impropia a mixto',
      'Para pasar una fracción impropia a número mixto, se divide el numerador entre el denominador. Hagámoslo con {7/2}.',
      'Cada 2 medios arman un entero. Entonces pregunto: ¿cuántos grupos de 2 caben en 7? Divido: 7 ÷ 2 = 3, y sobra 1.',
      'El 3 son los enteros que se armaron. El 1 que sobra es un medio suelto. Entonces {7/2} es igual a {3 1/2}. El denominador no cambia, porque los pedazos siguen siendo medios.',
      '## De mixto a impropia',
      'Ahora al revés, con {2 1/3}. Cada entero tiene 3 tercios. Dos enteros tienen 2 × 3 = 6 tercios. Más el tercio suelto, son 7 tercios. Entonces {2 1/3} es igual a {7/3}.',
      'La receta es: entero por denominador, más numerador. Y el denominador se queda igual.',
      '## De dónde sale',
      'Todo sale de una sola idea: un entero tiene tantas partes como diga el denominador. Si son tercios, cada entero tiene 3. Si son cuartos, tiene 4.',
      'Pasar de impropia a mixto es armar enteros con los pedazos. Pasar de mixto a impropia es desarmar los enteros en pedazos. La cantidad es la misma: solo cambia la manera de decirla.'
    ],
    practica: [
      function () {
        var d = U.al(3, 9), tipo = U.al(0, 2);
        var n = tipo === 0 ? U.al(1, d - 1) : tipo === 1 ? d : U.al(d + 1, 2 * d - 1);
        var textos = ['Vale menos que un entero', 'Vale exactamente un entero', 'Vale más que un entero'];
        var razones = [
          'El numerador, ' + n + ', es menor que el denominador, ' + d + '. Se toman menos partes de las que tiene el entero.',
          'El numerador y el denominador son iguales. Se toman todas las partes: es el entero completo.',
          'El numerador, ' + n + ', es mayor que el denominador, ' + d + '. Se toman más partes de las que tiene un solo entero.'];
        var otras = [0, 1, 2].filter(function (k) { return k !== tipo; });
        return U.q(
          '¿Cuánto vale la fracción ' + f(n, d) + '?',
          [textos[tipo], razones[tipo]],
          otras.map(function (k) { return [textos[k], 'Compara los dos números. ' + razones[tipo]]; }),
          ['Un entero tiene ' + d + ' partes, porque el denominador es ' + d + '.', 'Se toman ' + n + ' partes.', razones[tipo]]
        );
      },
      {
        p: '¿Cuántos cuartos tiene un entero?',
        o: ['4', '1', '2'],
        e: ['Un entero partido en cuartos tiene 4 partes. Por eso {4/4} es igual a un entero.',
          'Un cuarto es una sola de las partes. El entero completo tiene 4.',
          'Dos son los medios que tiene un entero. Cuartos tiene 4.']
      },
      function () {
        var d = U.al(2, 6), e = U.al(1, 4), r = U.al(1, d - 1), n = e * d + r;
        return U.q(
          'Pasa a número mixto la fracción ' + f(n, d) + '.',
          ['{' + e + ' ' + r + '/' + d + '}', n + ' ÷ ' + d + ' = ' + e + ', y sobra ' + r + '. ' + (e === 1 ? 'Se arma un entero' : 'Se arman ' + e + ' enteros') + ' y queda' + (r === 1 ? ' una parte suelta.' : 'n ' + r + ' partes sueltas.')],
          [['{' + r + ' ' + e + '/' + d + '}', 'Quedaron al revés. El resultado de la división son los enteros, y lo que sobra es el numerador.'],
            ['{' + e + ' ' + r + '/' + n + '}', 'El denominador no cambia: los pedazos siguen siendo ' + N.parte(d, true) + '.'],
            ['{' + (e + 1) + ' ' + r + '/' + d + '}', 'Te sobró un entero. Revisa la división: ' + n + ' ÷ ' + d + '.']],
          ['Cada ' + d + ' ' + N.parte(d, true) + ' arman un entero.', 'Divido: ' + n + ' ÷ ' + d + ' = ' + e + ', y sobra ' + r + '.', 'Los enteros son ' + e + '. Lo que sobra, ' + r + ', va de numerador. El denominador sigue siendo ' + d + '.']
        );
      },
      function () {
        var d = U.al(2, 6), e = U.al(1, 4), r = U.al(1, d - 1), n = e * d + r;
        return U.q(
          'Pasa a fracción impropia el número mixto {' + e + ' ' + r + '/' + d + '}.',
          [f(n, d), 'Entero por denominador, más numerador: ' + e + ' × ' + d + ' = ' + (e * d) + ', y ' + (e * d) + ' + ' + r + ' = ' + n + '. El denominador se queda en ' + d + '.'],
          [[f(e + r, d), 'Ahí sumaste el entero con el numerador. Primero hay que desarmar los enteros: cada uno tiene ' + d + ' partes.'],
            [f(e * r, d), 'Ahí multiplicaste el entero por el numerador. Se multiplica por el denominador, que dice cuántas partes tiene cada entero.'],
            [f(n, d + e), 'El denominador no cambia: los pedazos siguen siendo ' + N.parte(d, true) + '.'],
            [f(n + 1, d), 'Casi. Revisa la cuenta: ' + e + ' × ' + d + ' + ' + r + '.']],
          ['Cada entero tiene ' + d + ' ' + N.parte(d, true) + '.', 'Los enteros dan ' + e + ' × ' + d + ' = ' + (e * d) + ' partes.', 'Más ' + (r === 1 ? 'la parte suelta' : 'las ' + r + ' partes sueltas') + ': ' + (e * d) + ' + ' + r + ' = ' + n + '.', 'La fracción es ' + f(n, d) + '.']
        );
      },
      {
        p: 'Te comes una arepa entera y la mitad de otra. ¿Cómo se dice eso con un número mixto?',
        o: ['{1 1/2}', '{2 1/2}', '{1/2}'],
        e: ['Un entero, por la arepa completa, y un medio, por la mitad de la otra.',
          'Eso serían dos arepas enteras y media más. Solo te comiste una entera.',
          'Un medio es solo la mitad. Falta contar la arepa entera.']
      },
      {
        p: '¿Cómo se llama una fracción que tiene el numerador más grande que el denominador?',
        o: ['Fracción impropia', 'Fracción propia', 'Número entero'],
        e: ['Se llama impropia, y vale más que un entero.',
          'La fracción propia es la que tiene el numerador más pequeño que el denominador. Vale menos que un entero.',
          'No es un número entero. Es una fracción que vale más que un entero.']
      }
    ],
    resumen: 'cuando el numerador y el denominador son iguales, la fracción vale un entero. Si el numerador es mayor, vale más que un entero y se puede decir como número mixto.'
  });
})(window.AE = window.AE || {});
