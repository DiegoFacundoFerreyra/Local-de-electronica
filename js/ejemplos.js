let nombre = prompt("Nombre"); 
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

//OPERADORES DE COMPARACION
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

//OPERADORES LOGICOS
&& si 1 sola de 2 es false devuelve false 
|| si 1 de las 2 es verdadera, devuelve verdadera
! me devuelve lo contrario de lo que hay a continuacion (! va en el parentecis del resultado)

//CONDICIONALES
IF = si esta condicion se cumple (ESTE ES EL PRIMERO Y ES 1 SOLO)
ELSE IF = si no, vamos a ver si esta otra condicion se cumple (ESTE VA ENTRE EL "IF" Y EL "ELSE" Y PODEMOS PONER TODOS LOS QUE QUERRAMOS)
ELSE = si no se ejecuto ninguno de los anteriores, muestra este. (ESTE ES EL ULTIMO Y ESE 1 SOLO)
{todo lo que esta aca adentro es un bloque.
y los bloques se ejecutan}
if (10 > 5) {ejecuta lo de aca adentro solo si es TRUE, si es FALSE no ejecuto, en este caso,
10 es mayor que 5 asique lo ejecutaria, en caso que fuese menor, seria false y ahi no ejecutaria.}
else if (MUESTRA SI LA SOLUCION NO SE CUMPLE)
else {si no se cumple ninguna de las anteriores, ejecuta esto.}

/* TERMINARLO CON DALTO */
dineroFerreyra = prompt("cuanto dinero tenes Ferreyra?");
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

//EJEMPLO DE USO DE PROMPT, ALERT Y CONFIRM

 let nombreUsuario = prompt("Ingresar usuario");
if (nombreUsuario == "") {
  alert("No ingresaste nombre de usuario");
} else {
  alert("Bienvenido " + nombreUsuario);
}
 

//CONTADOR DENTRO DE UN BUCLE "FOR"
 for (let i = 1; i <= 10; i++) {
  if (i == 1) {
    alert(i + " Celular");
  } else {
    alert(i + " Celulares");
  }
} 

// BUCLE WHILE 
 let c = 1;
while (c <= 10) {
  if (c == 1) {
    alert(c + " Celular");
  } else {
    alert(c + " Celulares");
  }
  c++;
} 
//ANOTACION IMPORTANTE: TRATAR DE USAR SIEMPPRE EL FOR ANTES QUE EL WHILE.

//A CONTINUACION UN EJEMPLO DE NUMEROS QUE SI O SI TIENEN QUE SER NUMEROS
 let anio = parseInt(prompt("Ingrese su edad"));
if (isNaN(anio)) {
  alert("No ingresaste un numero");
} else {
  let tieneDNI = confirm("Tenes DNI?");
  if (tieneDNI && anio >= 18) {
    alert("Sos mayor de edad, podes entrar");
  } else {
    alert("No podes entrar!!");
  }
} 

//ARRAYS SE GUARDA DENTRO LA PALABRA PREDENTERMINADA, SE USAN [], CADA PALABRA VA CON " UNIVIDUALES Y SE SEPARAN CON UNA ,
 intercontinentales = ["1978", "2000", "2003"];
document.write(intercontinentales[0]);
document.write(intercontinentales[1]);
document.write(intercontinentales[2]); 
// PARA SABER CUANTOS ELEMENTOS TIENE UN ARRAY, SE USA .LENGTH 
// SE PUEDE MOSTRAR EL LA PALABRA QUE NOSOTROS QUERRAMOS ENCERRADA ENTRE CORCHETES EL NUMERO DE LA PALABRA SIGUIENDO EL ORDEN EN EL QUE ESTA ESCRITA, COMENZANDO CON EL 0.

/*ARRAYS ASOCIATIVOS, SE USAN {} Y CADA PALABRA VA SIN " Y SEPARADAS POR ,*/
let vehiculo = {
  marca: "Peugeot",
  modelo: "207",
  anio: 2014,
  color: "Blanco",
  km: 126000,
  motor: "1.4",
  combustible: "Nafta",
  caja: "Manual",
};

