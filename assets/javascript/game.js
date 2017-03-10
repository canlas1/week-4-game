$(document).ready(function() {
    console.log("ready!");

    // Global Variables & Psuedo refer to in any function

    //start at 0 for the purpose of the function
    //var ranNumGreen = 0;
    //console.log(ranNumGreen)
    //var ranNumBlue = 0;
    //var ranNumYellow = 0;
    //var ranNumRed = 0;
    //var ranNumGen = 0; //look to demo started with example 39
    /// DIVS that i need to grab 
    //<div id="userTotalScore">
    //<div class="col-md-8" id="ranNumGen">
    //<img src="assets/images/redCrystal.png" alt="..." id="redCrystal">
    //<img src="assets/images/blueCrystal.png" alt="..." id="blueCrystal">
    //<img src="assets/images/yellowCrystal.png" alt="..." id="yellowCrystal">
    //<img src="assets/images/greenCrystal.png" alt="..." id="greenCrystal">
    //<h4 id="wins">
    //<h4 id="loses">

    var wins = 0;
    var losses = 0;
    var ranTotNum = 0;

    var startGame = function() { //local variables inside startGame Function to set random number 0 to 12 per button 
        ranNumBlue = Math.floor((Math.random() * 12) + 1); //1-12 per click on button
        ranNumGreen = Math.floor((Math.random() * 12) + 1);
        ranNumRed = Math.floor((Math.random() * 12) + 1);
        ranNumYellow = Math.floor((Math.random() * 12) + 1);
        ranNumGen = Math.floor((Math.random() * 120) + 19); //start 19-120 random
        $("#ranNumGen").html(ranNumGen);
        userTotalScore = 0;
            console.log(ranNumBlue);
            console.log(ranNumGreen);
            console.log(ranNumRed);
            console.log(ranNumYellow);
            console.log(ranNumGen);
            console.log(userTotalScore);
    };
    startGame(); // this worked better for me on the global scope.  I read it is better practice for to pass the varibles through the function and make them local but i found more logical to define as global variables.  So i can restart loops  
        console.log(startGame);
        console.log("is this working!!!!!!")

    var logic = function() {
        if (userTotalScore === ranNumGen) {
            wins++;
            $("#wins").html("Wins: " + wins);
            $(".list-group-item").html("You Win!")
            $("#userTotalScore").html(0);
            // $(".userTotalScore").html(userTotalScore)
            startGame();
        } else if (userTotalScore > ranNumGen) {
            losses++;
            $("#losses").html("Losses: " + losses);
            $(".list-group-item").html("You Lose!")
            $("#userTotalScore").html(0);
            // $(".userTotalScore").html(userTotalScore)
            startGame();
        } else {
            userTotalScore;
            $("#userTotalScore").html(" " + userTotalScore);
            console.log(userTotalScore);
        }
    };
    logic(); // this worked better for me on the global scope.  I read it is better practice for to pass the varibles through the function and make them local but i found more logical to define as global variables.  So i can restart loops  

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
