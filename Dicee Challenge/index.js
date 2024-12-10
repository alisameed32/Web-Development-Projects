function randomNum(){
    var randomNumber1 = Math.floor(Math.random()*6)+1;
    return randomNumber1
}


var player1 = randomNum();
var player2 = randomNum();

var diceImage1 = "dice" + player1 + ".png";
var imageSource1 = "images/" + diceImage1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imageSource1);


var diceImage2 = "dice" + player2 + ".png";
var imageSource2 = "images/" + diceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imageSource2);



if (player1 > player2){
    document.querySelector("h1").textContent = "Player 1 Win";
}