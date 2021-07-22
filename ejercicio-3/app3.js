const contratarJugador = new Promise((resolve, reject) => {
  const contratado = true;

  if (contratado) {
    resolve("El jugador se incorpora al equipo");
  } else {
    reject("El jugador y el equipo no llegaron a un acuerdo");
  }
});

//creamos una funcion para mostrar el mensaje
const mostrarMensaje = (mensaje) => {
  console.log(`Mensaje: ${mensaje}`);
};

//utilizamos la funcion creada una vez que la promesa se cumpla o se rechace.
contratarJugador
  .then((mensaje) => mostrarMensaje(mensaje))
  .catch((error) => mostrarMensaje(error));
