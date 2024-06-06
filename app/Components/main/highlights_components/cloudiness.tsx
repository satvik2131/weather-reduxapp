import React from "react";
import BaseCard from "./basecard";
import { WeatherData } from "@/app/Data/weathersummarydata";

const Cloudiness = ({ weatherData }: { weatherData: WeatherData }) => {
  return (
    <BaseCard>
      <p className="text-gray-400">Cloudiness</p>
      <p className="text-5xl text-center pt-8">{weatherData.clouds.all}%</p>
    </BaseCard>
  );
};

export default Cloudiness;
