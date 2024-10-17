function olaMundo() {
    console.log("Olá mundo");
}

olaMundo();

function olaMundoNome(nome) {
    let nome = prompt("Insira seu nome");
    alert(`Olá, ${nome}!`)
}

olaMundoNome("Letícia");

function multiplicar(numero) {
    let multiplicacao = numero * 2;
}

multiplicar(3);

function multiplicar(numero01, numero02, numero03) {
    let multiplicacao = (numero01 + numero02 + numero03) / 3;
}

multiplicar(5,6,7);

function multiplicar(numero01, numero02) {
    
    if (numero01 > numero02) {
        return numero01;
    } else {
        return numero02;
    }
}

multiplicar(2,6);

function multiplicar(numero) {
    return numero * numero;
}

multiplicar(6);




