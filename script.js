        let userChoice = prompt("Do you choose rock, paper or scissors?");
        if (! userChoice) {
           document.write("<p>Come on Make a Move!</p>");
        } else {
            document.write("<p>Player 1:" + " " + userChoice + "</p>");
        }
        let computerChoice = Math.random();
        if (computerChoice < 0.34) {
            computerChoice = "rock";
        } else if(computerChoice <= 0.67) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
        document.write("<p>Computer:" + " " + computerChoice + "</p>");

        const compare = function(choice1,choice2) {
            if (choice1 === choice2) {
                return "It's a tie!";
            }
            if (choice1 === "rock") {
                if (choice2 === "scissors") {
                    return "You win!";
                } else {
                    return "You lose! Try again.";
                }
            }
            if (choice1 === "paper") {
                if (choice2 === "rock") {
                    return "You win!";
                } else {
                    return "You lose! Try again.";
                }
            }
            if (choice1 === "scissors") {
                if (choice2 === "rock") {
                    return "You lose! Try again.";
                } else {
                    return "You win!";
                }
            }
        };
     
        const results = compare(userChoice,computerChoice);
        
        document.write(results);