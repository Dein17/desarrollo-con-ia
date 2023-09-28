document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const navMenu = document.querySelector(".nav-menu");

    menuBtn.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        menuBtn.classList.toggle("active");
    });
});
