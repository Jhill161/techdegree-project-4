/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 // Phrase Class
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    };
    addPhraseToDisplay() {
        const div = document.createElement('div');
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
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        }else return false;
    };
    showMatchedLetter(letter) {
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