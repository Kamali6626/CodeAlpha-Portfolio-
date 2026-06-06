
    // Mobile Menu

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    menuBtn.addEventListener("click", () => {

      navLinks.classList.toggle("active");

    });

    // Auto Close Menu After Click

    const navItems = document.querySelectorAll("#navLinks a");

    navItems.forEach(item => {

      item.addEventListener("click", () => {

        navLinks.classList.remove("active");

      });

    });

    // Contact Form

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(e){

      e.preventDefault();

      alert("Message Sent Successfully!");

    });