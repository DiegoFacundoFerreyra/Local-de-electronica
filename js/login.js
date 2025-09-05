const user = "Palermo";
const pass = "Alos3yalos5";

solicitarDatos();

function solicitarDatos() {
  let usuario = prompt("Ingrese su nombre de usuario:");
  let contraseña = prompt("Ingrese su contraseña:");
  if (usuario === null || contraseña === null) {
    alert("Usuario o contraseña incorrectos");
    return;
  } else {
    alert("Bienvenido " + usuario);
  }
  let mensaje = validarDatos(usuario, contraseña);
  if (mensaje == "") {
    iniciarCarrito();
  }
}

function iniciarCarrito() {
  let lista = "";
  let finalizarCompra = false;

  while (!finalizarCompra) {
    let codigo = prompt("Ingrese el producto");
    let cantidad = parseInt(prompt("Ingrese la cantidad"));
    let producto = "obtenerProducto"(codigo);
    if (producto) {
      lista += cantidad + " " + producto + "\n";
    } else {
      if (codigo === "null") {
        finalizarCompra = true;
      } else {
        alert("Producto no encontrado");
      }
    }
    if (lista !== "") {
      let resp = confirm("¿Desea finalizar la compra? " + "\n" + lista);
    }
    if (resp) {
      finalizarCompra = true;
      alert("Usted comró: " + "\n" + lista);
      alert("Gracias por su compra");
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

  function validarDatos(usuario, contraseña) {
    if (usuario === user && contraseña === pass) {
      alert("Bienvenido " + usuario);
      return true;
    } else {
      alert("Usuario o contraseña incorrectos");
      return false;
    }
  }
}
