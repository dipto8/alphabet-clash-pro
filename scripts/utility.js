function hideElementByID(elementID){
    const element =document.getElementById(elementID)
    element.classList.add('hidden')
}

function showElementByID(elementID){
    const element = document.getElementById(elementID)
    element.classList.remove('hidden')

}

function getRandomAlphabet(){
    //get Alphabet Array
    const alphabetStr  = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetStr.split('')


    // get a random index between 0 - 25
     const randomNumber = Math.random()*25;
     const index = Math.round(randomNumber);
     const alphabet =  alphabets[index]
     console.log(alphabet)

     return alphabet;

}

function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-fuchsia-800');
    
}