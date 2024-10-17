//apontando pro HTML (H1)
//let titulo = document.querySelector("h1");

//dentro do título do HTML
//titulo.innerHTML = "Jogo do número secreto";

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um número entre 1 e 10";

let numeroSecreto = gerarNumeroAleatorio(), tentativas = 1;

//quando se tem um padrão de código, pode-se isolar o comportamento em uma função p evitar repetição de código
function exibirTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial() {
    //substituindo a variável tag e escrevendo o texto correto
    exibirTextoTela("h1", "Jogo do número secreto");
    exibirTextoTela("p", "Escolha um número entre 1 e 10");
}

mensagemInicial();


//ao clicar no botão, aparece no console (criando função)
function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto) {
        exibirTextoTela("h1", "Acertou");
        let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa", mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativas}.`;
        exibirTextoTela("p", mensagemTentativas);

        //ativando o botão "novo jogo" quando acertar a tentativa
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto) {
            exibirTextoTela("p", "O número é menor que o chute");
        } else {
            exibirTextoTela("p", "O número secreto é maior que o chute");
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    //desabilitando o botão de "novo jogo"
    document.getElementById("reiniciar").setAttribute("disabled", true); 
}

//quando trata-se de listas, utiliza-se colchetes