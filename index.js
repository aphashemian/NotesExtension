class Node
{
  constructor(value)
  {
    this.value = value;
    this.previousNode = null;
    this.nextNode = null;
  }
}

class doubleList
{
  constructor()
  {
    this.headNode = null;
    this.tailNode = null;
    this.listLength = 0;
  }


  // Insert item at a certain index.
  insert(item, index)
  {
    const newNode = new Node(item);
    // If there are no items.
    if (!(this.listLength))
    {
      this.headNode = newNode;
      this.tailNode = newNode;
    }

    // If there are other items.
    else if (this.listLength)
    {
      // If index is last item.
      if (index === getLength() - 1)
      {
        newNode.previousNode = this.tailNode;
        this.tailNode.nextNode = newNode;
        this.tailNode = newNode;
      }
    }

    this.listLength++;
  }

  getLength()
  {
    return this.listLength;
  }



}

//  Variable declarations.

const folderContainer = document.querySelector("#folders-el");
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");
const clearBtn = document.querySelector("#clear-btn");
const exportBtn = document.querySelector("#export-btn");


let localStorageData = JSON.parse(localStorage.getItem("myInputs"));

let notesList = new doubleList();
let folderList = new doubleList();
let myInputs = [];

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

// If items in local storage, render inputs.
// Used for initially opening of application.
if (localStorageData)
{
  myInputs = localStorageData;
  render(myInputs);
}

// Functions

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
          <li class="item">
                  ${inputs[i]}
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
  if (inputEl.value.length > 0)
  {
    myInputs.push(inputEl.value);
    //console.log(myInputs);
    inputEl.value = ""; // Clear input element.
    localStorage.setItem("myInputs", JSON.stringify(myInputs))
    render(myInputs);

    console.log(localStorage.getItem("myInputs"));
  }
}


// Double click = clear local storage and input array then render.
ulEl.addEventListener("click", function() {
  console.log("America");
})

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
