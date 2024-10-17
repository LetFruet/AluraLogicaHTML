//apontando pro HTML (H1)
//let titulo = document.querySelector("h1");

//dentro do título do HTML
//titulo.innerHTML = "Jogo do número secreto";

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um número entre 1 e 10";

let listaNumeroSorteados = [], qtdeLimite = 10, numeroSecreto = gerarNumeroAleatorio(), tentativas = 1;

//quando se tem um padrão de código, pode-se isolar o comportamento em uma função p evitar repetição de código
function exibirTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
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
    let numeroEscolhido = parseInt(Math.random() * qtdeLimite + 1), qtdeElementosLista = listaNumeroSorteados.length;

    if (qtdeElementosLista == qtdeLimite) {
        listaNumeroSorteados = [];
    }
    //verifica se o número já está incluído na função 
    if (listaNumeroSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumeroSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
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

//para disponibilizar o jogo a partir de um endereço, deve-se acessar o site vercel.com e realizar um Deploy a partir do GitHub