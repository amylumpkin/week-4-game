//document ready function for jquery waits for all other aspects of app to be ready (HTML, CSS & JS) before triggering
$(document).ready(function() {
    reset();   //calls the reset function (defined below) when page opens

//telling program what's coming next, a function, name to reference later, (placeholder)
//no value yet, just creating the function

//function   name        placeholder
function getRandomNumber(min, max) {

    //any function that returns a value, when it resolves, becomes that value.
    return Math.floor(Math.random() * (max - min + 1)) + min;
                                    //number under 120 or 12     //number at least 18 or 1          
}


//setting starting values
var total = 0; 
var wins = 0;
var losses = 0;
// wins and losses counter
//this makes values display on browser within the HTML
// ( HTML ).displayed value - Wins: (the thing being displayed - the value, number)
$("#numberWins").text(wins);   //'numberWins' is now equal to a value
$("#numberLosses").text(losses);

//defining the reset function - chooses randam number to guess, numbers for crytals, and sets total number back to 0.
function reset() {   
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
    
    total = 0;
    $("#finalTotal").text(total);
} 
//defining the win function
function win() {
    alert("You won!");
    wins++; 
    $("#numberWins").text(wins);
    reset(); //calling the reset function here, 
}
//defining the lose function
function lose() {
    alert ("You lose!");
    losses++;
    $("#numberLosses").text(losses);
    reset();
}
//click functions for crystals

$("#crystal1").on("click", function() {      //all four of these click functions can be combined into one, I just know it!!!. (DRY)
    total += randomNumber1;   //concatenates a string (links things together)
    console.log(total);
    $("#finalTotal").text(total); // $(html id or class - this grabs the html).whatever text is in the html(a value)
    
    if (total == targetNumber) { 
        win();  //calling the win function
     }
    if (total > targetNumber) { 
         lose(); //calling the lose function
     }   

//these are essentially the same as crystal 1...   
}); 
$("#crystal2").on("click", function() {   
    total += randomNumber2;       
    console.log(total);
    $("#finalTotal").text(total); 
    
    if (total == targetNumber) {
        win();
    }
    if (total > targetNumber){
        lose();
    }   
});  
$("#crystal3").on("click", function() {
    total += randomNumber3;
    console.log(total);
    $("#finalTotal").text(total);
    
    if (total == targetNumber) {
        win();
    }
    if (total > targetNumber) {
        lose();
    }   
});  
$("#crystal4").on("click", function() {
    total += randomNumber4;
    console.log(total);
    $("#finalTotal").text(total);
    
    if (total == targetNumber) {
        win();
    }
    if (total > targetNumber) {
        lose();
    }   
});  
}); 
