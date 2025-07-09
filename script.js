const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1. O que está mais relacionado ao conceito de 'moda sustentável'?",
        alternativas: [
            {
                texto: "Roupas descartáveis",
                afirmacao: "errado."
            },
            {
                texto: "Roupas feitas com materiais recicláveis",
                afirmacao: "correto"
            }
        ]
    },
    {
        enunciado: "2. O que está mais alinhado com a moda consciente?",
        alternativas: [
            {
                texto: "Comprar roupas em brechós e reaproveitar peças",
                afirmacao: "correto"
            },
            {
                texto: "Trocar de guarda-roupa a cada nova estação",
                afirmacao: "errado"
            }
        ]
    },
    {
        enunciado: "3. O que é mais comum em marcas sustentáveis de moda?",
        alternativas: [
            {
                texto: "Uso de tecidos orgânicos ou reciclados",
                afirmacao: "correto"
            },
            {
                texto: "Lançamento diário de novas coleções",
                afirmacao: "errado"
            }
        ]
    },
    {
        enunciado: "4. O que representa a moda atemporal?",
        alternativas: [
            {
                texto: "Roupas que seguem tendências rápidas e momentâneas",
                afirmacao: "errado"
            },
            {
                texto: "Peças clássicas que não saem de moda com o tempo",
                afirmacao: "correto"
            }
        ]
    },
    {
        enunciado: "5. O que é mais valorizado na moda slow fashion?",
        alternativas: [
            {
                texto: "Quantidade e variedade de roupas baratas",
                afirmacao: "errado"
            },
            {
                texto: "Qualidade, durabilidade e respeito ao meio ambiente",
                afirmacao: "correto"
            }
        ]
    }
];

let atual = 0;
let historiaFinal = "";
let contadorA = 0;
let contadorB = 0;

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";

    for (let i = 0; i < perguntaAtual.alternativas.length; i++) {
        const alternativa = perguntaAtual.alternativas[i];
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.addEventListener("click", () => respostaSelecionada(alternativa, i));
        caixaAlternativas.appendChild(botao);
    }
}

function respostaSelecionada(opcao, indice) {
    historiaFinal += opcao.afirmacao + " ";
    if (indice === 0) {
        contadorA++;
    } else {
        contadorB++;
    }
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resultado final:";

    let destino = "";
    if (contadorA > contadorB) {
        destino = "\n\nVocê precisa estudar mais sobre moda sustentável e consciente.";
    } else if (contadorB > contadorA) {
        destino = "\n\nParabéns! Você demonstra conhecimento e alinhamento com os princípios da moda sustentável.";
    } else {
        destino = "\n\nVocê está no caminho certo, mas ainda pode aprofundar mais seu entendimento sobre moda consciente.";
    }

    textoResultado.textContent = historiaFinal.trim() + destino;
    caixaAlternativas.textContent = "";
}

mostraPergunta();