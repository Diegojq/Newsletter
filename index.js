const submit = document.getElementById("submit");
const newsletter = document.getElementById("newsletter");
const success = document.getElementById("success");
const emailInput = document.getElementById("email");
const emailSuccess = document.getElementById("successEmail");

submit.addEventListener("click", addSuccess);

function addSuccess(e) {
  e.preventDefault();

  if (emailInput.value.trim() === "" || !emailInput.value.includes("@")) {
    alert("por favor ingresa tu direccion de correo electrònico.");
    emailInput.focus();
  } else {
    newsletter.classList.add("oculto");
    success.classList.add("visible");
    emailSuccess.innerText = emailInput.value;
  }
}
