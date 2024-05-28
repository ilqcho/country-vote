import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MOCK_COUNTRIES } from '../mock';
import type { CountriesState } from '../types/types';

const initialState: CountriesState = {
  countries: MOCK_COUNTRIES,
  searchQuery: '',
  hasVoted: false,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setHasVoted: (state, action: PayloadAction<boolean>) => {
      state.hasVoted = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setHasVoted, setSearchQuery } = countriesSlice.actions;

export const selectCountriesState = (state: { countries: CountriesState }) => state.countries;
export const selectFilteredCountries = createSelector(
  [selectCountriesState],
  ({ countries, searchQuery }: CountriesState) => {
    return countries
      .filter(country =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.capital_city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.sub_region.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => b.votes - a.votes);
  }
);

export default countriesSlice.reducer;