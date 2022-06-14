document.querySelector('.menu-btn').addEventListener('click',() => {
    document.querySelector('.main-elements').classList.toggle('show')
})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-container',{ delay: 400 });
ScrollReveal().reveal('.card-banner-one',{ delay: 400 });
ScrollReveal().reveal('.card-banner-two',{ delay: 400 });
ScrollReveal().reveal('.social-media',{ delay: 200 });