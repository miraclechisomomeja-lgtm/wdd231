
const url = "data/members.json";


const displayMembers = (businesses) => {
    const cards = document.querySelector("#members-cards");

    businesses.forEach((business, index) => {
        const card = document.createElement("section");

        card.classList.add("business-card");

        card.innerHTML = `
            <div class="business-image"><img src="images/${business.image}" alt="${business.name}" width="400" height="133" ${index < 3 ? 'loading="eager" fetchpriority="high"' : index < 6 ? 'loading="eager"' : 'loading="lazy"'}>
            </div>
            <div class="business-info">
                <h3>${business.name}</h3>
                <p><strong>Address: </strong>${business.address}</p>
                <p><strong>Phone: </strong>${business.phone}</p>
                <a href="${business.website}" target="_blank" rel="noopener noreferrer">Visit Website</a>
            </div>
        `;

        cards.appendChild(card);
    });
};


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


document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    document.lastModified;


getMembers();