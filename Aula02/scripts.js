//var nomeDoJogo = "League of Legends"
//document.write("Jogo da Riot: " + nomedojogo) - O document.write escreve na própria página.

var primeiroValor = parseInt(prompt('Digite o Primeiro Valor:'))
//Ou : var primeiroValorInt = parseInt(primeiroValor)
var segundoValor = parseInt(prompt('Digite o Segundo Valor:'))

var operaçao = prompt("Digite 1 para divisão, 2 par multiplicação, 3 para soma e 4 para subtração")

// if = se
// else = senão
// else if = senão se

if  (operaçao == 1){
  var resultado = primeiroValor / segundoValor
document.write('<h2>' + primeiroValor + " / " + segundoValor + " = " + resultado + '</h2>')
  
} else if(operaçao == 2){
  var resultado = primeiroValor * segundoValor
  document.write('<h2>' + primeiroValor + " x " + segundoValor + " = " + resultado + '</h2>')
} else if(operaçao == 3){
  var resultado = primeiroValor + segundoValor
  document.write('<h2>' + primeiroValor + " + " + segundoValor + " = " + resultado + '</h2>')
} else if(operaçao == 4){
  var resultado = primeiroValor - segundoValor
  document.write('<h2>' + primeiroValor + " - " + segundoValor + " = " + resultado + '</h2>')
} else{
  document.write("<h2>Opção Inválida</h2>")
}

//Revisão:
//document.write= uma função que permite a exibição na tela.
//Concatenação= juntar palavras com variáveis ("palavra" + variáveil)
//Funções com situações variáveis= if, else, else if
// (==)= comparações
//(=)= atribuição
