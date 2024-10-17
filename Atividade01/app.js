let titulo = document.querySelector("h1");
titulo = "Hora do desafio.";

function clicarConsole() {
    console.log("O botão foi clicado");
}

function clicarAlerta() {
    alert("Eu amo JS");
}

function clicarPrompt() {
    let cidade = prompt("Digite o nome de uma cidade do Brasil");

    alert(`Estive em ${cidade} e lembrei de você.`)
}

function clicarSoma() {
    let numero01 = parseInt(prompt("Entre com o número 1."));
    let numero02 = parseInt(prompt("Entre com o número 2."));

    let soma = (numero01 + numero02);

    prompt(`A soma é ${soma}`)
}