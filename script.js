const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " O que está mais relacionado ao conceito de "moda sustentável"?",
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
        enunciado: "O que está mais alinhado com a moda consciente?",
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
        enunciado: " O que é mais comum em marcas sustentáveis de moda?",
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
        enunciado: "O que representa a moda atemporal?",
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
        enunciado: "O que é mais valorizado na moda slow fashion?",
        alternativas: [
            {
                texto: "Quantidade e variedade de roupas baratas",
                afirmacao: "errado"
            },
            {
                texto: " Qualidade, durabilidade e respeito ao meio ambiente",
                afirmacao: "correto "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();