var valorEmDolarTexto= prompt("Qual o valor em dólar que deseja converter para reais? ")

var valorEmDolarNumero= parseFloat(valorEmDolarTexto)

alert(valorEmDolarNumero)

var valorEmReais= valorEmDolarNumero * 5.50
var valorEmReaisFixado= valorEmReais.toFixed(2)

alert(valorEmReaisFixado)

//Revisão:
// Variáveis: var - int - float - string; Armazenam valores para o código.
// Função alert (cria uma caixa de alerta)
// Função parseInt (transforma valores de texto em número) - parseFloat (arruma/define o número de casa decimais de um valor numérico)
// Função prompt (cria uma caixa de texto que interage com o usuário)
// Operações de adição (+), que podem somar funções; e de multiplicação (*).
