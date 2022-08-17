const hamburgerIcon = document.querySelector('#nav-toggle-button');
const navItems = document.querySelector('#nav-items');

hamburgerIcon.addEventListener('click', () => {
    navItems.classList.toggle('active');
});