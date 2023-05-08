const choices = ['rock', 'paper', 'scissors'];

const getUserChoice = () => {
  const buttons = document.querySelectorAll('.choices button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      playGame(button.textContent.toLowerCase());
    });
  });
}

const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (userChoice === 'rock' && computerChoice === 'scissors' || 
             userChoice === 'paper' && computerChoice === 'rock' || 
             userChoice === 'scissors' && computerChoice === 'paper') {
    return 'You win!';
  } else {
    return 'You lose!';
  }
}

const playGame = (userChoice) => {
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);

  const resultDiv = document.querySelector('.result');
  resultDiv.innerHTML = '';
  const userChoiceP = document.createElement('p');
  userChoiceP.textContent = `You chose ${userChoice}.`;
  resultDiv.appendChild(userChoiceP);

  const computerChoiceP = document.createElement('p');
  computerChoiceP.textContent = `The CO-PLAYER chose ${computerChoice}.`;
  resultDiv.appendChild(computerChoiceP);

  const winnerP = document.createElement('p');
  winnerP.textContent = result;
  resultDiv.appendChild(winnerP);
}


getUserChoice();
