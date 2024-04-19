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
     

     return alphabet;

}

function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-fuchsia-800');
    
}
function removeBgColor(elementID){
    const element = document.getElementById(elementID)
    element.classList.remove('bg-fuchsia-800')
      

}

function getElementValueById(elementID){
    const element = document.getElementById(elementID);
    const element_text_Value = element.innerText;
    const value = parseInt(element_text_Value);
    return value ;
}
function setElementValueById (elementID,value){
    const element = document.getElementById(elementID);
    element.innerText = value;
}

function getElement_TextByID(elementID){
    const element = document.getElementById(elementID);
    const elementText =  element.innerText;
    return elementText;
}