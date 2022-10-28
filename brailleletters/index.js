// Display a box in css
// create an input box and submit it
// name of user: eg 'Karen Collins'
// Loop through the name (map but could use reduce)
// Convert each char using the brailleAlpha object
// Combine the chars into a string
// Display the output on the page/pop-up, but with Braille as the main text and the normal string word underneath 

let button = document.querySelector(".btn");
let userMessage = document.querySelector(".userInput");
let braille = document.querySelector(".braille");
let modal = document.querySelector(".modal");
let close = document.querySelector(".close");
// let resultInput = userInput.innerHTML = `${wordInput} is your word input`

// button.addEventListener("click", findBrailleFromAlpha)
button.addEventListener("click", findBrailleFromAlpha)

// close model
close.addEventListener("click", closeModal);


// Braille alphabet
let brailleAlpha = {
    a: '⠁',
    b: '⠃',
    c: '⠉',
    d: '⠙',
    e: '⠑',
    f: '⠋',
    h: '⠓',
    i: '⠊',
    j: '⠚',
    k: '⠅',
    l: '⠇',
    m: '⠍',
    n: '⠝',
    o: '⠕',
    p: '⠏',
    q: '⠟',
    r: '⠗',
    s: '⠎',
    t: '⠞',
    u: '⠥',
    v: '⠧',
    w: '⠺',
    x: '⠭',
    y: '⠽',
    z: '⠵'
}

function alphaCharAsBraille(alphaChar) {
    return (typeof brailleAlpha[alphaChar] === 'undefined')?'':brailleAlpha[alphaChar];	
}

function findBrailleFromAlpha(e) {
    let wordInput = document.querySelector(".input-text");
    // alert(wordInput)
    // Takes the value and converts to all lowercase.
    let resultInput = wordInput.value.toLowerCase();
    // Splits the name
    let splitCharsName = resultInput.split('');
    console.log(resultInput);
    console.log(splitCharsName);
     // Convert each character in the name to its Braille counterpart
     const charsAsBraille = splitCharsName.map((alphaChar) => alphaCharAsBraille(alphaChar));
     console.log(charsAsBraille);
     // Convert Braille array to a string.
     // NOTE: Using reduce instead of map it could output the final string rather than the intermediate array 
     let joinName = charsAsBraille.join();
     braille.innerHTML = `This is your braille version of your word: ${joinName}`
     openModal(e, userMessage.innerHTML = `This is your text version of your word in all lowercase: ${resultInput}`)
     return joinName;
}

function openModal(e) {
    e.preventDefault();
    modal.style.display = "block";
  }

function closeModal() {
    modal.style.display = "none";

}