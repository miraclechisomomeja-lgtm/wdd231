// JSON file location
const url = "data/members.json";

// Display business information
const displayMembers = (businesses) => {
    const cards = document.querySelector("#members-cards");

    businesses.forEach((business, index) => {
        const card = document.createElement("section");

        card.classList.add("business-card");

        card.innerHTML = `
            <div class="business-image"><img src="images/${business.image}" alt="${business.name}" width="400" height="133" ${index === 0 ?`loading="eager" fetchpriority="high"` : `loading="lazy"`}>
            </div>
            <div class="business-info">
                <h3>${business.name}</h3>
                <p>${business.address}</p>
                <p>${business.phone}</p>
                <p><a href="${business.website}" target="_blank" rel="noopener noreferrer">${business.website}</a></p>
            </div>
        `;

        cards.appendChild(card);
    });
};

// Fetch business information
const getMembers = async () => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Could not retrieve business data.");
        }

        const data = await response.json();

        displayMembers(data.businesses);

    } catch (error) {
        console.error("Error:", error);
    }
};

// Start with Grid View
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#members-cards");

display.classList.add("grid");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);
function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}

// Display current year
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

// Display last modified date
document.querySelector("#lastModified").textContent =
    document.lastModified;

const navButton = document.querySelector("#ham-btn");
const navLinks = document.querySelector("#nav-bar");

navButton.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    navButton.textContent = isOpen ? "✕" : "☰";
    navButton.setAttribute("aria-expanded", isOpen);
});


// Load businesses
getMembers();