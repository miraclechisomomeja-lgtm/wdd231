// Select the spotlight container
const spotlightContainer = document.querySelector('#spotlight-container');

// JSON file location
const membersURL = 'data/members.json';

// Fetch Chamber members
async function getMembers() {
    try {
        const response = await fetch(membersURL);

        if (response.ok) {
            const data = await response.json();

            // Select Gold and Silver members
            const qualifiedMembers = data.businesses.filter(member =>
                member.membershipLevel === 2 || member.membershipLevel === 3
            );

            // Randomly shuffle the members
            const shuffledMembers = qualifiedMembers.sort(() => 0.5 - Math.random());

            // Select three members
            const selectedMembers = shuffledMembers.slice(0, 3);

            // Display selected members
            selectedMembers.forEach(member => {
                const card = document.createElement('article');

                const membership = member.membershipLevel === 3 ? 'Gold' : 'Silver';

                card.innerHTML = `
                    <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
                    <h3>${member.name}</h3>
                    <p><strong>Phone:</strong> ${member.phone}</p>
                    <p><strong>Address:</strong> ${member.address}</p>
                    <p><strong>Membership:</strong> ${membership}</p>
                    <a href="${member.website}" target="_blank" rel="noopener">Visit Website</a>
                `;

                spotlightContainer.appendChild(card);
            });

        } else {
            throw new Error('Could not retrieve member data.');
        }

    } catch (error) {
        console.error(error);
    }
}

getMembers();