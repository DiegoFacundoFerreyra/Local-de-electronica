const user = "Palermo";
const pass = "Alos3yalos5";

solicitarDatos();

function solicitarDatos() {
  let usuario = prompt("Ingrese su nombre de usuario:");
  let contraseña = prompt("Ingrese su contraseña:");

  let mensaje = validarDatos(usuario, contraseña);
  if (mensaje == "") iniciarCarrito();
  else {
    alert(mensaje);
  }
}

function iniciarCarrito() {
  let lista = "";
  let finalizarCompra = false;

  while (!finalizarCompra) {
    let codigo = prompt("Ingrese el producto");
    //let cantidad = parseInt(prompt("Ingrese la cantidad"));
    let producto = obtenerProducto(codigo);
    if (producto) {
      lista += "\n -" + producto;
    } else {
      if (codigo === null) {
        finalizarCompra = true;
      } else {
        alert("Producto no encontrado");
      }
    }
    if (lista != "") {
      let resp = confirm("¿Desea finalizar la compra? " + lista);

      if (resp) {
        alert("Usted compró: " + lista);
        alert("Gracias por elegirnos");
        finalizarCompra = true;
      }
    }
  }
}

function obtenerProducto(codigo) {
  let producto;
  switch (codigo) {
    case "1":
      producto = "Iphone14";
      break;
    case "2":
      producto = "Samsung S23";
      break;
    case "3":
      producto = "Xiaomi 13";
      break;
    default:
      producto = false;
      break;
  }
  return producto;
}

/**
 *
 * @param {*} usuario
 * @param {*} contraseña
 * @returns
 */

function validarDatos(usuario, contraseña) {
  let mensaje = "";
  if (!usuario) {
    mensaje = "El usuario no existe";
  }
  if (!contraseña) {
    mensaje += "\n La contraseña no es correcta";
  }
  if (usuario != user || contraseña != pass) {
    mensaje += "\n Usuario o contraseña incorrectos";
  }
  return mensaje;
}
