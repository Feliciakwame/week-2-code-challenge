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
    listContainer.appendChild(li);
  });
};

document.getElementById("addItemBtn").addEventListener("click", addItemToList);

const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete Items";
const shoppingListContainer = document.getElementById("shoppingList");
deleteButton.addEventListener("click", function () {
  shoppingList = [];
  displayShoppingList();
});
shoppingListContainer.parentNode.appendChild(deleteButton);

function createMarkedPurchaseButton() {
  const markedPurchaseButton = document.createElement("button");
  markedPurchaseButton.textContent = "Marked Purchase";
  markedPurchaseButton.addEventListener("click", function () {
    const items = Array.from(shoppingListContainer.children);
    items.forEach((item) => {
      item.classList.add("purchased");
    });
  });
  shoppingListContainer.parentNode.appendChild(markedPurchaseButton);
}

createMarkedPurchaseButton();
