//dom manipulation and event handeling
const cityForm = document.querySelector('form');

const card = document.querySelector('.card');
const details = document.querySelector('.details');

const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const forecast = new Forecast();

console.log(forecast);

const updateUI = (data) => {
    // const cityDets = data.cityDets;
    // const weather = data.weather;

    //destructure properties
    const { cityDets, weather } = data;//in the{}, it must use same name in data properties
    //exactlly same with things above
    console.log(data);

    //update details template
    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;</span>
        </div>
    `;
    
    //update the night/day & icon images
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    // console.log(icon);
    icon.setAttribute('src', iconSrc);

    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

    // if(weather.IsDayTime){
    //     timeSrc = 'img/day.svg';
    // }else{
    //     timeSrc = 'img/night.svg';
    // }

    time.setAttribute('src', timeSrc);


    //remove the d-done class if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
};

// const updateCity = async (city) => {
//     // console.log(city);
//     //because we put forecast.js above the app.js, so before we use it's function in the app.js
//     //the functions is already defined
//     const cityDets = await getCity(city);
//     const weather = await getWeather(cityDets.Key);

//     // return {
//     //     cityDets: cityDets,
//     //     weather: weather,
//     // };

//     return {cityDets, weather};// same

// }

cityForm.addEventListener('submit', e => {
    //prevent default actions

    e.preventDefault();

    //get city value 
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update the ui with new city
    forecast.updateCity(city)
     .then(data => updateUI(data))
     .catch(err => console.log(err));

     //set local storage

     localStorage.setItem('city', city);

});

if(localStorage.getItem('city')){
    forecast.updateCity(localStorage.getItem('city'))
      .then(data => updateUI(data))
      .catch(err => console.log(err));
}