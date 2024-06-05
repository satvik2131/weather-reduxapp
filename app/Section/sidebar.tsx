import React from "react";
import { SearchBarInput } from "../Components/sidebar/searchbar";
import LocationImageCard from "../Components/sidebar/locationimagecard";
import { WeatherSummary } from "../Components/sidebar/weathersummary";

export const Sidebar = () => {
  return (
    <aside
      className="flex fixed top-0 left-0 px-10 py-3 gap-9 flex-col z-0 relative w-1/4 transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <SearchBarInput />
      <WeatherSummary />
      <LocationImageCard />
    </aside>
  );
};
