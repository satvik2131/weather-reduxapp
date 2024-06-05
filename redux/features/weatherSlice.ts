"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import {
  getCurrDay,
  getCurrTime,
  getWeatherDetailsWithLongLat,
  getWeeklyWeatherData,
} from "@/app/Components/utils/utilitymethods";
import { initialWeatherData, WeatherData } from "@/app/Data/weathersummarydata";

const initialState: WeatherData =
  initialWeatherData satisfies WeatherData as WeatherData;

export const fetchWeather = createAsyncThunk(
  "currentweather/getweather",
  async (name, { getState }) => {
    try {
      const state: RootState = getState() as RootState;
      const long = state.locations.long;
      const lat = state.locations.lat;

      const currentWeather: WeatherData = await getWeatherDetailsWithLongLat({
        long: long,
        lat: lat,
      });

      const weeklyData = await getWeeklyWeatherData(lat, long);

      return { currentWeather: currentWeather, weeklyData: weeklyData };
    } catch (e) {
      console.log(e);
    }
  }
);

export const currentWeatherSlice = createSlice({
  name: "currentweather",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        // state.weather[0].loading = true;
        // state.weather[0].error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        // state.weather[0].loading = false;
        if (action.payload != undefined) {
          state.weather = action.payload.currentWeather.weather;
          state.main = action.payload.currentWeather.main;
          const dt = action.payload.currentWeather.dt;
          const countryCode = action.payload.currentWeather.sys.country;
          const day = getCurrDay(dt);
          const time = getCurrTime(countryCode);
          state.day = day;
          state.time = time;
          state.weeklyData = action.payload.weeklyData;
        }
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        // state.weather[0].loading = false;
        console.log(action.payload);
      });
  },
});

export default currentWeatherSlice.reducer;