let marca = vehiculo["marca"];
let modelo = vehiculo["modelo"];
let anio = vehiculo["anio"];
let color = vehiculo["color"];
let km = vehiculo["km"];
let motor = vehiculo["motor"];
let combustible = vehiculo["combustible"];
let caja = vehiculo["caja"];
  

//CALCULADORA
//UNA FORMA DE HACERLO
frase =
  "El auto es un " +
  marca +
  " " +
  modelo +
  " del año " +
  anio +
  "color " +
  color +
  " y tiene " +
  km +
  "km" +
  " motor " +
  motor +
  " y funciona a " +
  combustible +
  " y tiene caja " +
  caja;
document.write(frase);

/*OTRA FORMA DE HACERLO*/
 frase = `El auto es un ${marca} ${modelo} <br> del año ${anio} <br> color ${color} <br> y tiene ${km} km <br> con un motor ${motor} <br> que funciona a ${combustible} <br> y tiene caja ${caja} <br>`;
document.write(frase); 


/*FUNCIONES*/
 function saludar() {
  let nombre = prompt("Ingrese su nombre");
  alert("Bienvenido " + nombre);
}
saludar(); 
let resp = confirm("¿Desea usar la calculadora?");
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
}

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

//ORDENAR UN ARRAY DE OBJETOS POR PRECIO
//FORMA DE HACERLO DE MENOR A MAYOR
function ordenarPorPrecio() {
  arregloBicis.sort((a, b) => a.getPrecio() - b.getPrecio());
  alert("Las bicicletas ordenadas por precio son: \n" + mostrarStock());
}

//FORMA DE HACERLO DE MAYOR A MENOR
 function ordenarPorPrecio() {
  arregloBicis.sort((a, b) => b.getPrecio() - a.getPrecio());
  alert("Las bicicletas ordenadas por precio son: \n" + mostrarStock());
} 

//ORDENAR UN ARRAY DE OBJETOS POR ORDEN ALFABETICO
 const ordenAlfabetico = [
  { nombre: "diego", apellido: "ferreyra" },
  { nombre: "juan", apellido: "perez" },
  { nombre: "ana", apellido: "gomez" },
  { nombre: "maria", apellido: "lopez" },
  { nombre: "carlos", apellido: "sanchez" },
];

//POR APELLIDO
 ordenAlfabetico.sort((a, b) => {
  const apellidoA = a.apellido.toLowerCase();
  const apellidoB = b.apellido.toLowerCase();
  if (apellidoA < apellidoB) return -1;
  if (apellidoA > apellidoB) return 1;
  return 0;
});
console.log(ordenAlfabetico); 

//POR NOMBRE
ordenAlfabetico.sort((a, b) => {
  const nombreA = a.nombre.toLowerCase();
  const nombreB = b.nombre.toLowerCase();
  if (nombreA < nombreB) return -1;
  if (nombreA > nombreB) return 1;
  return 0;
});

console.log(ordenAlfabetico);

console.log(ordenAlfabetico);

//EJEMPLO DEL PROFESOR PARA LOGIN Y CARRITO. FUNCIONA PERFECTO

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


//ESTO ESTA EN EL JS DE PRODUCTOS

class Auto {
    /**
     * Constructor
     * @param {*} modelo del auto
     * @param {*} marca del auto
     * @param {*} precio  del auto
     */
    constructor(modelo, marca, precio) {
        this.modelo = modelo;
        this.marca = marca;
        this.precio = precio;
        this.id = -1;
    }
    /**
  * Muestra la descripcion completa del auto     
  */
    mostrar_descripcion() {
        return (this.id + " - " + this.modelo + " - " + this.marca + " - $" + this.precio);
    }
    /**
 * Setea un nuevo id
 * @param {*} nuevo_id a setear
 */
    set_id(nuevo_id) {
        this.id = nuevo_id;
    }
}

