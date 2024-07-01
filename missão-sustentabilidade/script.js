const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Maria se depara com a decisão de comprar um carro novo. Ela está em dúvida entre um veículo elétrico e um modelo movido a combustíveis fósseis. Qual escolha ela fará?",
        alternativas: [
            {
                texto: "Maria decide comprar um carro elétrico.",
                afirmacao: "Redução significativa das emissões de gases de efeito estufa. Contribui para melhorar a qualidade do ar e reduz a dependência de combustíveis fósseis. Impacto positivo no meio ambiente."
            },
            {
                texto: "Maria opta por um carro movido a combustíveis fósseis.",
                afirmacao: "Aumento das emissões de poluentes e contribuição para a degradação do meio ambiente. Maior dependência de recursos não renováveis e impactos negativos na qualidade do ar e mudanças climáticas."
            }
        ]
    },
    {
        enunciado: "João trabalha em uma empresa que está considerando adotar práticas sustentáveis. Ele tem a oportunidade de influenciar a decisão. Como ele agirá?",
        alternativas: [
            {
                texto: "João propõe iniciativas de reciclagem e redução do desperdício na empresa.",
                afirmacao: " Redução da pegada de carbono da empresa, economia de recursos naturais e melhoria da imagem corporativa. Engajamento positivo dos funcionários e stakeholders."
            },
            {
                texto: "João não se envolve na discussão sobre sustentabilidade na empresa.",
                afirmacao: "Perda da oportunidade de melhorar práticas ambientais na empresa. Possíveis repercussões negativas na reputação da empresa e falta de progresso em direção à sustentabilidade."
            }
        ]
    },
    {
        enunciado: "Ana está planejando suas férias e tem a opção de visitar um destino turístico conhecido por sua sustentabilidade ou um destino que não tem políticas ambientais claras. Qual será sua escolha?",
        alternativas: [
            {
                texto: "Ana escolhe o destino turístico sustentável.",
                afirmacao: "Apoio ao turismo responsável, contribuição para a conservação ambiental local, promoção de práticas sustentáveis na indústria do turismo. Benefícios econômicos para a comunidade local."
            },
            {
                texto: "Ana opta pelo destino sem políticas ambientais claras.",
                afirmacao: "Possível impacto negativo no meio ambiente local devido ao turismo não sustentável. Aumento da pressão sobre recursos naturais e potencial deterioração do patrimônio cultural e ambiental."
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