const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
const VALID_CONTINUE_CHOICES = ['yes', 'no']


function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (choice === computerChoice) {
    prompt("It's a tie!")
  } else if ((choice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
      (choice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
      (choice === 'scissors' && (computerChoice === 'paper') || computerChoice === 'lizard') ||
      (choice === 'spock' && (computerChoice === 'scissors' || computerChoice === 'rock')) ||
      (choice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper'))) {
    prompt('You win!');
  } else {
    prompt('Computer wins!');
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}


function isValid(userChoice, arrCompleteChoices) {
  if (arrCompleteChoices === VALID_CHOICES) {
    if ((userChoice[0] === "s") && (userChoice.length === 1)) {
      return false;
    }
  }

  for (let aValidChoice of arrCompleteChoices) {
    aValidChoice = aValidChoice.toLowerCase()

    if (aValidChoice.indexOf(userChoice) === 0) {
      return true;
    }
  }
  return false;
}

function getFullChoiceString(validatedUserChoice) {
  for (let aValidChoice of VALID_CHOICES) {
    if (aValidChoice.indexOf(validatedUserChoice) === 0) {
      return aValidChoice
    }
  }
}

let shouldPlay = true

while (shouldPlay) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!isValid(choice, VALID_CHOICES)) {
    prompt("I'm not sure which choice you made. Please check your spelling and/or be more specific.");
    choice = readline.question();
  }

  choice = getFullChoiceString(choice);

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (yes/no)?');
  let answer = readline.question().toLowerCase();
  while (!isValid(answer, VALID_CONTINUE_CHOICES)) {
    prompt('I\'m not sure what you mean. Check your spelling and try again please.');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') {
    shouldPlay = false
  }
}
