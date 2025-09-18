const user = "Palermo";
const pass = "Alos3yalos5";

solicitarDatos();

function solicitarDatos() {
  let usuario = prompt("Ingrese su nombre de usuario:");
  let contraseña = prompt("Ingrese su contraseña:");

  let mensaje = validarDatos(usuario, contraseña);
  if (mensaje == "") iniciarCarrito();
  else {
    if (usuario === null || contraseña === null) {
      alert("Debe ingresar usuario y contraseña");
      return;
    }

    let mensaje = validarDatos(usuario, contraseña);

    if (mensaje === "") {
      alert("Bienvenido " + usuario);
      iniciarCarrito();
    } else {
      alert(mensaje);
    }
  }

  /**
   * Valida usuario y contraseña
   * @param {string} usuario
   * @param {string} contraseña
   * @returns {string} mensaje de error o "" si es válido
   */
  function validarDatos(usuario, contraseña) {
    if (usuario !== user) {
      return "Usuario incorrecto";
    }
    if (contraseña !== pass) {
      return "Contraseña incorrecta";
    }
    return ""; // todo bien
  }

  /**
   * Simulación de inicio de carrito
   */
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

    alert("Accediste al carrito de compras 🛒");
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
        producto = "Motorola G72";
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
}
