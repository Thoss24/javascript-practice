// <p> element added, practicing JS, and DOM methods.
let paragraphOne = document.createElement('p');
paragraphOne.textContent = 'Hey I\'m red!';
document.querySelector('body').appendChild(paragraphOne)

// <h3> element with blue text.
let blueHeaderOne = document.createElement('h3');
blueHeaderOne.textContent = 'I\'m a blue h3!';
blueHeaderOne.style.color = "blue";
document.querySelector('body').appendChild(blueHeaderOne);

// <div> element with black border and pink background
let pinkBlackDiv = document.createElement('div');
pinkBlackDiv.style.backgroundColor = 'pink';
pinkBlackDiv.style.border = '1px solid black';
pinkBlackDiv.style.padding = '50px'
document.querySelector('body').appendChild(pinkBlackDiv);

// <h1> element inside of <div>
let imInDiv = document.createElement('h1');
imInDiv.textContent = "I\'m in a div";
document.querySelector('div').appendChild(imInDiv);

// <p> element inside of <div>
let meTooInDiv = document.createElement('p');
meTooInDiv.textContent = 'ME TOO!';
document.querySelector('div').appendChild(meTooInDiv);



// Button which uses a named function createAlert, this is a good option if we want to reuse the same code for different events.
const btnThree = document.querySelector('#btn-three');
btnThree.addEventListener('click', createAlert);

// named function for btnThree. Could easily be reused on other events.
function createAlert() {
    alert("Hello World!")
    btnThree.style.background = "blue";
};

// button with callback function from addEventLIstener event. Useful to gather more information about the event, (e) can be targeted to gather more info about event, shown below.
const btn = document.querySelector('#btn');  
btn.addEventListener('click', function(e){   // function(e) is a callback from addEventListener. The (e) references the event itself. For example (e.target) displays the target of the event in the console, which would be the button (btn).
    console.log(e.target)
    alert("Hello World!")
    e.target.style.background = "blue";
    console.log(e)
});

// Another button which uses an arrow function. Achieves same result as using named function. Preferable if code is unlikely to be reused.
const btnTwo = document.querySelector('#btn-two');
btnTwo.addEventListener('click', () => {alert("Hello Again!");
btnTwo.style.background = "blue";
});

// querySelectorAll used to create node-list of all buttons and add a click event and alert to show the buttons id, for each item (button) in the node-list.
const buttons = document.querySelectorAll('button');
console.log(buttons)
buttons.forEach((item) => {item.addEventListener('click', () => {alert(item.id)});  // buttons.forEach((item)) is is used to iterate through each item (button) in the node-list. item represents the buttons in the node-list.
});

// Query selector to select all div elements, add a on click event that log's the elements class value.
const divs = document.querySelectorAll('div');  // Query selector to select all "div" elements.

function logText(e) {  // A function to log the class value of each "div" element on the page once it has been clicked.
  console.log(this.classList.value);
  e.stopPropagation();  // Stops bubbling. (bubbling is the order in which event handlers are called when elements are nested inside each-other). THis will no longer trigger events on the parent elements.
}


divs.forEach(div => div.addEventListener('click', logText, {  // An event to execute the logText function after a "div" element has been clicked.
  capture: false,  // The function will be run on the way down instead of on the way up.
  once: true  // Makes something only clickable once.
}));

// rps ui code
// selector
document.getElementById('rock').onclick = user;
document.getElementById('paper').onclick = user;
document.getElementById('scissors').onclick = user;

//function to compare player selection and computer selection
function user() {
    let playerSelection = this.id;

    let computerChoice = ["rock", "paper", "scissors"];
    let computerSelection = computerChoice[Math.floor(Math.random() * 3)]


// Function to play a round of "Rock", "Paper", "Scissors". 
function playRound(choice1, choice2) { 
  if (
    (choice1 == 'rock' && choice2 == 'scissors') ||
    (choice1 == 'paper' && choice2 == 'rock') ||
    (choice1 == 'scissors' && choice2 == 'paper')
    ) { alert(`You win! ${choice1} beats ${choice2}.`);
        playerScore++;
    }
    
    else if(
    (choice1 == 'rock' && choice2 == 'paper') ||
    (choice1 == 'paper' && choice2 == 'scissors') ||
    (choice1 == 'scissors' && choice2 == 'rock')
    ) { alert(`You lose, ${choice2} beats ${choice1}.`);
        computerScore++;
    } 

    else if (choice1 == choice2){
        alert(`It's a tie, ${choice1} and ${choice2} are equal.`);
    }
}  
console.log(playRound(playerSelection, computerSelection))
}
