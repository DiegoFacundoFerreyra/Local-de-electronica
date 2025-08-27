let resp = confirm("¿Desea usar la calculadora?");
if (resp) {
  while (resp) {
    let operacion = prompt(
      "Ingrese la operación que desea realizar (+, -, *, /)"
    );
    let numero1 = parseFloat(prompt("Ingrese el primer número"));
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
