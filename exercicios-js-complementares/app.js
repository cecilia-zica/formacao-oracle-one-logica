function exibirOla() {
    console.log("Olá, mundo!");
}
exibirOla();

function exibirOlaNome(nome){
    let nome = prompt("Digite um nome:");
    console.log(`Olá ${nome}`);
}
exibirOlaNome();

function calcularDobro(numero) {
  return numero * 2;
}

let resultadoDobro = calcularDobro(5);
console.log(resultadoDobro);

function calcularMedia() {
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota:"));
    let media = (nota1 + nota2 + nota3) / 3;
    console.log(`A média é: ${media}`);
}
/* ou:
function calcularMedia(a, b, c) {
  return (a + b + c) / 3;
}

let media = calcularMedia(4, 7, 10);
console.log(media);
*/


function maiorNumero() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));
    let maior = numero1 > numero2 ? numero1 : numero2;
    console.log(`O maior número é: ${maior}`);
}
/* ou:
function encontrarMaior(a, b) {
  return a > b ? a : b;
}

let maiorNumero = encontrarMaior(15, 9);
console.log(maiorNumero);
*/

function calcularRaizQuadrada() {
    let numero = parseFloat(prompt("Digite um número:"));
    let raiz = Math.sqrt(numero);
    console.log(`A raiz quadrada de ${numero} é: ${raiz}`);
}

/*ou:
function quadrado(numero) {
  return numero * numero;
}

let resultado = quadrado(2);
console.log(resultado); 
*/

/*
function exibirMensagemNoConsole() {
    console.log('O botão foi clicado!')
}

function exibirAlerta() {
    alert('Eu amo Js')
}

function exibirPrompt() {
    let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito:')
    alert(`Estive em ${nomeDaCidade} e lembrei de você`)
}

function somandoDoisNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}

*/

//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function IMC(altura, peso) {
    let imc = peso / (altura * altura);
    return imc.toFixed(2); // Retorna o IMC com duas casas decimais
}
//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function Fatorial(numero) {
    if (numero < 0) return "Fatorial não definido para números negativos";
    if (numero === 0 || numero === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}
//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converterDolarParaReal(valorDolar) {
    const cotacao = 4.80;
    return (valorDolar * cotacao).toFixed(2);
}

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function AreaEP(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    console.log(`Área: ${area}, Perímetro: ${perimetro}`);
}

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function AreaEP_Circular(raio) {
    const pi = 3.14;
    let area = pi * raio * raio;
    let perimetro = 2 * pi * raio;
    console.log(`Área: ${area}, Perímetro: ${perimetro}`);
}

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function Tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

//Crie uma lista vazia, com o nome listaGenerica.
listaGenerica = []

//Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');

//Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
let nomes1 = ['Ana', 'João', 'Maria'];
console.log(nomes1[0]);

//Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
let nomes2 = ['Pedro', 'Carlos', 'Lucia'];
console.log(nomes2[1]);

//Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
let nomes3 = ['Bruno', 'Sofia', 'Rafael'];
console.log(nomes3[nomes3.length - 1]);