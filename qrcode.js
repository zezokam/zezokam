// Get elements
var generateButton = document.getElementById("generate-button");
var qrCodeDiv = document.getElementById("qrcode");

// Generate QR code
function generateQRCode() {
    // Get input text
    var text = document.getElementById("text").value;

    // Check if input is not empty
    if (text === "") {
        alert("Please enter some text to generate QR code.");
        return;
    }

    // Generate QR code using QRCode.js
    var qrCode = new QRCode(qrCodeDiv, {
        text: text,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

// Attach event listener to generate button
generateButton.addEventListener("click", generateQRCode);
