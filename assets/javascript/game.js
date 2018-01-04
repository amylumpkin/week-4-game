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

$(".crystalImage").on("click", function(){
    
    
    switch(this.id){

        case "crystal1" : 
            console.log("you clicked crytal 1");
            total += randomNumber1;
        break;
        case "crystal2" : 
            console.log("you clicked crytal 2");
            total += randomNumber2;
        break;
        case "crystal3" : 
            console.log("you clicked crytal 3");
            total += randomNumber3;
        break;
        case "crystal4" : 
            console.log("you clicked crytal 4");
            total += randomNumber4;
        break;
        default: 
            console.log("The Default Fired");
        
    }
    if (total == targetNumber) {
        win();
    }
    if (total > targetNumber) {
        lose();
    };   
    console.log(total);
    $("#finalTotal").text(total);
});

});

