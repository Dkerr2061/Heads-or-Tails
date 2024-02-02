let score = {
  wins: 0,
  loses: 0,
  ties: 0
}
  
document.querySelector('.heads').addEventListener('click', ()=> {
  playerMove('Heads');
});
  
document.querySelector('.tails').addEventListener('click', () => {
  playerMove('Tails');
});
  
document.querySelector('.reset').addEventListener('click', () => {
  score.wins = 0;
  score.loses = 0;
  score.ties = 0;
  updateResetMessage();
  playerMove('Reset');
});
  
  function updateResetMessage() {
    document.querySelector('.result').innerHTML = "You've reset the game!";
  }
  
function playerMove(playerAction) {
  let move = computerMove();
  let result = '';
  
  if(playerAction === 'Heads') {
    if(move === 'Tails') {
      result = 'You win!';
  } else if(move === 'Heads') {
  result = 'Tie.';
  }
  } else if(playerAction === 'Tails') {
  if(move === 'Heads') {
  result = 'You lose...';
  } else if(move === 'Tails') {
  result = 'Tie.';
  }
  }
  
  if(result === 'You win!') {
    score.wins++;
  } else if(result === 'You lose...') {
    score.loses++;
  } else if(result === 'Tie.') {
    score.ties++;
  }
  
  document.querySelector('.score').innerHTML = `Wins:${score.wins}, Loses:${score.loses}, Ties:${score.ties}.`;
  
  if(playerAction === 'Heads' || playerAction === 'Tails') {
  document.querySelector('.result').innerHTML = `You chose ${playerAction}, ${result}`;
  }
  
  return result;
  }
  
  function computerMove() {
  let num = Math.random();
  let result = '';
  
  if(num > 1/2) {
    result = 'Heads';
  } else {
    result = 'Tails';
  }
  
  return result;
  }