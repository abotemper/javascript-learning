 class Forecast{
     constructor(){
         this.key = 'o8A2W5xGSY2kUAieIxpLhJSmHUf33Agv';
         this.weatherURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
         this.cityURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
     }
     async updateCity(city){
        //because we put forecast.js above the app.js, so before we use it's function in the app.js
        //the functions is already defined
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
        // return {
        //     cityDets: cityDets,
        //     weather: weather,
        // };
        return {cityDets, weather};// same
        }
     async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURL+ query);
        const data = await response.json();
        //console.log(data[0]);//first one is closest match
        return data[0];
    }
    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURL + query);
        const data = await response.json();
        return data[0];
    }

 }
 
 
 
 
 //this forecast is for interacting with the APIs 




// const key = 'o8A2W5xGSY2kUAieIxpLhJSmHUf33Agv';

// //get weather information//207931
// const getWeather =async (id) => {
//     const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
//     const query = `${id}?apikey=${key}`;
    
//     const response = await fetch(base + query);
//     const data = await response.json();

//     return data[0];

// };

// //get city information
// const getCity = async (city) => {
//     const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     const query = `?apikey=${key}&q=${city}`;

//     const response = await fetch(base + query);
//     const data = await response.json();

//     //console.log(data[0]);//first one is closest match

//     return data[0];

// };

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
