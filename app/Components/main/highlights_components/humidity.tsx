import React from "react";
import BaseCard from "./basecard";
import { WeatherData } from "@/app/Data/weathersummarydata";

const Humidity = ({ weatherData }: { weatherData: WeatherData }) => {
  return (
    <BaseCard>
      <p className="text-gray-400">Humidity</p>
      <p className="text-5xl text-center pt-8">{weatherData.main.humidity}%</p>
    </BaseCard>
  );
};

export default Humidity;
