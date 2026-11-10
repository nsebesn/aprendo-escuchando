/*
 * Recorrido inicial: enseña a manejar el programa.
 * Cada tarjeta espera que el estudiante haga la acción que se le acaba de explicar.
 * Hay una versión para teclado y otra para pantalla táctil.
 */
(function (AE) {
  'use strict';

  var SONIDO = 'Una cosa más. Cuando yo termine de hablar, vas a oír un sonido cortico, como una gota. Ese sonido quiere decir: ya terminé, ahora te toca a ti.';

  AE.recorrido = {
    teclado: {
      id: 'recorrido',
      titulo: 'Cómo se maneja el programa',
      sinGuardar: true,
      cierre: '¡Ya sabes manejar el programa!',
      resumen: 'si te pierdes, la barra espaciadora repite y la tecla Escape te devuelve al menú.',
      pasos: [
        {
          espera: 'repetir',
          texto: 'Hola. Te doy la bienvenida a Aprendo Escuchando. Aquí vas a aprender matemáticas y español solamente oyendo. Yo te hablo, y tú me contestas con unas pocas teclas. No necesitas ver la pantalla. Primero vamos a conocer las teclas, una por una. La primera es la *barra espaciadora*. Es la tecla más larga de todo el teclado. Está abajo, en el centro, donde descansan tus dedos pulgares. Sirve para que yo repita lo que acabo de decir. Búscala con calma y presiónala una vez.',
          bien: '¡Muy bien! Esa es la barra espaciadora. Cada vez que no entiendas algo, o te distraigas, presiónala y yo repito. Puedes usarla todas las veces que quieras.',
          ayuda: 'Busca la barra espaciadora: es la tecla más larga, abajo, en el centro.'
        },
        '## Las flechas',
        {
          espera: 'siguiente',
          texto: 'Ahora vamos con las flechas. Son cuatro teclas pequeñas que están juntas, abajo y a la derecha del teclado. Tres están en fila, y una está encima de la del medio. Pon tres dedos sobre la fila de tres. La que queda más a la derecha es la *flecha derecha*. Sirve para seguir adelante, al paso siguiente. Presiónala.',
          bien: '¡Eso es! Flecha derecha: seguir adelante.',
          ayuda: 'Busca la flecha derecha: en el grupo de cuatro flechas, abajo a la derecha del teclado, es la última de la fila de tres.'
        },
        {
          espera: 'anterior',
          texto: 'En esa misma fila de tres, la que queda más a la izquierda es la *flecha izquierda*. Sirve para devolverte al paso anterior. Presiónala.',
          bien: '¡Muy bien! Flecha izquierda: devolverte.',
          ayuda: 'Busca la flecha izquierda: es la primera de la fila de tres flechas.'
        },
        {
          espera: 'abajo',
          texto: 'La tecla del medio de esa fila es la *flecha abajo*. Cuando yo te dé varias opciones para escoger, la flecha abajo te lleva a la opción siguiente. Presiónala.',
          bien: '¡Correcto! Flecha abajo: pasar a la opción siguiente.',
          ayuda: 'Busca la flecha abajo: es la del medio en la fila de tres flechas.'
        },
        {
          espera: 'arriba',
          texto: 'Justo encima de la flecha abajo está la *flecha arriba*. Te devuelve a la opción anterior. Presiónala.',
          bien: '¡Eso es! Flecha arriba: volver a la opción anterior.',
          ayuda: 'Busca la flecha arriba: está sola, encima de la flecha del medio.'
        },
        '## La tecla Enter',
        {
          espera: 'elegir',
          texto: 'Ahora la tecla *Enter*. Es una tecla grande que está en el borde derecho de las letras, cerca de tu dedo meñique derecho. Sirve para elegir la opción que acabas de oír. Presiónala.',
          bien: '¡Muy bien! Enter: elegir.',
          ayuda: 'Busca la tecla Enter: es una tecla grande, al lado derecho de las letras.'
        },
        '## La tecla Escape',
        {
          espera: 'menu',
          texto: 'La última es la tecla *Escape*. Está sola, en la esquina de arriba a la izquierda del teclado. Sirve para salir de donde estás y volver al menú. Presiónala.',
          bien: '¡Perfecto! Escape: salir y volver al menú. Ya conoces todas las teclas.',
          ayuda: 'Busca la tecla Escape: está en la esquina de arriba, a la izquierda del teclado.'
        },
        '## Repaso',
        'Repasemos. Barra espaciadora: repetir. Flecha derecha: seguir. Flecha izquierda: devolverte. Flecha abajo y flecha arriba: moverte entre opciones. Enter: elegir. Escape: volver al menú.',
        'Hay una ayuda más. La letra ele deletrea las palabras importantes del paso, letra por letra. Así sabes cómo se escriben. La letra ele está en la fila del medio de las letras, hacia la derecha. Y si quieres que yo hable más despacio o más rápido, entra a Ajustes de la voz, en el menú principal.',
        SONIDO
      ]
    },

    tactil: {
      id: 'recorrido',
      titulo: 'Cómo se maneja el programa',
      sinGuardar: true,
      cierre: '¡Ya sabes manejar el programa!',
      resumen: 'si te pierdes, un toque repite, y dejar el dedo quieto te devuelve al menú.',
      pasos: [
        {
          espera: 'repetir',
          texto: 'Hola. Te doy la bienvenida a Aprendo Escuchando. Aquí vas a aprender matemáticas y español solamente oyendo. Yo te hablo, y tú me contestas tocando la pantalla. No necesitas verla. Toda la pantalla sirve: puedes tocar en cualquier parte. Vamos a aprender los toques, uno por uno. El primero es *un toque*. Toca la pantalla una sola vez con un dedo y levántalo enseguida. Sirve para que yo repita lo que acabo de decir. Hazlo ahora.',
          bien: '¡Muy bien! Ese es un toque. Cada vez que no entiendas algo, o te distraigas, toca la pantalla una vez y yo repito. Puedes hacerlo todas las veces que quieras.',
          ayuda: 'Toca la pantalla una sola vez con un dedo y levántalo enseguida.'
        },
        '## Deslizar',
        {
          espera: 'siguiente',
          texto: 'Ahora vamos a *deslizar*. Pon un dedo sobre la pantalla y, sin levantarlo, arrástralo hacia la derecha, hacia el lado de tu mano derecha. Después levántalo. Sirve para seguir adelante, al paso siguiente. Hazlo ahora.',
          bien: '¡Eso es! Deslizar a la derecha: seguir adelante.',
          ayuda: 'Pon un dedo en la pantalla, arrástralo hacia la derecha y levántalo.'
        },
        {
          espera: 'anterior',
          texto: 'Ahora lo mismo, pero hacia el otro lado. Pon un dedo y arrástralo hacia la izquierda. Sirve para devolverte al paso anterior. Hazlo ahora.',
          bien: '¡Muy bien! Deslizar a la izquierda: devolverte.',
          ayuda: 'Pon un dedo en la pantalla, arrástralo hacia la izquierda y levántalo.'
        },
        {
          espera: 'abajo',
          texto: 'Ahora desliza hacia abajo: pon un dedo y arrástralo hacia ti, hacia el borde del celular que tienes más cerca. Cuando yo te dé varias opciones para escoger, este gesto te lleva a la opción siguiente. Hazlo ahora.',
          bien: '¡Correcto! Deslizar hacia abajo: pasar a la opción siguiente.',
          ayuda: 'Pon un dedo en la pantalla y arrástralo hacia abajo, hacia ti.'
        },
        {
          espera: 'arriba',
          texto: 'Ahora al contrario: desliza hacia arriba, alejando el dedo de ti. Te devuelve a la opción anterior. Hazlo ahora.',
          bien: '¡Eso es! Deslizar hacia arriba: volver a la opción anterior.',
          ayuda: 'Pon un dedo en la pantalla y arrástralo hacia arriba, lejos de ti.'
        },
        '## Doble toque',
        {
          espera: 'elegir',
          texto: 'Ahora el *doble toque*. Toca la pantalla dos veces seguidas, rápido, como cuando golpeas una puerta: toc, toc. Sirve para elegir la opción que acabas de oír. Hazlo ahora.',
          bien: '¡Muy bien! Doble toque: elegir.',
          ayuda: 'Toca la pantalla dos veces seguidas, rápido, como golpeando una puerta.'
        },
        '## Dejar el dedo quieto',
        {
          espera: 'menu',
          texto: 'El último gesto es *dejar el dedo quieto*. Pon un dedo sobre la pantalla y no lo muevas ni lo levantes, hasta que oigas un sonido. Sirve para salir de donde estás y volver al menú. Hazlo ahora.',
          bien: '¡Perfecto! Dejar el dedo quieto: salir y volver al menú. Ya conoces todos los gestos.',
          ayuda: 'Pon un dedo sobre la pantalla y déjalo quieto, sin levantarlo, hasta que suene.'
        },
        '## Repaso',
        'Repasemos. Un toque: repetir. Deslizar a la derecha: seguir. Deslizar a la izquierda: devolverte. Deslizar hacia abajo y hacia arriba: moverte entre opciones. Doble toque: elegir. Dejar el dedo quieto: volver al menú.',
        'Hay una ayuda más. Si tocas la pantalla con dos dedos al mismo tiempo, yo deletreo las palabras importantes del paso, letra por letra. Así sabes cómo se escriben. Y si quieres que yo hable más despacio o más rápido, entra a Ajustes de la voz, en el menú principal.',
        SONIDO
      ]
    }
  };
})(window.AE = window.AE || {});
