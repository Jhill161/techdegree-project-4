/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 

// Reset function to be called at gameOver()
function reset() {
    const list = document.getElementById('phrase');
    const hearts = document.querySelectorAll('ol img');
    const buttonsWrong = document.querySelectorAll('.wrong');
    const buttonsRight = document.querySelectorAll('.chosen');
    while (list.hasChildNodes()) {                                          // Loop to remove previous phrase list
        list.removeChild(list.firstChild);
      };
    for (let i = 0; i < hearts.length; i++) {                               // Loop to reset lives/hearts
        hearts[i].src = 'images/liveHeart.png';
    };
    for (let i = 0; i < buttonsWrong.length; i++) {                         // Loop to reset wrong buttons
        buttonsWrong[i].disabled = false;
        buttonsWrong[i].className = 'key';
    };
    for (let i = 0; i < buttonsRight.length; i++) {                         // Loop to reset chosen buttons
        buttonsRight[i].disabled = false;
        buttonsRight[i].className = 'key';
    };
    
};
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
    getRandomPhrase() {                                                         // Gets a random phrase
        const rand = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return rand;
    };
    startGame() {                                                               // Calls for new phrase and displays it
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };
    handleInteraction(button) {
        button.disabled = true;
        if (game.activePhrase.checkLetter(button.innerHTML) === true) {         // If button selected === letter in phrase
            button.className = 'chosen';
            game.activePhrase.showMatchedLetter(button.innerHTML);
            this.checkForWin();                                                 // Check for win after each correct guess
            if (this.checkForWin() === true) {                                  // Game over if check for win === true
                this.gameOver(true);
            };
        } else {
            button.className = 'wrong';
            game.removeLife();
        }
    };
    checkForWin() {                                                              // Checks if all hidden are now class 'show'
        const hidden = document.querySelectorAll('.hide').length 
        const shown = document.querySelectorAll('show').length   
            if (shown === hidden) {
                return true;
            }else return false;
    };
    removeLife() {                                                               // changes 'src' attr image if missed guess
        let missed = 0;
        const hearts = document.querySelectorAll('ol img');
        hearts[this.missed].setAttribute('src','images/lostHeart.png');          // Gets 'hearts' index of 'missed' and removes via setAttr.
        this.missed ++;
        if (this.missed === 5) {
            this.gameOver(false);
        };
    };
    gameOver(won) {                                                              // Displays gameover message for win || fail
        const overlay = document.getElementById('overlay');                      // Calls reset function to reset board
        overlay.style.display = 'show';
        if (won === true) {
            document.getElementById('game-over-message').innerText = 'You Win!';
            overlay.className = 'win';
        }else {
            document.getElementById('game-over-message').innerText = 'Sorry, Better luck next time!';
            overlay.className = 'lose';
        };
        document.getElementById("overlay").style.display = "block";
        reset();
    };

};