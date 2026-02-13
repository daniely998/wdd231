// prompt
const prompt = document.querySelector('#prompt');

const fetchWord = () => {
    return fetch('https://random-word-api.herokuapp.com/word?');
}

async function displayWord() {
    try {
        const response = await fetchWord();
        const data = await response.json();
        console.log(data);

        let word = document.createElement('p');
        word.textContent = data[0];

        prompt.appendChild(word);
    } catch (error) {
        console.error(error);
    }
    
}

displayWord();

// welcome message
const welcome = document.querySelector("#welcome");

let lastVisit = window.localStorage.getItem("lastVisit");

const visited = true;

welcomeMessage();

function welcomeMessage() {
    let message;
    if (lastVisit == null) {
        message = "Hello and Welcome! Free feel to explore!";
    }
    else {
        message = "Welcome back! What are you looking for?";
    }
    welcome.textContent = message;
}

localStorage.setItem("lastVisit", visited);