const images = [
  { src: "images/bread.jpg", word: "bröd" },
  { src: "images/lamp.jpg", word: "lampa" },
  { src: "images/apple.jpg", word: "äpple" },
  { src: "images/car.jpg", word: "bil" },
  { src: "images/mouthwash.jpg", word: "munskölj" },
  { src: "images/dog.jpg", word: "hund" },
  { src: "images/cat.jpg", word: "katt" },
  { src: "images/E.jpg", word: "ellinor" },
  { src: "images/house.jpg", word: "hus" },
  { src: "images/tree.jpg", word: "träd" },
  { src: "images/book.jpg", word: "bok" },
  { src: "images/chair.jpg", word: "stol" },
  { src: "images/ball.jpg", word: "boll" },
  { src: "images/sun.jpg", word: "sol" },
];

const body = document.querySelector("body");
const gameContainer = document.querySelector(".game-container");
const imageElement = document.getElementById("image");
const wordElement = document.getElementById("word");
const inputElement = document.getElementById("input");
const messageElement = document.getElementById("message");
const btnCheck = document.querySelector(".btn-check");

let currentIndex = 0;

function loadImage() {
  imageElement.src = images[currentIndex].src;
  wordElement.textContent = images[currentIndex].word;
  inputElement.value = "";
  messageElement.textContent = "";
}

function checkAnswer() {
  if (inputElement.value.toLowerCase() === images[currentIndex].word) {
    messageElement.textContent = "🚀";
    btnCheck.style.display = "none";
    messageElement.style.display = "none";

    setTimeout(() => {
      if (currentIndex < images.length - 1) {
        currentIndex++;
        body.style.backgroundColor = "#000";
        gameContainer.style.backgroundColor = "#23272f";
        btnCheck.style.display = "inline-block";
        messageElement.style.display = "block";

        loadImage();
      } else {
        messageElement.textContent = "🎉😀";
        imageElement.style.display = "none";
        wordElement.style.display = "none";
        inputElement.style.display = "none";
      }
    }, 1000);
  } else {
    messageElement.textContent = "❌";
  }
}

// Event listener for button click
btnCheck.addEventListener("click", function () {
  checkAnswer();
});

// Event listener for Enter key press
inputElement.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkAnswer();
  }
});

loadImage();
