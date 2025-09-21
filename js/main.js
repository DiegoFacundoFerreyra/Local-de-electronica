function mostrarMenu() {
  let salir = false;
  let carrito = []; // Guardamos los productos comprados

  while (!salir) {
    let respuesta = prompt(
      "Elija una opción:\n" +
        "1) Ver celulares\n" +
        "2) Ver dispositivos de almacenamiento\n" +
        "3) Ver parlantes y auriculares\n" +
        "4) Salir"
    );

    let producto = null;

    switch (respuesta) {
      case "1":
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
        producto = obtenerCelular(codigo);
        break;

      case "2":
        let numero = prompt(
          "Elige un producto de almacenamiento:\n" +
            "1 - Pen Drive de 32GB\n" +
            "2 - Pen Drive de 64GB\n" +
            "3 - Disco externo de 500GB\n" +
            "4 - Disco externo de 1TB"
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

// Inicia el programa
mostrarMenu();
