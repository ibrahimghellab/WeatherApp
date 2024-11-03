# 🌤️ WeatherApp

**WeatherApp** is a web application that lets users check real-time weather information for any location 🌍. Users can input a country and city to retrieve the current temperature, humidity, and "feels like" temperature. The app also automatically detects the user's IP location on load to display local weather initially.

## ✨ Features

- **🌐 Real-Time Weather Data**: Get the latest weather information for any location.
- **📍 Automatic Location Detection**: Automatically detects your location based on your IP to show local weather upon loading.
- **🔍 Search by Location**: Users can enter a specific country and city to fetch weather data.
- **🌡️ Fahrenheit to Celsius Conversion**: Temperature is displayed in Celsius for easy reading.

## 🛠️ Technologies

- **HTML/CSS**: Structure and styling of the application.
- **JavaScript**: Handles the logic and API calls.
- **APIs Used**:
  - **ipify**: Retrieves the user's IP address.
  - **ip-api**: Provides geolocation based on IP.
  - **Visual Crossing Weather API**: Supplies the weather data.
  - **API Ninjas Geocoding API**: Geocodes user-inputted locations.

## 🚀 Getting Started

### Prerequisites

- 💻 A web browser.
- 🌐 Internet connection for API requests.

### Setup

1. 📂 Clone the repository or download the project files.
2. Make sure to have a `style.css` file for styling.
3. 🔑 Replace the API keys in `app.js` with your own:
   - `F35BBHUQQFCZ2EDBV78NKVA5Q` for Visual Crossing Weather API.
   - `WRLI16tJ5l4Y0hkzMlJKKg==iN6EaOCtq7QsI9jQ` for API Ninjas Geocoding API.

### Running the Application

1. Open `index.html` in your browser.
2. The app will automatically detect your location and display local weather.
3. To search weather for a different location:
   - Enter the country and city.
   - Click the **"Get Weather"** button.

## 📁 Project Structure

- `index.html`: Main HTML file.
- `style.css`: Stylesheet for the app.
- `app.js`: JavaScript file that manages API requests and updates the DOM.

## 💡 Usage

1. **Auto Weather Display**: On page load, the app fetches weather data based on IP location.
2. **Search for Weather**: Enter a city and country in the fields, then click “Get Weather” to display the weather data.

## 🌈 Example

For example, entering "France" and "Paris" and clicking **"Get Weather"** will display:
- 📅 The date.
- 🌡️ Current temperature in Celsius.
- 👕 "Feels like" temperature.
- 💧 Humidity percentage.
- 🌤️ Weather icon.

## 📜 License

This project is for educational purposes only. Please review and comply with each API provider's terms of use.
