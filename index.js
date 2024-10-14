// Select start button and sections
const startButton = document.getElementById("startButton");
const startScreen = document.getElementById("startScreen");
const gameSection = document.getElementById("gameSection");
const refreshButton = document.getElementById("refreshButton");

// Function to roll the dice and determine the winner
function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
    var randomImageSource = "images/dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
    document.querySelector(".img1").setAttribute("src", randomImageSource); // Set image for Player 1

    var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6
    var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // dice1.png - dice6.png
    document.querySelector(".img2").setAttribute("src", randomImageSource2); // Set image for Player 2

    // Determine the winner and announce
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}

// Start the game when the start button is clicked
startButton.addEventListener("click", function () {
    startScreen.style.display = "none"; // Hide the start screen
    gameSection.style.display = "block"; // Show the game section
    rollDice(); // Roll the dice for the first time
});

// Add an event listener to the refresh button
refreshButton.addEventListener("click", function () {
    rollDice(); // Roll the dice again without reloading the page
});
