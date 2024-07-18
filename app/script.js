const upBtn = document.querySelector('.toup-btn');
const burgerMenu = document.querySelector('.burger-btn');
const headerLinks = document.querySelector('.header__links');
const headerA = document.getElementsByClassName('header__a');



window.addEventListener('scroll', function(event) {
    if (window.innerWidth <= 700) {
        upBtn.hidden = true;
    } else {
        if (window.pageYOffset > document.documentElement.clientHeight) {
            upBtn.hidden = false;
        } else {
            upBtn.hidden = true;
        }
    }
});
upBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});


const contactUs = document.createElement('a');
contactUs.href = document.querySelector('.header__btn').getAttribute('href');
contactUs.classList.add('header__a');
contactUs.classList.add('header__contactAnc');
contactUs.innerText = 'Contact Us';
if (document.documentElement.clientWidth <= 700) { 
    headerLinks.append(contactUs); 
}

window.addEventListener('scroll', event => {
    if (window.pageYOffset > 50) {
        burgerMenu.classList.add('scroll');
    } else {
        burgerMenu.classList.remove('scroll');
    }
});
burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    headerLinks.classList.toggle('active');
});


document.body.addEventListener('click', function(event) {
    if (!burgerMenu.className.includes('active')) return;
    
    const bar = document.querySelectorAll('.bar');
    const hamburger = document.querySelector('.hamburger');
    const prohibited = [...bar, hamburger, burgerMenu, headerLinks];
    if (prohibited.includes( event.target )) return;

    burgerMenu.classList.toggle('active');
    headerLinks.classList.toggle('active');
});


window.addEventListener('load', () => {
    const headerAnchors = Array.from(headerA);
    
    headerAnchors.forEach(e => {
        if (e.getAttribute('href') === '#') {
            e.classList.add('header__link');
        }
    })
})