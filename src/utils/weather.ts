import apiService from "../services/apiService";
import { MOCK_COUNTRIES } from "../mock";

async function fetchWeatherData(countryName: string): Promise<any> {
  const { data, error } = await apiService.get(`${countryName}?format=j1`);
  if (error) {
    console.error(`Error fetching weather data for ${countryName}:`, error);
  }
  return data.current_condition[0];
}

export async function initializeCountriesWithWeather() {
  const countriesWithWeather = await Promise.all(
    MOCK_COUNTRIES.map(async (country) => {
      const weather = await fetchWeatherData(country.name);
      return {
        ...country,
        weather: weather
          ? weather.weatherDesc[0].value + ' ' + weather.temp_C + ' °C'
          : null,
      };
    })
  );
  return countriesWithWeather;
}
