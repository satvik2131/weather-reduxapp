import React, { useEffect } from "react";
import WeekCard from "./weekcard";

const WeekCards = () => {
  const week = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  return (
    <div className="flex flex-wrap flex-row">
      {week.map((day, index) => (
        <div className="w-full sm:w-28 md:w-32 lg:w-40 h-auto ">
          <WeekCard day={day} index={index} />
        </div>
      ))}
    </div>
  );
};

export default WeekCards;
