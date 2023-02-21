document.getElementById('generate-btn').addEventListener('click', function() {
  var qrText = document.getElementById('qr-text').value;
  if(qrText !== '') {
    new QRCode(document.getElementById('qrcode'), qrText);
  }
});