//MIENTRAS QUE ESTO ESTA EN EL MAIN

let arreglo_autos = new Array();
let gen_id = 1;
const hoy = new Date();
alert("Bienvenid@s al sistena de compra/venta \n" + hoy.toLocaleString());
let flag = true;
while (flag) {
    let mensaje = "Indique lo que desea hacer: ";
    mensaje += "\n1) Cargar nuevo auto ";
    mensaje += "\n2) Eliminar auto ";
    mensaje += "\n3) Mostrar Autos en stock ";
    mensaje += "\n4) Aplicar descuento ";
    mensaje += "\n5) Salir ";

    let resp = prompt(mensaje);
    switch (resp) {
        case "1":
            ingresar_nuevo_auto();
            break;
        case "2":
            eliminar_auto();
            break;
        case "3":
            mostrar_autos();
            break;
        case "4":
            aplicar_descuento();
            break;
        case "5":
            alert("Gracias por utilizar nuestra pagina :) ");
            flag = false;
            break;
        case null:
            alert("Gracias por utilizar nuestra pagina :) ");
            flag = false;
            break;
        default:
            alert("No ingreso una opcion valida");
    }
}


function solicitar_datos_auto() {

    let check = true;
    while (check) {
        let msj = "";
        let marca = prompt("Ingrese marca").trim();
        let modelo = prompt("ingrese modelo").trim();
        let precio = parseFloat(prompt("Ingrese precio"));
        if (!marca) {
            msj += "\nDebe ingresar marca";
        }
        if (!modelo) {
            msj += "\nDebe ingresar modelo";
        }
        if (isNaN(precio)) {
            msj += "\nDebe ingresar un valor numerico en precio";
        }
        if (msj != "") {
            alert(msj);
            check = confirm("Deseas cargar de nuevo los datos");
        } else {
            return new Auto(marca, modelo, precio);
        }
    }
}

function ingresar_nuevo_auto() {

    let auto = solicitar_datos_auto();
    if (auto) {
        auto.set_id(gen_id);
        gen_id++;
        arreglo_autos.push(auto);
        alert("Auto agregado con exito");
    }
}

function eliminar_auto() {

    if (existen_autos()) {
        mostrar_autos();
        let id_ingresado = prompt("Ingrese el id del auto a eliminar").trim();
        if (id_ingresado) {
            let auto_encontrado = arreglo_autos.find((a) => a.id == id_ingresado);
            if (auto_encontrado) {
                arreglo_autos = arreglo_autos.filter((a) => a.id != id_ingresado);
                alert("Auto elimanado con exito");
            }
        }
    }
}

function existen_autos() {

    if (arreglo_autos.length == 0) {
        alert("No hay autos en stock");
        return false;
    }
    return true;
}
function mostrar_autos() {

    if (existen_autos) {
        let resp = prompt("La info se mostrara ordenada por precio.\n Desea verla en forma Ascendente (A) o Desendente (D)").toUpperCase() ;
        if (resp == "A" ){
            arreglo_autos.sort((a,b)=>{
                if (a.precio > b.precio){
                    return 1 ;
                }
                if (a.precio < b.precio){
                    return -1
                }
                return 0 ;
            })
        }
        if (resp == "D" ){
            arreglo_autos.sort((a,b)=>{
                if (a.precio > b.precio){
                    return -1 ;
                }
                if (a.precio < b.precio){
                    return 1
                }
                return 0 ;
            })
        } 
        mostrar_arreglo();
    }
}
function  mostrar_arreglo(){
    let mensaje = "Los autos en stock son";  
    arreglo_autos.forEach( (auto)=> {
        mensaje += "\n " + auto.mostrar_descripcion();
    })
    alert(mensaje);    
}

