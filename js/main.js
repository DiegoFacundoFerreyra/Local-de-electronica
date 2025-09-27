function mostrarMenu() {
  let salir = false;
  let carrito = []; // Guardamos los productos comprados

  while (!salir) {
    let respuesta = prompt(
      "Elija una opción:\n" +
        "1) Ver celulares y tablets\n" +
        "2) Almacenamiento y fundas\n" +
        "3) Parlantes y auriculares\n" +
        "4) Smart Watches y cargadores\n" +
        "5) Productos nuevos\n" +
        "6) Salir"
    );

    let producto = null;

    switch (respuesta) {
      case "1":
        let codigo = prompt(
          "Elige un celular o tablet:\n" +
            "1 - IPhone 14\n" +
            "2 - IPhone 15\n" +
            "3 - IPhone 16\n" +
            "4 - IPhone 16 Pro Max\n" +
            "5 - Samsung S22\n" +
            "6 - Samsung S22 Ultra\n" +
            "7 - Samsung S23\n" +
            "8 - Samsung S23 Ultra\n" +
            "9 - Xiaomi Readmi Pad SE\n" +
            "10 - IPad 11\n" +
            "11 - Samsung Tab S10\n" +
            "12 - Motorola Pad 60 pro\n"
        );
        producto = obtenerCelular(codigo);
        break;

      case "2":
        let numero = prompt(
          "Elige un producto de almacenamiento o funda:\n" +
            "1 - Pen Drive de 32GB\n" +
            "2 - Pen Drive de 64GB\n" +
            "3 - Disco externo de 500GB\n" +
            "4 - Disco externo de 1TB\n" +
            "5 - Fundas para celulares\n" +
            "6 - Fundas para tablets\n"
        );
        producto = obtenerMemoria(numero);
        break;

      case "3":
        let sonido = prompt(
          "Elige un producto de audio:\n" +
            "1 - Auriculares gamer camuflados\n" +
            "2 - Auriculares bluetooth\n" +
            "3 - Auriculares convencionales con cable\n" +
            "4 - Parlante portátil de 8 watts\n" +
            "5 - Parlante bluetooth de 28 watts\n" +
            "6 - Barra de sonido de 40 watts"
        );
        producto = obtenerAudio(sonido);
        break;

      case "4":
        let reloj = prompt(
          "1 - SmartWatch Motorola\n" +
            "2 - SmartWatch Samsung\n" +
            "3 - SmartWatch Xiaomi\n" +
            "4 - SmartWatch Apple\n" +
            "5 - Cargador para celulares\n" +
            "6 - Cargador para tablets\n" +
            "7 - Cargador inalámbrico\n" +
            "8 - Cargador portátil\n"
        );
        producto = obtenerWatch(reloj);
        break;

      case "5":
        let nuevos = prompt(
          "1 - Celulares\n" +
            "2 - Tablets\n" +
            "3 - Smartwatches\n" +
            "4 - Cargadores\n" +
            "5 - Parlantes\n" +
            "6 - Auriculares\n" +
            "7 - Almacenamiento\n" +
            "8 - Fundas\n"
        );
        producto = obtenerNuevo(nuevos);
        break;

      case "6":
        alert("¡Gracias por su visita! 👋");
        salir = true;
        break;

      default:
        alert("❌ Opción no válida");
    }

    if (producto) {
      carrito.push(producto);
      alert("✅ Usted compró: " + producto);

      let opcion = prompt(
        "¿Qué desea hacer ahora?\n" +
          "1) Volver al menú principal (seguir comprando)\n" +
          "2) Finalizar compra y salir"
      );

      if (opcion === "2") {
        salir = true;
      }
    }
  }

  // Al salir mostramos el carrito
  if (carrito.length > 0) {
    alert(
      "🛒 Gracias por su compra.\n\nProductos elegidos:\n- " +
        carrito.join("\n- ")
    );
  } else {
    alert("No compró ningún producto.");
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
    case "9":
      return "Xiaomi Readmi Pad SE";
    case "10":
      return "IPad 11";
    case "11":
      return "Samsung Tab S10";
    case "12":
      return "Motorola Pad 60 pro";
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
    case "5":
      return "Funda para celulares";
    case "6":
      return "Funda para tablets";
    default:
      return false;
  }
}

function obtenerAudio(sonido) {
  switch (sonido) {
    case "1":
      return "Auriculares gamer camuflados";
    case "2":
      return "Auriculares bluetooth";
    case "3":
      return "Auriculares convencionales con cable";
    case "4":
      return "Parlante portátil de 8 watts";
    case "5":
      return "Parlante bluetooth de 28 watts";
    case "6":
      return "Barra de sonido de 40 watts";
    default:
      return false;
  }
}

function obtenerWatch(reloj) {
  switch (reloj) {
    case "1":
      return "SmartWatch Motorola";
    case "2":
      return "SmartWatch Samsung";
    case "3":
      return "SmartWatch Xiaomi";
    case "4":
      return "SmartWatch Apple";
    case "5":
      return "Cargador para celulares";
    case "6":
      return "Cargador para tablets";
    case "7":
      return "Cargador inalámbrico";
    case "8":
      return "Cargador portátil";
    default:
      return false;
  }
}

function obtenerNuevo(nuevos) {
  switch (nuevos) {
    case "1":
      return "Celulares";
    case "2":
      return "Tablets";
    case "3":
      return "Smartwatches";
    case "4":
      return "Cargadores";
    case "5":
      return "Parlantes";
    case "6":
      return "Auriculares";
    case "7":
      return "Almacenamiento";
    case "8":
      return "Fundas";
    default:
      return false;
  }
}

const botones = document.querySelectorAll(".comprar");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const contenedor = boton.closest(".foto-producto");
    const resultado = contenedor.querySelector(".resultado");

    resultado.textContent = "¡Producto agregado al carrito!";

    boton.style.display = "none";
  });
});
