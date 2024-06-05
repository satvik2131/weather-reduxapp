import { WeatherData, WeeklyData } from "@/app/Data/weathersummarydata";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store/store";
import { Country, ICountry } from "country-state-city";

const BASE_API = "https://api.openweathermap.org/data/2.5";

export const getWeatherDetailsWithLongLat = async ({
  long,
  lat,
}: {
  long: number;
  lat: number;
}) => {
  const apitogetweatherdata = `${BASE_API}/weather?lat=${lat}&lon=${long}&appid=${process.env.NEXT_PUBLIC_KEY_WEATHERKEY}&units=metric`;
  const resp = await fetch(apitogetweatherdata);
  const weatherdata: WeatherData = await resp.json();
  return weatherdata;
};

export const getCurrDay = (dt: number): string => {
  const date = new Date(new Date(dt * 1000));
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayNo = date.getDay();
  return week[dayNo];
};

export const getCurrTime = (countryCode: string) => {
  const country: ICountry = Country.getCountryByCode(countryCode)!!;
  if (country != undefined) {
    const zoneName: string = country.timezones?.at(0)?.zoneName!!;
    const time = new Date().toLocaleTimeString("en-US", {
      timeZone: zoneName,
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h24",
    });
    return time;
  }
  return "";
};

export const getWeeklyWeatherData = async (lat: number, long: number) => {
  const apiToFetch5daysWeatherData = `${BASE_API}/forecast?lat=${lat}&lon=${long}&appid=${process.env.NEXT_PUBLIC_KEY_WEATHERKEY}&units=metric`;
  const resp = await fetch(apiToFetch5daysWeatherData);
  const weatherData: WeeklyData = await resp.json();
  return weatherData;
};
