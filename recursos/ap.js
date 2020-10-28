//se pide el numero
var numFactorial = prompt("ingresa un numero: ");
//se inicializa la variable del resultado
var r=1;

//ciclo for
for(var i=1; i<=numFactorial; i++) {
	r *= i;
}

//se muestra el numero factorial
alert(r);