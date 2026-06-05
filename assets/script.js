  // Active Menu
  const links = document.querySelectorAll(".menu a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });

// Sticky Header
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

// Hamburger Toggler
  const toggler = document.querySelector(".toggler");
  const menu = document.querySelector(".menu");
  const overlay = document.querySelector(".overlay");

  toggler.addEventListener("click", () => {
    menu.classList.toggle("active");
    toggler.classList.toggle("active");
    overlay.classList.toggle("active");
  });
  