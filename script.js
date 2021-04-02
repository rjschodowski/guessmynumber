'use strict';

//DRY Principle: don't repeat your code

//Let's refactor our code. First, let's identify identical or near-identical lines of code

'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; 
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);


//When there is no input    
    if (!guess) {
        // document.querySelector('.message').textContent = 'Feed me number or perish!';
        displayMessage('Feed me number!');

//When player wins
    } else if (guess === secretNumber) {
        //  document.querySelector('.message').textContent = 'You guessed, you wizard, you!';
        displayMessage('You guessed right! Go eat a vegetable!');
         document.querySelector('.number').textContent = secretNumber; 
         document.querySelector('body').style.backgroundColor = '#60b347';
         document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

//When guess is wrong

     } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? 'Your number is too high!' : 'Your number is too low!';
            displayMessage(guess > secretNumber ? 'Your number is too high!' : 'Your number is too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = 'You lost the game..wah wah wah!';
            displayMessage('Wah, wah, wah...you lose, but you can still eat a vegetable!');
            document.querySelector('.score').textContent = 0;
        }
    }

// //When guess is too high    
//     } else if (guess > secretNumber) {
//         if (score > 1) {
//             document.querySelector('.message').textContent = 'Your number is too high!';
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = 'You lost the game..wah wah wah!';
//             document.querySelector('.score').textContent = 0;
//         }
//     } 
    
// //When guess is too low    
//     else if (guess < secretNumber) {
//     document.querySelector('.message').textContent = 'Your number is too low!';
//     score--;
//     document.querySelector('.score').textContent = highscore;
//     } 
//  
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});

