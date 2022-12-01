const readline = require('readline-sync');

const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
const VALID_CONTINUE_CHOICES = ['yes', 'no']

const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};


function displayWinner(userChoice, computerChoice, outcome) {
  prompt(`You chose ${userChoice}, computer chose ${computerChoice}`);

  if (outcome === "win") {
    prompt('You win!');
  } else if (outcome === "lose") {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
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
      return aValidChoice;
    }
  }
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function getResultString(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "tie";
  } else if (playerWins(userChoice, computerChoice)) {
        return "win";
  }
  return "lose";
}


let userScore = 0;
let computerScore = 0;


function updateScores(userResult) {  // Question for reviewer: Is what I'm doing here an example of variable shadowing? Is it good/bad practice?
  if (userResult === "win") {
    userScore += 1;
  } else if (userResult === "lose") {
    computerScore += 1;
  }
}

function displayScores() {
  prompt(`This brings the score to:\nUser: ${userScore}\nComputer: ${computerScore}`);
}

function getMaxNumberGames() {
  prompt("How many rounds do you want to play?")
  prompt("Make sure you choose an odd number so we can't tie!")

  let numberGames;

  while (!numberGames) {
    numberGames = Number(readline.question())

    if (!(numberGames % 2 === 1)) {
      prompt("That's not a valid number of games. Try again!")
      numberGames = NaN
    }
  }

  return numberGames;
}

function displayFinalOutcome() {
  if (userScore > computerScore) {
    prompt("Wow, what a game. You win!");
  } else {
    prompt("That means the computer wins. Maybe Skynet is closer than you thought!");
  }

  if ((userScore ===  0) || (computerScore === 0)) {
    prompt("And it was a clean sweep as well. How humiliating!");
  }
}

function getRematchResponse() {
  prompt('Do you want to play again (yes/no)?');
  let answer = readline.question().toLowerCase();

  while (!isValid(answer, VALID_CONTINUE_CHOICES)) {
    prompt('I\'m not sure what you mean. Check your spelling and try again please.');
    answer = readline.question().toLowerCase();
  }

  return answer
}

function checkIfGameOver(numGamesToWin) {
  if ((userScore === numGamesToWin) || (computerScore === numGamesToWin)) {
    return true
  }
  return false
}

let shouldPlay = true

let maxNumberGames = getMaxNumberGames()
let numGamesToWin = Math.ceil(maxNumberGames / 2)

prompt(`Alright. So first to ${numGamesToWin} is the winner. Let's go!`)


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

  let userResult = getResultString(choice, computerChoice);

  updateScores(userResult); // Question for review: Is it better practice to design this function so it is passed userResult as a parameter, or for it to access userScore from the global scope?
  displayWinner(choice, computerChoice, userResult);
  displayScores()

  let isGameOver = checkIfGameOver(numGamesToWin);
  
  if (isGameOver) {
    displayFinalOutcome()

    if (getRematchResponse()[0] !== 'y') {
      shouldPlay = false
      prompt("Alright, thanks for playing. Good game!") 
    } else {
      maxNumberGames = getMaxNumberGames()
      numGamesToWin = Math.ceil(maxNumberGames / 2)
      prompt(`Sounds good! first to ${numGamesToWin} is the winner. I wonder what will happen this time!`)

      userScore = 0
      computerScore = 0
    }
  }
}
