const params = new URLSearchParams(window.location.search);

const firstName = params.get('firstName');
const lastName = params.get('lastName');
const email = params.get('email');
const phone = params.get('phone');
const organization = params.get('organization');
const timestamp = params.get('timestamp');

const results = document.querySelector('#results');

results.textContent =
    `First Name: ${firstName}
     Last Name: ${lastName}
     Email: ${email}
     Mobile Phone: ${phone}
     Business Name: ${organization}
     Application Date: ${timestamp}`;