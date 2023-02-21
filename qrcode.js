const generateBtn = document.getElementById('generate-btn');
const qrContainer = document.getElementById('qr-container');

generateBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const qrText = document.getElementById('qr-text').value;
    if (qrText) {
        const qrCode = new QRCode(qrContainer, {
            text: qrText,
            width: 256,
            height: 256,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    } else {
        qrContainer.innerHTML = '<p>Please enter text or URL.</p>';
    }
});
