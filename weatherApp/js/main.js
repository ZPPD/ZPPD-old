//Weather Info
const apiWeather = '37fb33f8722d429e9ad173911182208';

//Forsquare Info
const clientId = 'IHY5FUW1TKABZMMAPWEDXMSFDUI40BT0S01C0EWHZ4PUGT3J';
const clientSecret = 'P1NPME4VBIXTF1VSBVINQUFJFUESWIA5ZZ24VJ0ZKIXULO2V';

//get dom elements
//const input = document.querySelector('.input');
const submit = document.querySelector('.btn');
//const container = document.querySelector('.container');
//const venues = document.querySelector('#venues');
//const weather = document.querySelector('#weather');
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


//submit event listener
submit.addEventListener('click', e => {
  const input = document.querySelector('.input').value;
  const destination = document.querySelector('.destination');
  //display the input
  destination.innerHTML = input;
  e.preventDefault();
  //validate input
  if (!input) {
    showAlert('Please enter a city');
    return;
  }
  input.value = '';

  //fetch Weather API
  fetch(`https://api.apixu.com/v1/forecast.json?key=${apiWeather}&q=${input}&days=4&hour=11`)
    .then(res => res.json())
    .then(data => showWeather(data.forecast.forecastday))
    .catch(err => console.log(err));

  //fetch forsquare API
  fetch(`https://api.foursquare.com/v2/venues/explore?client_id=${clientId}&client_secret=${clientSecret}&v=20180323&limit=10&near=${input}`)
    .then(res => res.json())
    .then(data => showVenues(data.response.groups[0].items))
    .catch(err => console.log(err));

  //showWeather
  function showWeather(forecast) {
    const weather = document.querySelector('#weather');
    weather.innerHTML = '';

    //loop through the weather
    forecast.forEach(currentDay => {
      console.log(currentDay);
      const div = document.createElement('div');
      div.className = 'forecast';
      div.innerHTML = `
        <div class="weather">
        <h2 class="temp">High: <strong>${currentDay.day.maxtemp_f}&deg; F / ${currentDay.day.maxtemp_c}&deg; C</strong></h2>
        <h2 class="temp">Low: <strong>${currentDay.day.mintemp_f}&deg; F / ${currentDay.day.mintemp_c}&deg; C </strong></h2>
        <p>Humidity: ${currentDay.day.avghumidity}%</p>
        <img src="https://${currentDay.day.condition.icon}" class="weathericon">
        <p>${currentDay.day.condition.text}</p>
        <h2>${weekDays[(new Date(currentDay.date)).getDay()]}</h2>
        </div>
      `;
      weather.appendChild(div);

    });
  }

  //show Venues
  function showVenues(places) {
    const venues = document.querySelector('#venues');
    venues.innerHTML = '';

    //loop through the venues
    places.forEach(place => {
      console.log(place);
      const img = place.venue.categories[0].icon;
      const imgSrc = `${img.prefix}bg_64${img.suffix}`;
      const div = document.createElement('div');
      div.className = 'places';
      div.innerHTML = `
        <div class="venue">
        <h2 class='venueName'>${place.venue.name}</h2>
        <img class="venueImg" src="${imgSrc}">
        <h3 class="address">Address:</h3>
        <p class="street">${place.venue.location.address} <br>
        ${place.venue.location.city}, ${place.venue.location.country}</p>
        </div>
      `;
      venues.appendChild(div);
    });
  }

});


//show alert function
function showAlert(message) {
  //create div
  const div = document.createElement('div');
  //add classes
  div.className = 'alert';
  //add text
  div.appendChild(document.createTextNode(message));
  //get container
  const container = document.querySelector('.container');
  //get weather
  const destination = document.querySelector('.destination');
  //insert before destination in container
  container.insertBefore(div, destination);

  //time out
  setTimeout(() => document.querySelector('.alert').remove(), 3000);
}
