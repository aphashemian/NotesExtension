
let myInputs =[];
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");
const clearBtn = document.querySelector("#clear-btn");
const exportBtn = document.querySelector("#export-btn");

let localStorageData = JSON.parse(localStorage.getItem("myInputs"));


if (localStorageData)
{
  myInputs = localStorageData;
  render(myInputs);
}

// Render the input array.
function render(inputs)
{
  let listItems="";
  for (let i = 0; i < inputs.length; i++)
  {
    // create element.
    // set text cntent.
    // append to ul.
    //ulEl.innerHtml += "<li>" + myInputs[i] + "</li>"
    // const li = document.createElement("li");
    // li.textContent = myInputs;
    // ulEl.append(li);
    //console.log(i);
    // <li>
    //     <a target='_blank' href='${inputs[i]}'>
    //         ${inputs[i]}
    //     </a>
    // </li>
    listItems += `
          <li>
                  ${inputs[i]}
          </li>
        `
    }
    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", save);
this.addEventListener("keypress", function(event)
{
  if (event.keyCode === 13)
  {
    save();
  }
})


function save()
{
  if (inputEl.value.length > 0)
  {
    myInputs.push(inputEl.value);
    //console.log(myInputs);
    inputEl.value = "";
    localStorage.setItem("myInputs", JSON.stringify(myInputs))
    render(myInputs);

    console.log(localStorage.getItem("myInputs"));
  }
}


// Double click = clear local storage and input array then render.
clearBtn.addEventListener("dblclick", function() {
  localStorage.clear();
  myInputs = [];
  render(myInputs);

})

exportBtn.addEventListener("click", function() {
  for (let i = 0; i < myInputs.length; i++)
  {

  }
})

// tabBtn.addEventListener("click", function(){
//   chrome.tabs.query({active:true, currentWindow: true}, function(tabs) {
//     myInputs.push(tabs[0].url)
//     localStorage.setItem("myInputs", JSON.stringify(myInputs));
//     render(myInputs);
//   });
//
//   console.log(tabs[0].url);
//   localStorage.setItem("myInputs", JSON.stringify(myInputs));
//   render(myInputs);
// })
