# WeatherApp

WeatherApp is a web application that allows users to get real-time weather information for a specific location. Users can input a country and city to fetch the current weather, including temperature, humidity, and "feels like" temperature. The app also automatically fetches the user's IP location data on load to display local weather initially.

## Features

- **Real-Time Weather Data**: Get the latest weather information for a specific location.
- **Automatic Location Detection**: On load, the app detects the user’s location using their IP address to show local weather.
- **User Input for Location**: Users can enter a country and city to retrieve weather data for any location.
- **Fahrenheit to Celsius Conversion**: Temperature is displayed in Celsius.

## Technologies

- **HTML/CSS**: For the structure and styling of the application.
- **JavaScript**: For handling the logic and API calls.
- **API Integration**:
  - **ipify**: For retrieving the user's IP address.
  - **ip-api**: For geolocation based on the user’s IP.
  - **Visual Crossing Weather API**: For weather data.
  - **API Ninjas Geocoding API**: For geocoding user input locations.

## Getting Started

### Prerequisites

- A web browser.
- Internet connection for API requests.

### Setup

1. Clone the repository or download the project files.
2. Make sure you have a `style.css` file in the same directory to handle the app's styling.
3. Replace the API keys in the `app.js` file with your own:
   - `F35BBHUQQFCZ2EDBV78NKVA5Q` for Visual Crossing Weather API.
   - `WRLI16tJ5l4Y0hkzMlJKKg==iN6EaOCtq7QsI9jQ` for API Ninjas Geocoding API.

### Running the Application

1. Open `index.html` in your web browser.
2. The app will automatically detect your location and display the local weather.
3. To search for weather in a different location:
   - Enter the country and city.
   - Click the "Get Weather" button.

## Project Structure

- `index.html`: Main HTML file for the app.
- `style.css`: Stylesheet for the app.
- `app.js`: JavaScript file handling the API requests and DOM updates.

## Usage

1. **Automatic Weather Display**: On page load, the app shows weather data based on your IP location.
2. **Search for Weather**: Enter the desired city and country in the input fields and click “Get Weather” to display the weather data.

## Example

Upon entering “France” and “Paris” in the input fields and clicking “Get Weather,” the app displays:
- The date.
- Current temperature in Celsius.
- "Feels like" temperature.
- Humidity percentage.
- Weather icon.

## License

This project is for educational purposes only. Be sure to review and comply with the API providers' terms of use.
