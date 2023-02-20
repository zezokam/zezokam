// Get the modal element
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Change the background color of the page
document.body.style.background = "#F8E7A2";

// Change the font family of the card elements
var cardElements = document.getElementsByClassName("card-element");
for (var i = 0; i < cardElements.length; i++) {
  cardElements[i].style.fontFamily = "'Roboto', sans-serif";
}

// Change the font size of the name element
var nameElement = document.getElementById("name");
nameElement.style.fontSize = "36px";

// Change the font size of the phone and email elements
var phoneElement = document.getElementById("phone");
var emailElement = document.getElementById("email");
phoneElement.style.fontSize = emailElement.style.fontSize = "24px";

// Change the color of the phone and email elements
phoneElement.style.color = emailElement.style.color = "#333";

// Change the background color of the modal
modal.style.backgroundColor = "#F8E7A2";

// Change the font color of the modal content
var modalContent = document.getElementsByClassName("modal-content")[0];
modalContent.style.color = "#333";

// Change the font family of the modal content
modalContent.style.fontFamily = "'Roboto', sans-serif";
