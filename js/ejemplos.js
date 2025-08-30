/*  let nombre = prompt("Nombre"); 
let apellido = prompt("Apellido");
let fechaDeNacimiento = prompt("Fecha de nacimiento");
let dNI = prompt("DNI");
let dirección = prompt("Dirección");
let ciudad = prompt("Ciudad");
let teléfono = prompt("Teléfono");
let correoeElectrónico = prompt("Correo electrónico");
let usuario = prompt("Usuario");
let contraseña = prompt("Contraseña"); 
 alert("Bienvenido " + nombre); 

 12 ES UN NUMERO Y "12" ES UN TEXTO

 numero1 = 10;
numero2 = 8;
resultado = numero1 + numero2;
alert(resultado); 

/OPERADORES DE COMPARACION
(verdadero o falso)
= asigna
== compara pero no diferencia si es un texto o un numero
=== solo identifica texto con texto y numero con numero
!= valor Y es dinstinto a valor X?
!== valor Y es estricamente igual a valor X? 
numero1 <= nuermo2 (menor o igual)
numero1 >= numero2 (mayor o igual)
numero1 < numero2 (menor que)
numero2 > numero2 (mayor que)

 let numero1 = 24;
let numero2 = 14;
alert(numero1 == numero2); FALSE

 let numero1 = 8;
let numero2 = 22;
alert(numero1 != numero2) TRUE; 

 let numero1 = 22;
let numero2 = 33;
let resultado = numero1 == numero2;
alert(resultado); 

OPERADORES LOGICOS
&& si 1 sola de 2 es false devuelve false 
|| si 1 de las 2 es verdadera, devuelve verdadera
! me devuelve lo contrario de lo que hay a continuacion (! va en el parentecis del resultado)

CONDICIONALES
IF = si esta condicion se cumple (ESTE ES EL PRIMERO Y ES 1 SOLO)
ELSE IF = si no, vamos a ver si esta otra condicion se cumple (ESTE VA ENTRE EL "IF" Y EL "ELSE" Y PODEMOS PONER TODOS LOS QUE QUERRAMOS)
ELSE = si no se ejecuto ninguno de los anteriores, muestra este. (ESTE ES EL ULTIMO Y ESE 1 SOLO)
{todo lo que esta aca adentro es un bloque.
y los bloques se ejecutan}
if (10 > 5) {ejecuta lo de aca adentro solo si es TRUE, si es FALSE no ejecuto, en este caso,
10 es mayor que 5 asique lo ejecutaria, en caso que fuese menor, seria false y ahi no ejecutaria.}
else if (MUESTRA SI LA SOLUCION NO SE CUMPLE)
 */

/* TERMINARLO CON DALTO */
/* dineroFerreyra = prompt("cuanto dinero tenes Ferreyra?");
dineroDiego = parseInt(dineroFerreyra);

if (dineroFerreyra >= 0.5 && dineroFerreyra < 1) {
  alert("No te alcanza para nada");
} else if (dineroFerreyra >= 2 && dineroFerreyra < 3) {
  alert("Igual estas croto");
} else if (dineroFerreyra >= 4 && dineroFerreyra < 5) {
  alert("Estas menos croto");
} else if (dineroFerreyra >= 6 && dineroFerreyra < 7) {
  alert("Casi");
} else if (dineroFerreyra >= 8) {
  alert("La tenes toda chinguenguencha");
} else {
  alert("Tito, estas debajo de un puente");
}

dineroFacundo = prompt("cuanto dinero Facundo?");
dineroDiego = parseInt(dineroFacundo);

if (dineroFacundo >= 0.5 && dineroFacundo < 1) {
  alert("No te alcanza para nada");
} else if (dineroFacundo >= 2 && dineroFacundo < 3) {
  alert("Igual estas croto");
} else if (dineroFacundo >= 4 && dineroFacundo < 5) {
  alert("Estas menos croto");
} else if (dineroFacundo >= 6 && dineroFacundo < 7) {
  alert("Casi");
} else if (dineroFacundo >= 8) {
  alert("La tenes toda chinguenguencha");
} else {
  alert("Tito, estas debajo de un puente");
}

ESTO NO ME SALIO!!!!! SIGUE INSISTIENDO CON EL NOMNRE, NO SE SI O TOMA LOS BRAKE O EL PROBLEMA ESTA EN OTRO LADO!!!!!
  let entrada = prompt("Ingrese su nomnbre");
while (entrada != "ESC") {
  switch (entrada) {
    case "WALY":
      alert("Hola WALY");
      break;
     case "FER":
      alert("Hola FER");
      break;
    case "FACU":
      alert("Hola FACU");
      break; 
    default:
      alert("QUEIN SOS");
      break;
  }
  entrada = prompt("Ingrese su nombre");
}
 */

