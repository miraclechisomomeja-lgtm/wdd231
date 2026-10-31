const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;



const navButton = document.querySelector("#ham-btn");
const navLinks = document.querySelector("#nav-bar");

navButton.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    navButton.textContent = isOpen ? "✕" : "☰";
    navButton.setAttribute("aria-expanded", isOpen);
});


