// ===============================
// BUDZATJA SAFARIS
// script.js
// ===============================

// Navbar background on scroll

const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(0,0,0,0.95)";
  } else {
    navbar.style.background = "rgba(0,0,0,0.75)";
  }
});

// ===============================
// Animated Statistics Counter
// ===============================

const counters = document.querySelectorAll(".stat-card h2");

counters.forEach(counter => {

  const updateCounter = () => {

    const target =
      parseInt(counter.innerText.replace("+", ""));

    const current =
      parseInt(counter.getAttribute("data-count")) || 0;

    const increment = Math.ceil(target / 60);

    if (current < target) {

      const newValue = current + increment;

      counter.setAttribute("data-count", newValue);

      counter.innerText = newValue + "+";

      setTimeout(updateCounter, 30);

    } else {

      counter.innerText = target + "+";
    }
  };

  updateCounter();

});

// ===============================
// Reveal Animation On Scroll
// ===============================

const revealElements = document.querySelectorAll(
  ".card, .about-content, .featured-content, .reasons div"
);

function reveal() {

  revealElements.forEach(el => {

    const windowHeight = window.innerHeight;

    const elementTop =
      el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {

      el.classList.add("active");
    }

  });

}

window.addEventListener("scroll", reveal);

reveal();

// ===============================
// Gallery Lightbox
// ===============================

const galleryImages =
  document.querySelectorAll(".gallery-grid img");

const lightbox =
  document.createElement("div");

lightbox.id = "lightbox";

document.body.appendChild(lightbox);

galleryImages.forEach(image => {

  image.addEventListener("click", () => {

    lightbox.classList.add("active");

    const img =
      document.createElement("img");

    img.src = image.src;

    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }

    lightbox.appendChild(img);

  });

});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

// ===============================
// Smooth Navigation
// ===============================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

  anchor.addEventListener("click", function(e) {

    e.preventDefault();

    document.querySelector(
      this.getAttribute("href")
    ).scrollIntoView({
      behavior: "smooth"
    });

  });

});

// ===============================
// Contact Form Demo
// ===============================

const form = document.querySelector("form");

if(form){

form.addEventListener("submit", function(e){

  e.preventDefault();

  alert(
    "Thank you for your enquiry. Budzatja Safaris will contact you soon."
  );

  form.reset();

});

}

// ===============================
// Hero Fade In
// ===============================

window.addEventListener("load", () => {

  document.querySelector(".hero-content")
    .classList.add("loaded");

});

// ===============================
// Optional Mobile Menu
// ===============================

const menuButton =
  document.querySelector(".menu-toggle");

const navLinks =
  document.querySelector(".nav-links");

if(menuButton){

menuButton.addEventListener("click", () => {

  navLinks.classList.toggle("mobile-active");

});

}

// ===============================
// Current Year
// ===============================

const yearElement =
  document.querySelector(".year");

if(yearElement){

yearElement.textContent =
  new Date().getFullYear();

}