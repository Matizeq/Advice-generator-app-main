"use strict";

const adviceQuote = document.querySelector(".advice--quote");
const adviceId = document.querySelector(".advice--id");
const diceButton = document.querySelector(".dice");

diceButton.addEventListener("click", function () {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const { id, advice } = data.slip;

      adviceId.textContent = id;
      adviceQuote.textContent = advice;
    })
    .catch((error) => console.log(error));
});
