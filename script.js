const copyEmailBtn = document.getElementById("copy-email-btn");
const email = "azzan@alkamali.uk";

copyEmailBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(email);
  copyEmailBtn.innerHTML = "Copied!";
  setTimeout(() => {
    copyEmailBtn.innerHTML = "Copy Email";
  }, 2000);
});
