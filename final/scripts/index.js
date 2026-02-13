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