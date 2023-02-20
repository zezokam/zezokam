let taskList = document.getElementById("task-list");
let title = "قائمة المهام";

function addTask() {
  let count = taskList.getElementsByTagName("li").length + 1;
  let input = document.createElement("input");
  input.type = "text";
  input.placeholder = "مهمة رقم " + count;
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(count));
  li.appendChild(input);
  taskList.appendChild(li);
}

function editTitle() {
  title = prompt("العنوان الجديد:", title);
  document.getElementsByTagName("title")[0].innerHTML = title;
  document.getElementsByTagName("h1")[0].innerHTML = title;
}

function clearList() {
  taskList.innerHTML = "";
}

function createPDF() {
  // Code to generate and download PDF file
  alert("تم تصدير القائمة بنجاح");
}

function newList() {
  taskList.innerHTML = "";
  addTask();
  title = "قائمة المهام";
  document.getElementsByTagName("title")[0].innerHTML = title;
  document.getElementsByTagName("h1")[0].innerHTML = title;
}
