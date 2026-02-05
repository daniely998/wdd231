// Places
import {places} from '../data/places.mjs';

const display = document.querySelector('#places');

function displayItems(data) {
    data.forEach(place => {
        let card = document.createElement('section');
        card.className = 'places-card';
        
        card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
            <img src="${place.photo_url}" alt="${place.name}" width=300 height=200 loading=lazy>
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button>Learn more</button>
        `;

        display.appendChild(card);
    })
}

displayItems(places)

// Welcome Message
const welcome = document.querySelector("#welcome");
const msToDays = 86400000;

let lastVisit = window.localStorage.getItem("lastVisit");

const today = Date.now();


let daysDif = 0;
if (lastVisit !== null) {
    daysDif = Math.floor((today - lastVisit) / msToDays);
}

welcomeMessage();

function welcomeMessage() {
    let message;
    if (lastVisit == null) {
        message = "Welcome! Let us know if you have any questions.";
    }
    else if (daysDif < 1) {
        message = "Back so soon! Awesome!";
    }
    else  if (daysDif === 1) {
        message = `You last visited 1 day ago.`;
    }
    else {
        message = `You last visited ${daysDif} days ago.`;
    }
    welcome.textContent = message;
}

localStorage.setItem("lastVisit", today);