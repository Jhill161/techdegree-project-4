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
    };
    startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };
    handleInteraction() {
        console.log(button)
    };
    checkForWin() {
        const hidden = document.querySelectorAll('.hide').length 
        const shown = document.querySelectorAll('show').length   
            if (shown === hidden) {
                return true;
            }else return false;
    };
    removeLife() {
        let missed = 0;
        const hearts = document.querySelectorAll('ol img');
        hearts[this.missed].setAttribute('src','images/lostHeart.png');
        this.missed ++;
        if (missed === 5) {
            this.gameOver(false);
        };
    };
    gameOver(won) {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'show';
        if (won === true) {
            document.getElementById('game-over-message').innerText = 'You Win!';
            overlay.className = 'win';
        }else {
            document.getElementById('game-over-message').innerText = 'Sorry, Better luck next time!';
            overlay.className = 'lose';
        };
        document.getElementById("overlay").style.display = "block";
    };
};