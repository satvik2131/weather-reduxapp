import React from "react";
import BaseCard from "./basecard";
import { WeatherData } from "@/app/Data/weathersummarydata";

const Visibility = ({ weatherData }: { weatherData: WeatherData }) => {
  return (
    <BaseCard>
      <p className="text-gray-400">Visibility</p>
      <p className="text-5xl text-center pt-8">
        {weatherData.visibility}
        <sub className="text-xl font-mono text-slate-600">km</sub>
      </p>
    </BaseCard>
  );
};

export default Visibility;
