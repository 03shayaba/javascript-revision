// const apiKey = 'b57eddb6254701aa9c9076ec8eef2c3d';
        async function getWeather(city) {
            const weatherResult = document.getElementById('weatherResult');
            weatherResult.textContent = 'Loading...';

            try {
                const response = await fetch(
                    `http://localhost:5000/api/weather?city=${city}`
                );
                console.log(response)
                if (!response.ok) {
                    throw new Error('City not Found');
                }

                const data = await response.json();
                // console.log(data);


                weatherResult.innerHTML = `
                <h2>weather in ${data.name}</h2>
                <p>Temprature: ${data.main.temp}℃</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Conditions : ${data.weather[0].description} </p>`;
            } catch (error) {
                weatherResult.textContent = 'Error:' + error.message;
            }
        }

        document.getElementById('getweatherBtn').addEventListener('click', (e) => {
            e.preventDefault();
            const city = document.getElementById('cityInput').value.trim();
            if (city) {
                getWeather(city);
            }
        });
