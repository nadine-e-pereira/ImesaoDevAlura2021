var cartaPaulo = {
  nome: "Seiya de Pégaso",
  imagem: "https://i.ibb.co/FJ96YZ6/seiya.jpg",
  atributos: {
    Ataque: 80,
    Defesa: 60,
    Magia: 90,
    Velocidade: 80
  }
}

var cartaRafa = {
  nome: "Bulbassauro",
  imagem: "https://i.ibb.co/nfQjbGW/bulbassauro.jpg",
  atributos: {
    Ataque: 70,
    Defesa: 65,
    Magia: 85,
    Velocidade: 55
  }
}

var cartaGui = {
  nome: "Lorde Darth Vader",
  imagem: "https://i.ibb.co/6gC6ffs/darth-vader.jpg",
  atributos: {
    Ataque: 88,
    Defesa: 62,
    Magia: 90,
    Velocidade: 70
  }
}

var cartaMaquina
var cartaJogador
var exibir = ""
var cartas = [cartaPaulo, cartaRafa, cartaGui]

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3)
  cartaMaquina = cartas[numeroCartaMaquina]
  
  var numeroCartaJogador = parseInt(Math.random() * 3)
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 3)
  }
  cartaJogador = cartas[numeroCartaJogador]
  
  // Exibir carta do jogador
  exibirCartaNaTela(cartaJogador)
  
  document.getElementById("btnSortear").disabled = true
  exibirOpcoes()
}

function habilitarBotaoJogar() {
  document.getElementById("btnJogar").disabled = false
}

function exibirCartaNaTela(qualCarta) {
  divNaTela = document.getElementById("cartasNaTela")
  exibir += "<br/>"
  exibir += "<table width='25%' align='center' border='1'>"
  if (qualCarta == cartaJogador) {
    exibir += "<tr><td colspan='2'><b>CARTA DO JOGADOR</b></td></tr>"
  } else if (qualCarta == cartaMaquina) {
    exibir += "<tr><td colspan='2'><b>CARTA DA MÁQUINA</b></td></tr>"
  }
  exibir += "<tr><td colspan='2'>" + "<img border='0' src='" + qualCarta.imagem + "'>" + "</td></tr>"
  exibir += "<tr><td colspan='2'><b><font color='yellow'>" + qualCarta.nome + "</font></b></td></tr>"
  exibir += "<tr id='tabAtaque'>" + "<td align='left'>Ataque:</td>" + "<td>" + qualCarta.atributos.Ataque + "</td>" + "</tr>"
  exibir += "<tr id='tabDefesa'>" + "<td align='left'>Defesa:</td>" + "<td>" + qualCarta.atributos.Defesa + "</td>" + "</tr>"
  exibir += "<tr id='tabMagia'>" + "<td align='left'>Magia:</td>" + "<td>" + qualCarta.atributos.Magia + "</td>" + "</tr>"
  exibir += "<tr id='tabVelocidade'>" + "<td align='left'>Velocidade:</td>" + "<td>" + qualCarta.atributos.Velocidade + "</td>" + "</tr>"
  exibir += "</table>"
  divNaTela.innerHTML = exibir
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes")
  var opcoesTexto = ""
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' onClick='habilitarBotaoJogar()' name='atributo' value='" + atributo + "'> " + atributo + " "
  }
  opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo")
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado()
  
  exibir += "<br/><font size='7'><b>VS</b></font><br/>"
  
  // Exibir carta da máquina
  exibirCartaNaTela(cartaMaquina)
  
  var lugarResultado = document.getElementById("resultadoFinal")
  
  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
    var corCampoVitoriaDerrota = "darkgreen"
    lugarResultado.innerHTML = "<font color='#00ff00'>Você ganhou!</font>"
  } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
    var corCampoVitoriaDerrota = "darkred"
    lugarResultado.innerHTML = "<font color='red'>Você perdeu...</font>"
  } else {
    var corCampoVitoriaDerrota = "#9b870c"
    lugarResultado.innerHTML = "Deu empate."
  }
  var antes = '<tr id="tab' + atributoSelecionado + '">'
  var depois = '<tr bgcolor="' + corCampoVitoriaDerrota + '" id="tab' + atributoSelecionado + '">'
  divNaTela.innerHTML = divNaTela.innerHTML.replace(new RegExp(antes, "g"), depois)
  finalizarJogo()
}

function finalizarJogo() {
  opcoes.innerHTML = ""
  var novoBotao = '<button type="button" onClick="recarregarJogo()">Jogar Novamente</button>'
  document.getElementById("localBotaoJogar").innerHTML = novoBotao
}

function recarregarJogo() {
  document.location.reload(true)
}
