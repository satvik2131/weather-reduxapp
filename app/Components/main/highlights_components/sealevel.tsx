import React from "react";
import BaseCard from "./basecard";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store/store";
import { WeatherData } from "@/app/Data/weathersummarydata";

const SeaLevel = ({ weatherData }: { weatherData: WeatherData }) => {
  return (
    <BaseCard className="space-y-3">
      <p className="text-gray-400">Sea Level</p>
      <p className="text-center font-semibold font-mono">
        {weatherData.main.sea_level} hPa
      </p>
      <div className="flex justify-center items-center">
        <img className="w-16" src="others/sea-level.png" />
      </div>
    </BaseCard>
  );
};

export default SeaLevel;
