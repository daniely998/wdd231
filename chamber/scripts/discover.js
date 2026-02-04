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