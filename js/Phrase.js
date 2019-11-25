/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 // Phrase Class

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    };
    addPhraseToDisplay() {                                              // Adds phrase to display by creating 'li' for each
        const div = document.createElement('div');                      // character after using .split()
        const mainDiv = document.getElementById('phrase')
        mainDiv.appendChild(div);
        div.className = 'section';
        div.setAttribute('id', 'phrase')
        const ul = document.createElement('ul');
        div.appendChild(ul)
        const charsInPhrase = this.phrase.split('');
        charsInPhrase.forEach(char => {
            console.log(char);
             const createLi = document.createElement('li');
             ul.appendChild(createLi);
             createLi.className = 'hide letter ' + char;
             createLi.innerHTML = char;
             if (char === ' ') {
                 createLi.className = 'space';
             };
        });
    };
    checkLetter(letter) {                                               // Function to check if letter was correct
        if (this.phrase.includes(letter)) {
            return true;
        }else return false;
    };
    showMatchedLetter(letter) {                                         // Shows the matched letter by changing class to show
        const matched = document.querySelectorAll('.hide');
        for (let i = 0; i < matched.length; i++) {
            //console.log(matched[i]);
            if (letter === matched[i].innerHTML) {
                //console.log('working');
                matched[i].className = 'show';
            };
        };
    };
};
document.onkeydown = function(key) {
    console.log(key)
    game.activePhrase.checkLetter(key);
};