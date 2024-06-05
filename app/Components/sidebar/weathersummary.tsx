"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store/store";
import ForecasteImage from "./forecasteimage";
import { useEffect, useState } from "react";
import { fetchWeather } from "@/redux/features/weatherSlice";

export const WeatherSummary = () => {
  const weather = useAppSelector((state: RootState) => state.weathercondition);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWeather());
  });

  return (
    <>
      <ForecasteImage name={weather.weather.at(0)?.icon} />
      <div className="px-5 sm:space-y-4 md:space-y-6 lg:space-y-10 xl:space-y-6 2xl:space-y-16 ">
        <div className="py-5 space-y-8">
          <p className=" sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-sans">
            {weather.main.temp}&deg;<sup>c</sup>
          </p>
          <div className="space-x-3 pl-2 sm:text-sm md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
            <span className="font-bold font-mono">{weather.day},</span>
            <span className="font-light text-slate-600">{weather.time}</span>
          </div>
          <hr />
        </div>

        <div className="space-y-5 font-semibold">
          <p>{weather.weather.at(0)?.description}</p>
          <p>Rain - {weather.rain["1h"]}%</p>
        </div>
      </div>
    </>
  );
};
