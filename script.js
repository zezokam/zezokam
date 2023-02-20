// Function to add numbering to list items
function addListNumbers() {
  var listItems = document.querySelectorAll('ul li');
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].innerHTML = (i + 1) + '. ' + listItems[i].innerHTML;
  }
}

// Function to save page as PDF
function saveAsPDF() {
  window.print();
}

// Function to change list title
function changeListTitle() {
  var newTitle = prompt("Enter a new title for the list:");
  if (newTitle) {
    document.querySelector('h1').innerHTML = newTitle;
  }
}

// Call functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  addListNumbers();

  var pdfButton = document.querySelector('#pdf-button');
  pdfButton.addEventListener('click', saveAsPDF);

  var titleButton = document.querySelector('#title-button');
  titleButton.addEventListener('click', changeListTitle);
});
