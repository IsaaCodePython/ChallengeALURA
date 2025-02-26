//titulos e subtitulos
let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Jogo do amigo secreto';
let subtitulo = document.querySelector ('h2');
subtitulo.innerHTML = 'digite o nome do seus amigos';
// armazenagem da ID Lista de amigos nomes
let listadeAmigos []
// funções 
function adicionarPana() {
    console.log ('o botao foi clicado');
    let nomeInput = document.getElementById("amigo");
    let nome = nomeInput.value.trim();
    let listaDePanas = [];
}