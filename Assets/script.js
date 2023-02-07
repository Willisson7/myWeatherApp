// var weather = $('')
var weatherKey = "6040b55b9139f3c39b946cd8cf88aa08";
var search = document.querySelector('.fa-search')

// add function that passes in cityInput value and get coordinates of that city
function coordinates(city) {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=` + city + `&limit=5&appid=` + weatherKey)

        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            currentWeather(data[0].lat, data[0].lon)
        }
        );
}
// add current weather function that passes in coordinates in order to receive current api call
// fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=` + weatherKey)

function currentWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=` + weatherKey)

        .then((response) => response.json())
        .then((data) => {
            console.log(data)
         var humidity = document.createElement('p')      
         humidity.textContent=data.main.humidity+ '%'
            document.querySelector('.humidity').append(humidity);





        }
        );


}
// add function to receive forecast

// Click event for search button that grabs city input value
search.addEventListener('click', function () {
    var input = document.querySelector('.userInput').value
    console.log(input);
    coordinates(input);
})