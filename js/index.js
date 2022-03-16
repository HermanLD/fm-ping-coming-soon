console.log("JS Connected!!!");

const ctaInput = document.querySelector(".cta-input");
const ctaButton = document.querySelector(".cta-btn");

ctaButton.addEventListener("click", function (e) {
  e.preventDefault();

  if (ctaInput.validity.valid) ctaInput.dataset.inputValid = "true";
  else ctaInput.dataset.inputValid = "false";
});
