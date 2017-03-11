$(document).ready(function() {
    console.log("ready!");

    var wins = 0;
    var losses = 0;
    var ranTotNum = 0;

    function startGame() { 
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

    startGame(); // ?? i am trying to call this outside the main function document.ready to make it easier to read the code but i was getting a NaN and ObjectHTML on my targets
        console.log(startGame);
        console.log("is this working!!!!!!")

    function logic() {
        if (userTotalScore === ranNumGen) {
            wins++;
            $("#wins").html("Wins: " + wins);
            $(".list-group-item").html("You Win!");
            $("#userTotalScore").html(0);
            // $(".userTotalScore").html(userTotalScore)
            startGame();
        } else if (userTotalScore > ranNumGen) {
            losses++;
            $("#losses").html("Losses: " + losses);
            $(".list-group-item").html("You Lose!");
            $("#userTotalScore").html(0);
            // $(".userTotalScore").html(userTotalScore)
            startGame();
        } else {
            userTotalScore;
            $("#userTotalScore").html(" " + userTotalScore);
            console.log(userTotalScore);
        }
    };
    
    logic(); //same thing here 

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
