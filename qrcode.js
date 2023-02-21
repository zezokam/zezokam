// get references to the DOM elements
const textInput = document.getElementById("text-input");
const generateButton = document.getElementById("generate-button");
const qrCodeImage = document.getElementById("qrcode-image");

// add an event listener to the generate button
generateButton.addEventListener("click", generateQRCode);

// function to generate the QR code
function generateQRCode() {
  // get the text to encode from the text input
  const text = textInput.value;

  // generate the QR code using the QRCode library
  const qrCode = new QRCode(qrCodeImage, {
    text: text,
    width: 256,
    height: 256,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });
}
