import { getWeeklyWeatherData } from "../Components/utils/utilitymethods";

interface Coord {
  lon: number;
  lat: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Rain {
  "1h": number;
}

interface Clouds {
  all: number;
}

interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WeatherData {
  coord: Coord;
  weather: Weather[];
  base: string;
  day: string;
  time: string;
  main: Main;
  visibility: number;
  wind: Wind;
  rain: Rain;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
  weeklyData: WeeklyData;
}

export interface WeeklyData {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherData[];
}

export const initialWeatherData: WeatherData = {
  coord: {
    lon: 72.85,
    lat: 19.01,
  },
  weather: [
    {
      id: 802,
      main: "Clouds",
      description: "scattered clouds",
      icon: "03d",
    },
  ],
  base: "stations",
  day: "",
  time: "",
  main: {
    temp: 303.15, // Example temperature in Kelvin
    feels_like: 308.15, // Example feels like temperature
    temp_min: 300.15, // Example minimum temperature
    temp_max: 305.15, // Example maximum temperature
    pressure: 1010, // Example pressure in hPa
    humidity: 75, // Example humidity in %
    sea_level: 1010, // Example sea level pressure
    grnd_level: 1008, // Example ground level pressure
  },
  visibility: 8000, // Example visibility in meters
  wind: {
    speed: 3.6, // Example wind speed in meters/second
    deg: 210, // Example wind direction in degrees
    gust: 7.2, // Example wind gust in meters/second
  },
  rain: {
    "1h": 0.0, // Example rain volume in last 1 hour in mm
  },
  clouds: {
    all: 40, // Example cloudiness in %
  },
  dt: 1661870592, // Example timestamp (Unix time)
  sys: {
    type: 2,
    id: 2040257, // Example system ID
    country: "IN", // Country code for India
    sunrise: 1661818087, // Example sunrise time (Unix time)
    sunset: 1661862737, // Example sunset time (Unix time)
  },
  timezone: 19800, // Example timezone offset in seconds (UTC+5:30 for India)
  id: 1275339, // Example city ID for Mumbai
  name: "Mumbai", // Name of the city
  cod: 200, // HTTP status code
  weeklyData: {
    cod: "200",
    message: 0,
    cnt: 40,
    list: [],
  },
};