/* let nombreUsuario = prompt("Ingresar usuario");
if (nombreUsuario == "") {
  alert("No ingresaste nombre de usuario");
} else {
  alert("Bienvenido " + nombreUsuario);
}
 */

/*CONTADOR DENTRO DE UN BUCLE "FOR"*/
/* for (let i = 1; i <= 10; i++) {
  if (i == 1) {
    alert(i + " Celular");
  } else {
    alert(i + " Celulares");
  }
} */

/* BUCLE WHILE */
/* let c = 1;
while (c <= 10) {
  if (c == 1) {
    alert(c + " Celular");
  } else {
    alert(c + " Celulares");
  }
  c++;
} */
/*ANOTACION IMPORTANTE: TRATAR DE USAR SIEMPPRE EL FOT ANTES QUE EL WHILE.*/

/*A CONTINUACION UN EJEMPLO DE NUMEROS QUE SI O SI TIENEN QUE SER NUMEROS*/
/* let anio = parseInt(prompt("Ingrese su edad"));
if (isNaN(anio)) {
  alert("No ingresaste un numero");
} else {
  let tieneDNI = confirm("Tenes DNI?");
  if (tieneDNI && anio >= 18) {
    alert("Sos mayor de edad, podes entrar");
  } else {
    alert("No podes entrar!!");
  }
} */

/*ARRAYS SE GUARDA DENTRO LA PALABRA PREDENTERMINADA, SE USAN [], CADA PALABRA VA CON " UNIVIDUALES Y SE SEPARAN CON UNA ,*/
/* intercontinentales = ["1978", "2000", "2003"];
document.write(intercontinentales[0]);
document.write(intercontinentales[1]);
document.write(intercontinentales[2]); */
/* PARA SABER CUANTOS ELEMENTOS TIENE UN ARRAY, SE USA .LENGTH */
/* SE PUEDE MOSTRAR EL LA PALABRA QUE NOSOTROS QUERRAMOS ENCERRADA ENTRE CORCHETES EL NUMERO DE LA PALABRA SIGUIENDO EL ORDEN EN EL QUE ESTA ESCRITA, COMENZANDO CON EL 0.*/

/*ARRAYS ASOCIATIVOS, SE USAN {} Y CADA PALABRA VA SIN " Y SEPARADAS POR ,*/
/* let vehiculo = {
  marca: "Peugeot",
  modelo: "207",
  anio: 2014,
  color: "Blanco",
  km: 126000,
  motor: "1.4",
  combustible: "Nafta",
  caja: "Manual",
};

alert(vehiculo["marca"]);
alert(vehiculo["modelo"]);
alert(vehiculo["anio"]);
alert(vehiculo["color"]);
alert(vehiculo["km"]);
alert(vehiculo["motor"]);
alert(vehiculo["combustible"]);
alert(vehiculo["caja"]); */

/*let resp = confirm("¿Desea usar la calculadora?");
if (resp) {
  while (resp) {
    let numero1 = parseFloat(prompt("Ingrese el primer número"));
    let operacion = prompt(
      "Ingrese la operación que desea realizar (+, -, *, /)"
    );
    let numero2 = parseFloat(prompt("Ingrese el segundo número"));
    let resultado = 0;

    if (isNaN(numero1) || isNaN(numero2)) {
      alert("Debe ingresar números");
      continue;
    } else {
      switch (operacion) {
        case "+":
          resultado = numero1 + numero2;
          alert("El resultado de la suma es: " + resultado);
          break;
        case "-":
          resultado = numero1 - numero2;
          alert("El resultado de la resta es: " + resultado);
          break;
        case "*":
          resultado = numero1 * numero2;
          alert("El resultado de la multiplicación es: " + resultado);
          break;
        case "/":
          if (numero2 === 0) {
            alert("No se puede dividir por cero");
          } else {
            resultado = numero1 / numero2;
            alert("El resultado de la división es: " + resultado);
          }
          break;
        default:
          alert("Operación no válida");
          break;
      }
      if (
        operacion === "+" ||
        operacion === "-" ||
        (operacion === "/" && numero2 !== 0) ||
        operacion === "*"
      ) {
        alert(
          "El resultado es: " +
            numero1 +
            " " +
            operacion +
            " " +
            numero2 +
            " es igual a " +
            resultado
        );
      }
    }
    resp = confirm("¿Desea realizar otra operación?");
  }
}*/

/*PROBABLEMENTE ESTE MAL NO SE DONDE PONER EL MSJ*/

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
