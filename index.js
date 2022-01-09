


let myInputs = [];
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");

inputBtn.addEventListener("click", function() {
  myInputs.push(inputEl.value);
  console.log(myInputs);
  inputEl.value = "";
  render();
});


function render()
{
  let listItems="";
  for (let i = 0; i < myInputs.length; i++)
  {
    // create element.
    // set text cntent.
    // append to ul.
    //ulEl.innerHtml += "<li>" + myInputs[i] + "</li>"
    // const li = document.createElement("li");
    // li.textContent = myInputs;
    // ulEl.append(li);

    myInputs += `
      <li>
        <a target = '_blank' href='${myInputs[i]}'>
          ${myInputs[i]}
        </a>
      </li>
    `
    ;
}
