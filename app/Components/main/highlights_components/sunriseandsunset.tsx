import React from "react";
import BaseCard from "./basecard";
import { WeatherData } from "@/app/Data/weathersummarydata";

const SunriseAndSunset = ({ weatherData }: { weatherData: WeatherData }) => {
  const sunrise = new Date(weatherData.sys.sunrise).toLocaleTimeString();
  const sunset = new Date(weatherData.sys.sunset).toLocaleTimeString();
  return (
    <BaseCard className="space-y-4">
      <p className="text-gray-400">Sunrise & Sunset</p>
      <p className="text-xl text-center">{sunrise}</p>
      <p className="text-xl text-center">{sunset}</p>
    </BaseCard>
  );
};

export default SunriseAndSunset;
