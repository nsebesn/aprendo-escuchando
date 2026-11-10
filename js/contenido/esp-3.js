/* Español, lecciones 10 a 14: puntuación, mayúsculas, sinónimos, ortografía y comprensión de lectura. */
(function (AE) {
  'use strict';

  // ------------------------------------------------------------------
  AE.leccion({
    id: 'esp-10',
    area: 'esp',
    titulo: 'Los signos de puntuación',
    pasos: [
      '## Para qué sirve',
      'Cuando hablamos, la voz hace pausas, sube y baja. Así se entiende si pregunto, si me emociono o si ya terminé. Pero el papel no tiene voz. Los signos de puntuación son las marcas que le ponen voz a lo escrito.',
      '## El punto',
      'El *punto* marca una pausa larga. Dice: aquí se acabó una idea. Al leer en voz alta, la voz baja y se detiene. Después de un punto, la palabra que sigue empieza con mayúscula.',
      'Hay tres clases de punto. El punto seguido separa dos oraciones que hablan de lo mismo, y se sigue escribiendo en el mismo renglón. El punto aparte termina un párrafo, y lo que sigue va en otro renglón. El punto final termina todo el escrito.',
      '## La coma',
      'La *coma* marca una pausa corta. La voz se detiene un instante, pero no baja del todo, porque la idea continúa.',
      'La coma tiene varios usos. El primero es separar las cosas de una lista. Compré pan, leche, huevos y queso. Fíjate que antes de la última, donde va la letra y, no se pone coma.',
      'El segundo uso es cuando llamas a alguien. Juan, ven acá. La coma separa el nombre de la persona a la que le hablas.',
      '## Una coma puede cambiar el sentido',
      'Escucha bien estas dos frases. La primera: No, espere. La segunda: No espere. En la primera le pido que espere. En la segunda le pido que no espere. Una sola coma cambió todo.',
      'Otro ejemplo famoso. Con coma: Vamos a comer, niños. Estoy llamando a los niños a la mesa. Sin coma: Vamos a comer niños. Ahí los niños son la comida. Por eso las comas importan.',
      '## Los signos de pregunta',
      'Los *signos de interrogación* encierran las preguntas. En español son dos: uno que abre, al principio, y otro que cierra, al final. Al leer, la voz sube al terminar. ¿Vienes mañana?',
      '## Los signos de emoción',
      'Los *signos de exclamación*, que también se llaman de admiración, encierran lo que se dice con emoción: alegría, susto, sorpresa, o una orden fuerte. También son dos: uno abre y otro cierra. ¡Qué rico! ¡Cuidado!',
      '## De dónde sale',
      '¿Por qué en español se pone un signo al principio? En otros idiomas, como el inglés, solo se pone al final. Pero en español una pregunta puede tener exactamente las mismas palabras que una frase normal. Vienes mañana. ¿Vienes mañana?',
      'El signo que abre le avisa a quien lee, desde la primera palabra, que tiene que poner voz de pregunta. Sin ese aviso, se daría cuenta demasiado tarde.',
      '## Los dos puntos',
      'Los *dos puntos* anuncian que viene algo: una lista, una explicación, o las palabras de otra persona. Necesito tres cosas: lápiz, papel y borrador.',
      '## Cómo se oyen',
      'Cuando oyes leer, los signos no se dicen, pero se notan en la voz. Y si quieres saber exactamente dónde van, los lectores de pantalla se pueden configurar para que digan los signos en voz alta.',
      '## Un ejemplo resuelto',
      'Escucha: Mamá, ¿puedo salir? Al escribir eso se necesitan tres signos. Una coma después de mamá, porque estoy llamando a alguien. Y los dos signos de interrogación, que encierran la pregunta: puedo salir.'
    ],
    practica: [
      {
        p: '¿Qué signo marca una pausa larga y avisa que se acabó una idea?',
        o: ['El punto', 'La coma', 'Los dos puntos'],
        e: ['Con el punto la voz baja y se detiene. Lo que sigue empieza con mayúscula.',
          'La coma marca una pausa corta: la idea todavía continúa.',
          'Los dos puntos anuncian que viene algo. No cierran la idea.']
      },
      {
        p: 'Escucha: Compré arroz, fríjoles, plátano y carne. ¿Para qué sirven las comas en esa frase?',
        o: ['Para separar las cosas de una lista', 'Para hacer una pregunta', 'Para terminar la idea'],
        e: ['Cada coma separa una cosa de la siguiente. Antes de la última, donde va la y, no se pone.',
          'Las preguntas se encierran con signos de interrogación, no con comas.',
          'Para terminar la idea se usa el punto. La coma avisa que la idea sigue.']
      },
      {
        p: 'Escucha: ¿Dónde está mi bastón? ¿Qué signos se necesitan para escribir esa frase?',
        o: ['Signos de interrogación, uno al principio y otro al final', 'Signos de exclamación', 'Una coma en la mitad'],
        e: ['Es una pregunta. En español se abre con un signo y se cierra con otro.',
          'Los de exclamación son para lo que se dice con emoción. Esto es una pregunta.',
          'Aquí no hay lista ni se llama a nadie. Es una pregunta, y lleva signos de interrogación.']
      },
      {
        p: '¿Cómo empieza la palabra que va después de un punto?',
        o: ['Con mayúscula', 'Con minúscula', 'Con una coma'],
        e: ['El punto cierra una idea, y la mayúscula avisa que empieza otra.',
          'Después de un punto empieza una oración nueva, y toda oración empieza con mayúscula.',
          'Las palabras no empiezan con coma. Después de un punto, la primera letra va en mayúscula.']
      },
      {
        p: 'Escucha: ¡Qué susto! ¿Qué signos se necesitan para escribir esa frase?',
        o: ['Signos de exclamación', 'Signos de interrogación', 'Dos puntos'],
        e: ['Se dice con emoción, así que va entre signos de exclamación: uno abre y otro cierra.',
          'No es una pregunta. Es una frase dicha con emoción.',
          'Los dos puntos anuncian algo que viene después. Aquí lo que hay es emoción.']
      },
      {
        p: '¿Por qué en español se pone un signo de interrogación al principio de la pregunta?',
        o: ['Para avisar desde la primera palabra que hay que leer con voz de pregunta', 'Para que la frase quede más larga', 'Porque en inglés también se hace así'],
        e: ['En español una pregunta puede tener las mismas palabras que una frase normal. El signo que abre avisa a tiempo.',
          'No es para alargar. Es un aviso para quien lee.',
          'En inglés solo se pone al final. El signo que abre es propio del español.']
      }
    ],
    resumen: 'el punto cierra una idea, la coma hace una pausa corta, y las preguntas y exclamaciones se abren y se cierran con sus signos.'
  });

  // ------------------------------------------------------------------
  AE.leccion({
    id: 'esp-11',
    area: 'esp',
    titulo: 'Las mayúsculas',
    pasos: [
      '## Para qué sirve',
      'Las mayúsculas son como señales dentro de un escrito. Avisan dónde empieza una idea, y avisan cuáles palabras son nombres propios. Quien usa bien las mayúsculas se hace entender mejor.',
      '## La explicación',
      'Cada letra tiene dos formas: una grande, la *mayúscula*, y una pequeña, la *minúscula*. Casi todo se escribe en minúscula. La mayúscula se guarda para casos especiales, y solo va en la primera letra de la palabra.',
      '## Cuándo va mayúscula',
      'Primer caso: al empezar un escrito. La primera palabra siempre va con mayúscula.',
      'Segundo caso: después de un punto. Cada oración nueva empieza con mayúscula.',
      'Tercer caso: en los nombres propios. Los nombres y apellidos de las personas, como Camila Rojas. Los nombres de las mascotas, como Toby. Y los nombres de lugares, como Colombia, Cali o el río Cauca.',
      'Fíjate en el río Cauca. La palabra río va con minúscula, porque es un sustantivo común. Solo Cauca, que es el nombre propio, va con mayúscula.',
      '## Cuándo no va mayúscula',
      'En español, los días de la semana y los meses del año se escriben con minúscula: lunes, martes, enero, diciembre. Mucha gente se equivoca en esto, porque en inglés sí van con mayúscula.',
      'Tampoco llevan mayúscula los idiomas, ni las palabras que dicen de dónde es alguien: español, inglés, colombiano, caleña.',
      '## De dónde sale',
      '¿Por qué existe la mayúscula? Porque ayuda a leer. Una mayúscula después de un punto le confirma a quien lee que empezó una idea nueva. Y una mayúscula en la mitad de una oración le avisa: esta palabra es un nombre único, no una palabra cualquiera.',
      'Compara. Rosa, con mayúscula, es el nombre de una persona. Rosa, con minúscula, es una flor. Al oírlas son iguales. Al escribirlas, la mayúscula hace la diferencia.',
      '## Cómo se sabe sin ver',
      'Al oír un texto, las mayúsculas no suenan. Para saber si una palabra lleva mayúscula hay que conocer las reglas, o pedir que la deletreen. Cuando este programa deletrea, avisa. El nombre Cali se deletrea así: ~Cali~.',
      'En braille, la mayúscula se marca con un signo especial que se escribe antes de la letra.',
      '## Un ejemplo resuelto',
      'Oración: el lunes viajaré a Pasto con mi tía Marta. ¿Cuáles palabras llevan mayúscula? La palabra el, porque empieza la oración. Pasto, porque es el nombre de una ciudad. Y Marta, porque es el nombre de una persona.',
      'Lunes no lleva mayúscula, porque es un día de la semana. Y tía tampoco, porque es un sustantivo común.'
    ],
    practica: [
      {
        p: '¿Cuál de estas palabras se escribe con mayúscula?',
        o: ['Medellín', 'Martes', 'Ciudad'],
        e: ['Medellín es el nombre propio de una ciudad.',
          'En español, los días de la semana van con minúscula.',
          'Ciudad es un sustantivo común: sirve para cualquier ciudad. Va con minúscula.']
      },
      {
        p: 'En español, ¿cómo se escriben los meses del año, como enero y julio?',
        o: ['Con minúscula', 'Con mayúscula', 'Todo en mayúsculas'],
        e: ['Los meses y los días de la semana van con minúscula.',
          'Eso pasa en inglés. En español los meses van con minúscula.',
          'Los meses van con minúscula, como cualquier sustantivo común.']
      },
      {
        p: 'En las palabras: el río Magdalena. ¿Cuál lleva mayúscula?',
        o: ['Solo Magdalena', 'Río y Magdalena', 'Ninguna'],
        e: ['Magdalena es el nombre propio. Río es un sustantivo común y va con minúscula.',
          'La palabra río sirve para cualquier río. Solo el nombre propio lleva mayúscula.',
          'Magdalena es el nombre particular de ese río, y los nombres propios llevan mayúscula.']
      },
      {
        p: 'En una palabra con mayúscula, ¿en qué letra va la mayúscula?',
        o: ['En la primera', 'En la última', 'En todas'],
        e: ['La mayúscula va solo en la primera letra de la palabra.',
          'Va al principio de la palabra, no al final.',
          'Solo la primera letra va en mayúscula. Las demás van en minúscula.']
      },
      {
        p: 'Rosa, con mayúscula, y rosa, con minúscula, suenan igual. ¿Qué avisa la mayúscula?',
        o: ['Que es el nombre de una persona', 'Que es una flor más grande', 'Que hay que leerla más fuerte'],
        e: ['La mayúscula avisa que es un nombre propio. Con minúscula es la flor.',
          'La mayúscula no habla del tamaño de las cosas. Avisa que es un nombre propio.',
          'La mayúscula no cambia cómo suena la palabra. Avisa que es un nombre propio.']
      },
      {
        p: 'La palabra colombiano, que dice de dónde es alguien, ¿cómo se escribe?',
        o: ['Con minúscula', 'Con mayúscula, igual que Colombia', 'Con mayúscula solo si es hombre'],
        e: ['Las palabras que dicen de dónde es alguien van con minúscula. El país, Colombia, sí lleva mayúscula.',
          'Colombia lleva mayúscula porque es el nombre propio del país. Colombiano no es un nombre propio.',
          'No depende de eso. Colombiano y colombiana van las dos con minúscula.']
      }
    ],
    resumen: 'llevan mayúscula la primera palabra de un escrito, la que va después de un punto y los nombres propios. Los días y los meses van con minúscula.'
  });

  // ------------------------------------------------------------------
  AE.leccion({
    id: 'esp-12',
    area: 'esp',
    titulo: 'Sinónimos y antónimos',
    pasos: [
      '## Para qué sirve',
      'Si en un cuento dices diez veces la palabra bonito, el cuento se vuelve aburrido. Si conoces otras palabras que significan lo mismo, puedes variar: lindo, hermoso, bello. Y si conoces las contrarias, puedes comparar. Hoy vas a agrandar tu colección de palabras.',
      '## Los sinónimos',
      'Los *sinónimos* son palabras distintas que significan lo mismo, o casi lo mismo. Contento y alegre. Empezar y comenzar. Casa y hogar. Rápido y veloz.',
      'Sirven para no repetir, y también para escoger la palabra exacta.',
      'Ojo: los sinónimos casi nunca son idénticos. Tibio y caliente se parecen, pero no es lo mismo una sopa tibia que una sopa caliente. Oír y escuchar se parecen, pero escuchar es oír poniendo atención.',
      '## Los antónimos',
      'Los *antónimos* son palabras que significan lo contrario. Frío y caliente. Subir y bajar. Ruidoso y silencioso. Áspero y suave. Día y noche.',
      '## Cómo se forman algunos antónimos',
      'Muchos antónimos se forman poniendo un pedacito al principio de la palabra. Ese pedacito se llama *prefijo*.',
      'Con el prefijo in: útil, inútil. Cómodo, incómodo. Delante de pe y de be, ese prefijo se dice im: posible, imposible.',
      'Con el prefijo des: hacer, deshacer. Ordenado, desordenado. Tapar, destapar.',
      '## De dónde sale',
      'Estas dos palabras vienen del griego, un idioma muy antiguo. Las dos terminan en ónimo, que quería decir nombre.',
      'Sinónimo empieza con un pedacito que quería decir junto, o igual. Sinónimos: nombres que van juntos, porque significan lo mismo. Antónimo empieza con anti, que quiere decir contrario. Antónimos: nombres contrarios.',
      '## Una prueba',
      'Para saber si dos palabras son sinónimos, cambia una por la otra en una frase. Si la frase sigue diciendo lo mismo, son sinónimos. El niño está contento. El niño está alegre. Dice lo mismo: son sinónimos.',
      'Con los antónimos, la frase tiene que quedar diciendo lo contrario. La sopa está fría. La sopa está caliente.',
      '## Un ejemplo resuelto',
      'Busquemos un sinónimo y un antónimo de la palabra veloz. Un sinónimo es rápido: un carro veloz es un carro rápido. Un antónimo es lento: lo contrario de un carro veloz es un carro lento.'
    ],
    practica: [
      {
        p: '¿Cuál es un sinónimo de la palabra contento?',
        o: ['Alegre', 'Triste', 'Cansado'],
        e: ['Contento y alegre significan casi lo mismo. Puedes cambiar una por otra y la frase dice lo mismo.',
          'Triste es lo contrario de contento. Es un antónimo.',
          'Cansado no significa lo mismo que contento. Alguien puede estar cansado y contento a la vez.']
      },
      {
        p: '¿Cuál es un antónimo de la palabra subir?',
        o: ['Bajar', 'Trepar', 'Escalar'],
        e: ['Bajar es lo contrario de subir.',
          'Trepar es subir agarrándose. Se parece a subir: es un sinónimo.',
          'Escalar es subir por una montaña o una pared. Se parece a subir: es un sinónimo.']
      },
      {
        p: '¿Qué son los sinónimos?',
        o: ['Palabras distintas que significan lo mismo o casi lo mismo', 'Palabras que significan lo contrario', 'Palabras que suenan igual'],
        e: ['Como empezar y comenzar, o rápido y veloz.',
          'Las palabras que significan lo contrario son los antónimos.',
          'Que suenen igual no las hace sinónimos. Lo que importa es que signifiquen lo mismo.']
      },
      {
        p: '¿Cuál es el antónimo de la palabra posible?',
        o: ['Imposible', 'Posiblemente', 'Probable'],
        e: ['El prefijo im, puesto al principio, forma el contrario.',
          'Posiblemente viene de la misma palabra, pero no es su contrario.',
          'Probable se parece a posible. No es su contrario.']
      },
      {
        p: '¿Cuál de estas parejas son antónimos?',
        o: ['Áspero y suave', 'Veloz y rápido', 'Casa y hogar'],
        e: ['Áspero y suave son contrarios: una lija es áspera, una cobija es suave.',
          'Veloz y rápido significan lo mismo. Son sinónimos.',
          'Casa y hogar significan casi lo mismo. Son sinónimos.']
      },
      {
        p: '¿Qué prueba sirve para saber si dos palabras son sinónimos?',
        o: ['Cambiar una por la otra en una frase, y oír si dice lo mismo', 'Contar si tienen las mismas letras', 'Oír si terminan igual'],
        e: ['Si la frase sigue diciendo lo mismo con cualquiera de las dos, son sinónimos.',
          'Los sinónimos suelen tener letras muy distintas, como casa y hogar.',
          'Que terminen igual no dice nada sobre su significado.']
      }
    ],
    resumen: 'los sinónimos significan lo mismo o casi lo mismo. Los antónimos significan lo contrario.'
  });

  // ------------------------------------------------------------------
  AE.leccion({
    id: 'esp-13',
    area: 'esp',
    titulo: 'La ortografía que no se oye',
    pasos: [
      '## Para qué sirve',
      'Hay letras que suenan igual y se escriben distinto. Al oír la palabra, no se sabe cuál lleva. Para quien aprende oyendo, este es el reto más grande de la escritura. La buena noticia es que hay reglas que resuelven muchos casos. Hoy aprendes las más útiles.',
      '## De dónde sale el problema',
      'Hace cientos de años, algunas de estas letras sonaban distinto. Con el tiempo los sonidos se fueron volviendo iguales, pero la manera de escribir se quedó como estaba. Por eso hoy tenemos dos letras para un mismo sonido.',
      '## Be larga y ve corta',
      'Regla uno: después de la letra eme siempre va be larga. Tambor, cambio, hombre. La palabra tambor se deletrea así: ~tambor~.',
      'Regla dos: después de la letra ene siempre va ve corta. Invierno, enviar, invitar. La palabra enviar se deletrea así: ~enviar~.',
      'Regla tres: antes de ele o de erre siempre va be larga. Blusa, cable, brazo, libro.',
      'Regla cuatro: los verbos que terminan en aba, cuando hablan del pasado, van con be larga. Cantaba, jugaba, caminaba.',
      '## Ce, ese y zeta',
      'En Colombia y en toda América, la ce, la ese y la zeta suenan igual delante de la e y de la i. Por eso hay que conocer las reglas.',
      'Regla uno: la zeta se usa delante de a, de o y de u. Zapato, zorro, azúcar. Delante de e y de i casi nunca va zeta: va ce. Cena, cine, cebolla.',
      'Regla dos: por eso, cuando una palabra termina en zeta, en el plural la zeta cambia por ce. Lápiz, lápices. Luz, luces. Pez, peces.',
      'Regla tres: la terminación de palabras como canción, estación y lección casi siempre va con ce. Hay algunas que van con ese, como televisión y pasión. Esas hay que aprenderlas una por una.',
      '## La hache',
      'La hache no suena, así que no hay forma de oírla. Pero también tiene reglas. Regla uno: las palabras que empiezan por hue o por hie llevan hache. Huevo, hueso, huella, hielo, hierba. La palabra huevo se deletrea así: ~huevo~.',
      'Regla dos: las palabras que empiezan por hum, seguido de una vocal, llevan hache. Humo, humano, húmedo.',
      'Regla tres: todas las formas de los verbos haber y hacer llevan hache. Había, hubo, hago, hizo, hecho.',
      '## Ge y jota',
      'La letra ge tiene dos sonidos. Delante de a, de o y de u suena suave: gato, gota, gusano. Delante de e y de i suena fuerte, igual que la jota: gente, girar.',
      'Por eso, cuando oyes ese sonido fuerte delante de e o de i, puede ser ge o puede ser jota. Gente va con ge. Jefe va con jota. Girasol va con ge. Jirafa va con jota. Esas palabras se aprenden deletreándolas.',
      'Para que la ge suene suave delante de e o de i, se le pone al lado una u que no suena. Guerra, guitarra. La palabra guitarra se deletrea así: ~guitarra~.',
      'Y si esa u sí debe sonar, se le ponen encima dos puntitos, que se llaman diéresis. Pingüino, cigüeña. La palabra pingüino se deletrea así: ~pingüino~.',
      '## Doble ele y ye',
      'En casi toda Colombia, la doble ele y la ye suenan igual. Dos reglas ayudan.',
      'Regla uno: las palabras que terminan en illo o en illa van con doble ele. Silla, cuchillo, tornillo, ardilla.',
      'Regla dos: cuando una palabra termina con el sonido de la i, después de otra vocal, esa i se escribe con ye. Rey, hoy, muy, estoy. La palabra rey se deletrea así: ~rey~.',
      '## Cuando no hay regla',
      'Las reglas no cubren todas las palabras. Para las demás, el camino es uno solo: cada vez que aprendas una palabra nueva, pide que te la deletreen. Con el tiempo, tu memoria guarda cómo se escribe cada una.',
      '## Un ejemplo resuelto',
      '¿Cómo se escribe la palabra cambio: con be larga o con ve corta? Busco una regla. Justo antes del sonido dudoso hay una eme. Y después de eme siempre va be larga. Cambio se escribe con be larga: ~cambio~.'
    ],
    practica: [
      {
        p: 'La palabra tambor, ¿se escribe con be larga o con ve corta?',
        o: ['Con be larga, porque va después de eme', 'Con ve corta, porque va después de eme', 'Con cualquiera de las dos'],
        e: ['Después de la letra eme siempre va be larga.',
          'Después de eme va be larga. La ve corta va después de ene.',
          'Solo hay una forma correcta. La regla dice que después de eme va be larga.']
      },
      {
        p: 'La palabra invierno, ¿se escribe con be larga o con ve corta?',
        o: ['Con ve corta, porque va después de ene', 'Con be larga, porque va después de ene', 'Con be larga, porque es una palabra larga'],
        e: ['Después de la letra ene siempre va ve corta.',
          'Después de ene va ve corta. La be larga va después de eme.',
          'Los nombres be larga y ve corta no tienen que ver con el tamaño de la palabra. Manda la letra anterior: después de ene va ve corta.']
      },
      {
        p: '¿Cuál es el plural de la palabra luz?',
        o: ['[Luces|Luces, con ce]', '[Luzes|Luces, con zeta]', '[Luzs|Luz, con una ese al final]'],
        e: ['La zeta cambia por ce, porque delante de la e no se usa zeta.',
          'Delante de la e casi nunca va zeta. Por eso en el plural cambia por ce.',
          'A las palabras que terminan en consonante no les basta una ese. Y la zeta cambia por ce.']
      },
      {
        p: 'La palabra huevo, ¿lleva hache?',
        o: ['Sí, porque empieza por hue', 'No, porque la hache no suena', 'Solo cuando va en plural'],
        e: ['Las palabras que empiezan por hue o por hie llevan hache.',
          'Que no suene no quiere decir que no se escriba. Las que empiezan por hue llevan hache.',
          'La hache no depende del plural. Huevo y huevos llevan hache las dos.']
      },
      {
        p: 'En la palabra guitarra, ¿para qué sirve la u?',
        o: ['Para que la ge suene suave. La u no se pronuncia', 'Para que la u suene más fuerte', 'Para que la palabra sea más larga'],
        e: ['Sin esa u, la ge delante de la i sonaría como jota.',
          'Esa u no suena. Su trabajo es que la ge suene suave delante de la i.',
          'No es para alargar. Sin esa u, la ge sonaría como jota.']
      },
      {
        p: 'La palabra silla, ¿se escribe con doble ele o con ye?',
        o: ['Con doble ele, porque termina en illa', 'Con ye, porque suena como ye', 'Con una sola ele'],
        e: ['Las palabras que terminan en illo o en illa van con doble ele.',
          'Suenan igual, pero la regla dice que las terminadas en illa van con doble ele.',
          'Con una sola ele sonaría distinto: sila. Lleva doble ele.']
      },
      {
        p: 'La palabra cantaba, ¿con qué letra se escribe su último sonido de be?',
        o: ['Con be larga, porque es un verbo terminado en aba', 'Con ve corta, porque es un verbo', 'Con ve corta, porque va al final'],
        e: ['Los verbos que terminan en aba, cuando hablan del pasado, van con be larga.',
          'Ser un verbo no pide ve corta. La regla es que la terminación aba va con be larga.',
          'La posición no decide. La regla es que la terminación aba de los verbos va con be larga.']
      },
      {
        p: 'La palabra pingüino lleva dos puntitos encima de la u. ¿Qué avisan?',
        o: ['Que esa u sí se pronuncia', 'Que esa u no se pronuncia', 'Que la palabra lleva tilde'],
        e: ['La diéresis avisa que la u suena. Sin ella, se leería como en guitarra, sin la u.',
          'Es al revés. Sin los puntitos la u no sonaría. Con ellos, sí.',
          'La diéresis no es una tilde. Son dos puntitos que avisan que la u suena.']
      }
    ],
    resumen: 'después de eme va be larga y después de ene va ve corta. Las palabras que empiezan por hue y por hie llevan hache. Y cuando no hay regla, se pide que deletreen la palabra.'
  });

  // ------------------------------------------------------------------
  AE.leccion({
    id: 'esp-14',
    area: 'esp',
    titulo: 'Comprensión de lectura',
    pasos: [
      '## Para qué sirve',
      'Oír un texto no es lo mismo que entenderlo. Entender es poder contar con tus palabras de qué trataba, qué pasó y por qué. Esa habilidad te sirve en todas las materias, no solo en español. Y se entrena, como un músculo.',
      '## Cómo escuchar un texto',
      'El mejor método es escuchar dos veces. La primera vez, para saber de qué trata. La segunda vez, para fijarte en los detalles.',
      'Mientras escuchas, hazte estas preguntas. ¿De quién o de qué se habla? ¿Qué pasó? ¿Dónde? ¿Cuándo? ¿Por qué?',
      '## Cuatro cosas que te van a preguntar',
      'Uno: los datos. Son cosas que el texto dice con todas las letras. Para responder, basta con recordar lo que oíste.',
      'Dos: el orden. Qué pasó primero, qué pasó después y qué pasó al final.',
      'Tres: la *idea principal*. Es lo más importante del texto, dicho en una sola frase. Si un amigo te pregunta de qué trataba, lo que le contestas es la idea principal.',
      'Cuatro: *inferir*. Es descubrir algo que el texto no dice, pero que se entiende por las pistas. Si oyes que alguien entró sacudiendo la sombrilla, sabes que afuera llueve, aunque nadie lo haya dicho.',
      '## Primer texto: el mercado de los sábados',
      'Vas a oír un cuento corto, en cuatro partes. Escucha con atención. Si quieres volver a oír una parte, devuélvete al paso anterior. Después te haré preguntas.',
      'Todos los sábados, Lucía va con su abuela a la plaza de mercado. Lucía es ciega, pero conoce la plaza de memoria. Sabe que ya llegaron cuando huele el cilantro fresco y oye a don Ramiro gritar: ¡aguacates maduros!',
      'Ese sábado había más gente que nunca. Entre los empujones, Lucía soltó la mano de su abuela. Se quedó quieta, como le habían enseñado, y escuchó con atención.',
      'A su izquierda sonaba el cuchillo de la señora de las frutas. Al frente cacareaban las gallinas. Y de pronto oyó, a lo lejos, un tintineo conocido: las pulseras de su abuela.',
      'Lucía caminó despacio hacia ese sonido, tocando con su bastón el borde de los puestos. Cuando el tintineo estuvo cerca, dijo: abuela, aquí estoy. La abuela la abrazó fuerte y le compró un pedazo de panela para celebrar.',
      {
        p: '¿A dónde va Lucía todos los sábados?',
        o: ['A la plaza de mercado', 'Al colegio', 'A la casa de don Ramiro'],
        e: ['El cuento lo dice al principio: va con su abuela a la plaza de mercado.',
          'El cuento no habla del colegio. Dice que los sábados va a la plaza de mercado.',
          'Don Ramiro vende aguacates en la plaza. Lucía no va a su casa.']
      },
      {
        p: '¿Cómo sabe Lucía que ya llegaron a la plaza?',
        o: ['Por el olor del cilantro y el grito de don Ramiro', 'Porque su abuela se lo dice', 'Porque oye las campanas de la iglesia'],
        e: ['Lucía reconoce la plaza por lo que huele y por lo que oye.',
          'El cuento no dice que la abuela le avise. Lucía se da cuenta sola, por el olor y por los sonidos.',
          'En el cuento no hay campanas. Lucía reconoce el olor del cilantro y la voz de don Ramiro.']
      },
      {
        p: 'Cuando Lucía soltó la mano de su abuela, ¿qué fue lo primero que hizo?',
        o: ['Quedarse quieta y escuchar', 'Correr a buscarla', 'Ponerse a llorar'],
        e: ['Hizo lo que le habían enseñado: quedarse quieta y escuchar con atención.',
          'No corrió. Primero se quedó quieta, y después caminó despacio.',
          'El cuento no dice que llorara. Dice que se quedó quieta y escuchó.']
      },
      {
        p: '¿Qué sonido le sirvió a Lucía para encontrar a su abuela?',
        o: ['El tintineo de sus pulseras', 'El cacareo de las gallinas', 'El cuchillo de la señora de las frutas'],
        e: ['Ese tintineo era un sonido que Lucía conocía bien, y caminó hacia él.',
          'Las gallinas le sirvieron para saber qué tenía al frente, pero no para encontrar a su abuela.',
          'El cuchillo le sirvió para saber qué tenía a la izquierda, pero no para encontrar a su abuela.']
      },
      {
        p: 'El cuento no dice cómo se sintió la abuela al encontrar a Lucía. Por las pistas, ¿cómo se sintió?',
        o: ['Aliviada y contenta', 'Brava con Lucía', 'Aburrida'],
        e: ['La abrazó fuerte y le compró panela para celebrar. Esas son pistas de alivio y de alegría.',
          'Si estuviera brava, no la habría abrazado ni le habría comprado panela para celebrar.',
          'Alguien que abraza fuerte y quiere celebrar no está aburrido.']
      },
      {
        p: '¿Cuál es la idea principal del cuento?',
        o: ['Una niña se pierde en la plaza y encuentra a su abuela usando la calma y el oído', 'Don Ramiro vende los mejores aguacates de la plaza', 'La panela es un dulce muy rico'],
        e: ['Eso es lo más importante que pasa, dicho en una sola frase.',
          'Don Ramiro solo aparece un momento. El cuento trata de lo que le pasa a Lucía.',
          'La panela aparece solo al final, como premio. No es de lo que trata el cuento.']
      },
      '## Segundo texto: los murciélagos',
      'Ahora vas a oír un texto distinto. No cuenta una historia: da información. También va en cuatro partes.',
      'Los murciélagos son animales que vuelan de noche. Muchas personas creen que son ciegos, pero no es verdad: sí pueden ver. Lo que pasa es que en la oscuridad los ojos sirven de poco, y por eso usan otra herramienta: el oído.',
      'Mientras vuelan, los murciélagos lanzan gritos muy agudos. Son tan agudos que las personas no los podemos oír. Esos gritos chocan contra las cosas y regresan, como un eco.',
      'Según lo que tarda el eco en volver, el murciélago sabe si un árbol está cerca o lejos. Así esquiva las ramas y atrapa insectos en plena oscuridad. Esta manera de orientarse se llama ecolocalización.',
      'Los murciélagos son muy útiles. Un solo murciélago puede comerse cientos de zancudos en una noche. Otros riegan semillas por donde pasan, y así ayudan a que nazcan árboles nuevos.',
      {
        p: 'Según el texto, ¿los murciélagos son ciegos?',
        o: ['No, sí pueden ver', 'Sí, son completamente ciegos', 'El texto no lo dice'],
        e: ['El texto dice que mucha gente lo cree, pero que no es verdad.',
          'Eso es lo que mucha gente cree. El texto aclara que sí pueden ver.',
          'Sí lo dice, en la primera parte: no es verdad que sean ciegos.']
      },
      {
        p: '¿Qué es la ecolocalización?',
        o: ['Orientarse con el eco de los propios gritos', 'Volar muy alto', 'Dormir colgado boca abajo'],
        e: ['El murciélago grita, el sonido choca y regresa, y por ese eco sabe dónde están las cosas.',
          'El texto no habla de la altura a la que vuelan. La ecolocalización es orientarse con el eco.',
          'El texto no habla de cómo duermen. La ecolocalización es orientarse con el eco.']
      },
      {
        p: '¿Por qué las personas no oímos los gritos de los murciélagos?',
        o: ['Porque son demasiado agudos', 'Porque son muy bajitos', 'Porque gritan muy lejos'],
        e: ['El texto dice que son tan agudos que las personas no los podemos oír.',
          'El texto no dice que sean bajitos. Dice que son demasiado agudos para nuestro oído.',
          'No es por la distancia. Es porque son demasiado agudos para nuestro oído.']
      },
      {
        p: 'El texto dice que el murciélago esquiva las ramas. ¿Qué quiere decir esquivar?',
        o: ['Pasar evitando chocar', 'Romper', 'Agarrarse'],
        e: ['Gracias al eco sabe dónde están las ramas, y pasa sin chocar con ellas.',
          'Si las rompiera, estaría chocando con ellas. El eco le sirve justamente para no chocar.',
          'El murciélago va volando y pasa de largo. Esquivar es evitar el choque.']
      },
      {
        p: '¿Cuál es la idea principal del texto?',
        o: ['Los murciélagos se orientan con el oído y son animales útiles', 'Los zancudos son muy molestos', 'Los murciélagos son peligrosos'],
        e: ['Todo el texto explica cómo se orientan con el eco, y al final cuenta para qué sirven.',
          'Los zancudos aparecen solo como ejemplo de lo que comen los murciélagos.',
          'El texto no dice eso. Al contrario: dice que son muy útiles.']
      },
      {
        p: 'El primer texto era un cuento. Este segundo texto, ¿qué hace?',
        o: ['Da información sobre un tema', 'Cuenta una historia inventada', 'Da los pasos de una receta'],
        e: ['No tiene personajes ni cuenta qué le pasó a alguien. Explica cómo son los murciélagos.',
          'No hay personajes ni una historia. El texto explica cómo son los murciélagos.',
          'No da instrucciones para hacer algo. Explica cómo son los murciélagos.']
      },
      '## Para seguir practicando',
      'Cada vez que oigas un cuento, una noticia o una explicación, hazte las mismas preguntas. ¿De qué trataba? ¿Qué pasó primero y qué pasó después? ¿Qué entendí, aunque nadie lo haya dicho? Entre más lo hagas, más fácil se vuelve.'
    ],
    resumen: 'para entender un texto, escúchalo dos veces y pregúntate de qué trata, en qué orden pasan las cosas y qué se entiende por las pistas.'
  });
})(window.AE = window.AE || {});
