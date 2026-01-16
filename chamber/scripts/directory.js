// Member Display
const display = document.querySelector('#members');

const fetchData = () => {
    return fetch('data/members.json');
}

async function displayGrid() {
    display.innerHTML = "";
    const response = await fetchData();
    const data = await response.json();
    members = data;
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let url = document.createElement('p');
        let level = document.createElement('p');
        let image = document.createElement('img');

        name.textContent = `${member.name}`;
        address.textContent = `Address: ${member.address}`;
        phone.textContent = `Phone Number: ${member.phone}`;
        url.textContent = `Website: ${member.url}`;
        level.textContent = `Membership Level: ${member.level}`;

        image.setAttribute('src', member.image);
        image.setAttribute('alt', `${member.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '250');
        image.setAttribute('height', '290');

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);
        card.appendChild(level);
        card.appendChild(image);

        display.appendChild(card);
    });
}

async function displayList() {
    display.innerHTML = "";
    const response = await fetchData();
    const data = await response.json();
    members = data;
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('p');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let url = document.createElement('p');

        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        url.textContent = `${member.url}`;

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);

        display.appendChild(card);
    });
}

displayGrid();

// Grid and list toggle
const gridbutton = document.querySelector("#grid-btn");
const listbutton = document.querySelector("#list-btn");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
	display.classList.remove("list");
	displayGrid();
});

listbutton.addEventListener("click", () => {
    display.classList.add("list");
	display.classList.remove("grid");
    displayList();
});