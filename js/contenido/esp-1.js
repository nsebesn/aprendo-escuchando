/* Español, lecciones 1 a 4: letras, sílabas, sílaba tónica y tilde. */
(function (AE) {
  'use strict';

  // ------------------------------------------------------------------
  AE.leccion({
    id: 'esp-01',
    area: 'esp',
    titulo: 'Letras y sonidos',
    pasos: [
      '## Para qué sirve',
      'Cuando hablamos, hacemos sonidos con la boca. Cuando escribimos, usamos letras. Las letras son la manera de guardar los sonidos, para que otra persona los pueda leer después. Hoy vamos a conocer bien las letras, porque todo lo demás del español se construye con ellas.',
      '## La explicación',
      'El abecedario del español tiene 27 letras. Se dividen en dos familias: las vocales y las consonantes.',
      'Las *vocales* son cinco: a, e, i, o, u. Dilas en voz alta, despacio. Fíjate que en todas la boca está abierta y el aire sale libre, sin que nada lo estorbe.',
      'Pon una mano frente a tu boca y di: a. Ahora di: o. Ahora di: u. Sientes que el aire sale suave y seguido. Lo único que cambia es la forma de tus labios.',
      'Las *consonantes* son todas las demás letras. En las consonantes algo estorba el aire: los labios, la lengua o los dientes.',
      'Compruébalo. Di despacio la palabra mamá. Tus labios se cierran dos veces: esa es la letra eme. Ahora di la palabra tapa. La lengua golpea detrás de los dientes: esa es la letra te.',
      'Las consonantes casi siempre necesitan una vocal a su lado para sonar bien. Por eso se llaman consonantes: porque suenan con otra. En cambio, una vocal puede sonar sola.',
      '## De dónde sale la dificultad',
      'Sería muy fácil si cada sonido tuviera una sola letra. Pero en español hay sonidos que se escriben con letras distintas. Por ejemplo, la be larga y la ve corta suenan igual. Burro se escribe con be larga y vaca se escribe con ve corta, pero al oírlas no se nota la diferencia.',
      'También hay una letra que no suena: la hache. La palabra hola se escribe con hache al principio. Se deletrea así: ~hola~. Pero la hache no se oye.',
      'Para una persona que aprende oyendo, esto es muy importante. Al oír una palabra, no siempre se sabe con qué letras se escribe. Por eso existe el *deletreo*.',
      '## Deletrear',
      'Deletrear es decir una palabra letra por letra, usando el nombre de cada letra. La palabra casa se deletrea así: ~casa~.',
      'Cada letra tiene su nombre. Algunos nombres que debes conocer: be larga, ve corta, hache, jota, eñe, cu, erre, equis, ye y zeta.',
      'En este programa, las palabras importantes de cada paso se pueden deletrear. En el computador se hace con la letra ele. En el celular, tocando la pantalla con dos dedos al mismo tiempo. Así sabrás cómo se escribe cada palabra nueva.',
      'Hay letras grandes y letras pequeñas. Las grandes se llaman *mayúsculas*, y se usan al empezar a escribir y en los nombres propios. Las pequeñas se llaman *minúsculas*. Cuando yo deletree una mayúscula, te lo voy a avisar.',
      '## Un ejemplo resuelto',
      '¿Cuántas vocales y cuántas consonantes tiene la palabra mesa? La deletreo: ~mesa~. Las vocales son la e y la a: son dos. Las consonantes son la eme y la ese: son dos.'
    ],
    practica: [
      {
        p: '¿Cuáles son las cinco vocales?',
        o: ['a, e, i, o, u', 'eme, ene, ele, ese, te', 'be, ce, de, efe, ge'],
        e: ['Son las letras en las que el aire sale libre, con la boca abierta.',
          'Esas son consonantes. En todas ellas algo estorba el aire: los labios, la lengua o los dientes.',
          'Esas son consonantes. Las vocales son las letras que pueden sonar solas.']
      },
      {
        p: '¿Cuántas vocales tiene la palabra luna?',
        o: ['2', '4', '1'],
        e: ['La deletreo: ~luna~. Las vocales son la u y la a.',
          'La palabra luna tiene 4 letras en total, pero solo 2 son vocales: la u y la a.',
          'Hay dos: la u, y también la a del final.']
      },
      {
        p: 'La palabra hoja se escribe con hache al principio. ¿Cómo suena esa hache?',
        o: ['No suena', 'Suena como una jota', 'Suena como una a'],
        e: ['La hache es la única letra del español que no tiene sonido. Se escribe, pero no se dice.',
          'La que suena como jota es la jota, que está en la mitad de la palabra hoja. La hache del principio no suena.',
          'La hache no tiene ningún sonido. Lo primero que se oye en hoja es la vocal o.']
      },
      {
        p: '¿Qué es deletrear?',
        o: ['Decir una palabra letra por letra', 'Decir una palabra muy despacio', 'Separar una palabra en sílabas'],
        e: ['Al deletrear se dice el nombre de cada letra, una por una. Así se sabe cómo se escribe la palabra.',
          'Decirla despacio no basta. Hay que nombrar cada letra por separado.',
          'Separar en sílabas es partir la palabra en golpes de voz. Deletrear es nombrar cada letra.']
      },
      {
        p: '¿Cuál de estas letras es una consonante?',
        o: ['La eme', 'La a', 'La o'],
        e: ['Para decir la eme hay que cerrar los labios: algo estorba el aire.',
          'La a es una vocal: el aire sale libre, con la boca abierta.',
          'La o es una vocal: el aire sale libre, con los labios redondos.']
      },
      {
        p: '¿Por qué no basta con oír una palabra para saber cómo se escribe?',
        o: ['Porque hay letras distintas que suenan igual, y una letra que no suena', 'Porque todas las palabras suenan igual', 'Porque las letras cambian todos los días'],
        e: ['La be larga y la ve corta suenan igual, y la hache no suena. Por eso hay que deletrear.',
          'Las palabras no suenan todas igual. El problema es que un mismo sonido se puede escribir con letras distintas.',
          'Las letras no cambian. El problema es que un mismo sonido se puede escribir con letras distintas.']
      }
    ],
    resumen: 'las vocales son a, e, i, o, u, y las demás letras son consonantes. Para saber cómo se escribe una palabra, se deletrea.'
  });

  // ------------------------------------------------------------------
  AE.leccion({
    id: 'esp-02',
    area: 'esp',
    titulo: 'La sílaba',
    pasos: [
      '## Para qué sirve',
      'Las palabras no se dicen de un solo golpe. Se dicen en pedacitos. Cada pedacito se llama sílaba. Saber separar las sílabas te sirve para leer mejor, para escribir sin errores y, más adelante, para saber dónde va la tilde.',
      '## La explicación',
      'Una *sílaba* es cada golpe de voz que das al decir una palabra. Di despacio la palabra mesa. Sale en dos golpes: [me-sa|me. sa.] Mesa tiene dos sílabas.',
      'Hay un truco para sentirlas. Pon el dorso de tu mano debajo del mentón, tocándolo. Ahora di despacio: mariposa. Cada vez que el mentón baja y empuja tu mano, es una sílaba.',
      'Mariposa: [ma-ri-po-sa|ma. ri. po. sa.] El mentón bajó cuatro veces. Mariposa tiene cuatro sílabas.',
      'También puedes dar una palmada por cada sílaba. Zapato: [za-pa-to|za. pa. to.] Tres palmadas, tres sílabas.',
      '## De dónde sale',
      '¿Por qué el mentón baja? Porque en cada sílaba hay una vocal, y para decir una vocal hay que abrir la boca. Por eso existe esta regla: toda sílaba tiene por lo menos una vocal. No hay sílabas hechas solo de consonantes.',
      'Una vocal sola puede ser una sílaba. La palabra ala se separa así: [a-la|a. la.] La primera sílaba es la vocal a, sola.',
      '## Cómo se separan',
      'Regla uno. Cuando una consonante queda entre dos vocales, se va con la vocal que sigue. Casa: [ca-sa|ca. sa.] La ese se va con la segunda a.',
      'Regla dos. Cuando hay dos consonantes juntas entre vocales, normalmente se separan: una para cada lado. Canto: [can-to|can. to.] Puerta: [puer-ta|puer. ta.]',
      'Regla tres. Hay parejas de consonantes que nunca se separan, porque se pronuncian pegadas. Son las que llevan ele o erre en segundo lugar, como en plato, brazo, clase y trigo. Libro se separa así: [li-bro|li. bro.] La be y la erre van juntas.',
      'Tampoco se separan la che, la doble ele ni la doble erre, porque cada una es un solo sonido. Carro: [ca-rro|ca. rro.] Calle: [ca-lle|ca. lle.] Noche: [no-che|no. che.]',
      '## Nombres según el número de sílabas',
      'Las palabras de una sílaba se llaman monosílabas, como sol, pan y luz. Las de dos sílabas, bisílabas, como mesa. Las de tres, trisílabas, como zapato. Las de cuatro o más, polisílabas, como mariposa.',
      '## Un ejemplo resuelto',
      'Separemos la palabra ventana. La digo despacio y siento el mentón: [ven-ta-na|ven. ta. na.] Son tres sílabas. La ene y la te están juntas entre vocales, así que se separan: la ene se queda en ven, y la te se va con ta.'
    ],
    practica: [
      {
        p: '¿Cuántas sílabas tiene la palabra pelota?',
        o: ['3', '2', '4'],
        e: ['Se separa así: [pe-lo-ta|pe. lo. ta.] Tres golpes de voz.',
          'Son tres golpes de voz: [pe-lo-ta|pe. lo. ta.] Dila despacio con la mano en el mentón.',
          'Son tres golpes de voz: [pe-lo-ta|pe. lo. ta.] Cada sílaba tiene una sola vocal.']
      },
      {
        p: '¿Qué tiene siempre una sílaba?',
        o: ['Por lo menos una vocal', 'Por lo menos dos consonantes', 'Siempre tres letras'],
        e: ['Para dar un golpe de voz hay que abrir la boca, y eso se hace con una vocal.',
          'Hay sílabas sin ninguna consonante, como la a de la palabra ala.',
          'Las sílabas pueden tener una letra, dos, tres o más. Lo que no puede faltar es una vocal.']
      },
      {
        p: '¿Cómo se separa en sílabas la palabra libro?',
        o: ['[li-bro|li, bro]', '[lib-ro|lib, ro]', '[l-ibro|l, ibro]'],
        e: ['La be y la erre son una pareja que no se separa. Las dos se van con la o.',
          'La be y la erre no se separan, porque se pronuncian pegadas, como en brazo.',
          'La ele sola no puede ser una sílaba, porque no tiene vocal.']
      },
      {
        p: '¿Cuántas sílabas tiene la palabra sol?',
        o: ['1', '2', '3'],
        e: ['Sol se dice en un solo golpe de voz. Es una palabra monosílaba.',
          'Sol tiene una sola vocal, la o, y se dice de un solo golpe.',
          'Sol tiene tres letras, pero una sola sílaba. Las sílabas son golpes de voz, no letras.']
      },
      {
        p: '¿Cómo se separa en sílabas la palabra campo?',
        o: ['[cam-po|cam, po]', '[ca-mpo|ca, mpo]', '[camp-o|camp, o]'],
        e: ['La eme y la pe están juntas entre vocales, así que se separan: una para cada lado.',
          'La eme y la pe no son una pareja que vaya pegada. Se separan: la eme se queda con ca.',
          'Cuando hay dos consonantes juntas entre vocales, se reparten: una para cada sílaba.']
      },
      {
        p: '¿Cuántas sílabas tiene la palabra elefante?',
        o: ['4', '3', '5'],
        e: ['Se separa así: [e-le-fan-te|e. le. fan. te.] La primera sílaba es la vocal e, sola.',
          'Son cuatro: [e-le-fan-te|e. le. fan. te.] No olvides que la e del principio es una sílaba ella sola.',
          'Son cuatro: [e-le-fan-te|e. le. fan. te.] La ene se queda en la sílaba fan.']
      }
    ],
    resumen: 'una sílaba es un golpe de voz, y siempre tiene por lo menos una vocal. Para contarlas, pon la mano bajo el mentón.'
  });

  // ------------------------------------------------------------------
  AE.leccion({
    id: 'esp-03',
    area: 'esp',
    titulo: 'La sílaba tónica',
    pasos: [
      '## Para qué sirve',
      'En cada palabra hay una sílaba que suena más fuerte que las demás. Encontrarla es la llave para saber dónde va la tilde. Y a veces cambia por completo lo que la palabra significa.',
      '## La explicación',
      'Di en voz alta la palabra casa. Fíjate que no dices las dos sílabas con la misma fuerza. La primera, ca, suena más fuerte. La segunda, sa, suena más suave.',
      'La sílaba que suena más fuerte se llama *sílaba tónica*. Las demás se llaman sílabas átonas. Cada palabra tiene una sola sílaba tónica.',
      'El truco para encontrarla: llama la palabra desde lejos, como cuando llamas a alguien que está al otro lado de la cancha. La sílaba que se te alarga es la tónica.',
      'Prueba con la palabra mariposa. Si la llamas de lejos, la sílaba que se alarga es po. Nadie la llama alargando la sílaba ma, ni la sílaba sa.',
      'Otro truco: cambia la fuerza de lugar y oye qué pasa. Di casa, con la fuerza al principio: suena normal. Ahora ponle la fuerza al final: [casá|casá]. Suena raro, como otra palabra. Tu oído ya sabe dónde va la fuerza.',
      '## Se cuenta desde el final',
      'Para decir dónde está la sílaba tónica, las sílabas se cuentan desde el final de la palabra hacia el principio. La del final es la *última*. La que está antes es la *penúltima*. Y la que está antes de esa es la *antepenúltima*.',
      'En la palabra mariposa, la última sílaba es sa. La penúltima es po. La antepenúltima es ri. Como la tónica es po, decimos que la tónica está en la penúltima sílaba.',
      '## De dónde sale',
      '¿Por qué importa tanto? Porque la fuerza puede cambiar el significado. Escucha: papa. Y ahora: papá. La primera se come. El segundo es el padre. Tienen las mismas letras. Lo único que cambia es la sílaba fuerte.',
      'Otro ejemplo: canto, y cantó. Yo canto es ahora. Ella cantó ya pasó. Una sola sílaba fuerte cambia el tiempo de la acción.',
      'Por eso existe la *tilde*: una rayita pequeña e inclinada que se escribe encima de una vocal, para avisar que ahí va la fuerza. La palabra papá, cuando es el padre, lleva tilde en la última a. Se deletrea así: ~papá~.',
      'Ojo con dos palabras que se confunden. El *acento* es la fuerza con que suena la sílaba: todas las palabras lo tienen. La tilde es la rayita escrita: solo algunas palabras la llevan. En la próxima lección aprenderás cuáles.',
      '## Un ejemplo resuelto',
      'Busquemos la sílaba tónica de la palabra camisa. Primero la separo: [ca-mi-sa|ca. mi. sa.] Luego la llamo de lejos: se alarga la sílaba mi. Cuento desde el final: sa es la última, mi es la penúltima. La tónica de camisa está en la penúltima sílaba.'
    ],
    practica: [
      {
        p: '¿Cuál es la sílaba tónica de la palabra pelota?',
        o: ['[lo|La sílaba lo]', '[pe|La sílaba pe]', '[ta|La sílaba ta]'],
        e: ['Si llamas la palabra de lejos, se alarga la sílaba lo.',
          'Prueba poniendo la fuerza al principio: [pélota|pélota]. Suena raro. La fuerza va en la sílaba lo.',
          'Prueba poniendo la fuerza al final: [pelotá|pelotá]. Suena raro. La fuerza va en la sílaba lo.']
      },
      {
        p: 'En la palabra ratón, ¿en qué lugar está la sílaba tónica?',
        o: ['En la última', 'En la penúltima', 'En la antepenúltima'],
        e: ['Ratón se separa en dos sílabas: ra, tón. La fuerza va en tón, que es la última.',
          'La penúltima es la sílaba ra. Pero la fuerza va en tón, la del final.',
          'Ratón solo tiene dos sílabas, así que no tiene antepenúltima. La fuerza va en la última.']
      },
      {
        p: '¿Qué diferencia hay entre acento y tilde?',
        o: ['El acento es la fuerza con que suena una sílaba; la tilde es una rayita escrita', 'Son exactamente lo mismo', 'El acento se escribe y la tilde se oye'],
        e: ['Todas las palabras tienen acento, porque todas tienen una sílaba fuerte. Pero solo algunas llevan tilde.',
          'No son lo mismo. El acento se oye en todas las palabras. La tilde se escribe solo en algunas.',
          'Es al revés. El acento es lo que se oye, y la tilde es lo que se escribe.']
      },
      {
        p: 'En la palabra música, ¿en qué lugar está la sílaba tónica?',
        o: ['En la antepenúltima', 'En la penúltima', 'En la última'],
        e: ['Música se separa: mú, si, ca. La fuerza va en mú. Contando desde el final: ca es la última, si es la penúltima y mú es la antepenúltima.',
          'La penúltima es la sílaba si. Pero la fuerza va en mú, que está una más atrás.',
          'La última es la sílaba ca. Pero la fuerza va en mú, la del principio.']
      },
      {
        p: 'Escucha estas dos palabras: canto, y cantó. ¿Cuál habla de algo que ya pasó?',
        o: ['[cantó|Cantó, con la fuerza al final]', '[canto|Canto, con la fuerza al principio]', 'Las dos'],
        e: ['Ella cantó: ya pasó. La fuerza en la última sílaba cambia el tiempo de la acción.',
          'Yo canto es ahora, en este momento. La que habla del pasado lleva la fuerza al final.',
          'Solo una. Con la fuerza al principio es ahora. Con la fuerza al final es pasado.']
      },
      {
        p: 'Para ubicar la sílaba tónica, ¿desde dónde se cuentan las sílabas?',
        o: ['Desde el final de la palabra', 'Desde el principio de la palabra', 'Desde la mitad de la palabra'],
        e: ['Se cuenta de atrás hacia adelante: última, penúltima y antepenúltima.',
          'Se cuenta al revés, empezando por la última sílaba. Las reglas de la tilde se fijan en el final de la palabra.',
          'Se cuenta empezando por la última sílaba y yendo hacia el principio.']
      }
    ],
    resumen: 'la sílaba tónica es la que suena más fuerte. Se encuentra llamando la palabra de lejos, y se ubica contando desde el final.'
  });

  // ------------------------------------------------------------------
  AE.leccion({
    id: 'esp-04',
    area: 'esp',
    titulo: 'Agudas, graves y esdrújulas: cuándo va la tilde',
    pasos: [
      '## Para qué sirve',
      'Mucha gente pone las tildes adivinando. Pero no hay que adivinar: hay tres reglas, y funcionan siempre. Con lo que ya sabes de sílabas y de la sílaba tónica, hoy vas a poder decidir si una palabra lleva tilde.',
      '## Tres clases de palabras',
      'Según dónde esté la sílaba tónica, las palabras tienen tres nombres. Recuerda que se cuenta desde el final.',
      'Si la sílaba tónica es la última, la palabra es *aguda*. Ejemplos: ratón, café, pared, reloj.',
      'Si la sílaba tónica es la penúltima, la palabra es *grave*. También se le dice llana. Ejemplos: casa, árbol, mesa, lápiz.',
      'Si la sílaba tónica es la antepenúltima, la palabra es *esdrújula*. Ejemplos: música, pájaro, teléfono.',
      '## Las tres reglas',
      'Regla de las agudas: llevan tilde cuando terminan en vocal, en ene o en ese. Café termina en vocal: lleva tilde. Ratón termina en ene: lleva tilde. Compás termina en ese: lleva tilde. Pero reloj termina en jota, y pared termina en de: no llevan tilde.',
      'Regla de las graves: es al revés. Llevan tilde cuando no terminan en vocal, ni en ene, ni en ese. Árbol termina en ele: lleva tilde. Lápiz termina en zeta: lleva tilde. Pero casa termina en vocal, y martes termina en ese: no llevan tilde.',
      'Regla de las esdrújulas: llevan tilde siempre, sin excepción. Música, pájaro, teléfono, rápido: todas llevan tilde.',
      '## De dónde salen las reglas',
      'Las reglas no son un capricho. Salen de una costumbre del español. La mayoría de las palabras que terminan en vocal, en ene o en ese son graves: casa, mesa, comen, martes. Y la mayoría de las que terminan en otra consonante son agudas: reloj, pared, amor, papel.',
      'Como eso es lo normal, no hace falta marcarlo. La tilde solo se usa para avisar cuando una palabra rompe la costumbre.',
      'Café termina en vocal. Lo normal sería que fuera grave. Pero es aguda: rompe la costumbre. Por eso lleva tilde, para avisarle a quien lee.',
      'Árbol termina en ele. Lo normal sería que fuera aguda. Pero es grave: rompe la costumbre. Por eso lleva tilde.',
      'Y las esdrújulas son tan pocas que siempre son una sorpresa. Por eso se avisan todas.',
      '## Los pasos para decidir',
      'Paso uno: separa la palabra en sílabas. Paso dos: encuentra la sílaba tónica, llamando la palabra de lejos. Paso tres: cuenta desde el final para saber si es aguda, grave o esdrújula. Paso cuatro: fíjate en la última letra. Paso cinco: aplica la regla.',
      '## Un ejemplo resuelto',
      'La palabra es canción. Paso uno: se separa en dos sílabas, can y ción. Paso dos: la sílaba fuerte es ción. Paso tres: es la última, así que la palabra es aguda. Paso cuatro: termina en ene. Paso cinco: las agudas que terminan en ene llevan tilde. Canción lleva tilde en la o.',
      'Otro ejemplo. La palabra es mesa. Se separa en me y sa. La sílaba fuerte es me, la penúltima: es grave. Termina en vocal. Las graves que terminan en vocal no llevan tilde. Mesa no lleva tilde.'
    ],
    practica: [
      {
        p: 'La palabra canción tiene la fuerza en la última sílaba. ¿Qué clase de palabra es?',
        o: ['Aguda', 'Grave', 'Esdrújula'],
        e: ['Las palabras con la sílaba tónica en la última son agudas.',
          'Las graves tienen la fuerza en la penúltima sílaba. En canción la fuerza está en la última.',
          'Las esdrújulas tienen la fuerza en la antepenúltima. Canción solo tiene dos sílabas.']
      },
      {
        p: 'La palabra [arbol|árbol] es grave y termina en ele. ¿Lleva tilde?',
        o: ['Sí, porque es grave y no termina en vocal, ene ni ese', 'No, porque las graves nunca llevan tilde', 'No, porque termina en consonante'],
        e: ['Las graves llevan tilde cuando no terminan en vocal, en ene ni en ese. Árbol termina en ele.',
          'Algunas graves sí llevan tilde: las que no terminan en vocal, ene ni ese.',
          'En las graves es justo al revés: terminar en una consonante que no sea ene ni ese es lo que pide la tilde.']
      },
      {
        p: 'La palabra mesa es grave y termina en vocal. ¿Lleva tilde?',
        o: ['No, porque las graves que terminan en vocal no llevan tilde', 'Sí, porque todas las graves llevan tilde'],
        e: ['Una palabra que termina en vocal normalmente es grave. Mesa sigue la costumbre, así que no hay nada que avisar.',
          'No todas. Las graves solo llevan tilde cuando no terminan en vocal, ene ni ese.']
      },
      {
        p: '¿Cuáles palabras llevan tilde siempre?',
        o: ['Las esdrújulas', 'Las agudas', 'Las graves'],
        e: ['Las esdrújulas llevan tilde todas, sin excepción: música, pájaro, teléfono.',
          'Las agudas solo llevan tilde cuando terminan en vocal, ene o ese. Reloj es aguda y no lleva.',
          'Las graves solo llevan tilde cuando no terminan en vocal, ene ni ese. Casa es grave y no lleva.']
      },
      {
        p: 'La palabra reloj es aguda y termina en jota. ¿Lleva tilde?',
        o: ['No, porque no termina en vocal, ene ni ese', 'Sí, porque es aguda', 'Sí, porque todas las palabras llevan tilde'],
        e: ['Las agudas solo llevan tilde cuando terminan en vocal, en ene o en ese. Reloj termina en jota.',
          'Ser aguda no basta. También tiene que terminar en vocal, en ene o en ese.',
          'La mayoría de las palabras no lleva tilde. Solo la llevan las que rompen la costumbre.']
      },
      {
        p: '¿Qué clase de palabra es pájaro?',
        o: ['Esdrújula', 'Aguda', 'Grave'],
        e: ['Se separa: pá, ja, ro. La fuerza va en pá, que es la antepenúltima sílaba.',
          'En las agudas la fuerza va en la última sílaba. En pájaro va en la primera de tres, que es la antepenúltima.',
          'En las graves la fuerza va en la penúltima, que aquí sería ja. Pero la fuerza de pájaro va en pá.']
      },
      {
        p: 'La palabra [cafe|café] es aguda y termina en vocal. ¿Lleva tilde?',
        o: ['Sí, porque es aguda y termina en vocal', 'No, porque termina en vocal'],
        e: ['Las agudas llevan tilde cuando terminan en vocal, en ene o en ese. Café lleva tilde en la e.',
          'En las agudas, terminar en vocal es justo lo que pide la tilde.']
      }
    ],
    resumen: 'las agudas llevan tilde si terminan en vocal, ene o ese. Las graves, si no terminan así. Y las esdrújulas, siempre.'
  });
})(window.AE = window.AE || {});