function aplicar_descuento() {

    if (existen_autos) {
        let descuento = parseInt(prompt("Ingrese el descuento a aplicar"));
        if (!isNaN(descuento)) {
            let desc = 1 - (descuento / 100);
            arreglo_autos = arreglo_autos.map((aut) => {
                return {
                    modelo: aut.modelo,
                    marca: aut.marca,                    
                    precio: aut.precio * desc,
                    id: aut.id     
                }
            })
        }
        arreglo_autos = recuperar_coleccion_bjetos();
        mostrar_arreglo();
    }
}
function recuperar_coleccion_bjetos(){

    let coleccion_auxiliar = new Array();
    arreglo_autos.forEach( (auto)=> {
        let a = new Auto (auto.modelo,auto.marca,auto.precio);
        a.set_id(auto.id);
        coleccion_auxiliar.push(a);
    });
    return coleccion_auxiliar;
}


//ESTO FUNCIONA EXCELENTE Y ES UN MENU ANTES DE ABRIR MAS MENUS

* Clase que modela y define las bicicletas */
class Bicis {
  /**
   *
   * @param {*} id
   * @param {*} clase
   * @param {*} rodado
   * @param {*} precio
   */

  constructor(id, clase, rodado, precio) {
    this.id = id;
    this.clase = clase;
    this.rodado = rodado;
    this.precio = precio;
  }
  /*FUNCION PARA MOSTRAR LA DESCRIPCION COMPLETA DE LA BICI */
  /**
   *
   * @returns
   */
  mostrarDescripcionCompleta() {
    return (
      "#" +
      this.id +
      " - " +
      this.clase +
      " Rodado: " +
      this.rodado +
      " $ " +
      this.precio
    );
  }

  getId() {
    return this.id;
  }
  setId(nuevo_id) {
    this.id = nuevo_id;
  }
  getClase() {
    return this.clase;
  }
  setClase(nueva_clase) {
    this.clase = nueva_clase;
  }
  getRodado() {
    return this.rodado;
  }
  setRodado(nuevo_rodado) {
    this.rodado = nuevo_rodado;
  }
  getPrecio() {
    return this.precio;
  }
  setPrecio(nuevo_precio) {
    this.precio = nuevo_precio;
  }
}

//BASE DE DATOS DE LAS BIBICLETAS
const arregloBicis = new Array();
arregloBicis.push(new Bicis(1, "Carrera", 29, 500000));
arregloBicis.push(new Bicis(2, "Montaña", 28, 420000));
arregloBicis.push(new Bicis(3, "Paseo", 26, 280000));
arregloBicis.push(new Bicis(4, "Playera", 26, 200000));
arregloBicis.push(new Bicis(5, "Niños", 16, 150000));
arregloBicis.push(new Bicis(6, "Plegable", 20, 340000));
let respuesta = true;

// SI NO FUNCA, CABMBIAR EL 4 DE ABAJO POR SALIR
while (respuesta != "4" && respuesta) {
  respuesta = mostrarMenu();
}

function mostrarMenu() {
  let respuesta = prompt(
    "Elija una opcion: \n 1) Ver las bicicletas \n 2) Asignar nuevo precio \n 3) Ordenar por precio \n 4) Salir"
  );
  if (respuesta == "1") {
    alert("Las bicicletas son: \n " + mostrarStock());
  } else if (respuesta == "2") {
    actualizarPrecio();
  } else if (respuesta == "3") {
    ordenarPorPrecio();
  } else if (respuesta.toLocaleLowerCase() == "4") {
    return respuesta.toLowerCase();
  } else {
    alert("Opcion invalida");
  }
  return respuesta;
}

function buscarBici(id) {
  let i = 0;
  while (i < arregloBicis.length) {
    if (arregloBicis[i].getId() == id) {
      return i;
    }
    i++;
  }
  return -1;
}

function mostrarStock() {
  let stock = "";
  for (const b of arregloBicis) {
    stock += b.mostrarDescripcionCompleta() + "\n";
  }
  return stock;
}

