//alert, document.write, console.log, alert
var numeroSecreto = parseInt(Math.random()*10).toFixed(0)

var tentativas = 3

while (tentativas > 0 ){
  var chute = parseInt(prompt("Qual o número Secreto?"))
  if (numeroSecreto == chute){
    alert("Acertou")
    break
  } else if (chute > numeroSecreto){
    alert("O número Secreto é menor")
    tentativas = tentativas - 1 
  } else if (chute < numeroSecreto){
    alert("O número Secreto é maior")
    tentativas = tentativas - 1
  }
}

if (chute != numeroSecreto) {
  alert("Suas tentativas acabaram. O número Secreto era = " + numeroSecreto)
}

//(==): comparação
//(!=): diferente
//concatenação: adição de texto/string
//ctrl + [] + seleção: move a coluna para direita ou esquerda
//if: se
//else if: senão se
// else: senão
// while: enquanto
// break: quebra o looping
