let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userscorepara = document.querySelector("#user_score");
let compscorepara = document.querySelector("#computer_score");



 const genCompChoice = ()=>{
    let CompOptions = ["rock" , "paper" , "scissors"];
    let ranIdx = Math.floor(Math.random() * 3);
     return CompOptions[ranIdx];
 }


const drawGame = ()=>{
   
    msg.innerText="Game was draw,Try again";
    
}
const showWinner = (userwin,userChoice,compChoice)=>{
    if (userwin) {
       userScore++;
       userscorepara.innerText = userScore;
        msg.innerText = `you won! ${userChoice} beats ${compChoice}`;
        
        
       
    }else{
      compScore++;
        msg.innerText = `you lose! ${compChoice} beats ${userChoice}`;
        compscorepara.innerText = compScore;
    }
}

const playgame = (userChoice)=>{
    // console.log("userChoice = ", userChoice);
    const compChoice = genCompChoice();
    // console.log("computer choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }else{
        //user win track
        let userwin = true;
        if (userChoice === "rock") {
            //computer choice either scissor or paper
            userwin = compChoice === "paper" ?false:true;  
        }else if(userChoice === "paper"){
            //computer choice either scissor or rock
            userwin= compChoice === "scissors" ? false:true;
        }else{
            userwin = compChoice === "rock"? false:true;
        }
        showWinner(userwin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
   
     
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
       
       playgame(userChoice);
})
});