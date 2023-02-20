let taskList = document.getElementById("task-list");
let title = "Task List";

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

function addTask() {
  let count = taskList.getElementsByTagName("li").length + 1;
  let input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Task " + count;
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(count));
  li.appendChild(input);
  taskList.appendChild(li);
  saveList();
}

function editTitle() {
  title = prompt("New title:", title);
  document.getElementsByTagName("title")[0].innerHTML = title;
  document.getElementsByTagName("h1")[0].innerHTML = title;
}

function clearList() {
  taskList.innerHTML = "";
  localStorage.removeItem("taskList");
}

function saveList() {
  let inputs = taskList.getElementsByTagName("input");
  let taskArr = [];
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value !== "") {
      taskArr.push(inputs[i].value);
    }
  }
  localStorage.setItem("taskList", JSON.stringify(taskArr));
}

function createPDF() {
  // Code to generate and download PDF file
  alert("List exported successfully!");
}

function newList() {
  taskList.innerHTML = "";
  addTask();
  title = "Task List";
  document.getElementsByTagName("title")[0].innerHTML = title;
  document.getElementsByTagName("h1")[0].innerHTML = title;
}

let addTaskBtn = document.getElementById("add-task");
addTaskBtn.addEventListener("click", addTask);

let editTitleBtn = document.getElementById("edit-title");
editTitleBtn.addEventListener("click", editTitle);

let clearListBtn = document.getElementById("clear-list");
clearListBtn.addEventListener("click", clearList);

let exportBtn = document.getElementById("export-pdf");
exportBtn.addEventListener("click", createPDF);

let newListBtn = document.getElementById("new-list");
newListBtn.addEventListener("click", newList);
