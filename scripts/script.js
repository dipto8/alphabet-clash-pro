// function play (){

//     // step - 1 : hide the Home Screen by adding hidden class in the Section
//     // SHow the playground

//     const homeSection = document.getElementById('home')
//     homeSection.classList.add('hidden');
//     const playGround_section = document.getElementById('playGround')
//     playGround_section.classList.remove('hidden')
// }

function handleKeybordPress(event) {
  const playerPressed = event.key;

  //Quit from Game
  if (playerPressed === "Escape") {
    gameOver();
  }

  //expected to pressed
  const current_alphabetElement = document.getElementById("current_alphabet");
  const currentAlphabet = current_alphabetElement.innerText;
  const expectedToPressed = currentAlphabet.toLowerCase();

  // Continuing playing
  if (playerPressed === expectedToPressed) {
    const currentScore = getElementValueById("curentScore");
    const newScore = currentScore + 1;
    setElementValueById("curentScore", newScore);

    /* Update Score:
   --------------------------- */
    // 1. get Current Score
    // const curentScoreElement = document.getElementById("curentScore");
    // const curentScoreElement_text = curentScoreElement.innerText;
    // const curentScore = parseInt(curentScoreElement_text);

    // //  2. increase current score by 1
    // const newScore = curentScore + 1;
    // console.log(newScore);
    // updateScoreById('curentScore')

    // // 3. update current score
    // // curentScoreElement.innerText = newScore;

    removeBgColor(expectedToPressed);
    startGame();
  } else {
    /* Update Life:
   --------------------------- */
    const currentLife = getElementValueById("curent-life");
    const updatedLife = currentLife - 1;
    setElementValueById("curent-life", updatedLife);

    // // 1. get Current Life
    // const currentLifeElement = document.getElementById("curent-life");
    // const currentLifeElement_text = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeElement_text);

    // //2. decrease Life by 1
    // newLife =  currentLife -1

    //Game Over!!

    if (updatedLife === 0) {
      gameOver();
    }
  }
}
document.addEventListener("keyup", handleKeybordPress);

function startGame() {
  const alphabet = getRandomAlphabet();
  const current_alphabet = document.getElementById("current_alphabet");
  current_alphabet.innerText = alphabet;

  //set background Color
  setBackgroundColor(alphabet);
}

function play() {
  hideElementByID("home");
  hideElementByID("finalScore");
  showElementByID("playGround");

  //reset Score and life
  setElementValueById("curentScore", 0);
  setElementValueById("curent-life", 5);
  startGame();
}

function gameOver() {
  hideElementByID("playGround");
  showElementByID("finalScore");
  const lastScore = getElementValueById("curentScore");
  setElementValueById("playerScore", lastScore);
  const lastKeyPressed = getElement_TextByID("current_alphabet");
  removeBgColor(lastKeyPressed);
}
