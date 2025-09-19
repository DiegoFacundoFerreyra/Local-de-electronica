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

mostrarMenu();
