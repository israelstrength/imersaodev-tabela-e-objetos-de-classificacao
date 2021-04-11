//1.(ok) Criar objeto 
//2.(ok) imprimir esse objeto na tela
//3.(ok) criar os botões
//4.(ok) Cria a função dos botões
//5.(ok) Atualizar a pontuação 

//Atualização

//Criar layout dos botões
//6.(ok) adicionar jogador
//7.(ok) Limpar tabela
//8.(ok) zerar tabela

var jogadores = []

function imprimirNaTela(jogador){
  var html = ""
  for (var i = 0; i < jogadores.length; i++){
     calcularPontos(jogadores[i])
     html += "<tr><td>"+jogador[i].nome+"</td>"
     html += "<td>"+jogador[i].vitorias+"</td>"
     html += "<td>"+jogador[i].empates+"</td>"
     html += "<td>"+jogador[i].derrotas+"</td>"
     html += "<td>"+jogador[i].pontos+"</td>"
     html += "<td><button class='estilo-botao' onClick='adicionarVitorias("+i+")'>Vitoria</button></td>"
     html += "<td><button class='estilo-botao' onClick='adicionarEmpate("+i+")'>Empate</button></td>"
     html += "<td><button class='estilo-botao' onClick='adicionarDerrota("+i+")'>Derrota</button></td></tr>"
  }  
  var tabela = document.getElementById("tabelaJogadores")
  
  tabela.innerHTML = html
}

function adicionarVitorias(i){
  jogadores[i].vitorias += 1
  imprimirNaTela(jogadores)
}

function adicionarEmpate(i){
  jogadores[i].empates += 1
  imprimirNaTela(jogadores)
}

function adicionarDerrota(i){
  jogadores[i].derrotas += 1
  imprimirNaTela(jogadores)
}

function calcularPontos(jogador){
  jogador.pontos = (jogador.vitorias * 3) + jogador.empates
}

function zerarTabela(){
  jogadores = []
  imprimirNaTela(jogadores)
  // var tabela = document.getElementById("tabelaJogadores")
  // tabela.innerHTML = ""
}

function limparTabela(){
  for(var i=0; i < jogadores.length; i++){
    jogadores[i].vitorias = 0
    jogadores[i].empates = 0
    jogadores[i].derrotas = 0
    jogadores[i].pontos = 0
  }
  imprimirNaTela(jogadores)
}

function adicionarJogador(){
  var jogador = {
    nome: "vazio",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
  }
  var nomeDoJogador = prompt("Qual o nome do novo jogador ?")
  jogador.nome = nomeDoJogador
  jogadores.push(jogador)
  imprimirNaTela(jogadores)
}
