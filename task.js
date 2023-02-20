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
    li.appendChild(input);
    li.appendChild(document.createTextNode("مهمة
