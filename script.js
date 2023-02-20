let taskList = document.getElementById("task-list");
let title = "قائمة المهام";

// Check if there's a saved list and load it
if(localStorage.getItem('tasks')) {
  taskList.innerHTML = localStorage.getItem('tasks');
}

function addTask() {
  let count = taskList.getElementsByTagName("li").length + 1;
  let input = document.createElement("input");
  input.type = "text";
  input.placeholder = "مهمة رقم " + count;
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(count));
  li.appendChild(input);
  taskList.appendChild(li);

  // Save the updated list
  saveList();
}

function editTitle() {
  title = prompt("العنوان الجديد:", title);
  document.getElementsByTagName("title")[0].innerHTML = title;
  document.getElementsByTagName("h1")[0].innerHTML = title;
}

function clearList() {
  taskList.innerHTML = "";

  // Save the cleared list
  saveList();
}

function createPDF() {
  // Get the task list element and create a new jsPDF instance
  let doc = new jsPDF();
  let list = document.getElementById("task-list");

  // Loop through each list item and add it to the PDF
  for(let i = 0; i < list.children.length; i++) {
    let listItem = list.children[i];
    let task = listItem.getElementsByTagName("input")[0].value;
    doc.text((i + 1) + ". " + task, 10, 10 + (i * 10));
  }

  // Save and download the PDF file
  doc.save("task-list.pdf");
}

function newList() {
  taskList.innerHTML = "";
  addTask();
  title = "قائمة المهام";
  document.getElementsByTagName("title")[0].innerHTML = title;
  document.getElementsByTagName("h1")[0].innerHTML = title;

  // Save the new list
  saveList();
}

function saveList() {
  // Save the current list in localStorage
  localStorage.setItem('tasks', taskList.innerHTML);
}
