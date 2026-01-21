// WEATHER
const currentWeather = document.querySelector('.current-weather');
const forecast = document.querySelector('.forecast');

const fetchWeather = (url) => {
    return fetch(url);
}

async function displayWeather() {
    const response = await fetchWeather('https://api.openweathermap.org/data/2.5/weather?lat=22.33&lon=114.16&units=metric&appid=d51bd02fc76df6b1c37275628296cc7e');
    const data = await response.json();
    console.log(data);

    let currentTemp = document.createElement('p');
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;

    let weatherDesc = document.createElement('p');
    weatherDesc.textContent = `${data.weather[0].description}`;

    let weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('SRC', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    weatherIcon.setAttribute('alt', data.weather[0].description);

    currentWeather.appendChild(weatherIcon);
    currentWeather.appendChild(currentTemp);
    currentWeather.appendChild(weatherDesc);
}

displayWeather();

async function displayForecast() {
    const response = await fetchWeather('https://api.openweathermap.org/data/2.5/forecast?lat=22.33&lon=114.16&units=metric&appid=d51bd02fc76df6b1c37275628296cc7e');
    const data = await response.json();
    console.log(data);

    let day0 = document.createElement('p');
    day0.innerHTML = `Today: ${data.list[0].main.temp}&deg;C`;

    let day1 = document.createElement('p');
    day1.innerHTML = `Tomorrow: ${data.list[1].main.temp}&deg;C`;

    let day2 = document.createElement('p');
    day2.innerHTML = `Day After: ${data.list[2].main.temp}&deg;C`;

    forecast.appendChild(day0);
    forecast.appendChild(day1);
    forecast.appendChild(day2);
}

displayForecast();

// SPOTLIGHT
const display = document.querySelector('.spotlight');

async function displayMember() {
    display.innerHTML = "";
    const response = await fetch('data/members.json');
    const data = await response.json();

    const filterMembers = data.filter(member =>
        member.level === 2 || member.level === 3
    );
    const random = filterMembers.sort(() => 0.5 - Math.random());
    const spotlightMembers = random.slice(0, 3);

    spotlightMembers.forEach((member) => {
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

displayMember();