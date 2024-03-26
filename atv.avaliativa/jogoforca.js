const words = [
  { word: "banana", clue: "Fruta amarela alongada" },
  { word: "leão", clue: "O rei da selva" },
  { word: "computador", clue: "Máquina eletrônica para processamento de dados" },
  { word: "cachorro", clue: "Melhor amigo do homem" },
  { word: "bicicleta", clue: "Veículo de duas rodas" },
  { word: "guitarra", clue: "Instrumento musical de cordas" },
  { word: "lua", clue: "Satélite natural da Terra" },
  { word: "avião", clue: "Meio de transporte aéreo" },
  { word: "futebol", clue: "Esporte jogado com uma bola e os pés" },
  { word: "chave", clue: "Objeto usado para abrir fechaduras" },
  { word: "abacaxi", clue: "Fruta tropical com casca espinhosa" },
  { word: "sol", clue: "Estrela central do sistema solar" },
  { word: "música", clue: "Combinação de sons harmoniosos" },
  { word: "televisão", clue: "Meio de comunicação audiovisual" },
  { word: "elefante", clue: "Maior mamífero terrestre" },
  { word: "floresta", clue: "Ecossistema com árvores e vegetação densa" },
  { word: "óculos", clue: "Acessório para corrigir a visão" },
  { word: "casa", clue: "Moradia ou residência" },
  { word: "bicicleta", clue: "Veículo de duas rodas" },
  { word: "piano", clue: "Instrumento musical de teclas" },
];

function getWord() {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}

const contentBtns = document.querySelector(".btns");
const contentGuessWord = document.querySelector(".guess-word");
const img = document.querySelector("img");
const contentClue = document.querySelector(".clue");
const btnNew = document.querySelector(".new");
btnNew.onclick = () => iniciarJogo();
let indiceImagem;

iniciarJogo();

function iniciarJogo() {
  indiceImagem = 1;
  img.src = `imagens/forca.png`;

  gerarPalavraAdivinhar();
  gerarBotoes();
}

function gerarPalavraAdivinhar() {
  contentGuessWord.textContent = "";

  const { word, clue } = getWord();
  const palavraSemAcento = word
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  Array.from(palavraSemAcento).forEach((letra) => {
    const span = document.createElement("span");
    span.textContent = "_";
    span.setAttribute("letra", letra.toUpperCase());
    contentGuessWord.appendChild(span);
  });

  contentClue.textContent = `Dica: ${clue}`;
}

function respostaIncorreta() {
  indiceImagem++;
  img.src = `imagens/img${indiceImagem}.png`;

  if (indiceImagem === 7) {
    setTimeout(() => {
      alert("Perdeu :/");
      iniciarJogo();
    }, 100);
  }
}

function verificarLetra(letra) {
  const arr = document.querySelectorAll(`[letra="${letra}"]`);

  if (!arr.length) respostaIncorreta();

  arr.forEach((e) => {
    e.textContent = letra;
  });

  const spans = document.querySelectorAll(`.guess-word span`);
  const ganhou = !Array.from(spans).find((span) => span.textContent === "_");

  if (ganhou) {
    setTimeout(() => {
      alert("Ganhou!!!");
      iniciarJogo();
    }, 100);
  }
}

function gerarBotoes() {
  contentBtns.textContent = "";

  for (let i = 97; i < 123; i++) {
    const btn = document.createElement("button");
    const letra = String.fromCharCode(i).toUpperCase();
    btn.textContent = letra;

    btn.onclick = () => {
      btn.disabled = true;
      btn.style.backgroundColor = "gray";
      verificarLetra(letra);
    };

    contentBtns.appendChild(btn);
  }
}