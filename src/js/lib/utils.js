const btn = document.getElementById('footer-scroll-top');

btn.addEventListener('click', () => window.scrollTo({
  top: 0,
  behavior: 'smooth',
}));



// Put only anchor links validated in a variable
const links = document.querySelectorAll('.anchor');

// Include event to all anchors
links.forEach(function (elem) {
    elem.addEventListener('click', smoothScroll)
});

// Magic function to scroll smooth!
function smoothScroll(e) {

    e.preventDefault();

    const link = this.getAttribute("href");
    const offsetTop = document.querySelector(link).offsetTop;

    scroll({
        top: offsetTop - 115,
        behavior: "smooth"
    });
}