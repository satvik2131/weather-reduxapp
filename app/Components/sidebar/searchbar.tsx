"use client";
import { MouseEventHandler, useEffect, useState } from "react";
import {
  locationList,
  filterLocation,
  setSelectedLocation,
} from "@/redux/features/locationDataSlice";
import { ICity, ICountry, IState } from "country-state-city";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export const SearchBarInput = () => {
  const dispatch = useAppDispatch();
  const [resultsVisibility, setResultsVisibility] = useState("invisible");
  const setResultsInvisible = () => {
    setResultsVisibility("invisible");
  };

  return (
    <>
      <form className="p-5">
        <div className="relative w-auto">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3">
            <SearchIcon />
          </div>

          <input
            placeholder="Search for places ..."
            className="block w-full outline-none p-3 ps-11 text-sm  text-black placeholder-black placeholder:font-sans placeholder:font-semibold"
            onChange={(e) => {
              setResultsVisibility("visible");
              dispatch(filterLocation({ query: e.target.value }));
            }}
            required
          />
        </div>
      </form>
      <LocationListCard
        visibility={resultsVisibility}
        setResultsInvisible={setResultsInvisible}
      />
    </>
  );
};

const LocationListCard = ({
  visibility,
  setResultsInvisible,
}: {
  visibility: string;
  setResultsInvisible: Function;
}) => {
  const dispatch = useAppDispatch();
  const locationsList: ICity[] | IState[] | ICountry[] =
    useAppSelector(locationList);

  //hides the results of search input
  useEffect(() => {
    document.addEventListener("click", (e) => {
      setResultsInvisible();
    });
  });

  return (
    <ul
      id="locationlist"
      className={`absolute z-10 mt-20 bg-white w-auto h-auto max-h-80 w-80 ml-4 overflow-y-auto border-solid border-2 rounded-md ${visibility}`}
    >
      {locationsList.map((location) => (
        <li
          className="mt-2 hover:bg-slate-300 px-4 py-1 cursor-pointer"
          onClick={(e) => {
            dispatch(
              setSelectedLocation({
                selectedLocation: location.name,
                lat: Number(location.latitude),
                long: Number(location.longitude),
              })
            );
            setResultsInvisible();
          }}
        >
          {location.name}
        </li>
      ))}
    </ul>
  );
};

const SearchIcon = () => {
  return (
    <div>
      <svg
        id="Search_24"
        width="17"
        height="20"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" stroke="none" fill="#000000" opacity="0" />

        <g transform="matrix(0.78 0 0 0.78 12 12)">
          <path
            transform=" translate(-13.03, -13.03)"
            d="M 10 0.1875 C 4.578125 0.1875 0.1875 4.578125 0.1875 10 C 0.1875 15.421875 4.578125 19.8125 10 19.8125 C 12.289063 19.8125 14.394531 19.003906 16.0625 17.6875 L 16.9375 18.5625 C 16.570313 19.253906 16.699219 20.136719 17.28125 20.71875 L 21.875 25.34375 C 22.589844 26.058594 23.753906 26.058594 24.46875 25.34375 L 25.34375 24.46875 C 26.058594 23.753906 26.058594 22.589844 25.34375 21.875 L 20.71875 17.28125 C 20.132813 16.695313 19.253906 16.59375 18.5625 16.96875 L 17.6875 16.09375 C 19.011719 14.421875 19.8125 12.300781 19.8125 10 C 19.8125 4.578125 15.421875 0.1875 10 0.1875 Z M 10 2 C 14.417969 2 18 5.582031 18 10 C 18 14.417969 14.417969 18 10 18 C 5.582031 18 2 14.417969 2 10 C 2 5.582031 5.582031 2 10 2 Z M 4.9375 7.46875 C 4.421875 8.304688 4.125 9.289063 4.125 10.34375 C 4.125 13.371094 6.566406 15.8125 9.59375 15.8125 C 10.761719 15.8125 11.859375 15.433594 12.75 14.8125 C 12.511719 14.839844 12.246094 14.84375 12 14.84375 C 8.085938 14.84375 4.9375 11.695313 4.9375 7.78125 C 4.9375 7.675781 4.933594 7.574219 4.9375 7.46875 Z"
          />
        </g>
      </svg>
    </div>
  );
};
