//ESTE ES EL CODIGO COMPLETO E INCLUYE LA FUNCION DE REGISTRAR USUARIO

// ✅ Lista de usuarios registrados
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [
  { user: "Palermo", pass: "Alos3yalos5" },
  { user: "Juan", pass: "1234" },
  { user: "Maria", pass: "abcd" },
];

//CAPTURAMOS EL FORMULARIO
const formLogin = document.getElementById("formLogin");

//Evita que recargue la pagina
formLogin.addEventListener("submit", function (e) {
  e.preventDefault();

  let usuario = document.getElementById("usuario").value.trim();
  let contraseña = document.getElementById("contraseña").value.trim();

  let mensaje = validarDatos(usuario, contraseña);

  if (mensaje === "") {
    //  Solo si es correcto pasa al menú de compras
    alert("Bienvenido " + usuario);
    mostrarMenu(); // tu función del carrito/menú
  } else if (mensaje === "Usuario no registrado") {
    // 👉 Si el usuario no existe, preguntar si quiere registrarse
    let opcion = confirm(
      "El usuario no está registrado. ¿Desea crear una cuenta?"
    );

    if (opcion) {
      registrarUsuario(usuario, contraseña);
      alert("✅ Usuario registrado con éxito. Ahora puede ingresar.");
      solicitarDatos(); // vuelve a pedir login
    } else {
      alert("❌ No podrá acceder sin una cuenta.");
    }
  } else {
    // ❌ Contraseña incorrecta u otro error
    alert(mensaje);
  }
});

/**
 * Valida usuario y contraseña en el array
 */
function validarDatos(usuario, contraseña) {
  let user = usuarios.find((u) => u.user === usuario);

  if (!user) return "Debe ingresar un usuario";
  if (user.pass != contraseña) return "Contraseña incorrecta";
  return "";
}

//REGISTRAR USUARIO Y GUARDARDO EN LOCALSTORAGE
function registrarUsuario(usuario, contraseña) {
  usuarios.push({ user: usuario, pass: contraseña });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  console.log(usuarios); // para verificar en consola
}

// Simulación de menú (para pruebas)
function mostrarMenu() {
  alert("👉 Accediste al menú de compras 🛒");
}

/* // Lista de usuarios (podés extenderla o guardarla en localStorage)
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [
  { user: "Palermo", pass: "Alos3yalos5" },
  { user: "Juan", pass: "1234" },
  { user: "Maria", pass: "abcd" },
];

const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function (e) {
  e.preventDefault();

  let usuario = document.getElementById("usuario").value.trim();
  let contraseña = document.getElementById("contraseña").value.trim();

  let mensaje = validarDatos(usuario, contraseña);

  if (mensaje === "") {
    alert("✅ Bienvenido " + usuario);

    // Guardamos usuario logueado
    localStorage.setItem("usuarioActivo", usuario);

    // Redirigimos al catálogo
    window.location.href = "../PAGES/index.html";
  } else if (mensaje === "Usuario no registrado") {
    let opcion = confirm("Usuario no registrado. ¿Querés crear una cuenta?");
    if (opcion) {
      registrarUsuario(usuario, contraseña);
      alert("✅ Usuario registrado, ahora podés ingresar.");
    } else {
      alert("❌ No podés ingresar sin una cuenta.");
    }
  } else {
    alert(mensaje); // contraseña incorrecta
  }
});

function validarDatos(usuario, contraseña) {
  let user = usuarios.find((u) => u.user === usuario);

  if (!user) return "Usuario no registrado";
  if (user.pass !== contraseña) return "Contraseña incorrecta";

  return ""; // todo ok
}

function registrarUsuario(usuario, contraseña) {
  usuarios.push({ user: usuario, pass: contraseña });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}
console.log(usuarios); // para verificar en consola
// Simulación de menú (para pruebas)
function mostrarMenu() {
  alert("👉 Accediste al menú de compras 🛒");
} */
