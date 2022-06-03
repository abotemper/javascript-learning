 //this forecast is for interacting with the APIs 

const key = 'o8A2W5xGSY2kUAieIxpLhJSmHUf33Agv';

//get weather information//207931
const getWeather =async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    
    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};

//get city information
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    //console.log(data[0]);//first one is closest match

    return data[0];

};

// getCity('dublin')
//     .then(data => console.log(data))//the data[0] pass to here
//     .catch(err => console.log(err));

// getWeather("207931")
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// getCity('dublin').then(data => {
//         return getWeather(data.Key);
// }).then(data => {
//         console.log(data);
//     })
//   .catch(err => console.log(err));
