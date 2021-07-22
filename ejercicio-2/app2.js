const contratarJugador = new Promise((resolve, reject) => {
  //Si cambiamos la variable contratado a "false" nos retornara una promesa rechazada (rejected).
  //Por lo tanto el output seria: El jugador y el equipo no llegaron a un acuerdo.
  const contratado = false;

  if (contratado) {
    resolve("El jugador se incorpora al equipo");
  } else {
    reject("El jugador y el equipo no llegaron a un acuerdo");
  }
});

contratarJugador
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.log(error));
