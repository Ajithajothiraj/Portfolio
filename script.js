document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const menuIcon = document.querySelector(".menu-icon");
    const navMenu = document.querySelector("nav ul");
    const navLinks = document.querySelectorAll("nav ul li a");

    

    function revealSections() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("show");
            }
        });
    }
    
    menuIcon.addEventListener("click", function () {
        navMenu.classList.toggle("show"); // Toggle 'show' class
    });

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("show");
        });
    });
    window.addEventListener("scroll", revealSections);
    revealSections();
});
