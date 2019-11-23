/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// Game Class

class Game {
    
    constructor() {
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = null;
    };
    // Function to create array of phrases.
    createPhrases() {
        const phrases = [
        new Phrase ('You should hire me'),
        new Phrase ('You cant plan a poop'),
        new Phrase ('Its not always sunny in philidelphia'),
        new Phrase ('Cookies are good with milk'),
        new Phrase ('Javascript is fun')
        ];
        return phrases;
    };
    //Function to get random Phrase from this.phrases.
    getRandomPhrase() {
        const rand = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return rand;
    }
};