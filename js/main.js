let burger = document.querySelector('.burger');

let nav = document.querySelector('.header__nav');

console.log(burger);

burger.addEventListener('click', ()=>{
    burger.classList.toggle('.burger_close');
    nav.classList.toggle('overlay');

});