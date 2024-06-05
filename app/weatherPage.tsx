import React from "react";
import { Sidebar } from "./Section/sidebar";
import { MainContent } from "./Section/main";

export const WeatherPage = () => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <MainContent />
    </div>
  );
};
