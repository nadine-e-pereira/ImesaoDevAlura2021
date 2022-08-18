//HTML é uma linguagem de marcação da estrutura dos elementos de uma página. São os ossos.
//CSS é a estilização, os apectos da aparência.
// O JavaScript é o que movimenta o site. As partes de interação acontecem aqui.

var name="Alura | ImersãoDev | Aula 1 - Introdução e Conversor de Moedas, por Nadine Pereira"
var age=" - 18 Anos"

alert(name + age)

// Variáveis variam (óbvio). Elas podem receber diversas denominações, diferentes propósitos e podem se estabelecer qualquer valor (textos, números, etc).
// No primeiro exemplo de variável, foi criada uma "memória", foi pré-estabelecido no código o meu nome e emitido um alerta de texto.
//Quando queremos criar uma variável de número não colocamos aspas, pois elas identifcam o conteúdo dentro como texto. Ex:

var sum= 2
sum= 2+2

//É legal manter os padrões de escrita na programação. A mais comum recomendada é a CamelCase, onde toda frase é escrita conjunta, com a primeira palavra em minúsculo e a primeira letra das palavras seguintes em maiúsculo. Ex:

var basicSum= "2+2="
alert(basicSum+sum)

//Válido ressaltar que na programação existem palavras reservadas. Por exemplo, não é possível colocar o nome de uma variável "var" de "var". Aparece uma mensagem de erro.
//Prompt é uma função interativa. O parseInt transforma uma função prompt em número. Com o alert, o Prompt retorna o valor.

var userNickName= prompt("Deixe sua marca de visitação! Insira um apelido:")
alert(userNickName)

var userAge= prompt ("Quantos anos você tem?")
var userAge= parseInt(userAge)
userAge= userAge+1
alert(userAge)
