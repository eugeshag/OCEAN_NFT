let burger = document.querySelector('.burger');

let nav = document.querySelector('.header__nav');

let navClose = document.querySelector('.header__nav-close');

burger.addEventListener('click', ()=>{
    nav.classList.add('header__nav_active');
});

navClose.addEventListener('click', () =>{
   nav.classList.remove('header__nav_active');
});

const titlesButtons = document.querySelectorAll(".footer__top-menu-title-img");

const footerLinks = document.querySelectorAll('.footer__top-menu-links');

const lastFooterTitle = document.querySelectorAll('.footer__top-menu-title');

lastFooterTitle[lastFooterTitle.length - 1].style.border = "none";

const handleClick = event => {
    const divs = document.querySelectorAll(".footer__top-menu-links")
    const target = event.target.nextElementSibling;
    target.classList.toggle("footer__top-menu-links_hide")

    divs.forEach(item => {
        if (item !== target) {
            item.classList.add("footer__top-menu-links_hide")
        }
    })
}

titlesButtons.forEach((item, index) => {
    item.addEventListener("click", () => {
        footerLinks[index].classList.toggle("footer__top-menu-links_hide");
    });
});


new Swiper('.swiper', {
    grabCursor: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.13,
            spaceBetween: 24
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1.2,
            spaceBetween: 24
        },
        992: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },

        1200: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        // when window width is >= 640px
        1400: {
            slidesPerView: 3,
            spaceBetween: 35.37
        }
    }
});