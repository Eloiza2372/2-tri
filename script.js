const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
    enunciado: "a música causa impacto em você?",
    alternativas: [
        {
            texto: "sim, causa",
            afirmacao: "A música causa impacto quando a escuta"
        },
        {
            texto:"não, não causa",
            afirmacao:"A música não me causa emoções quando a escuto"
        }
]
    },
    {
        enunciado: "quando não está bem, você costuma a ouvir música?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "Essa pessoa tem costume de lidar com suas emoções com a música "
            },
            {
                texto:"não",
                afirmacao: "Essa pessoa não usa a música como um refugio"
            }
    ]
        },
        {
            enunciado: "a música desempenha um papel significativo na construção da identidade cultural de um povo?",
            alternativas: [
                {
                    texto: "sim",
                    afirmacao: "Sim, ela reflete os valores, crenças e tradições de uma comunidade"
                },
                {
                    texto: "não",
                    afirmacao: "Não, acho a música irrelevante para a identidade cultural"
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
    caixaPerguntas.textContent = "Seu texto final é...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();