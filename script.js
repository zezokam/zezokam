// Get elements from DOM
const newItemInput = document.getElementById("new-item");
const addItemButton = document.getElementById("add-btn");
const itemList = document.getElementById("item-list");
const clearListButton = document.getElementById("clear-btn");

// Add item to list function
function addItem(event) {
  // Prevent default form submission behavior
  event.preventDefault();

  // Get input value and trim whitespace
  const newItemText = newItemInput.value.trim();

  // If input is not empty
  if (newItemText !== "") {
    // Create new list item element
    const newItem = document.createElement("li");

    // Create span for text and checkbox
    const span = document.createElement("span");
    span.innerText = newItemText;

    // Create checkbox for completion status
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", toggleItemCompletion);

    // Append span and checkbox to list item
    newItem.appendChild(checkbox);
    newItem.appendChild(span);

    // Append new item to list
    itemList.appendChild(newItem);

    // Clear input field
    newItemInput.value = "";
  }
}

// Toggle item completion function
function toggleItemCompletion(event) {
  const checkbox = event.target;
  const item = checkbox.parentElement;

  if (checkbox.checked) {
    item.classList.add("item-completed");
  } else {
    item.classList.remove("item-completed");
  }
}

// Clear list function
function clearList() {
  itemList.innerHTML = "";
}

// Event listeners
addItemButton.addEventListener("click", addItem);
clearListButton.addEventListener("click", clearList);
