const contentBtns = document.querySelector(".btns");
const contentGuessWord = document.querySelector(".guess-word");
const img = document.querySelector("img");
const contentClue = document.querySelector(".clue");
const btnNew = document.querySelector(".new");
btnNew.onclick = () => init();
let indexImg;

init();

function init() {
  indexImg = 1;
  img.src = `imagens/forca.png`;

  generateGuessSection();
  generateButtons();
}

// Função para lidar com resposta errada
function respostaErrada() {
    indexImg++;
    img.src = `img${indexImg}.png`;
  
    if (indexImg === 7) {
      setTimeout(() => {
        alert("Perdeu :/");
        init();
      }, 100);
    }
  }