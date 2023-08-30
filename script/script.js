// Responsive Navbar...
const header = document.querySelector('header');
const navbr = document.querySelector('.navbar');
const open_nav_icon = document.querySelector('.open-nav-icon');
const close_nav_icon = document.querySelector('.close-nav-icon');

open_nav_icon.addEventListener('click', () => {
    header.classList.add('active');
    console.log('clicked');
});
close_nav_icon.addEventListener('click', () => {
    header.classList.remove('active');
})


