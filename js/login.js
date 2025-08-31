const user = "Palermo";
const pass = "Alos3yalos5";

solicitarDatos();

function solicitarDatos() {
  let usuario = prompt("Ingrese su usuario");
  let contraseña = prompt("Ingrese su contraseña");

  let mensaje = validarDatos(usuario, contraseña);
  if (mensaje == "") {
    iniciarCarrito();
  } else {
    alert(mensaje);
  }
}

function iniciarCarrito() {
  let lista = "";
  let finalizarCompra = false;
  while (!finalizarCompra) {
    let codigo = prompt("Ingrese el producto");
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
    if (lista !== "") {
      let respuesta = confirm("¿Desea finalizar la compra? " + lista);
      if (respuesta) {
        alert("Usted compró" + lista);
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
    case "4":
      producto = "Motorola G32";
      break;
    default:
      producto = false;
      break;
  }
  return producto;
}
/**
 *  @param {*} usuario
 *  @param {*} contraseña
 * @returns
 */

function validarDatos(usuario, contraseña) {
  let mensaje = "";
  if (!usuario) {
    mensaje = "El usuario no puede estar vacio .";
  }
  if (!contraseña) {
    mensaje += "\n La contraseña no puede estar vacia .";
  }
  if (usuario !== user || contraseña !== pass) {
    mensaje += "\nUsuario o contraseña incorrectos";
  }
  return mensaje;
}
