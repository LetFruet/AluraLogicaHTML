function calcularMassaCorporal(altura, peso) {
    let imc = peso / (altura * altura);
}

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }

    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    return fatorial;
}

let valor = 5, resultado = calcularFatorial(numero);
console.log(`O fatorial de ${valor} é ${resultado}`);

function converterDolarParaReal(dolar) {
    let cotacaoDolar = 4.80,  real = dolar * cotacaoDolar;
    return real.toFixed(2);
}

let dolar = 50, real = converterDolarParaReal(dolar);
console.log(`${dolar} dólares equivalem a R$ ${real}`);

function calcularAreaPerimetroSalaRetangular(altura, largura) {
    let area = altura * largura, perimetro = 2 * (altura + largura);

    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
}

let altura = 3, largura = 5;
calcularAreaPerimetroSalaRetangular(altura, largura);

function calcularAreaPerimetroSalaCircular(raio) {
    let area = Math.PI * raio * raio, perimetro = 2 * Math.PI * raio;

    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
}

let raio = 4; 
calcularAreaPerimetroSalaCircular(raio);

function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

let numero = 7;
mostrarTabuada(numero);