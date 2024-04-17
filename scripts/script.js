// function play (){

//     // step - 1 : hide the Home Screen by adding hidden class in the Section
//     // SHow the playground

//     const homeSection = document.getElementById('home')
//     homeSection.classList.add('hidden');
//     const playGround_section = document.getElementById('playGround')
//     playGround_section.classList.remove('hidden')
// }


function startGame (){
    const alphabet = getRandomAlphabet()
    const current_alphabet = document.getElementById('current_alphabet');
    current_alphabet.innerText = alphabet;

    //set background Color
    setBackgroundColor(alphabet);

}

function play (){
    hideElementByID('home')
    showElementByID('playGround')
    startGame()
}