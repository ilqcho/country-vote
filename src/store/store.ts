import { configureStore } from '@reduxjs/toolkit';
import countriesReducer, { setCountries } from '../slices/countriesSlice';
import { initializeCountriesWithWeather } from '../utils/weather';

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

// Initialize the state with weather data
initializeCountriesWithWeather().then(countries => {
  store.dispatch(setCountries(countries));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;