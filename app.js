let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissor"];
    const compIdx = Math.floor(Math.random()*3)

    return options[compIdx];
}

const drawGame = () => {
    console.log("Draw");
    msg.innerText = "The game was Draw.";
    msgContainer.style.backgroundColor = "#2A2D34";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;    //increment by 1 on every win
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice} `;
        msgContainer.style.backgroundColor = "green";
    } else {
        compScore++;    //increment by 1
        compScorePara.innerText = compScore;
        console.log("You Lose.");
        msg.innerText = `You lose. ${compChoice} beats ${userChoice} `;
        msgContainer.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice: ", userChoice);
    const compChoice = genCompChoice(); 
    console.log("Comp choice: ", compChoice);
    
    //userChoice and compChoice are equal then draw game.
    if (userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock"){
            //comp -> scissor, paper
            // if comp choice comes scissor then comp wins and user lose.
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice=== "paper") {
            //comp -> rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        } else { //user -> scissor
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    //add a click eventListener here on every choice 
    choice.addEventListener("click", () => {
        console.log("choice is clicked");
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    })  
})