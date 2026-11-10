# Aprendo Escuchando

Programa para aprender matemáticas y español de grado sexto **solamente oyendo**. Está pensado para estudiantes ciegos con bases bajas: habla con su propia voz, se maneja con muy pocas teclas o gestos y explica cada tema paso a paso, diciendo de dónde sale cada regla y por qué.

**Abrirlo:** https://nsebesn.github.io/aprendo-escuchando/

Funciona en computador y en celular. Después de abrirlo una vez con internet, sigue funcionando sin internet. En el celular se puede dejar como aplicación con «Agregar a la pantalla de inicio».

## Qué trae

- **Matemáticas, 17 lecciones.** Tres de bases (repartir, multiplicar, múltiplos y divisores) y catorce de fracciones: qué son, equivalentes, simplificar, comparar, sumar, restar, multiplicar, dividir y problemas.
- **Español, 14 lecciones.** Letras y sonidos, sílabas, tilde, sustantivo, adjetivo, verbo, la oración, puntuación, mayúsculas, sinónimos, ortografía y comprensión de lectura.

Cada lección sigue el mismo orden: para qué sirve, la explicación, de dónde sale, un ejemplo resuelto, práctica y resumen.

## Cómo se maneja

| Para… | Computador | Celular |
|---|---|---|
| Seguir al paso siguiente | Flecha derecha o Enter | Deslizar a la derecha |
| Volver al paso anterior | Flecha izquierda | Deslizar a la izquierda |
| Repetir | Barra espaciadora | Un toque |
| Moverse entre opciones | Flechas arriba y abajo | Deslizar arriba o abajo |
| Elegir | Enter | Doble toque |
| Volver al menú | Escape | Dejar el dedo quieto |
| Deletrear las palabras importantes | Letra L | Toque con dos dedos |
| Voz más rápida o más lenta | Teclas + y − | Menú «Ajustes de la voz» |

La primera vez, el programa enseña estos controles uno por uno.

En el celular hay que apagar TalkBack o VoiceOver mientras se usa, porque el programa ya habla solo.

## Para quien quiera cambiarlo

No usa bibliotecas ni necesita instalar nada para funcionar.

- `js/contenido/` tiene las lecciones. Las marcas que se pueden usar en los textos están explicadas al principio de `js/texto.js`.
- `js/` tiene el motor: la voz, los sonidos, los controles y la navegación.
- `node herramientas/pruebas.js` revisa todas las lecciones y preguntas.
- `node herramientas/construir.js` arma el archivo único `Aprendo-Escuchando.html` y la versión web de la carpeta `docs/`, que es la que se publica.
- `python3 herramientas/servidor.py` sirve la carpeta para probar mientras se edita.
