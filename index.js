
var imageSelector1 = document.querySelector(".img1");
var randomNumber1 = Math.floor (Math.random() * 6) + 1;

var imageSelector2 = document.querySelector(".img2");
var randomNumber2 = Math.floor (Math.random() * 6) + 1;
 

var img1Name = "dice" + randomNumber1 + ".png";
var img2Name = "dice" + randomNumber2 + ".png";


var imageSource1 = "images/" + img1Name
var imageSource2 = "images/" + img2Name

  imageSelector1.setAttribute("src", imageSource1);
  console.log(randomNumber1);

  imageSelector2.setAttribute("src", imageSource2);
  console.log(randomNumber2);


  if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Player 1 Wins!!";
  }
  else if (randomNumber1 === randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Draw!";
  }
  else {document.querySelector(".container h1").innerHTML = "Player 2 Wins!!"; 
       }   
