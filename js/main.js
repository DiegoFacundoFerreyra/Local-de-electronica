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
