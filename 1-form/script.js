'use strict';

function checkInput(elementInput) {
    if(elementInput.value) return elementInput.classList.remove('invalid');
    
    elementInput.classList.add('invalid');
    elementInput.placeholder = "Please enter a valid " + elementInput.dataset.info;
}

const inputs = document.querySelectorAll('.field');
const btn = document.querySelector('.button');

btn.addEventListener('click', function(e) {
    e.preventDefault();
    inputs.forEach(checkInput);
})