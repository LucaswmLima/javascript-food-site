'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = () => navbar.classList.toggle("active");

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = () => navbar.classList.remove("active");

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header & back top btn active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);



/**
 * filter function
 */

document.addEventListener("DOMContentLoaded", function () {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const pricingItems = document.querySelectorAll("[data-filter]");

  let lastClickedFilterBtn = filterBtns[0];

  const filterPricing = function () {
    lastClickedFilterBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedFilterBtn = this;

    for (let i = 0; i < pricingItems.length; i++) {
      if (
        this.dataset.filterBtn === pricingItems[i].dataset.filter ||
        this.dataset.filterBtn === "all"
      ) {
        pricingItems[i].style.display = "block";
        pricingItems[i].classList.add("active");
      } else {
        pricingItems[i].style.display = "none";
        pricingItems[i].classList.remove("active");
      }
    }
  };

  // Adiciona o evento de clique a todos os botões de filtro
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", filterPricing);
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".slider img");
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((image, i) => {
      image.style.zIndex = i === index ? 1 : 0;
      image.style.opacity = i === index ? 1 : 0;
    });

    // Inicia o temporizador para a próxima imagem após 3 segundos
    setTimeout(nextImage, 5000);
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  // Exibir a primeira imagem
  showImage(currentIndex);
});
