const user = "Palermo";
const pass = "Alos3yalos5";

solicitarDatos();

function solicitarDatos() {
  let usuario = prompt("Ingrese su nombre de usuario:");
  let contraseña = prompt("Ingrese su contraseña:");

  let mensaje = validarDatos(usuario, contraseña);
  if ((mensaje = true)) {
    iniciarCarrito();
  } else alert("mensaje");
  iniciarCarrito();

  function iniciarCarrito() {}

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
