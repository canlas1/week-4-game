// A $( document ).ready() block.
$(document).ready(function() {
    console.log("ready!");

    // Global Variables refer to in any function

    //start at 0 for the purpose of the function
    //var ranNumGreen = 0;
    //console.log(ranNumGreen)
    //var ranNumBlue = 0;
    //var ranNumYellow = 0;
    //var ranNumRed = 0;
    //var ranNumGen = 0; //look to demo started with example 39


    /// DIVS that i need to grab 
    //<div id="totalScoreIs">
    //<div id="totalScoreNum">
    //<div class="col-md-8" id="ranNumGen">
    //<img src="assets/images/redCrystal.png" alt="..." id="redCrystal">
    //<img src="assets/images/blueCrystal.png" alt="..." id="blueCrystal">
    //<img src="assets/images/yellowCrystal.png" alt="..." id="yellowCrystal">
    //<img src="assets/images/greenCrystal.png" alt="..." id="greenCrystal">
    //<li id="wins">
    //<li id="loses">

    var wins = 0;
    var losses = 0;
    var ranTotNum = 0;
    //var totNum = 0;
    //this is what needs to match the ranNumGen
    // Min and Max rules total and click per button //random button number b/w 1 and 12
    // var minRanNumBtn = 0;
    // var maxRanNumBtn = 12;
    // var minRanTotNum = 19;
    // var maxRanTotNum = 120;

    var startGame = function() { //local variables inside startGame Function to set random number 0 to 12 per button 
        ranNumBlue = Math.floor((Math.random() * 12) + 1); //1-12 per click on button
        ranNumGreen = Math.floor((Math.random() * 12) + 1);
        ranNumRed = Math.floor((Math.random() * 12) + 1);
        ranNumYellow = Math.floor((Math.random() * 12) + 1);
        ranNumGen = Math.floor((Math.random() * 101) + 19); //start 19-120 random
        $("#ranNumGen").html(ranNumGen);
        
        
        userTotalScore = 0;
        


        console.log(ranNumBlue);
        console.log(ranNumGreen);
        console.log(ranNumRed);
        console.log(ranNumYellow);
        console.log(ranNumGen);
        console.log(userTotalScore);
    };
    startGame(); // need explination here???

    // function startGame(){ // dont know why i need to end this function here?????

    console.log(startGame);
    console.log("is this working!!!!!!")

    var logic = function() {
        if (userTotalScore === ranNumGen) {
            wins = wins + 1;
            $("#wins").html(wins);
            $(".list-group-item").html("You Win!")
            startGame();
        } else if (userTotalScore > ranNumGen) {
            losses = losses + 1;
            $("#losses").html(losses);
            $(".list-group-item").html("You Lose!")
            startGame();
        } else {
            userTotalScore;
            $("#userTotalScore").html(" " + userTotalScore);
            console.log(userTotalScore);

        }
    };
    logic();

    $("#blueCrystal").on("click", function() {
        console.log($(this).html());
        userTotalScore = userTotalScore + ranNumBlue;
        console.log(userTotalScore);
        logic();

    })

    $("#yellowCrystal").on("click", function() {
        console.log($(this).html());
        userTotalScore = userTotalScore + ranNumYellow;
        console.log(userTotalScore);
        logic();
    })

    $("#greenCrystal").on("click", function() {
        console.log($(this).html());
        userTotalScore = userTotalScore + ranNumGreen;
        console.log(userTotalScore);
        logic();
    })

    $("#redCrystal").on("click", function() {
        console.log($(this).html());
        userTotalScore = userTotalScore + ranNumRed;
        console.log(userTotalScore);
        logic();
    })

});
