const display = document.querySelector('#book');

const fetchData = () => {
    return fetch('data/books.json');
}

async function displayItems() {
    try {
        const response = await fetchData();
        const data = await response.json();
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
            <button>Learn more</button>
            `;

            display.appendChild(card);
        });
    } catch (error) {
        console.error(error);
    }
}

displayItems();