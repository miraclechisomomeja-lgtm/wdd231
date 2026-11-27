// Import places data
import { places } from "../data/places.mjs";

// Select HTML elements
const discoverCards = document.querySelector("#discover-cards");
const visitMessage = document.querySelector("#visit-message");

// Get previous visit and current time
const lastVisit = Number(localStorage.getItem("lastVisit"));
const now = Date.now();

// Calculate time since previous visit
const difference = now - lastVisit;

// Display visit message
if (lastVisit === 0) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
}
else if (difference < 86400000) {
    visitMessage.textContent = "Back so soon! Awesome!";
}
else {
    const days = Math.floor(difference / 86400000);

    if (days === 1) {
        visitMessage.textContent = "You last visited 1 day ago.";
    } else {
        visitMessage.textContent = `You last visited ${days} days ago.`;
    }

}

// Save current visit time
localStorage.setItem("lastVisit", now);

// Display places
function displayPlaces(places) {
    places.forEach((place, index) => {
        const card = document.createElement("article");
        const imageLoading = index === 0 ? "eager" : "lazy";
        const imagePriority = index === 0 ? "high" : "auto";

        card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
        <img src="${place.image}" alt="${place.name}" width="300" height="200" loading="${imageLoading}" fetchpriority="${imagePriority}">
        </figure>
        <p>${place.description}</p>
        <address>${place.address}</address>
        <a href="${place.url}" target="_blank" rel="noopener noreferrer">Learn More</a>
    `;

        discoverCards.appendChild(card);
    });

}

// Call the function
displayPlaces(places);