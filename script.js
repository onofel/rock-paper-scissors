// DOM ----------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const startscreen = document.getElementById('mss');
    const gamescreen = document.getElementById('game');

// Listen For Spacebar
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' || event.key === ' ') {
        console.log('Space key was pressed.');
        setTimeout(() => {
        startscreen.classList.add('blink');
            console.log('Start blinking.');
        setTimeout(() => {
            startscreen.classList.remove('blink');
            startscreen.classList.add('boing');
            console.log('Blinked.');},100);
            setTimeout(() => {
                startscreen.classList.add('godown');
                console.log('Went down.');},1000); 
                setTimeout(() => {
                    gamescreen.classList.add('show');
                    console.log('Game on!');},1000);},200);
}})
});
// RNG


// Game
    // User 
    const rockhand = document.getElementById('roh');
    const paperhand = document.getElementById('pah');
    const scissorhand = document.getElementById('sch');

    // Opponent
    const rockhandp = document.getElementById('rohp');
    const paperhandp = document.getElementById('pahp');
    const scissorhandp = document.getElementById('schp');

// On User Hover
function hoveredRock() {
    rockhand.classList.add('user');
    paperhand.classList.remove('user');
    scissorhand.classList.remove('user');
}
function hoveredPaper() {
    rockhand.classList.remove('user');
    paperhand.classList.add('user');
    scissorhand.classList.remove('user');
}
function hoveredScissors() {
    rockhand.classList.remove('user');
    paperhand.classList.remove('user');
    scissorhand.classList.add('user');
}
// RNG
const choices = ['rock', 'paper', 'scissors'];
// Pickings
const iloverock = document.getElementById('rocka');
const ilovepaper = document.getElementById('papera');
const ilovescissors = document.getElementById('scissora');
const backdrop = document.getElementById('backdrop');


