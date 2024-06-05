"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import {
  Country,
  ICountry,
  State,
  City,
  IState,
  ICity,
} from "country-state-city";

interface SearchState {
  countries: ICountry[];
  states: IState[];
  cities: ICity[];
  location: ICity[] | IState[] | ICountry[];
  selectedLocation: string;
  lat: number;
  long: number;
}

const initialState: SearchState = {
  countries: Country.getAllCountries(),
  states: State.getAllStates(),
  cities: City.getAllCities(),
  location: [],
  selectedLocation: "India",
  lat: 20.5937,
  long: 78.9629,
} satisfies SearchState as SearchState;

export const locationSlice = createSlice({
  name: "locationList",
  initialState,
  reducers: {
    filterLocation: (state, action: PayloadAction<{ query: string }>) => {
      //location name in input
      const searchQuery = action.payload.query.toLowerCase();

      state.location = state.countries.filter((country) =>
        country.name.toLowerCase().startsWith(searchQuery)
      );

      if (state.location.length === 0) {
        state.location = state.states.filter((currState) =>
          currState.name.toLowerCase().startsWith(searchQuery)
        );
      }

      if (state.location.length === 0) {
        state.location = state.cities.filter((city) =>
          city.name.toLowerCase().startsWith(searchQuery)
        );
      }
    },

    setSelectedLocation: (
      state,
      action: PayloadAction<{
        selectedLocation: string;
        lat: number;
        long: number;
      }>
    ) => {
      console.log(action.payload.selectedLocation);

      state.selectedLocation = action.payload.selectedLocation;
      state.lat = action.payload.lat;
      state.long = action.payload.long;
    },
  },
});

export const locationList = (state: RootState) => state.locations.location;

export const { filterLocation, setSelectedLocation } = locationSlice.actions;

export default locationSlice.reducer;
