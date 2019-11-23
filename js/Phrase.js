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
        document.body.appendChild(div);
        div.className = 'section';
        div.setAttribute('id', 'phrase')
        const ul = document.createElement('ul');
        div.appendChild(ul)
        const charsInPhrase = this.phrase.split('');
        charsInPhrase.forEach(char => {
            console.log(charsInPhrase);
             const createLi = document.createElement('li');
             ul.appendChild(createLi);
             createLi.className = 'hide letter ' + char;
             if (char === ' ') {
                 createLi.className = 'space';
             };
        });
    };
};