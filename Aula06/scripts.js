// Simplificar a linha "jogador.pontos = calculaPontos(jogador)" que aparece em duas funções na função pricipal "exibirJogadoresNaTela(jogadores)" como "jogadores[i].pontos = calculaPontos(jogadores[i])"

var paulo = {
  nome: "Paulo",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}

var rafa = {
  nome: "Rafa",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}

function calculaPontos(jogador) {
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos
}

var jogadores = [rafa, paulo]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores) {
  var html = ""
  for (i = 0; i < jogadores.length; i++) {
    jogadores[i].pontos = calculaPontos(jogadores[i])
    html += "<tr><td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
    if (i == 0) {
      html += "<td rowspan='" + jogadores.length + "'><button onClick='adicionarEmpate()'>Empate</button></td></tr>"
    }
  }
  
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i) {
  var jogador = jogadores[i]
  jogador.vitorias++
  exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate() {
  for (i = 0; i < jogadores.length; i++) {
    var jogador = jogadores[i]
    jogador.empates++
  }
  exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
  var jogador = jogadores[i]
  jogador.derrotas++
  exibirJogadoresNaTela(jogadores)
}
