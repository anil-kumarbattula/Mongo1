const max=prompt("Enter max number");

const random=Math.floor( Math.random() * max)+1;


let guess=prompt("Guess the number");

while(true){
    if(guess<random){
        console.log("Try bigger number");
    }
    if(guess>random){
        console.log("Try smaller number");
    }
    if(guess == "quit"){
        console.log("Quit");
        break;
    }
    if(guess == random){
        console.log("Good Guess");
        break;
    }else {
        guess=prompt("Nope,Guess again");
    }

}


