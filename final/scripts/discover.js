import {books} from '../data/books.mjs';

const display = document.querySelector('#book');

function displayItems(data) {
    data.forEach(book => {
        let card = document.createElement('section');
        card.className = 'book-card';
        
        card.innerHTML = `
        <h2>${book.title}</h2>
        <figure>
            <img src="${book.image}" alt="${book.title}" width=300 height=300 loading=lazy>
        </figure>
        <p>Author: ${book.author}</p>
        <p>Publish Date: ${book.publish_date}</p>
        <p>ISBN: ${book.ISBN}</p>
        `;

        display.appendChild(card);
    })
}

displayItems(books);