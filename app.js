// Títulos e subtítulos
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do amigo secreto';

let subtitulo = document.querySelector('h2');
subtitulo.innerHTML = 'Digite o nome dos seus amigos';

// Armazenamento da lista de amigos
let listadeAmigos = [];

function adicionarAmigo() {
    console.log('O botão foi clicado');

    let nomeInput = document.getElementById("amigo");
    let nome = nomeInput.value.trim();
    let lista = document.getElementById("listaAmigos");

    if (!nome) {
        alert("Por favor, adicione um nome para continuar com o sorteio.");
        return;
    }

    // Adiciona o nome à lista de amigos
    listadeAmigos.push(nome);

    // Criar um novo elemento <li>
    let item = document.createElement("li");
    item.textContent = nome;

    lista.appendChild(item);

    // Limpa o campo da entrada
    nomeInput.value = "";
}
// Funcao para sorteio 
function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (listadeAmigos.length === 0) {
        alert("Adicione pelo menos um nome para realizar o sorteio.");
        return;
        // Sorteia um índice aleatório da lista
    let indiceSorteado = Math.floor(Math.random() * listadeAmigos.length);
    let amigoSorteado = listadeAmigos[indiceSorteado];

    // Exibe o resultado na tela
    resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigoSorteado}</strong></li>`;
}