
$(document).ready(function()
{
    // A function that generates a random choice for the computer.
    function computerPlay()
    {
        let randNum = Math.round(Math.random() * 2);
        let outcome;

        if (randNum == 0)
        {
            outcome = "R";
        }
        else if (randNum == 1)
        {
            outcome = "P";
        }
        else if (randNum == 2)
        {
            outcome = "S";
        }

        return outcome;
    }

    // A function that returns the outcome of a round, given the two players' choices.
    function roundOutcome(playerSelection, computerSelection) // Both inputs are strings: characters.
    {
        let outcome;
        if(playerSelection == "R" && computerSelection == "P")
        {
            outcome = "You Lost! Paper beats Rock";
        }
        else if (playerSelection == "R" && computerSelection == "R")
        {
            outcome = "Draw";
        }
        else if (playerSelection == "R" && computerSelection == "S")
        {
            outcome = "You Won! Rock beats Scissors";
        }
        else if (playerSelection == "P" && computerSelection == "P")
        {
            outcome = "Draw";
        }
        else if (playerSelection == "P" && computerSelection == "R")
        {
            outcome = "You Won! Paper beats Rock";
        }
        else if (playerSelection == "P" && computerSelection == "S")
        {
            outcome = "You Lost! Scissors beats Paper";
        }
        else if (playerSelection == "S" && computerSelection == "R")
        {
            outcome = "You Won! Rock beats Scissors";
        }
        else if (playerSelection == "S" && computerSelection == "P")
        {
            outcome = "You Won! Scissors beats Paper";
        }
        else if (playerSelection == "S" && computerSelection == "S")
        {
            outcome = "Draw";
        }

        return outcome;
    }

    // A function that converts the character to the full word.
    function eval(charac)
    {
        if (charac == "R")
        {
            return "Rock";
        }
        else if (charac == "P")
        {
            return "Paper";
        }
        else if (charac == "S")
        {
            return "Scissors";
        }
    }

    
    let maxNumOfRounds = 5;
    let numOfCurrRound = 1;
    let player_score = 0;
    let AI_score = 0;
    let finalOutcome = "";
    $("#AI_score").html(AI_score);
    $("#Your_score").html(player_score);

    $("button").on("click", function()
    {
        if (numOfCurrRound < 6)
        {

            $("#round_num").html(numOfCurrRound);
            let computerSelection = computerPlay();
            let playerSelection;
            
            if (this.id === "rock")
            {
                console.log("here");
                playerSelection = "R"; 
            } 
            else if (this.id == "paper")
            { 
                playerSelection = "P"; 
            } 
            else if (this.id == "scissors")
            {
                playerSelection = "S"; 
            } 

            let outcome = roundOutcome(playerSelection, computerSelection);

            $("#AI_Choice").html(eval(computerSelection));
            $("#Your_Choice").html(eval(playerSelection));
            $("#status").html(outcome);
            numOfCurrRound++;
            
            if (outcome.indexOf("You Won!") != -1) 
            {
                player_score++;
            }
            else if (outcome.indexOf("You Lost!") != -1)
            {
                AI_score++;
            } 
            
            $("#AI_score").html(AI_score);
            $("#Your_score").html(player_score);
            
            if (numOfCurrRound == 6)
            {
                if (player_score > AI_score)
                {
                    finalOutcome = "You are the winner!";
                }
                else if (player_score < AI_score)
                {
                    finalOutcome = "You are the loser!";
                }
                else
                {
                    finalOutcome = "It's a draw!";
                }

                
                $("#status").html(finalOutcome);
                
                setTimeout(function()
                {
                    maxNumOfRounds = 5;
                    numOfCurrRound = 1;
                    player_score = 0;
                    AI_score = 0;
                    finalOutcome = "";
                    $("#AI_Choice").html("-");
                    $("#status").html("-");
                    $("#Your_Choice").html("-");
                    $("#round_num").html("-");
                    $("#AI_score").html("-");
                    $("#Your_score").html("-");
                }, 3000);
            }
        }
        
    });
});