// A $( document ).ready() block.
$(document).ready(function() {
    console.log( "ready!" );
   





// Global Variables refer to in any function

//start at 0 for the purpose of the function
var ranNumGreen = 0;
var ranNumYellow = 0;
var ranNumRed = 0;
var ranNumGen = 0; //look to demo started with example 39
var wins = 0;
var losses = 0;
var ranTotNum = 0; //this is what needs to match the ranNumGen

// Min and Max rules total and click per button
var minRanNumBtn = 0;
var maxRanNumBtn = 12;
var minRanTotNum = 19;
var maxRanTotNum = 120;

//random button number b/w 1 and 12


 //==========================================================================================
// //start a JQuery function when the player clicks a crystal, generate a random number based on that click and add it to the players totNum

$("#blueCrystal").on("click", function(){
	if (ranNumBlue){
 		totNum = totNum + ranNumBlue;
 		$("#ranNumGen").html(totNum);}

 	else{
 		ranNumBlue = Math.floor((Math.random() * 12) + 1);
 console.log(ranNumBlue);}

 });











// // Inside, we latch onto the "emptyDiv" using the JavaScript ".getElementById" selector.
//       var newRanNumGen = document.getElementById("#ranNumGen");
//       // We then use the JavaScript method ".innerHTML" to change the content to "Hello friends!"
//       newRanNumGen.innerHTML = "Hello friends!";

//       var newWins = document.getElementById("#wins");
//         wins.innerHTML = "Hello friends! WINS";
    
//     var newLosses = document.getElementById("#losses");
//         losses.innerHTML = "Hello friends! LOSSES";

// var ranNumGen

// var wins = 
// var losses
// var totalScore
// var totalScoreBox



// blueCrystal
// greenCrystal
// redCrystal
// yellowCrystal



// //Functions




// // Main Process
// //==============================================================================================


