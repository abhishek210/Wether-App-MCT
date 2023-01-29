const searchInput = document.getElementById("input")
async function wetherSearch() {

    const cityName = searchInput.value
    if (cityName == "") {
        card.classList.remove("card")
        card.innerHTML = ""
        const alert = document.getElementById("alert")
        alert.innerHTML = "Please Enter a Valid City Name"
    } else {
        const Responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d8ab14f7e93c56cbe84562d28e8202bd&units=metric`)
        const data = await Responce.json()
        console.log(data.name);
        if (data.name == undefined) {
            card.classList.remove("card")
            card.innerHTML = ""
            const alert = document.getElementById("alert")
            alert.innerHTML = "Please Enter a Valid City Name"

        }
        else {
            const alert = document.getElementById("alert")
            alert.innerHTML = ""
            const card = document.getElementById("card")
            card.classList.add("card")
            card.innerHTML = `<h1>Weather of ${cityName}</h1>
            <h3>Sky-Condition: ${data.weather[0].main}</h3>
            <h3>Temperature: ${data.main.temp} C </h3>
            <h3>WindSpeed: ${data.wind.speed} Km/h</h3>
            <h3>Feel-like: ${data.main.feels_like} C</h3>
            <h3>Latitude: ${data.coord.lat} </h3>
            <h3>Longitude: ${data.coord.lon} </h3>`
        }

    }
}