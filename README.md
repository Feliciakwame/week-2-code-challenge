# WEEK-2-CODE-CHALLENGE

# Code Challenge: Interactive Shopping List

This challenge combines array iteration, DOM manipulation, and event handling to create an interactive shopping list application.
Objective:

### Develop a webpage with a shopping list. Users can add items to the list, mark items as purchased, and clear the list.

Requirements:

    Array: Maintain a JavaScript array to store shopping list items.

    DOM Manipulation:
        Create an HTML structure with an input field for adding items, a list container to display items, and buttons for "Add", "Mark Purchased", and "Clear List".
        Use JavaScript to dynamically add new items to the list container when the user clicks the "Add" button. (The new items do not have to be persisted once the page refreshes)
        Update the list item visually to indicate purchased items (e.g., strikethrough text, different background color).

    Event Handling:
        Attach event listeners to the "Add" button to capture user input and add items to the list.
        Attach event listeners to the list of items to allow users to mark them as purchased.
        Attach an event listener to the "Clear List" button to remove all items from the list.

## Bonus Features:

    Allow users to edit existing list items.
    Implement persistence using local storage to save the list even after the page reloads.

## Learning Outcomes:

    Students will practice iterating through an array to access and manipulate list items.
    They will gain experience dynamically modifying the DOM based on user interaction.
    The challenge reinforces understanding of event listeners and their use in creating interactive applications.

## System Requirements

- Node 18+
- A browser capable of running javascript e.g safari,firefox and chrome
- A text editor capable of running javascript e.g Visual Studio Code
- RAM storage >8GB
- Disc space >1GB

## Installation

- Open your local terminal
- Clone the repository from git using:  
   git clone (SSH KEY)
- Change directory to your file by using the 'cd' command
- Open your file using the 'code(space).' command

# Code

- Create a html file for the webpage structure
- Create a JavaScript file for the webpage functionality
- Create a CSS style page
- Link all the files to the html file using the link and script tag

## HTML FILE STRUCTURE

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Interactive Shopping List</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" type="text/css" media="screen" href="style.css" />
  </head>
  <body>
    <h1>Shopping List Creator</h1>
    <input type="text" id="itemInput" placeholder="Add an item" />
    <button id="addItemBtn">Add Items</button>
    <button id="deleteButton">Clear List</button>
    <ul id="shoppingList"></ul>
    <script src="script.js"></script>
  </body>
</html>
## JavaScript file
let shoppingList = [];

const addItemToList = () => {
const itemInput = document.getElementById("itemInput");
const newItem = itemInput.value.trim();
if (newItem !== "") {
shoppingList.push(newItem);
displayShoppingList();
itemInput.value = "";
}
};

const displayShoppingList = () => {
const listContainer = document.getElementById("shoppingList");
listContainer.innerHTML = "";
shoppingList.forEach((item) => {
const li = document.createElement("li");
li.textContent = item;
const button = document.createElement("button");
button.textContent = "Mark as purchased";
listContainer.appendChild(li);
li.appendChild(button);

    button.addEventListener("click", () => {
      li.style.textDecoration = "line-through";
    });

    const undoButton = document.createElement("button");
    undoButton.textContent = "Undo";
    li.appendChild(undoButton);
    undoButton.addEventListener("click", () => {
      li.style.textDecoration = "none";
    });
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Item";
    li.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
      li.remove();
    });

});
};

document.getElementById("addItemBtn").addEventListener("click", addItemToList);

// Create and append the Delete Items button

// Create and append the Marked Purchase button
const markAsPurchased = document.createElement("button");
markAsPurchased.textContent = "Item Purchased";
markAsPurchased.addEventListener("click", function () {
const listContainer = document.getElementById("shoppingList");
const items = Array.from(listContainer.children);
items.forEach((item) => {
item.classList.add("purchased");
});
});
document.li.appendChild(markAsPurchased);

console.log(li);
