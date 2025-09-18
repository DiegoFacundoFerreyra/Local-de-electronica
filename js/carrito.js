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
