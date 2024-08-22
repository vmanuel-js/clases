/**
 * IF ELSE
 * - necesita de un valor de tipo boolean
 * - puede ser simplemente un if, no es necesario un else
 * - pero el else si necesita de un if
 *  */
/*
if (canManuelDrinkBeer) {
  // Si es verdadero, se ejecutara este codigo
  console.log('Claro puede tomar una cerveza querido amigo');
} else {
  // Si es falso, se ejecutara este codigo
  console.log('Lo siento, no puedes tomar pa');
}*/

/*
Ternary
 [booleanValue] ? //Statement true : //Statement false

*/
// si voy a declarar un número, string o boolean, este debe tener un nombre minimo para que otros desarrolladores puedan entender la diferencia
const legalAge = 18;
const manuelAge = 17;
const jpAge = 26;
const successMesage = 'Claro puede tomar una cerveza querido amigo';
const failMesage = 'Lo siento, no puedes tomar pa';

function canPersonDrinkBeer(personAge) {
  return personAge >= legalAge;
}

function displayBeerMesageIfElse(name, isAllowed) {
  if (isAllowed) {
    console.log(name + ':' + successMesage);
  } else {
    console.log(name + ':' + failMesage);
  }
}

function displayBeerMesageTernary(name, isAllowed) {
  isAllowed ? console.log(name + ':' + successMesage) : console.log(name + ':' + failMesage);
}

//Declarar un boolean
//Old
// const canManuelDrinkBeer = manuelAge >= legalAge;
// const canJpDrinkBeer = jpAge >= legalAge;

//Better way calling a function
const canManuelDrinkBeer = canPersonDrinkBeer(manuelAge);
const canJpDrinkBeer = canPersonDrinkBeer(jpAge);

displayBeerMesageIfElse('Manuel', canManuelDrinkBeer);
displayBeerMesageTernary('Jp', canJpDrinkBeer);

// const edadParaVerLaPelicula = 14;
// const edadDeManuel = 17;
// const edadDeTita = 5;

// function edadPermitida (edadPersona, nombre) {
//   const resultadoDeEdad = edadPersona >= edadParaVerLaPelicula
//   resultadoDeEdad ? console.log(nombre + ':' + 'entra') : console.log(nombre + ':' + 'no entra')
// }

// const edadParaQueManuelEntre = edadPermitida(edadDeManuel, 'Manuel');
// const edadParaQueTitaEntre = edadPermitida(edadDeTita, 'Tita');
