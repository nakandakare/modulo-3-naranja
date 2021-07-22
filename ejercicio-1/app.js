const array = [];
let numIteracion = 1;

//Creamos una funcion para agregar elementos al array. 
//(Nota: aunque array sea una variable constante, se le puede asignar elementos ya que es mutable pero no re-asignable.)
const agregarElemento = (elemento, callback) => {
  array.push(elemento);
  callback();
};

//Funcion a utilizar como callback
const mostrarElemento = () => {
  console.log(`--- ${numIteracion}° iteracion ---`);
  array.map((elemento) => console.log(elemento));
  numIteracion++;
};

//ejemplo de Callback Hell.
const iniciarCallbacks = () => {
  setTimeout(() => {
    agregarElemento("Manzana", mostrarElemento);
    setTimeout(() => {
      agregarElemento("Limon", mostrarElemento);
      setTimeout(() => {
        agregarElemento("Banana", mostrarElemento);
        setTimeout(() => {
          agregarElemento("Kiwi", mostrarElemento);
          setTimeout(() => {
            agregarElemento("Sandia", mostrarElemento);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

iniciarCallbacks();
