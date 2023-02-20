// Get DOM elements
const taskList = document.getElementById("task-list");
const addTaskButton = document.getElementById("add-task");
const editTitleButton = document.getElementById("edit-title");
const clearListButton = document.getElementById("clear-list");
const newListButton = document.getElementById("new-list");
const titleElement = document.getElementsByTagName("title")[0];
const h1Element = document.getElementsByTagName("h1")[0];

// Load saved list from local storage
let savedList = JSON.parse(localStorage.getItem("taskList"));
if (savedList) {
  for (let i = 0; i < savedList.length; i++) {
    let count = i + 1;
    let input = document.createElement("input");
    input.type = "text";
    input.value = savedList[i];
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(count));
    li.appendChild(input);
    taskList.appendChild(li);
  }
}

// Add task to list
function addTask() {
  let count = taskList.getElementsByTagName("li").length + 1;
  let input = document.createElement("input");
  input.type = "text";
  input.placeholder = "مهمة جديدة";
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(count));
  li.appendChild(input);
  taskList.appendChild(li);
}

// Save list to local storage
function saveList() {
  let tasks = [];
  let taskElements = taskList.getElementsByTagName("li");
  for (let i = 0; i < taskElements.length; i++) {
    let input = taskElements[i].getElementsByTagName("input")[0];
    if (input.value) {
      tasks.push(input.value);
    }
  }
  localStorage.setItem("taskList", JSON.stringify(tasks));
}

// Edit title
function editTitle() {
  let newTitle = prompt("Enter new title:");
  if (newTitle) {
    titleElement.innerText = newTitle;
    h1Element.innerText = newTitle;
  }
}

// Clear list
function clearList() {
  taskList.innerHTML = "";
  localStorage.removeItem("taskList");
}

// New list
function newList() {
  clearList();
  editTitle();
}

// Add event listeners
addTaskButton.addEventListener("click", addTask);
taskList.addEventListener("blur", saveList, true);
editTitleButton.addEventListener("click", editTitle);
clearListButton.addEventListener("click", clearList);
newListButton.addEventListener("click", newList);
