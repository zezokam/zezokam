let taskList = document.getElementById("task-list");
let title = "قائمة المهام";

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
  input.placeholder = "مهمة رقم " + count;
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(count));
  li.appendChild(input);
  taskList.appendChild(li);
  saveList();
}

function editTitle() {
  title = prompt("العنوان الجديد:", title);
  document.getElementsByTagName("title")[0].innerHTML = title;
  document.getElementsByTagName("h1")[0].innerHTML = title;
}

function clearList() {
  taskList.innerHTML = "";
  localStorage.removeItem("taskList");
}

function createPDF() {
  let pdf = new jsPDF();

  taskList.getElementsByTagName("li").forEach((li, index) => {
    let text = `${index + 1}. ${li.getElementsByTagName("input")[0].value}`;
    pdf.text(20, (index + 1) * 10, text);
  });

  pdf.save("task-list.pdf");
}

function newList() {
  taskList.innerHTML = "";
  addTask();
  title = "قائمة المهام";
  document.getElementsByTagName("title")[0].innerHTML =
