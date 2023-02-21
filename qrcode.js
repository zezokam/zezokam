// Generate QR code
document.getElementById('generate-btn').addEventListener('click', function(event) {
    event.preventDefault();
    var url = document.getElementById('url-input').value.trim();
    if (url.length === 0) {
        alert('Please enter a URL.');
        return;
    }
    var qrCodeDiv = document.getElementById('qrcode');
    qrCodeDiv.innerHTML = '';
    new QRCode(qrCodeDiv, url);
});