//FORMA DE HACERLO DE MENOR A MAYOR
function ordenarPorPrecio() {
  arregloBicis.sort((a, b) => a.getPrecio() - b.getPrecio());
  alert("Las bicicletas ordenadas por precio son: \n" + mostrarStock());
}

//FORMA DE HACERLO DE MAYOR A MENOR
/* function ordenarPorPrecio() {
  arregloBicis.sort((a, b) => b.getPrecio() - a.getPrecio());
  alert("Las bicicletas ordenadas por precio son: \n" + mostrarStock());
} */

function actualizarPrecio() {
  let bici = prompt("Ingrese la bicicleta a actualizar");
  let indice = buscarBici(bici);
  if (indice >= 0) {
    let nuevo_precio = prompt("Ingrese un nuevo precio");
    arregloBicis[indice].setPrecio(nuevo_precio);
    alert("Ahora la lista es: \n" + mostrarStock());
  } else {
    alert("No ingresaste una bicicleta en stock");
  }
}
<<<<<<< Updated upstream
// LO QUE HICE YO MISMO
=======


//ESTO ES SIN BUCLE, PROBABLEMENTE NO SIRVA MAS QUE COMO EJEMPLO
>>>>>>> Stashed changes
function mostrarMenu() {
  let respuesta = prompt(
    "Elija una opción:\n" +
      "1) Ver celulares\n" +
      "2) Ver dispositivos de almacenamiento"
  );

  if (respuesta === "1") {
    let codigo = prompt(
      "Elige un celular:\n" +
        "1 - IPhone 14\n" +
        "2 - IPhone 15\n" +
        "3 - IPhone 16\n" +
        "4 - IPhone 16 Pro Max\n" +
        "5 - Samsung S22\n" +
        "6 - Samsung S22 Ultra\n" +
        "7 - Samsung S23\n" +
        "8 - Samsung S23 Ultra"
    );

    let celular = obtenerCelular(codigo);

    if (celular) {
      alert("Seleccionaste: " + celular);
      alert("Usted compró " + celular);
    } else {
      alert("Código inválido ❌");
    }
  } else if (respuesta === "2") {
    let numero = prompt(
      "Elige un producto de almacenamiento:\n" +
        "1 - Pen Drive de 32GB\n" +
        "2 - Pen Drive de 64GB\n" +
        "3 - Disco externo de 500GB\n" +
        "4 - Disco externo de 1TB"
    );

    let memoria = obtenerMemoria(numero);

    if (memoria) {
      alert("Seleccionaste: " + memoria);
      alert("Usted compró " + memoria);
    } else {
      alert("Código inválido ❌");
    }
  } else {
    alert("Opción no válida ❌");
  }
}

function obtenerCelular(codigo) {
  switch (codigo) {
    case "1":
      return "IPhone 14";
    case "2":
      return "IPhone 15";
    case "3":
      return "IPhone 16";
    case "4":
      return "IPhone 16 Pro Max";
    case "5":
      return "Samsung S22";
    case "6":
      return "Samsung S22 Ultra";
    case "7":
      return "Samsung S23";
    case "8":
      return "Samsung S23 Ultra";
    default:
      return false;
  }
}

function obtenerMemoria(numero) {
  switch (numero) {
    case "1":
      return "Pen Drive de 32GB";
    case "2":
      return "Pen Drive de 64GB";
    case "3":
      return "Disco externo de 500GB";
    case "4":
      return "Disco externo de 1TB";
    default:
      return false;
  }
}

<<<<<<< Updated upstream
let numero = prompt(
  "Elige un producto de almacenamiento:\n" +
    "1 - Pen drive de 32GB\n" +
    "2 - Pen drive de 64GB\n" +
    "3 - Disco externo de 500GB\n" +
    "4 - Disco externo de 1TB\n"
);

let memoria = obtenerMemoria(numero);

if (memoria) {
  alert("Seleccionaste: " + memoria);
} else {
  alert("Código inválido ❌");
}
alert("Usted compró " + memoria);

=======
mostrarMenu();
>>>>>>> Stashed changes
