

//  Variable declarations.

function Item(value)
{
  var id = "id" + Math.random().toString(16).slice(2);

  return {"id" : id, "text" : value, "displayed" : false}
}

function Folder(itemList)
{
  var id = "id" + Math.random().toString(16).slice(2);

  return {"id" : id, "items" : itemList}
}

const folderContainer = document.querySelector("#folders-el");
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");
const clearBtn = document.querySelector("#clear-btn");
const exportBtn = document.querySelector("#export-btn");
const darkModeCheck = document.querySelector("#dark-mode-toggle");
const newFolderBtn = document.querySelector("#new-folder-btn");

const folderInput = document.querySelector("#folderInput");

let localStorageData = JSON.parse(localStorage.getItem("myInputs"));
let myInputs = [];

// Enum -> TypeScript
let currentState = 0;
// 0 -> inputting new note (default)
// 1 -> modifying old note.
// 2 -> inputting new folder.

// If items in local storage, render inputs.
// Used for initially opening of application.
if (localStorageData)
{
  myInputs = localStorageData; // Store localdata in
  render(myInputs);
}


// Functions

function renderFolders(inputs)
{

}

function renderItems(inputs)
{

}

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

  // renderFolders();
  // renderItems();
}


// Removes items from array based on indexes array passed in.
function removeItems(indexes)
{
  for (let i = 0; i < indexes; i++)
  {
    myInputs.splice(index);
    render(myInputs);
  }
}

// Create folder.
function createFolderInput()
{
  let popUp = document.querySelector("#folderNamePopup");
  popUp.classList.toggle("hidden");
  console.log("Folder");
  currentState = 2;
}



// Save function called.
function save()
{

  switch (currentState) {
  case 0:
        if (inputEl.value.length > 0)
        {
          var newItem = new Item(inputEl.value);
          myInputs.push(newItem);
          //console.log(myInputs);
          inputEl.value = ""; // Clear input element.
          //render(myInputs);

          console.log(localStorage.getItem("myInputs"));
        }
        break;
  case 1:
        var listItems = ulEl.getElementsByTagName("li");
        for (let i = 0; i < listItems.length; i++)
        {
          if (listItems[i].contentEditable)
          {
            console.log("x" + listItems[i].textContent);

            myInputs[i].text = listItems[i].textContent;
            //myInputs[i].contentEditable = false;
            listItems[i].contentEditable = false;

            currentState = 0;

            continue;
          }
        }
        break;

  case 2:
  case 3:
  }
  // If in the state of modifying a pre-existing note.

  // else.
  // Store into local storage.
  localStorage.setItem("myInputs", JSON.stringify(myInputs))
  render(myInputs);
}



inputBtn.addEventListener("click", save);

document.getElementById("searchInput").addEventListener("keyup", function() {
  let searchQuery = event.target.value.toLowerCase();
  //let allItems = document.getElementsByClassName("item");
  let newOut = [];
  for (let i = 0; i < myInputs.length; i++)
  {
    let currentItem = myInputs[i];
    if (currentItem.text.toLowerCase().includes(searchQuery))
    {
      nwOut.push(currentItem);
    }

    // else.... style.display = "none";
  }
  console.log(newOut);
  render(newOut);
})

this.addEventListener("keypress", function(event)
{

  switch (event.keyCode)
  {
  case 13:
          save();
          break;
  case 8:

          break;
  }


})

function drag(ev)
{
  ev.dataTransfer.setData("text", ev.target);
}

function drop(ev)
{
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

// **** BUTTON PRESSES ****

newFolderBtn.addEventListener("click", createFolderInput);


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

// **** OTHER PRESS INTERACTIONS ****

// Double clicking of a pre-existing note allows modification.
ulEl.addEventListener("dblclick", function(event) {

  var target = event.target;
  console.log(target);
  if (target.classList.contains("item"))
  {
    console.log("dwedew");
    target.contentEditable = true;
    currentState = 1;
  }
  //console.log(target.innerHMTL);

})
