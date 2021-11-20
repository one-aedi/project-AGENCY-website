
/*****************SCROLL to TOP******************* */

const scrollToTop = document.querySelector(".scrollToTop");

window.addEventListener("scroll", () => {
    window.pageYOffset > 400
    ? (scrollToTop.style.display = "block")
    : (scrollToTop.style.display = "none");
});
scrollToTop.addEventListener("click", () => {
    window.scroll({ top: 0})
});


/*********RESPONSIVE nav bar******** */

const html = document.querySelector("html");
const responsiveNavbar = document.querySelector(".responsive__navbar");

responsiveNavbar.addEventListener("click", (e) => e.stopPropagation());
html.addEventListener("click", () => responsiveNavbar.classList.remove("show"));

const responsiveToggle = document.querySelector(".responsive__toggle");
const navLinks = document.querySelectorAll("#nav__link");
navLinks.forEach((link) =>
    link.addEventListener("click", () =>
        responsiveNavbar.classList.remove("show")
    )
);
responsiveToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    responsiveNavbar.classList.toggle("show");
});    


