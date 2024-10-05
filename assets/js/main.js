// SHOW MENU 

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


// validate if exists
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// REMOVE MENU MOBILE

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    // Click on each nav__link remove class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


// SHOE SWIPER 

const swiperShoe = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    effect: 'creative',
    creativeEffect: {
        prev:{
            translate: [-100, 0 , -500],
            opacity: 0,
        },
        next:{
            translate: [100, 0 , -500],
            opacity: 0,
        },
    },

    pagination: {
      el: '.swiper-pagination',
        clickable: true,
    },
  
  });