'use strict';

/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'wow!! good job!';
document.querySelector('.score').textContent = 3;
document.querySelector('.highscore').textContent = 3;
document.querySelector('.number').textContent = 12;
console.log((document.querySelector('.guess').value = 23));
*/
let randNam = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = randNam;
let score = 20;
let hightScore = 0;
let newScoer = 0;
document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //if the uset dont make selaction
    massges('No Number!');
  }
  // if it the courect number:
  if (guess === randNam) {
    massges('correct number!');
    document.querySelector('.number').textContent = randNam;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //
    let newScoer = document.querySelector('.score').textContent;
    console.log('the new score is', newScoer);

    if (newScoer > hightScore) {
      document.querySelector('.highscore').textContent = newScoer;
      hightScore = newScoer;
      newScoer = 0;
    }
    //keep the new score
  }
  if (guess > randNam) {
    massges('to big number!');
    score = score - 1;
    makeScure(score);
  } else if (guess < randNam) {
    massges('to low number!');
    score = score - 1;
    makeScure(score);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  console.log('ITS WORK');
  randNam = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = randNam;
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  newScoer = Number(document.querySelector('.score').textContent);
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = null;

  console.log(newScoer);
});

function makeScure(scure) {
  document.querySelector('.score').textContent = score;
  if (score <= 0) {
    massges('you lose the game! :(');
    document.querySelector('.score').textContent = 0;
  }
}
function massges(msg) {
  document.querySelector('.message').textContent = msg;
}
