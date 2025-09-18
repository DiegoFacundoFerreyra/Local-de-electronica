const user = "Palermo";
const pass = "Alos3yalos5";

solicitarDatos();

function solicitarDatos() {
  let usuario = prompt("Ingrese su nombre de usuario:");
  let contraseña = prompt("Ingrese su contraseña:");

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
  alert("Accediste al carrito de compras 🛒");
}
