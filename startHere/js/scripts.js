const params = new URLSearchParams(window.location.search);
const firstName = params.get('first');
const lastName = params.get('last');
const phone = params.get('phone');
const email = params.get('email');
const ordinance = params.get('ordinance');
const date = params.get('date');
const templeLocation = params.get('location');

const results = document.querySelector('#results');

results.textContent =
    `First Name: ${firstName}
     Last Name: ${lastName}
     Phone: ${phone}
     Email: ${email}
     Ordinance: ${ordinance}
     Date: ${date}
     location: ${templeLocation}`;
