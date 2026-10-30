// Display the current year in the footer
const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;


// Display the last modified date
document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

    
// Hamburger menu functionality
const navButton = document.querySelector("#ham-btn");
const navLinks = document.querySelector("#nav-bar");

navButton.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    // Update the button symbol
    navButton.textContent = isOpen ? "✕" : "☰";

    // Update accessibility attributes
    navButton.setAttribute("aria-expanded", isOpen);

    navButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

