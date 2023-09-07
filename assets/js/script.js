const container = document.querySelector('.container');
const loginLink = document.querySelector('.login__link');
const registerLink = document.querySelector('.register__link');
/*Boton del popup de login */
const btnPopup = document.querySelector('.navigation__btn-Login');

const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=>{
    container.classList.add('active');
});


loginLink.addEventListener('click', ()=>{
    container.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    container.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=>{
    container.classList.remove('active-popup');
});