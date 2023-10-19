
function ehPrimo(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) 
      return false;
  }

  return numero > 1;
}


function verificarPrimo() {

  var numero = parseInt(document.getElementById("numero").value);

  if (ehPrimo(numero)) {
    alert(numero + " é um número primo!");
  } else {    
    alert(numero + " não é um número primo!");
  }

}