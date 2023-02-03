const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const message = document.getElementById('message');

function validateForm() {
  if (password1El.value === password2El.value) {
    message.style.color = 'green'
    message.textContent = "Form submited!"
  } else {
    message.textContent = 'Make sure passwords match.';
    message.style.color = "red";
  }
}

function processFormData(e) {
  e.preventDefault();
  validateForm();
}

form.addEventListener('submit', processFormData);
