//Conditionals : Switch Statements

//syntax
switch ("2") {
    case choice1:
        //run this code 
        console.log(1);
        break;

    case choice2:
        //run this code
        console.log(2);
        break;
    
    case choice3:
        //run this code
        console.log(3);
        break;

    default:
        console.log("No match");
        break;
}

switch (Math.floor(Math.random() * 5 +1)) {
    case choice1:
        //run this code 
        console.log(1);
        break;

    case choice2:
        //run this code
        console.log(2);
        break;
    
    case choice3:
        //run this code
        console.log(3);
        break;

    default:
        console.log("No match");
        break;
}

let playerOne = "rock";
let computer = "paper";

switch (playerOne) {
    case computer:
        console.log("Tie game!");
        break;

    case "rock":
        if (computer === "paper") {
            console.log("computer wins");
        }
        else {
            console.log("playerOne wins");
        }
        break;
    
        case "paper":
            if (computer === "scissors") {
                console.log("computer wins");
            }
            else {
                console.log("playerOne wins");
            }
            break;
    default:
        if (computer === "rock") {
            console.log("computer wins");
        }
        else {
            console.log("playerOne wins");
        }
        break;
}