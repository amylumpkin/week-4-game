//document ready function waits for all other aspects of app to be ready before triggering JS
$(document).ready(function() {
    reset();   //calls the reset function when page opens

//telling program what's coming next, a function, name to reference later, (placeholder)
//no value yet
function getRandomNumber(min, max) {
    //any function that returns a value, when it resolves, becomes that value.
    return Math.floor(Math.random() * (max - min + 1)) + min;
                                    //number under 120     //number at least 19           
}


//setting starting values
var sum = 0; 
var wins = 0;
var losses = 0;
// wins and losses counter
//this makes values display on browser
// ( HTML ).displayed value - "Wins: "(the thing being displayed - the value, number)
$("#numberWins").text(wins);   //'number Wins' is now equal to a value
$("#numberLosses").text(losses);

//resets the game
function reset() {    //defines the reset function
    targetNumber = getRandomNumber(18, 120); //targetNumber is equal to the solution

    //grabbing html and setting text content.
    $("#number-to-guess").text(targetNumber);//that's why we get an interger here
    console.log(targetNumber);

    //running the function, they don't actually link to crystals yet.
    randomNumber1 = getRandomNumber(1,12);
    randomNumber2 = getRandomNumber(1,12);
    randomNumber3 = getRandomNumber(1,12);
    randomNumber4 = getRandomNumber(1,12);

    console.log(randomNumber1);
    console.log(randomNumber2);
    console.log(randomNumber3);
    console.log(randomNumber4);
    
    sum = 0;
    $("#finalSum").text(sum);
} 
//function to count wins
function win() {
    alert("You won!");
    wins++; 
    $("#numberWins").text(wins);
    reset(); //calling the reset function here, 
}
//function to count losses
function lose() {
    alert ("You lose!");
    losses++;
    $("#numberLosses").text(losses);
    reset();
}
//click functions for crystals
$("#crystal1").on("click", function() {
    sum += randomNumber1;
    console.log(sum);
    $("#finalSum").text(sum); 
    
    if (sum == targetNumber) { 
        win();  //calling the win function
     }
    else if (sum > targetNumber) { 
         lose();
     }   
});  
$("#crystal2").on ("click", function() {   //all four of these functions can be one. (DRY)
    sum += randomNumber2;
    console.log(sum);
    $("#finalSum").text(sum); 
    
    if (sum == targetNumber) {
        win();
    }
    else if ( sum > targetNumber){
        lose();
    }   
});  
$("#crystal3").on("click", function() {
    sum += randomNumber3;
    console.log(sum);
    $("#finalSum").text(sum);
    
    if (sum == targetNumber) {
        win();
    }
    else if (sum > targetNumber) {
        lose();
    }   
});  
$("#crystal4").on("click", function() {
    sum += randomNumber4;
    console.log(sum);
    $("#finalSum").text(sum);
    
    if (sum == targetNumber) {
        win();
    }
    else if (sum > targetNumber) {
        lose();
    }   
});  
}); 
