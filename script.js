const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const showMsg = () => {
    if (pass.value.length > minValue > minValue && pass.value.match(letters) && pass.value,match(numbers) && pass.value.match(special)) {
        
    }
}