const connectLinkDesktop = document.querySelector('#connect-link-desktop');
const subMenuDesktop = document.querySelector('#sub-menu-desktop');
const connectLinkMobile = document.querySelector('#connect-link-mobile');
const subMenuMobile = document.querySelector('#sub-menu-mobile');
const mobileMenu = document.querySelector('#menu-mobile');
const introSection = document.querySelector('.intro-section');

const hamburgerIcon = document.querySelector('#hamburger-icon');
const closeIcon = document.querySelector('#close-icon');

connectLinkDesktop.addEventListener('click', openSubDesktop);
connectLinkMobile.addEventListener('click', openSubMobile);

hamburgerIcon.addEventListener('click', openMobileMenu);
closeIcon.addEventListener('click', closeMobileMenu);

function openSubDesktop() {
    subMenuDesktop.classList.toggle('show');
    connectLinkDesktop.classList.toggle('invert');
}

function openSubMobile() {
    if (subMenuMobile.style.display != 'block') {
        subMenuMobile.style.display = 'block';
    }
    else {
        subMenuMobile.style.display = 'none';
    }
    connectLinkMobile.classList.toggle('invert');
}

function openMobileMenu() {
    mobileMenu.classList.add('show');
    closeIcon.classList.add('show');
    introSection.classList.add('hide');
    hamburgerIcon.classList.add('hide');
}

function closeMobileMenu() {
    mobileMenu.classList.remove('show');
    closeIcon.classList.remove('show');
    introSection.classList.remove('hide');
    hamburgerIcon.classList.remove('hide');
}