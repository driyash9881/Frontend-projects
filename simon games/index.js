var buttonColours = ["blue", "red", "green", "yellow"]
var gamePattern = []
var userCLickedPattern = [];
//level created
var level = 0;
var started = false

//key press to start the functon
$("body").keypress(function(key) {
    if (!started) {
        //inside nexSeq increment h1 level
        $("h1").text("Level " + level)
        newSequence();
        started = true;

    }
})



$(".box").click(function() {
        //to get the which color got clicked
        var userChosenColour = $(this).attr("id")

        //adding it to the userpattern array
        userCLickedPattern.push(userChosenColour);
        //playing sound
        playSound(userChosenColour)

        //animate on press`
        animatePress(userChosenColour);

        //check answer
        checkanswer(userCLickedPattern.length - 1)


    })
    //fun
function checkanswer(currenlevel) {
    if (gamePattern[currenlevel] === userCLickedPattern[currenlevel]) {
        if (userCLickedPattern.length === gamePattern.length) {
            console.log("you win")
            setTimeout(function() {
                newSequence()
            }, 1000);
        }
    } else {
        console.log("you loose");
        playSound("wrong");
        console.log(userCLickedPattern)
        $("h1").text("You Loose")
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over")
        }, 200)
        $("body").keypress(function() {
            startOver()
        })
    }
}

function newSequence() {
    userCLickedPattern = []
        //fun
    level++;;
    $("h1").text("level " + level)
        //random number vaiable creating
    var randomNumber = Math.floor(Math.random() * 4)

    //adding rndom number in array slicing to hget random colour
    var randomChosenColour = buttonColours[randomNumber];

    //pushing random colour to game pattern
    gamePattern.push(randomChosenColour);

    //jQuery to add fash animation in button
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeIn(100);

    //js to select random sound
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3")
        //increment level 



}


//animate function is created
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed")
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed")
    }, 100)
}

//create new function called sound
function playSound(name) {
    var userAudio = new Audio("sounds/" + name + ".mp3");

}



//function start over
function startOver() {
    level = 0
    gamePattern = [];
    started = false;

}