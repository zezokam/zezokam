const form = document.getElementById('url-form');
const urlInput = document.getElementById('url-input');
const qrcodeContainer = document.getElementById('qrcode');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputValue = urlInput.value;
  if (!inputValue) {
    return;
  }
  qrcodeContainer.innerHTML = '';
  new QRCode(qrcodeContainer, inputValue);
});
