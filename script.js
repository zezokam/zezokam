const guestList = document.getElementById("guest-list");
const addGuestButton = document.getElementById("add-guest-btn");
const savePdfButton = document.getElementById("save-pdf-btn");
const listTitleInput = document.getElementById("list-title");

// Function to add a new guest to the list
function addGuest() {
  const guestName = prompt("Enter the guest name:");
  if (guestName) {
    const newGuest = document.createElement("li");
    newGuest.textContent = guestName;
    guestList.appendChild(newGuest);
  }
}

// Function to save the guest list as a PDF
function savePdf() {
  const doc = new jsPDF();
  doc.text(listTitleInput.value, 10, 10);
  const guests = guestList.getElementsByTagName("li");
  let y = 20;
  for (let i = 0; i < guests.length; i++) {
    doc.text(`${i + 1}. ${guests[i].textContent}`, 10, y);
    y += 10;
  }
  doc.save("guest-list.pdf");
}

addGuestButton.addEventListener("click", addGuest);
savePdfButton.addEventListener("click", savePdf);
