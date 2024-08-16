/*!
 * Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  //  Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  const translations = {
    english: {
      mastheadSubtytle: "Nature's purity, a horse's heart",
      mastheadLink: "Get to know us!",
      NavbarServices: "Services",
      NavbarGallery: "Gallery",
      NavbarTeam: "Team",
      NavbarContact: "Contact us",
      ServicesHeaderTitle: "Our services",
      ServicesHeaderSubtitle: "Amenities for your horse",
      ServicesFirstTitle: "A home for your horse",
      ServicesFirstSubtitle: "We offer a complete boarding service for your horse, with spacious stalls and paddocks, quality feed, and personalized care.",
      ServicesSecondTitle: "Quality feed",
      ServicesSecondSubtitle: "We provide a balanced diet for your horse, including three daily meals of hay and two of grain.",
      ServicesThirdTitle: "A family experience",
      ServicesThirdSubtitle: "Find your natural refuge in a space designed for the family, where you can breathe pure air and reconnect with nature."
    },
    español: {
      mastheadSubtytle: "Naturaleza pura, amistad equina",
      mastheadLink: "Conocenos!",
      NavbarServices: "Servicios",
      NavbarGallery: "Galeria",
      NavbarTeam: "Equipo",
      NavbarContact: "Contacto",
      ServicesHeaderTitle: "Nuestros servicios",
      ServicesHeaderSubtitle: "Comodidades para tu caballo.",
      ServicesFirstTitle: "Un hogar para tu caballo",
      ServicesFirstSubtitle: "Ofrecemos un servicio de pensión completo para tu caballo, con boxes y paddocks amplios, alimentación de calidad y atención personalizada.",
      ServicesSecondTitle: "Una alimentacion de calidad.",
      ServicesSecondSubtitle: "Proporcionamos una alimentación balanceada para tu caballo, incluyendo tres comidas diarias de heno y dos de pienso.",
      ServicesThirdTitle: "Una experiencia familiar.",
      ServicesThirdSubtitle: "Encuentra tu refugio natural en un espacio diseñado para la familia, donde podrás respirar aire puro y reconectar con la naturaleza.",
    },
  };

  const elements = {
    mastheadSubtytle: document.getElementById("mastheadSubtytle"),
    mastheadLink: document.getElementById("mastheadLink"),
    NavbarServices: document.getElementById("NavbarServices"),
    NavbarGallery: document.getElementById("NavbarGallery"),
    NavbarTeam: document.getElementById("NavbarTeam"),
    NavbarContact: document.getElementById("NavbarContact"),
    ServicesHeaderTitle: document.getElementById("ServicesHeaderTitle"),
    ServicesHeaderSubtitle: document.getElementById("ServicesHeaderSubtitle"),
    ServicesFirstTitle: document.getElementById("ServicesFirstTitle"),
    ServicesFirstSubtitle: document.getElementById("ServicesFirstSubtitle"),
    ServicesSecondTitle: document.getElementById("ServicesSecondTitle"),
    ServicesSecondSubtitle: document.getElementById("ServicesSecondSubtitle"),
    ServicesThirdTitle: document.getElementById("ServicesThirdTitle"),
    ServicesThirdSubtitle: document.getElementById("ServicesThirdSubtitle"),
  };

  const languageSelect = document.querySelector("#langugaeSelector");

  languageSelect.addEventListener("change", (event) => {
    setLanguage(event.target.value.toLowerCase());
  });

  const setLanguage = (language) => {
    if (translations[language]) {
      for (const id in elements) {
        if (elements.hasOwnProperty(id) && translations[language][id]) {
          elements[id].textContent = translations[language][id];
        }
      }
    } else {
      console.error("Language not found:", language);
    }
  };

  // Initial language (replace with desired default)
  setLanguage("english");


  languageSelect.addEventListener('change', () => {
  setLanguage(languageSelect.value.toLowerCase());
});

});