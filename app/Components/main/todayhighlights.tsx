"use client";
import React from "react";
import SeaLevel from "./highlights_components/sealevel";
import WindStatus from "./highlights_components/windstatus";
import Humidity from "./highlights_components/humidity";
import Visibility from "./highlights_components/visibility";
import SunriseAndSunset from "./highlights_components/sunriseandsunset";
import Cloudiness from "./highlights_components/cloudiness";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store/store";
import { WeatherData } from "@/app/Data/weathersummarydata";

const TodayHighlights = () => {
  const weather: WeatherData = useAppSelector(
    (state: RootState) => state.weathercondition
  );

  return (
    <div>
      <p className="text-2xl font-extrabold font-medium">
        Today&apos;s Highlights
      </p>
      <div className="grid sm:grid-rows-5 md:grid-rows-4 lg:grid-rows-3 xl:grid-rows-2  grid-flow-col gap-5 pt-7">
        <SeaLevel weatherData={weather} />
        <Humidity weatherData={weather} />
        <WindStatus weatherData={weather} />
        <Visibility weatherData={weather} />
        <SunriseAndSunset weatherData={weather} />
        <Cloudiness weatherData={weather} />
      </div>
    </div>
  );
};

export default TodayHighlights;
