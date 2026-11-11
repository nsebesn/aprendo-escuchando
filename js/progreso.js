/* Guarda en el aparato por dónde va el estudiante y cómo le gusta la voz. */
(function (AE) {
  'use strict';
  var CLAVE = 'aprendo-escuchando-v1';

  var P = AE.Progreso = {
    datos: {
      terminadas: {},   // id de lección -> { aciertos, total }
      posicion: {},     // id de lección -> paso donde iba
      pistas: {},       // cuántas veces se ha dicho cada pista de manejo
      nivelVoz: 2,
      nombreVoz: null,
      vozActiva: true,
      sonidoBarras: true,
      vioTutorial: false
    },
    cargar: function () {
      try {
        var guardado = JSON.parse(window.localStorage.getItem(CLAVE) || 'null');
        if (!guardado || typeof guardado !== 'object') return;
        Object.keys(P.datos).forEach(function (k) {
          if (guardado[k] !== undefined) P.datos[k] = guardado[k];
        });
      } catch (e) { /* sin almacenamiento: el programa funciona igual, pero no recuerda */ }
    },
    guardar: function () {
      try { window.localStorage.setItem(CLAVE, JSON.stringify(P.datos)); } catch (e) { /* nada */ }
    }
  };

  P.cargar();
})(window.AE = window.AE || {});
