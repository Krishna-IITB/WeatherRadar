

'use strict'
// const api_key = "e925da0341a2f76c180b174eed23df15";
const api_key = "6c98b32298347f628e6f2ffae994a2f9";

/**
 * Fetch data from server
 * @param {string} URL API url
 * @param {Function} callback callback
 */
export const fetchData = function (URL, callback) {
    fetch(`${URL}&appid=${api_key}`)
        .then(res => res.json())
        .then(data => callback(data));
}







export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric&appid=${api_key}`
    },
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric&appid=${api_key}`
    },
    airPollution(lat, lon) {
        return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}&appid=${api_key}`
    },
    reverseGeo(lat, lon) {
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5&appid=${api_key}`
    },
    /**
     * @param {string} query Search query e.g.: "London", "New York" 
     */
    geo(query) {
        return `http://api.openweathermap.org/geo/1.0/direct?${query}&limit=5&appid=${api_key}`
    }


}


