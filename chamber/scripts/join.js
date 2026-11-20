
// Open membership modals
const membershipLinks = document.querySelectorAll(".membership-card a");
const membershipModals = document.querySelectorAll("dialog")

membershipLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();

        const modalId = link.getAttribute("href");
        const modal = document.querySelector(modalId);

        modal.showModal();
    });
});

// Close membership modals
const closeButtons = document.querySelectorAll(".close-modal");

closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.closest("dialog").close();
    });
});

membershipModals.forEach(modal => {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.close();
        }
    });

});



// Set the timestamp when the page loads
document.querySelector("#timestamp").value = new Date().toISOString();
