/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 // Event Listener for Start Button
 
let game;
const btnReset = document.getElementById('btn__reset');
btnReset.addEventListener('click',function () {
    game = new Game();
    game.startGame();
});

// Event listener for all the buttons via event delegation

const selectedKey = document.getElementById('qwerty');
selectedKey.addEventListener('click', function (event) {
    if (event.target.tagName != 'BUTTON') {
        return;
    };
    if (event.target.tagName === 'BUTTON'){
        game.handleInteraction(event.target); 
        console.log('working');
    };  
});

document.onkeydown = function(key) {
    console.log(key.key)
    game.activePhrase.checkLetter(key.key);
};
