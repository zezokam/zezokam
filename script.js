const listTitle = document.querySelector("#listTitle");
const newListBtn = document.querySelector(".btn-new-list");
const savePDFBtn = document.querySelector(".btn-save-pdf");
const listItems = document.querySelector("#listItems");

newListBtn.addEventListener("click", () => {
  const newListTitle = prompt("Please enter a new list title:");
  if (newListTitle) {
    listTitle.innerHTML = newListTitle;
    listItems.innerHTML = "";
  }
});

savePDFBtn.addEventListener("click", () => {
  const pdf = new jsPDF();
  pdf.text(listTitle.innerHTML, 20, 20);
  let y = 40;
  listItems.querySelectorAll("li").forEach((item) => {
    pdf.text(item.innerHTML, 20, y);
    y += 10;
  });
  pdf.save("list.pdf");
});

function addListItem() {
  const newItem = document.createElement("li");
  newItem.textContent = prompt("Please enter a new item for the list:");
  if (newItem.textContent) {
    listItems.appendChild(newItem);
  }
}

listItems.addEventListener("dblclick", (e) => {
  if (e.target.tagName === "LI") {
    const updatedItem = prompt("Please enter an updated value:", e.target.textContent);
    if (updatedItem) {
      e.target.textContent = updatedItem;
    }
  }
});
