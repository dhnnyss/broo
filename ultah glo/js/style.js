//toggle class active
const navbarNav = document.querySelector ('.navbar-nav');
//humburger di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};