iloverock.addEventListener('click', function() {
    picked('rock');
});
ilovepaper.addEventListener('click', function() {
    picked('paper');
});
ilovescissors.addEventListener('click', function() {
    picked('scissors');
});
function picked(userChoice) {
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const userhand = document.querySelectorAll('UserHand');
    const opphand = document.querySelectorAll('OppHand');
    if (userChoice === 'rock' && computerChoice === 'rock') {
        // tie
        rockhand.classList.add('user');
        rockhandp.classList.add('opponent');
        // Removing class from user
        paperhand.classList.remove('user');
        scissorhand.classList.remove('user');
        // Removing class from opponent
        paperhandp.classList.remove('opponent');
        scissorhandp.classList.remove('opponent');
        setTimeout(() => {
            backdrop.classList.add('active');
            backdrop.classList.add('appear');
                    setTimeout(() => {
                        backdrop.classList.remove('appear');
                        setTimeout(() => {
                        backdrop.classList.remove('active');},1000);},1000);},500);
    }
    else if (userChoice === 'paper' && computerChoice === 'paper') {
        // tie
        paperhand.classList.add('user');
        paperhandp.classList.add('opponent');
        // Removing class from user
        rockhand.classList.remove('user');
        scissorhand.classList.remove('user');
        // Removing class from opponent
        rockhandp.classList.remove('opponent');
        scissorhandp.classList.remove('opponent');
        setTimeout(() => {
            backdrop.classList.add('active');
            backdrop.classList.add('appear');
                    setTimeout(() => {
                        backdrop.classList.remove('appear');
                        setTimeout(() => {
                        backdrop.classList.remove('active');},1000);},1000);},500);
    }
    else if (userChoice === 'scissor' && computerChoice === 'scissor') {
        // tie
        scissorhand.classList.add('user');
        scissorhandp.classList.add('opponent');
        // Removing class from user
        rockhand.classList.remove('user');
        paperhand.classList.remove('user');
        // Removing class from opponent
        rockhandp.classList.remove('opponent');
        paperhandp.classList.remove('opponent');
        setTimeout(() => {
            backdrop.classList.add('active');
            backdrop.classList.add('appear');
                    setTimeout(() => {
                        backdrop.classList.remove('appear');
                        setTimeout(() => {
                        backdrop.classList.remove('active');},1000);},1000);},500);
    }
    else if (userChoice === 'rock' && computerChoice === 'scissors') {
        rockhand.classList.add('user');
        scissorhandp.classList.add('opponent');
        // Removing class from user
        paperhand.classList.remove('user');
        scissorhand.classList.remove('user');
        // Removing class from opponent
        paperhandp.classList.remove('opponent');
        rockhandp.classList.remove('opponent');
        setTimeout(() => {
            backdrop.classList.add('active');
            backdrop.classList.add('appear');
            setTimeout(() => {
                rockhand.classList.add('win');
                setTimeout(() => {
                    rockhand.classList.remove('win');
                    setTimeout(() => {
                        backdrop.classList.remove('appear');
                        setTimeout(() => {
                        backdrop.classList.remove('active');},1000);},1000);},400);},1000);},50);
    }
    else if (userChoice === 'paper' && computerChoice === 'rock') {
        paperhand.classList.add('user');
        rockhandp.classList.add('opponent');
        // Removing class from user
        rockhand.classList.remove('user');
        scissorhand.classList.remove('user');
        // Removing class from opponent
        paperhandp.classList.remove('opponent');
        scissorhandp.classList.remove('opponent');
        setTimeout(() => {
            backdrop.classList.add('active');
            backdrop.classList.add('appear');
            setTimeout(() => {
                paperhand.classList.add('win');
                setTimeout(() => {
                    paperhand.classList.remove('win');
                    setTimeout(() => {
                        backdrop.classList.remove('appear');
                        setTimeout(() => {
                        backdrop.classList.remove('active');},1000);},1000);},400);},1000);},50);
    }
    else if (userChoice === 'scissors' && computerChoice === 'paper') {
        scissorhand.classList.add('user');
        paperhandp.classList.add('opponent');
        // Removing class from user
        rockhand.classList.remove('user');
        paperhand.classList.remove('user');
        // Removing class from opponent
        rockhandp.classList.remove('opponent');
        scissorhandp.classList.remove('opponent');
        setTimeout(() => {
            backdrop.classList.add('active');
            backdrop.classList.add('appear');
            setTimeout(() => {
                scissorhand.classList.add('win');
                setTimeout(() => {
                    scissorhand.classList.remove('win');
                    setTimeout(() => {
                        backdrop.classList.remove('appear');
                        setTimeout(() => {
                        backdrop.classList.remove('active');},1000);},1000);},400);},1000);},50);
    }
    else if (userChoice === 'scissors' && computerChoice === 'rock') {
        scissorhand.classList.add('user');
        rockhandp.classList.add('opponent');
        // Removing class from user
        rockhand.classList.remove('user');
        paperhand.classList.remove('user');
        // Removing class from opponent
        paperhandp.classList.remove('opponent');
        scissorhandp.classList.remove('opponent');
        setTimeout(() => {
            backdrop.classList.add('active');
            backdrop.classList.add('appear');
            setTimeout(() => {
                rockhandp.classList.add('lose');
                setTimeout(() => {
                    rockhandp.classList.remove('lose');
                    setTimeout(() => {
                        backdrop.classList.remove('appear');
                        setTimeout(() => {
                        backdrop.classList.remove('active');},1000);},1000);},400);},1000);},50);
    }
    else if (userChoice === 'rock' && computerChoice === 'paper') {
        rockhand.classList.add('user');
        paperhandp.classList.add('opponent');
        // Removing class from user
        paperhand.classList.remove('user');
        scissorhand.classList.remove('user');
        // Removing class from opponent
        rockhandp.classList.remove('opponent');
        scissorhandp.classList.remove('opponent');
        setTimeout(() => {
            backdrop.classList.add('active');
            backdrop.classList.add('appear');
            setTimeout(() => {
                paperhandp.classList.add('lose');
                setTimeout(() => {
                    paperhandp.classList.remove('lose');
                    setTimeout(() => {
                        backdrop.classList.remove('appear');
                        setTimeout(() => {
                        backdrop.classList.remove('active');},1000);},1000);},400);},1000);},50);
    }
    else if (userChoice === 'paper' && computerChoice === 'scissors') {
        paperhand.classList.add('user');
        scissorhandp.classList.add('opponent');
        // Removing class from user
        rockhand.classList.remove('user');
        scissorhand.classList.remove('user');
        // Removing class from opponent
        paperhandp.classList.remove('opponent');
        rockhandp.classList.remove('opponent');
        setTimeout(() => {
            backdrop.classList.add('active');
            backdrop.classList.add('appear');
            setTimeout(() => {
                scissorhandp.classList.add('lose');
                setTimeout(() => {
                    scissorhandp.classList.remove('lose');
                    setTimeout(() => {
                        backdrop.classList.remove('appear');
                        setTimeout(() => {
                        backdrop.classList.remove('active');},1000);},1000);},400);},1000);},50);
    }
}