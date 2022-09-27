// NAVBAR
const menuToggle = document.querySelector(".toggle-menu");
const navWrapper = document.querySelector(".navbar-wrapper");

menuToggle.addEventListener("click", function () {
  if (navWrapper.className.indexOf("nav-open") == -1) {
    navWrapper.classList.add("nav-open");
    navWrapper.classList.remove("nav-close");
  } else if (navWrapper.className.indexOf("nav-open") > -1) {
    navWrapper.classList.remove("nav-open");
    navWrapper.classList.add("nav-close");
  }
});

// SLIDER

new Glide('.glide', {
  gap: 0,
  perView: 1,
  animationDuration: 1500
}).mount();

new Glide('.popular-destinations-glide', {
  type: 'carousel',
  gap: 50,
  perView: 3,
  animationDuration: 1500,
  breakpoints: {
    1170: {
      perView: 2
    },
    740: {
      perView: 1
    }
  }
}).mount();

new Glide('.holiday-offers-glide', {
  type: 'carousel',
  gap: 50,
  perView: 3,
  animationDuration: 1500,
  breakpoints: {
    1170: {
      perView: 2
    },
    740: {
      perView: 1
    }
  }
}).mount();