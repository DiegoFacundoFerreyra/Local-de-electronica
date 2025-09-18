function obtenerProducto(codigo) {
  let producto;
  switch (codigo) {
    case "1":
      producto = "IPhone 14";
      break;
    case "2":
      producto = "IPhone 15";
      break;
    case "3":
      producto = "IPhone 16";
      break;
    case "4":
      producto = "IPhone 16 Pro Max";
      break;
    case "5":
      producto = "Samsung S22";
      break;
    case "6":
      producto = "Samsung S22 Ultra";
      break;
    case "7":
      producto = "Samsung S23";
      break;
    case "8":
      producto = "Samsung S23 Ultra";
      break;
    default:
      producto = false;
      break;
  }
  return producto;
}
