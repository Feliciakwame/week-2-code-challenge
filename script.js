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
