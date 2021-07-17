//Grabbing HTML elements
let body = document.querySelector('body');

let winBox = document.createElement('div'); //Container div
let winner = document.createElement('p'); //Displays the winner


let myChoiceText = document.createElement('p'); //Your Choice:
let computerChoice = document.createElement('p'); //Computer chose:
let myImage = document.createElement('img'); 
let computerImage = document.createElement('img');
let winnerText = document.createElement('p'); //And the winner Is...

let clear = document.createElement('button'); //Creating clear button


//Setting choices array
const choices = ["Lapis", "Papyrus", "Scalpellus"];

//setting player's choice
let myChoice = "";

//Show Lapis Image
function showLapis() {
    body.appendChild(winBox);
    winBox.className = 'win-box';
    winBox.appendChild(myChoiceText);
    myChoiceText.innerHTML = "You chose: ";
    winBox.appendChild(myImage);
    myImage.setAttribute('src', "https://www3.bostonglobe.com//rw/Boston/2011-2020/WebGraphics/Metro/BostonGlobe.com/2018/05/rockpaperscissors/assets/rock--left.png");
    myImage.setAttribute('class', "img");
}

//Show Papyrus Image 
function showPapyrus() {
    body.appendChild(winBox);
    winBox.className = 'win-box';
    winBox.appendChild(myChoiceText);
    myChoiceText.innerHTML = "You chose: ";
    winBox.appendChild(myImage);
    myImage.setAttribute('src', "https://freepikpsd.com/media/2019/10/rock-paper-scissors-png-2-Transparent-Images.png");
    myImage.setAttribute('class', "img");
}

//Show Scalpellus Image
function showScalpellus() {
    body.appendChild(winBox);
    winBox.className = 'win-box';
    winBox.appendChild(myChoiceText);
    myChoiceText.innerHTML = "You chose: ";
    winBox.appendChild(myImage);
    myImage.setAttribute('src', "https://sihoonathan.github.io/rock-paper-scissors/assets/img/scissors.png");
    myImage.setAttribute('class', "img");
}

//Pressing buttons
document.querySelector('#lapis').onclick = function(e) {
    showLapis();
    myChoice = e.target.innerHTML;
    rockPaperScizzors(myChoice);
}

document.querySelector('#papyrus').onclick = function(e) {
    showPapyrus();
    myChoice = e.target.innerHTML;
    rockPaperScizzors(myChoice);
}

document.querySelector('#scalpellus').onclick = function(e) {
    showScalpellus();
    myChoice = e.target.innerHTML;
    rockPaperScizzors(myChoice);
}

//Playing the game
function rockPaperScizzors(myChoice)
{  
    //Checking that all went well in reading the choice
    if (choices.indexOf(myChoice) < 0){
        winner.innerHTML = (myChoice + " is not a valid option. Please choose: Lapis, Papyrus or Scalpellus");
        return 0;
    }

    let playerIndex = choices.indexOf(myChoice);

    //Computer's turn
    let computerIndex = computerChooses();
    
    //Instert computer choice
    if (computerIndex === 0) {
        winBox.appendChild(computerChoice);
        computerChoice.innerHTML = "Computer's turn..."
        winBox.appendChild(computerImage);
        computerImage.setAttribute('src', "https://www3.bostonglobe.com//rw/Boston/2011-2020/WebGraphics/Metro/BostonGlobe.com/2018/05/rockpaperscissors/assets/rock--left.png");
        computerImage.setAttribute('class', "img");
    }

    if(computerIndex === 1) {
        winBox.appendChild(computerChoice);
        computerChoice.innerHTML = "Computer's turn..."
        winBox.appendChild(computerImage);
        computerImage.setAttribute('src', "https://freepikpsd.com/media/2019/10/rock-paper-scissors-png-2-Transparent-Images.png");
        computerImage.setAttribute('class', "img");
    }

    if(computerIndex === 2) {
        winBox.appendChild(computerChoice);
        computerChoice.innerHTML = "Computer's turn..."
        winBox.appendChild(computerImage);
        computerImage.setAttribute('src', "https://sihoonathan.github.io/rock-paper-scissors/assets/img/scissors.png");
        computerImage.setAttribute('class', "img");
    }

    compareChoices (computerIndex, playerIndex);

    //Clear button appears
    body.appendChild(clear);
    clear.className = "btn";
    clear.innerHTML = "Restart"
}


function computerChooses(){
  return Math.floor(Math.random() * choices.length);
}

function compareChoices(computerIndex, playerIndex){
    winBox.appendChild(winner);
    winner.className = "winner";

    if (playerIndex === computerIndex) {
    winner.innerHTML = ("It's a tie!");
    }
  
  if (playerIndex === 0) {
    if (computerIndex === 1) {
      computerWins();
    }
    
    if (computerIndex === 2) {
      youWin();
    }
  }
    
  if (playerIndex === 1) {
      if (computerIndex === 0) {
      youWin();
    }
    
      if (computerIndex === 2) {
        computerWins();
    }
  }
   
  if (playerIndex === 2) {
      if (computerIndex === 0) {
        computerWins();
    }
    
      if (computerIndex === 1) {
        youWin()
    }
  }

  disable();
}

//Print Winner
function computerWins(){
    winner.innerHTML = ("Computer wins!")
}
function youWin(){
    winner.innerHTML = ("You win!")
}

function disable() {
  document.getElementById('lapis').disabled = true;
  document.getElementById('lapis').className = "g-btn";
  document.getElementById('papyrus').disabled = true;
  document.getElementById('papyrus').className = "g-btn";
  document.getElementById('scalpellus').disabled = true;
  document.getElementById('scalpellus').className = "g-btn";
}

function enable() {
  document.getElementById('lapis').disabled = false;
  document.getElementById('lapis').className = "btn";
  document.getElementById('papyrus').disabled = false;
  document.getElementById('papyrus').className = "btn";
  document.getElementById('scalpellus').disabled = false;
  document.getElementById('scalpellus').className = "btn";
}

//Clearing the screen
clear.onclick = function() {
    winBox.remove();
    clear.remove();
    enable();
}







