/* Español, lecciones 5 a 9: sustantivo, adjetivo, verbo, artículo y oración. */
(function (AE) {
  'use strict';

  // ------------------------------------------------------------------
  AE.leccion({
    id: 'esp-05',
    area: 'esp',
    titulo: 'El sustantivo',
    pasos: [
      '## Para qué sirve',
      'Todo lo que existe tiene un nombre: tu mamá, tu perro, tu colegio, la lluvia, el miedo. Las palabras que sirven para nombrar se llaman sustantivos. Son las palabras más importantes de una frase, porque dicen de quién o de qué se está hablando.',
      '## La explicación',
      'Un *sustantivo* es una palabra que nombra algo. Puede nombrar a una persona, como niña o profesor. A un animal, como gato. Una cosa, como mesa. O un lugar, como río o cocina.',
      'También puede nombrar algo que no se toca, pero que existe. Un sentimiento, como alegría o miedo. O una idea, como amistad o paz.',
      '## Una prueba para reconocerlos',
      'Si dudas, haz esta prueba: ponle antes la palabra el, o la palabra la. Si suena bien, es un sustantivo. El perro: suena bien. La alegría: suena bien.',
      'En cambio, si digo: la despacio, o el cantamos, suena raro. Despacio y cantamos no son sustantivos.',
      '## Comunes y propios',
      'Hay dos grandes clases de sustantivos. Los *sustantivos comunes* nombran a cualquiera de su clase: niña, ciudad, río, perro. La palabra niña sirve para todas las niñas.',
      'Los *sustantivos propios* son el nombre particular de uno solo: Camila, Medellín, Magdalena, Toby. No cualquier niña es Camila. No cualquier río es el Magdalena.',
      'Los sustantivos propios se escriben con mayúscula en la primera letra. Los comunes, con minúscula. Por eso, si deletreo el nombre Camila, te aviso la mayúscula: ~Camila~.',
      '## De dónde sale',
      '¿Por qué los propios llevan mayúscula? Porque la mayúscula es un aviso. Le dice a quien lee que esa palabra es el nombre de alguien o de algo único, y no una palabra cualquiera.',
      'La palabra sustantivo viene de sustancia, que es aquello de lo que están hechas las cosas. Los sustantivos nombran lo que hay en el mundo.',
      '## Los que se sienten con el cuerpo y los que no',
      'Los sustantivos *concretos* nombran lo que se percibe con los sentidos: lo que se puede tocar, oír, oler o probar. Piedra, música, humo, limón.',
      'Los sustantivos *abstractos* nombran lo que no se percibe con los sentidos, pero se siente por dentro o se piensa. Amor, tristeza, justicia, tiempo.',
      '## Un ejemplo resuelto',
      'En la oración: Lucía toca la guitarra en el parque. ¿Cuáles son los sustantivos? Busco las palabras que nombran. Lucía nombra a una persona, y es un sustantivo propio. Guitarra nombra una cosa. Parque nombra un lugar. Son tres sustantivos.'
    ],
    practica: [
      {
        p: '¿Cuál de estas palabras es un sustantivo?',
        o: ['Zapato', 'Saltar', 'Rápido'],
        e: ['Zapato nombra una cosa. Y pasa la prueba: el zapato suena bien.',
          'Saltar es una acción. No nombra nada: dice lo que alguien hace.',
          'Rápido dice cómo es algo. No lo nombra.']
      },
      {
        p: '¿Cuál de estos sustantivos es propio?',
        o: ['Bogotá', 'Ciudad', 'Montaña'],
        e: ['Bogotá es el nombre particular de una sola ciudad. Por eso se escribe con mayúscula.',
          'La palabra ciudad sirve para cualquier ciudad. Es un sustantivo común.',
          'La palabra montaña sirve para cualquier montaña. Es un sustantivo común.']
      },
      {
        p: '¿Con qué letra se escriben los sustantivos propios?',
        o: ['Con mayúscula al principio', 'Todo en minúscula', 'Con mayúscula al final'],
        e: ['La mayúscula en la primera letra avisa que es el nombre de alguien o de algo único.',
          'En minúscula van los sustantivos comunes. Los propios llevan mayúscula en la primera letra.',
          'La mayúscula va en la primera letra de la palabra, no en la última.']
      },
      {
        p: '¿Cuál de estos sustantivos es abstracto, es decir, nombra algo que no se percibe con los sentidos?',
        o: ['Amistad', 'Piedra', 'Tambor'],
        e: ['La amistad no se toca ni se oye. Se siente por dentro.',
          'Una piedra se puede tocar. Es un sustantivo concreto.',
          'Un tambor se puede tocar y oír. Es un sustantivo concreto.']
      },
      {
        p: 'En la oración: el perro duerme en la cocina. ¿Cuántos sustantivos hay?',
        o: ['2', '1', '3'],
        e: ['Los sustantivos son perro y cocina: nombran a un animal y a un lugar.',
          'Hay dos: perro, y también cocina, que nombra un lugar.',
          'Hay dos: perro y cocina. La palabra duerme no nombra: dice lo que hace el perro.']
      },
      {
        p: '¿Qué prueba sirve para saber si una palabra es un sustantivo?',
        o: ['Ponerle antes la palabra el o la palabra la, y oír si suena bien', 'Contar cuántas letras tiene', 'Decirla en voz muy alta'],
        e: ['Los sustantivos aceptan el o la: el río, la casa.',
          'El número de letras no dice qué clase de palabra es.',
          'Decirla más fuerte no dice qué clase de palabra es. La prueba es ponerle el o la.']
      }
    ],
    resumen: 'los sustantivos son las palabras que nombran. Los propios son nombres únicos y van con mayúscula; los comunes sirven para todos los de su clase.'
  });

  // ------------------------------------------------------------------
  AE.leccion({
    id: 'esp-06',
    area: 'esp',
    titulo: 'El adjetivo',
    pasos: [
      '## Para qué sirve',
      'Si te digo: tráeme la cobija, y hay cinco cobijas, no sabes cuál. Pero si te digo: tráeme la cobija suave, ya sabes. La palabra suave te dio la pista. Las palabras que dicen cómo son las cosas se llaman adjetivos.',
      '## La explicación',
      'Un *adjetivo* es una palabra que dice cómo es un sustantivo. Le pone una cualidad. En pan caliente, pan es el sustantivo y caliente es el adjetivo.',
      'Los adjetivos pueden hablar de lo que se toca: suave, áspero, duro, blando, frío, mojado. De lo que se oye: ruidoso, silencioso, agudo. De lo que se prueba o se huele: dulce, salado, amargo, perfumado.',
      'También hablan del tamaño y de la forma: grande, pequeño, largo, redondo. Del color: rojo, azul. Y de la manera de ser: amable, valiente, perezoso, alegre.',
      '## Una prueba para reconocerlos',
      'Pregúntale al sustantivo: ¿cómo es? La respuesta es el adjetivo. La sopa está caliente. ¿Cómo está la sopa? Caliente. Ese es el adjetivo.',
      '## El adjetivo se acomoda al sustantivo',
      'El adjetivo tiene que estar de acuerdo con el sustantivo al que acompaña. Si el sustantivo es masculino, el adjetivo también: niño alto. Si es femenino, el adjetivo también: niña alta.',
      'Y si el sustantivo habla de varios, el adjetivo también: niños altos, niñas altas. A este acuerdo se le llama *concordancia*.',
      'Hay adjetivos que no cambian entre masculino y femenino, como grande, alegre o fuerte. Se dice niño alegre y niña alegre. Pero sí cambian cuando son varios: niños alegres.',
      '## De dónde sale',
      '¿Por qué el adjetivo copia al sustantivo? Porque así, el que escucha sabe de quién es cada cualidad. Si digo: la mesa y el tapete rojo, el rojo es el tapete. Si digo: la mesa roja y el tapete, la roja es la mesa. La terminación del adjetivo es la pista.',
      'La palabra adjetivo viene de una palabra antigua que significa: que se agrega. El adjetivo se le agrega al sustantivo para dar más información.',
      '## Dónde va',
      'En español, el adjetivo casi siempre va después del sustantivo: casa grande, agua fría, perro bravo. A veces va antes, sobre todo en cuentos y poemas: la dulce voz, el frío viento.',
      '## Un ejemplo resuelto',
      'En la oración: el gato pequeño duerme en la cama blanda. ¿Cuáles son los adjetivos? Busco los sustantivos y les pregunto cómo son. ¿Cómo es el gato? Pequeño. ¿Cómo es la cama? Blanda. Los adjetivos son pequeño y blanda.'
    ],
    practica: [
      {
        p: 'En las palabras: agua fría. ¿Cuál es el adjetivo?',
        o: ['Fría', 'Agua', 'Las dos'],
        e: ['Fría dice cómo es el agua. Esa es la cualidad.',
          'Agua es el sustantivo: nombra la cosa. El adjetivo es la palabra que dice cómo es.',
          'Solo una. Agua nombra, y fría dice cómo es.']
      },
      {
        p: '¿Qué pregunta sirve para encontrar el adjetivo?',
        o: ['¿Cómo es?', '¿Quién es?', '¿Dónde está?'],
        e: ['El adjetivo responde cómo es el sustantivo: suave, grande, dulce.',
          'La pregunta quién es se responde con un sustantivo, no con un adjetivo.',
          'La pregunta dónde está se responde con un lugar, no con una cualidad.']
      },
      {
        p: '¿Cuál de estas palabras es un adjetivo?',
        o: ['Áspero', 'Lija', 'Raspar'],
        e: ['Áspero dice cómo se siente algo al tocarlo.',
          'Lija nombra una cosa. Es un sustantivo.',
          'Raspar es una acción. Es un verbo.']
      },
      {
        p: '¿Cuál de estas frases está bien dicha?',
        o: ['Las manzanas rojas', 'Las manzanas rojo', 'La manzanas rojas'],
        e: ['Manzanas es femenino y son varias. El artículo y el adjetivo también van en femenino y en plural.',
          'El adjetivo rojo quedó en masculino y en singular. Tiene que acomodarse a manzanas: rojas.',
          'El artículo la quedó en singular. Como manzanas son varias, debe ser: las.']
      },
      {
        p: 'Quieres decir que varios niños están alegres. ¿Cómo se dice?',
        o: ['Niños alegres', 'Niños alegre', 'Niño alegres'],
        e: ['Como son varios niños, el adjetivo también va en plural.',
          'El adjetivo quedó en singular. Si los niños son varios, se dice alegres.',
          'El sustantivo quedó en singular y el adjetivo en plural. Los dos tienen que ir de acuerdo.']
      },
      {
        p: 'En español, ¿dónde va casi siempre el adjetivo?',
        o: ['Después del sustantivo', 'Antes del artículo', 'Al final de la oración'],
        e: ['Lo normal es: casa grande, agua fría, perro bravo.',
          'Antes del artículo no va. El orden normal es artículo, sustantivo y adjetivo: la casa grande.',
          'No tiene que ir al final de la oración. Va junto a su sustantivo, casi siempre después de él.']
      }
    ],
    resumen: 'el adjetivo dice cómo es el sustantivo, y se acomoda a él en género y en número.'
  });

  // ------------------------------------------------------------------
  AE.leccion({
    id: 'esp-07',
    area: 'esp',
    titulo: 'El verbo',
    pasos: [
      '## Para qué sirve',
      'Con sustantivos y adjetivos puedes nombrar y describir, pero no puedes contar nada. El perro bravo. ¿Y qué pasó con el perro? Falta la palabra que dice lo que pasa: el perro bravo ladra. Esa palabra es el verbo. Sin verbo no hay historia.',
      '## La explicación',
      'Un *verbo* es una palabra que dice lo que alguien hace, o lo que pasa. Correr, comer, cantar, dormir, pensar: todos son verbos.',
      'La mayoría de los verbos nombran acciones: saltar, escribir, abrazar. Otros dicen cómo es o cómo está alguien: ser, estar, parecer. Y otros dicen cosas que pasan solas: llover, tronar, amanecer.',
      '## Una prueba para reconocerlos',
      'Ponle antes las palabras yo, tú y él, y fíjate si la palabra cambia. Yo canto, tú cantas, él canta. Cambia, y suena bien: es un verbo.',
      'En cambio, con la palabra mesa no se puede. Yo mesa, tú mesas. No tiene sentido. Mesa no es un verbo.',
      '## El nombre del verbo',
      'Cada verbo tiene un nombre, que se llama *infinitivo*. Es la forma que no dice quién ni cuándo. Los infinitivos terminan de tres maneras. En ar, como cantar. En er, como comer. O en ir, como vivir.',
      '## El verbo cambia',
      'El verbo es la palabra que más cambia en español. Cambia según quién hace la acción: yo canto, tú cantas, ella canta, nosotros cantamos, ellos cantan.',
      'Y cambia según cuándo pasa la acción. Eso se llama el *tiempo* del verbo. Hay tres tiempos principales.',
      'El pasado es lo que ya pasó: ayer canté. El presente es lo que pasa ahora: hoy canto. El futuro es lo que va a pasar: mañana cantaré.',
      'Cambiar el verbo según la persona y el tiempo se llama *conjugar*.',
      '## De dónde sale',
      '¿Por qué cambia tanto el verbo? Porque en una sola palabra guarda mucha información. Si digo: cantaremos, tú ya sabes tres cosas. Cuál es la acción: cantar. Quiénes la hacen: nosotros. Y cuándo: en el futuro.',
      'Por eso en español muchas veces no hace falta decir yo, ni nosotros. La terminación del verbo ya lo dice.',
      '## La sílaba fuerte cambia el tiempo',
      'Ojo con la sílaba tónica. Canto, con la fuerza al principio, es presente: yo canto. Cantó, con la fuerza al final y con tilde, es pasado: ella cantó. Lo mismo pasa con hablo y habló, o con salto y saltó.',
      '## Un ejemplo resuelto',
      'En la oración: mi abuela cocinó arepas ayer. ¿Cuál es el verbo, y en qué tiempo está? La palabra que dice lo que hizo la abuela es cocinó. Ese es el verbo. Su infinitivo es cocinar. Y habla de ayer, de algo que ya pasó: está en pasado.'
    ],
    practica: [
      {
        p: '¿Cuál de estas palabras es un verbo?',
        o: ['Caminar', 'Camino', 'Caminante'],
        e: ['Caminar es una acción, y termina en ar, como los infinitivos.',
          'El camino, con el artículo el, es un sustantivo: nombra por dónde se anda.',
          'Caminante nombra a la persona que camina. Es un sustantivo.']
      },
      {
        p: 'En la oración: los niños juegan en el patio. ¿Cuál es el verbo?',
        o: ['Juegan', 'Niños', 'Patio'],
        e: ['Juegan dice lo que hacen los niños. Su infinitivo es jugar.',
          'Niños es un sustantivo: nombra a quienes hacen la acción.',
          'Patio es un sustantivo: nombra el lugar.']
      },
      {
        p: 'El verbo de esta oración, ¿en qué tiempo está? Mañana visitaremos a la abuela.',
        o: ['En futuro', 'En pasado', 'En presente'],
        e: ['Visitaremos habla de algo que todavía no ha pasado. La palabra mañana lo confirma.',
          'En pasado sería: visitamos a la abuela ayer. Aquí todavía no ha pasado.',
          'En presente sería: visitamos a la abuela ahora. Aquí habla de mañana.']
      },
      {
        p: '¿Cómo se llama el nombre del verbo, la forma que termina en ar, er o ir?',
        o: ['Infinitivo', 'Adjetivo', 'Sujeto'],
        e: ['Cantar, comer y vivir son infinitivos: no dicen quién ni cuándo.',
          'El adjetivo es la palabra que dice cómo es un sustantivo.',
          'El sujeto es de quién se habla en una oración. No es una forma del verbo.']
      },
      {
        p: 'Escucha estas dos palabras: salto, y saltó. ¿Cuál está en pasado?',
        o: ['[saltó|Saltó, con la fuerza al final]', '[salto|Salto, con la fuerza al principio]', 'Ninguna'],
        e: ['Ella saltó: ya pasó. Lleva la fuerza y la tilde en la última sílaba.',
          'Yo salto es presente: pasa ahora. La del pasado lleva la fuerza al final.',
          'Una sí: la que lleva la fuerza en la última sílaba habla de algo que ya pasó.']
      },
      {
        p: 'La palabra comimos, ¿quiénes hacen la acción?',
        o: ['Nosotros', 'Yo', 'Ellos'],
        e: ['La terminación del verbo lo dice: nosotros comimos.',
          'Si fuera yo, se diría: comí.',
          'Si fueran ellos, se diría: comieron.']
      }
    ],
    resumen: 'el verbo dice lo que alguien hace o lo que pasa. Cambia según quién hace la acción y según cuándo pasa.'
  });

  // ------------------------------------------------------------------
  AE.leccion({
    id: 'esp-08',
    area: 'esp',
    titulo: 'Artículo, género y número',
    pasos: [
      '## Para qué sirve',
      'No es lo mismo decir: pásame un cuaderno, que decir: pásame el cuaderno. En el primer caso sirve cualquiera. En el segundo, quiero uno que tú ya sabes cuál es. Esa diferencia la hacen unas palabras muy pequeñas: los artículos.',
      '## Los artículos',
      'El *artículo* es una palabra corta que va antes del sustantivo y lo anuncia. Hay dos grupos.',
      'Los artículos definidos son cuatro: el, la, los, las. Se usan cuando ya se sabe de cuál se habla. El perro de mi tía. La puerta de la casa.',
      'Los artículos indefinidos también son cuatro: un, una, unos, unas. Se usan cuando se habla de cualquiera, o de uno que todavía no se conoce. Un perro me ladró. Compré unas naranjas.',
      '## El género',
      'En español, todos los sustantivos tienen *género*: son masculinos o femeninos. Los masculinos usan el o un: el libro, un árbol. Los femeninos usan la o una: la mesa, una canción.',
      'Muchos masculinos terminan en o, y muchos femeninos terminan en a: niño y niña, gato y gata. Pero no siempre. El mapa y el día son masculinos, aunque terminan en a. La mano es femenina, aunque termina en o.',
      'El género es de la palabra, no de la cosa. Una mesa no es mujer, y un piso no es hombre. Simplemente la palabra mesa es femenina y la palabra piso es masculina. Eso se aprende oyendo y usando las palabras.',
      '## El número',
      'El *número* dice si se habla de uno o de varios. Uno solo es *singular*: la casa. Varios es *plural*: las casas.',
      'Para formar el plural hay tres reglas. Regla uno: si la palabra termina en vocal, se le agrega una ese. Casa, casas. Libro, libros.',
      'Regla dos: si la palabra termina en consonante, se le agregan dos letras, una e y una ese. Árbol, árboles. Canción, canciones.',
      'Regla tres: si la palabra termina en zeta, la zeta cambia por ce, y se agregan la e y la ese. Lápiz, lápices. Luz, luces.',
      '## La concordancia',
      'El artículo, el sustantivo y el adjetivo tienen que estar de acuerdo en género y en número. Los tres van juntos, como un equipo que usa el mismo uniforme.',
      'Se dice: la casa pequeña. Las tres palabras son femeninas y están en singular. Si paso al plural, cambian las tres: las casas pequeñas.',
      '## De dónde sale',
      '¿Para qué sirve tanta concordancia? Para que el que escucha sepa qué palabras van juntas. Si oyes: los perros y la gata negra, sabes que la negra es la gata, porque negra está en femenino y en singular, igual que gata.',
      '## Un ejemplo resuelto',
      'Pasemos al plural: el lápiz nuevo. El artículo el pasa a los. Lápiz termina en zeta: la zeta cambia por ce y se agregan la e y la ese. Queda lápices. Nuevo termina en vocal: se le agrega una ese. Queda nuevos. El resultado es: los lápices nuevos.'
    ],
    practica: [
      {
        p: '¿Cuál de estos artículos se usa cuando se habla de cualquiera, y no de uno conocido?',
        o: ['Un', 'El', 'Los'],
        e: ['Un es un artículo indefinido. Pásame un lápiz: sirve cualquiera.',
          'El es un artículo definido. Se usa cuando ya se sabe de cuál se habla.',
          'Los es un artículo definido, y además habla de varios.']
      },
      {
        p: '¿Cuál es el plural de la palabra árbol?',
        o: ['Árboles', '[Árbols|Árbols, con solo una ese]', '[Árbolos|Árbolos]'],
        e: ['Termina en consonante, así que se le agregan una e y una ese.',
          'A las palabras que terminan en consonante no les basta una ese: se les agregan una e y una ese.',
          'El plural no se forma agregando una o. Se agregan una e y una ese.']
      },
      {
        p: 'La palabra mano, ¿es masculina o femenina?',
        o: ['Femenina: se dice la mano', 'Masculina, porque termina en o', 'No tiene género'],
        e: ['Aunque termina en o, es femenina. Se dice la mano, una mano fría.',
          'Terminar en o no siempre quiere decir masculino. Nadie dice el mano.',
          'En español, todos los sustantivos tienen género.']
      },
      {
        p: '¿Cuál es el plural de la palabra pez?',
        o: ['[Peces|Peces, con ce]', '[Pezes|Peces, con zeta]', '[Pezs|Pez, con una ese al final]'],
        e: ['La zeta cambia por ce, y se agregan una e y una ese.',
          'Delante de la e no se usa zeta. Por eso la zeta cambia por ce.',
          'A las palabras que terminan en consonante no les basta una ese.']
      },
      {
        p: '¿Cuál de estas frases está bien dicha?',
        o: ['Los cuadernos nuevos', 'Los cuadernos nueva', 'El cuadernos nuevos'],
        e: ['El artículo, el sustantivo y el adjetivo están en masculino y en plural.',
          'El adjetivo nueva quedó en femenino y en singular. Debe acomodarse a cuadernos: nuevos.',
          'El artículo el quedó en singular. Como son varios cuadernos, debe ser: los.']
      },
      {
        p: '¿Qué dice el número de una palabra?',
        o: ['Si se habla de uno o de varios', 'Si es masculina o femenina', 'Cuántas letras tiene'],
        e: ['Singular es uno solo. Plural es varios.',
          'Eso lo dice el género. El número dice si es uno o son varios.',
          'El número no cuenta letras. Dice si se habla de uno o de varios.']
      }
    ],
    resumen: 'el artículo anuncia al sustantivo. El artículo, el sustantivo y el adjetivo van siempre de acuerdo en género y en número.'
  });

  // ------------------------------------------------------------------
  AE.leccion({
    id: 'esp-09',
    area: 'esp',
    titulo: 'La oración: sujeto y predicado',
    pasos: [
      '## Para qué sirve',
      'Las palabras sueltas no dicen mucho. Perro. Calle. Corre. Para comunicar una idea completa hay que organizarlas: el perro corre por la calle. Eso es una oración. Saber cómo se arma te ayuda a entender lo que oyes y a escribir con claridad.',
      '## La explicación',
      'Una *oración* es un grupo de palabras que dice una idea completa. Toda oración tiene un verbo. Al escribirla, empieza con mayúscula y termina con punto.',
      'Compara. Si digo: la casa de mi abuela. Te quedas esperando. ¿Qué pasó con la casa? No es una oración, porque le falta el verbo. Si digo: la casa de mi abuela huele a café. Ahora sí hay una idea completa.',
      'Toda oración tiene dos partes: el sujeto y el predicado.',
      'El *sujeto* es de quién o de qué se habla. El *predicado* es lo que se dice del sujeto. El verbo siempre está en el predicado.',
      'En la oración: el perro ladra en la noche. ¿De quién se habla? Del perro. Ese es el sujeto. ¿Qué se dice de él? Que ladra en la noche. Ese es el predicado.',
      '## El método para encontrarlos',
      'Paso uno: busca el verbo. Paso dos: pregúntale al verbo ¿quién?, o ¿quiénes? La respuesta es el sujeto. Paso tres: todo lo demás es el predicado.',
      'Probemos con: mi hermana prepara el desayuno. El verbo es prepara. ¿Quién prepara? Mi hermana. Ese es el sujeto. Lo demás, prepara el desayuno, es el predicado.',
      '## El sujeto no siempre va primero',
      'A veces el sujeto está al final o en la mitad. En la oración: en el patio juegan los niños. El verbo es juegan. ¿Quiénes juegan? Los niños. El sujeto es los niños, aunque esté al final.',
      'Por eso no hay que confiar en el orden. Hay que hacerle la pregunta al verbo.',
      '## El sujeto que no se dice',
      'A veces el sujeto no aparece, pero se entiende. En la oración: comimos arepa. ¿Quiénes comimos? Nosotros. Nadie lo dijo, pero la terminación del verbo lo avisa. A eso se le llama *sujeto tácito*. Tácito quiere decir callado.',
      '## De dónde sale',
      '¿Por qué se le pregunta al verbo? Porque el sujeto y el verbo siempre están de acuerdo. Si el sujeto es uno, el verbo va en singular: el niño corre. Si son varios, el verbo va en plural: los niños corren. Esa unión es la que te deja encontrar al sujeto.',
      '## Un ejemplo resuelto',
      'Oración: ayer llegaron mis primos de Cali. Paso uno: el verbo es llegaron. Paso dos: ¿quiénes llegaron? Mis primos de Cali. Ese es el sujeto. Paso tres: lo demás, ayer llegaron, es el predicado.'
    ],
    practica: [
      {
        p: '¿Cuál de estos grupos de palabras es una oración completa?',
        o: ['El gato duerme', 'El gato de la vecina', 'Muy cerca de la casa'],
        e: ['Tiene verbo, duerme, y dice una idea completa.',
          'Le falta el verbo. Uno se queda esperando: ¿qué pasó con el gato?',
          'Le falta el verbo. No dice quién, ni qué pasa.']
      },
      {
        p: 'En la oración: la profesora explica la lección. ¿Cuál es el sujeto?',
        o: ['La profesora', 'Explica', 'La lección'],
        e: ['El verbo es explica. ¿Quién explica? La profesora.',
          'Explica es el verbo. El sujeto es quien hace lo que dice el verbo.',
          'La lección es lo que se explica. Pregúntale al verbo: ¿quién explica?']
      },
      {
        p: 'En la oración: en la cocina cantan mis tías. ¿Cuál es el sujeto?',
        o: ['Mis tías', 'En la cocina', 'Cantan'],
        e: ['El verbo es cantan. ¿Quiénes cantan? Mis tías. El sujeto puede estar al final.',
          'En la cocina dice dónde pasa. Pregúntale al verbo: ¿quiénes cantan?',
          'Cantan es el verbo. El sujeto es quien hace esa acción.']
      },
      {
        p: '¿Qué palabra tiene siempre el predicado?',
        o: ['El verbo', 'Un nombre propio', 'Un adjetivo'],
        e: ['El predicado es lo que se dice del sujeto, y eso siempre lleva un verbo.',
          'Un nombre propio puede estar o no estar. Lo que nunca falta en el predicado es el verbo.',
          'Un adjetivo puede estar o no estar. Lo que nunca falta en el predicado es el verbo.']
      },
      {
        p: 'En la oración: caminamos hasta el río. El sujeto no se dice. ¿Quién es?',
        o: ['Nosotros', 'El río', 'Ellos'],
        e: ['La terminación de caminamos avisa que somos nosotros. Es un sujeto tácito.',
          'El río es el lugar hasta donde se camina. Pregúntale al verbo: ¿quiénes caminamos?',
          'Si fueran ellos, el verbo sería caminaron.']
      },
      {
        p: '¿Cuál es el primer paso para encontrar el sujeto de una oración?',
        o: ['Buscar el verbo', 'Tomar la primera palabra', 'Contar las palabras'],
        e: ['Primero se busca el verbo, y después se le pregunta quién o quiénes.',
          'El sujeto no siempre va al principio. Por eso primero se busca el verbo.',
          'Contar las palabras no ayuda. Primero se busca el verbo.']
      }
    ],
    resumen: 'una oración dice una idea completa y siempre tiene verbo. Para hallar el sujeto, pregúntale al verbo quién o quiénes.'
  });
})(window.AE = window.AE || {});
