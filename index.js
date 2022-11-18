// Your code goes here

document.addEventListener("DOMContentLoaded", function () {
  console.log("The DOM has loaded");
  const sentence = document.getElementById("text");
  sentence.textContent = "This is really cool!";
});

console.log(
  "This console.log() fires when index.js loads - before DOMContenLoaded is triggered"
);
