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

  //expected to pressed
  const current_alphabetElement = document.getElementById("current_alphabet");
  const currentAlphabet = current_alphabetElement.innerText;
  const expectedToPressed = currentAlphabet.toLowerCase();

  // Continuing playing
  if (playerPressed === expectedToPressed) {
    /* Update Score:
   --------------------------- */
    // 1. get Current Score
    const curentScoreElement = document.getElementById("curentScore");
    const curentScoreElement_text = curentScoreElement.innerText;
    const curentScore = parseInt(curentScoreElement_text);

    //  2. increase current score by 1
    const newScore = curentScore + 1;
    console.log(newScore);

    // 3. update current score
    curentScoreElement.innerText = newScore;

    removeBgColor(expectedToPressed);
    startGame();
  } else {
    /* Update Life:
   --------------------------- */
    // 1. get Current Life
    const currentLifeElement = document.getElementById("curent-life");
    const currentLifeElement_text = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeElement_text);

    //2. decrease Life by 1
    newLife =  currentLife -1

    //3. update new Life
    currentLifeElement.innerText = newLife;
    if(newLife < 0){
        play()


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
  showElementByID("playGround");
  startGame();
}
