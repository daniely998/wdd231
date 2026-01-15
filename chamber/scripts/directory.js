async function fetchData() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    // displayProphets(data.prophets);
}

fetchData();