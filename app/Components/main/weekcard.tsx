"use client";
import { WeatherData, WeeklyData } from "@/app/Data/weathersummarydata";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store/store";
import React, { useEffect, useState } from "react";
import ForecasteImage from "../sidebar/forecasteimage";

const WeekCard = ({ day, index }: { day: string; index: number }) => {
  const weeklydata = useAppSelector(
    (state: RootState) => state.weathercondition.weeklyData
  );

  const weeklyData: WeeklyData = weeklydata;
  // console.log(currDay);

  const currDay = weeklyData.list.at(index);
  const temp = currDay?.main.temp;
  const iconName = currDay?.weather.at(0)?.icon;

  return (
    <div className="flex flex-col items-center p-2 space-y-3 m-5 rounded-xl w-auto h-auto shadow-xl border-black border-solid">
      <p className="font-medium">{day}</p>
      <ForecasteImage name={iconName} />
      <p className="font-medium">{temp}&deg;</p>
    </div>
  );
};

export default WeekCard;
