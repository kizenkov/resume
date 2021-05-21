let phone = document.querySelector("#buttonPhone");
let number = document.querySelector("#number");

phone.addEventListener('click', showPhone);

function showPhone() {
    phone.remove();
    number.innerHTML= '+ 375 33 695 08 99';
}