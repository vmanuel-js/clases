/**
 * Crear un pequeño sistema en donde las escuelas puedan determinar que alumnos estan aprobados, necesiten ir a vacacional o estan jalados
 * La nota minima para aprobar es 13. De 13  para arriba significa que el alumno esta aprobado
 * Una nota menor a 11, significa que esta jalado. mayor a 11 y menor que 13, necesita recuperacion
 *
 */

const notaDeManuel = 8;
const notaDeTita = 18;
const notaDeJp = 11.3;

const notaMinimaAprobacion = 13;
const notaMaximadeJalado = 11;

function obtenerEstadoDeNota(nota) {
  if (nota >= notaMinimaAprobacion) {
    return 'Aprobado';
  } else if (nota <= notaMaximadeJalado) {
    return 'Desaprobado';
  } else if (notaMaximadeJalado >= nota <= notaMinimaAprobacion) {
    return 'Recuperacion';
  } else {
    return 'no se puede procesar la nota';
  }
}

function obtenerMensajeParaAlumno(nombre, estadoDeNota) {
  switch (estadoDeNota) {
    case 'Aprobado':
      console.log(nombre + 'Disfruta tu verano');
      break;
    case 'Desaprobrado':
      console.log(nombre + 'Estas desaprobado pa');
      break;
    case 'Recuperacion':
      console.log(nombre + 'bienvenido a veranito');
      break;
    default:
      console.log(nombre + 'no podemos procesar tu nota');
  }
}

function obtenerMensajeFinal(nombre, nota) {
  const estadoNotaDeManuel = obtenerEstadoDeNota(nota);
  obtenerMensajeParaAlumno(nombre, estadoNotaDeManuel);
}

const estadoNotaDeManuel = obtenerEstadoDeNota(notaDeManuel);
const estadoNotaDeJp = obtenerEstadoDeNota(notaDeJp);
const estadoNotaDeTita = obtenerEstadoDeNota(notaDeTita);

obtenerMensajeParaAlumno(estadoNotaDeManuel);
obtenerMensajeParaAlumno(estadoNotaDeJp);
obtenerMensajeParaAlumno(estadoNotaDeTita);

// const notaDeManuel = 8;
// const notaDeTita = 18;
// const notaDeJp = 11.3;

// const notaMinimaAprobacion = 13;
// const notaMaximadeJalado = 11;

// function obtenerEstadoDeNota(nota) {
//   if (nota >= notaMinimaAprobacion) {
//     return 'Aprobado';
//   } else if (nota <= notaMaximadeJalado) {
//     return 'Desaprobado';
//   } else if (notaMaximadeJalado >= nota <= notaMinimaAprobacion) {
//     return 'Recuperacion';
//   } else {
//     return 'no se puede procesar la nota';
//   }
// }

// function obtenerMensajeParaAlumno(nombre, estadoDeNota) {
//   switch (estadoDeNota) {
//     case 'Aprobado':
//       console.log(nombre + 'Disfruta tu verano');
//       break;
//     case 'Desaprobrado':
//       console.log(nombre + 'Estas desaprobado pa');
//       break;
//     case 'Recuperacion':
//       console.log(nombre + 'bienvenido a veranito');
//       break;
//     default:
//       console.log(nombre + 'no podemos procesar tu nota');
//   }
// }

// function obtenerMensajeFinal(nombre, nota) {
//   const estadoNotaDeManuel = obtenerEstadoDeNota(nota);
//   obtenerMensajeParaAlumno(nombre, estadoNotaDeManuel);
// }

// const estadoNotaDeManuel = obtenerEstadoDeNota(notaDeManuel);
// const estadoNotaDeJp = obtenerEstadoDeNota(notaDeJp);
// const estadoNotaDeTita = obtenerEstadoDeNota(notaDeTita);

// obtenerMensajeFinal('Manuel', notaDeManuel);
