//titulos e subtitulos
let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Jogo do amigo secreto';
let subtitulo = document.querySelector ('h2');
subtitulo.innerHTML = 'digite o nome do seus amigos';

// funções 
function adicionarPana() {
    console.log ('o botao foi clicado');
    let nomeInput = document.getElementById("nomeInput");
    let nome = nomeInput.value.trim();
    let listaDePanas = [];
}