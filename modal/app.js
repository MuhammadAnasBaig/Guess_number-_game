const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const modal = document.getElementById("modal");
const closeButton = document.querySelector(".close-button");

button1.addEventListener("click", function() {
  modal.style.display = "block";
});

button2.addEventListener("click", function() {
  modal.style.display = "block";
});

button3.addEventListener("click", function() {
  modal.style.display = "block";
});

closeButton.addEventListener("click", function() {
  modal.style.display = "none";
});
