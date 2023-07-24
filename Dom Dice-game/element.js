var randomOne = Math.floor((Math.random() * 6) + 1);

var dice1 = "dice" + randomOne + ".png";

var diceimages1 = "images/" + dice1;
varplayerOne = document.querySelectorAll("img")[0].setAttribute("src", diceimages1);


//image2
var randomTwo = Math.floor((Math.random() * 6) + 1);
var dice2 = "dice" + randomTwo + ".png";
var diceimages2 = "images/" + dice2;

varplayerOne = document.querySelectorAll("img")[1].setAttribute("src", diceimages2)


if (randomOne < randomTwo) {
    document.querySelector('.changeMe').innerHTML = "🎉Player two Win";
    document.querySelector('.changeMe').style.fontSize = "2.5rem";
    document.querySelector('.changeMe').style.color = "#f91a25ad";
} else if (randomTwo < randomOne) {
    document.querySelector('.changeMe').innerHTML = "🎉Player One Win";
    document.querySelector('.changeMe').style.fontSize = "2.5rem";
    document.querySelector('.changeMe').style.color = "#f91a25ad";
} else {
    document.querySelector('.changeMe').innerHTML = "Draw";
}