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
