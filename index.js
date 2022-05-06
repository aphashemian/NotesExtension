//  Variable declarations.

function Item(value)
{
  var id = "id" + Math.random().toString(16).slice(2);

  return {"id" : id, "text" : value}
}

const folderContainer = document.querySelector("#folders-el");
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");
const clearBtn = document.querySelector("#clear-btn");
const exportBtn = document.querySelector("#export-btn");

let localStorageData = JSON.parse(localStorage.getItem("myInputs"));
let myInputs = [];

let modState = false;

// If items in local storage, render inputs.
// Used for initially opening of application.
if (localStorageData)
{
  myInputs = localStorageData; // Store localdata in
  render(myInputs);
}


// Functions

// Render the input array.
function render(inputs)
{
  let listItems="";
  for (let i = 0; i < inputs.length; i++)
  {
    listItems += `
          <li class="item" id = "${inputs[i].id}" draggable = "true" contenteditable = "false">
                  ${inputs[i].text}
          </li>
        `
    }
    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", save);

// If enter pressed, save the message.
this.addEventListener("keypress", function(event)
{
  if (event.keyCode === 13)
  {
    save();
  }
})

// Create folder.
function createFolder()
{

}

// Save function called.
function save()
{

  if (modState) // if modifying a written note.
  {
    var listItems = ulEl.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++)
    {
      if (listItems[i].contentEditable)
      {
        myInputs[i].text = listItems[i].innerHTML;
        listItems[i].contentEditable = false;
        break;
      }

    }

  }

  else if (inputEl.value.length > 0)
  {
    var newItem = new Item(inputEl.value);
    myInputs.push(newItem);
    //console.log(myInputs);
    inputEl.value = ""; // Clear input element.
    //render(myInputs);

    console.log(localStorage.getItem("myInputs"));
  }

  // Store into local storage.
  localStorage.setItem("myInputs", JSON.stringify(myInputs))
  render(myInputs);
}


document.getElementById("searchInput").addEventListener("keyup", function() {
  let searchQuery = event.target.value.toLowerCase();
  console.log(searchQuery);
  //let allItems = document.getElementsByClassName("item");
  let newOut = [];
  for (let i = 0; i < myInputs.length; i++)
  {
    let currentItem = myInputs[i].toLowerCase();
    //console.log(currentItem);
    if (currentItem.includes(searchQuery))
    {
      newOut.push(currentItem);
      //allItems[i].style.display = "block";
      //console.log(myInputs);
    }

    // else.... style.display = "none";
  }

  render(newOut);
})


ulEl.addEventListener("dblclick", function(event) {

  var target = event.target;
  console.log(target);
  var defContent = target.innerHTML;
  target.contentEditable = true;
  modState = true;
  //console.log(target.innerHMTL);

})


// **** MAIN BUTTON PRESS****


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
