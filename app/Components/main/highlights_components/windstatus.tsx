import React from "react";
import BaseCard from "./basecard";
import { WeatherData } from "@/app/Data/weathersummarydata";

const WindStatus = ({ weatherData }: { weatherData: WeatherData }) => {
  return (
    <BaseCard>
      <p className="text-gray-400">Wind Status</p>
      <p className="text-5xl text-center pt-6">
        {weatherData.wind.speed}
        <sub className="text-xl text-slate-600 font-mono">M/sec</sub>
      </p>
    </BaseCard>
  );
};

export default WindStatus;
