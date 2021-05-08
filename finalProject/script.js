$(document).ready(function() {
    $('#weatherIcon');
    updateWeather().then(function() {
        alert('run');
    });
})

async function updateWeather() {
    let result = await axios({
        method: 'GET',
        url: `https://api.weather.gov/points/39.7456,-97.0892`,
    })
    console.log(result);
}