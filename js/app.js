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
