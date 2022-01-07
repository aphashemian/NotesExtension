


let myInputs = [];
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn");

inputBtn.addEventListener("click", function() {
  myInputs.push(inputEl.textContent);
  console.log("pressed");
})
