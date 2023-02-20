// Get DOM elements
const taskList = document.getElementById("task-list");
const addTaskButton = document.getElementById("add-task");
const editTitleButton = document.getElementById("edit-title");
const newListButton = document.getElementById("new-list");
const savePdfButton = document.getElementById("save-pdf");
const titleElement = document.getElementsByTagName("title")[0];
const h1Element = document.getElementsByTagName("h1")[0];

// Load saved list from JSON file
fetch("tasks.json")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      let count = i + 1;
      let input = document.createElement("input");
      input.type = "text";
      input.value = data[i];
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(count));
      li.appendChild(input);
      taskList.appendChild(li);
    }
  });

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

// Edit title
function editTitle() {
  let newTitle = prompt("أدخل العنوان الجديد:");
  if (newTitle) {
    titleElement.innerHTML = newTitle;
    h1Element.innerHTML = newTitle;
  }
}

// Clear list
function clearList() {
  taskList.innerHTML = "";
}

// Save list as PDF
function savePDF() {
  const element = document.getElementById("task-list");
  html2pdf().from(element).save();
}

// Add event listeners
addTaskButton.addEventListener("click", addTask);
editTitleButton.addEventListener("click", editTitle);
newListButton.addEventListener("click", clearList);
savePdfButton.addEventListener("click", savePDF);

  input.type = "text";
  input.placeholder = "مهمة جديدة";
  let li = document.createElement("li");
  li.dir = "rtl";
  li.appendChild(document.createTextNode(count + ". "));
  li.appendChild(input);
  taskList.appendChild(li);
}

// Edit list title
function editTitle() {
  let newTitle = prompt("أدخل العنوان الجديد:", titleElement.innerHTML);
  if (newTitle) {
    titleElement.innerHTML = newTitle;
    h1Element.innerHTML = newTitle;
  }
}

// Clear task list
function clearList() {
  if (confirm("هل أنت متأكد من أنك تريد حذف كل المهام؟")) {
    taskList.innerHTML = "";
  }
}

// Create new task list
function newTaskList() {
  if (confirm("هل أنت متأكد من أنك تريد إنشاء قائمة مهام جديدة؟")) {
    taskList.innerHTML = "";
    editTitle();
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
