"use client";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";

const LocationImageCard = () => {
  const selectedLocation: string = useAppSelector(
    (state) => state.locations.selectedLocation
  );

  const [imageUrl, setImageUrl] = useState<string>();
  const fetchUrl = async () => {
    const api = `https://api.pexels.com/v1/search?query=${selectedLocation}&per_page=1&size=medium`;
    const authorizationkey = process.env.NEXT_PUBLIC_KEY_IMAGEKEY;

    const resp = await fetch(api, {
      headers: {
        Authorization: authorizationkey!!,
      },
    });
    const urls = await resp.json();
    const locationImagePlaceholder = "https://picsum.photos/id/11/200/300";
    if (urls.photos.length === 0) {
      setImageUrl(locationImagePlaceholder);
      return;
    }
    const imageSrc = urls.photos[0].src.small;
    setImageUrl(imageSrc);
  };
  useEffect(() => {
    fetchUrl();
  }, [selectedLocation]);

  return imageUrl !== undefined ? (
    <div
      className="flex z-0 mb-16 mx-4 mt-auto w-auto  h-24 bg-cover bg-center rounded-xl "
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="mx-auto my-auto text-white">{selectedLocation}</div>
    </div>
  ) : (
    <p className="font-bold mt-auto m-5">Loading...</p>
  );
};

export default LocationImageCard;
