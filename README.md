# Formação Lógica de Programação - Oracle Next Education + Alura

![Imagem de capa do projeto](https://raw.githubusercontent.com/cecilia-zica/formacao-oracle-one-logica/main/logica-js-projeto_inicial/img/code.png)

---

## 📌 Índice
- [Descrição do Projeto](#-descrição-do-projeto)
- [Status do Projeto](#-status-do-projeto)
- [Projetos Desenvolvidos](#-projetos-desenvolvidos)
  - [Jogo do Número Secreto](#1-jogo-do-número-secreto)
  - [Exercícios Complementares de JavaScript](#2-exercícios-complementares-de-javascript)
- [Acesso aos Projetos](#-acesso-aos-projetos)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Pessoas Desenvolvedoras do Projeto](#-pessoas-desenvolvedoras-do-projeto)
- [Licença](#-licença)

---

## 📝 Descrição do Projeto
Este repositório armazena todos os projetos e exercícios desenvolvidos durante a **Formação em Lógica de Programação** da **Alura** em parceria com o programa **Oracle Next Education (ONE)**.
O objetivo é aplicar os conceitos de lógica, HTML, CSS e JavaScript para criar aplicações web interativas.

---

## 🚧 Status do Projeto
**Em andamento**

Este projeto está sendo desenvolvido conforme avanço nos módulos do curso.
Futuros projetos e melhorias serão adicionados.

---

## 💻 Projetos Desenvolvidos

### 1. Jogo do Número Secreto
Um jogo divertido onde o objetivo é adivinhar um número secreto gerado aleatoriamente. O jogo fornece dicas se o número inserido é maior ou menor que o número secreto.

**Funcionalidades:**
- Geração de um número aleatório a cada nova partida
- Validação do chute do usuário
- Dicas para o jogador (maior/menor)
- Contagem de tentativas
- Opção de reiniciar o jogo
- Interface com narração dos textos utilizando a API de Síntese de Voz do navegador

**Demonstração:**

![Demonstração do Jogo do Número Secreto](https://raw.githubusercontent.com/cecilia-zica/formacao-oracle-one-logica/main/jogo-numero-secreto-js/img/ia.png)

**Trecho de Código (app.js):**
```javascript
function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', `Acertou!`);
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor!');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }
        tentativas++;
        limparCampo();
    }
}
```

### 2. Exercícios Complementares de JavaScript
Uma coleção de scripts com exercícios para praticar a lógica de programação, manipulação de arrays, funções e outros conceitos fundamentais do JavaScript.

**Funcionalidades:**
- Funções para cálculos de IMC, fatorial e conversão de moeda
- Funções para calcular área e perímetro de formas geométricas
- Exibição de tabuada
- Manipulação e exibição de elementos de listas (arrays)

**Trecho de Código (exercicios-js-complementares/app.js):**
```javascript
// Função para calcular o índice de massa corporal (IMC)
function IMC(altura, peso) {
    let imc = peso / (altura * altura);
    return imc.toFixed(2);
}

// Função para converter dólar para real
function converterDolarParaReal(valorDolar) {
    const cotacao = 4.80;
    return (valorDolar * cotacao).toFixed(2);
}

// Lista de linguagens de programação
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
```

## 📂 Acesso aos Projetos
Para acessar e rodar os projetos localmente:

Clone o repositório:
```bash
git clone https://github.com/SEU-USUARIO/formacao-oracle-one-logica.git
```

Navegue até a pasta de um dos projetos:

```
cd formacao-oracle-one-logica/jogo-numero-secreto-js
```

Abra o arquivo index.html no navegador.

## 🛠 Tecnologias Utilizadas
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)


## 👩‍💻 Pessoas Desenvolvedoras do Projeto
| [<img src="https://avatars.githubusercontent.com/u/129588385" width=115><br><sub><b>Cecília Zica</b></sub>](https://github.com/cecilia-zica) |
|---|

## 📜 Licença
[![Licença MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)  
Este projeto está sob a licença **MIT**. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

