const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const refresh = () => {
  if (pass.value.length < minValue || !(pass.value.match(letters)) || !(pass.value.match(numbers))) {
    p.textContent = 'Masz słabe hasło!'
    p.style.color = 'tomato'
  }
  if (pass.value.length >= minValue && pass.value.match(letters) && pass.value.match(numbers)) {
    p.textContent = 'Masz dobre hasło!'
    p.style.color = 'yellow'
    if (pass.value.match(special)) {
      p.textContent = 'Masz bardzo dobre hasło!'
      p.style.color = 'lime'
    }
  }
  if (pass.value == '') {
    p.textContent = 'Nie podałeś hasła...'
    p.style.color = 'lightgray'
  }
}

pass.addEventListener('keyup', refresh)
