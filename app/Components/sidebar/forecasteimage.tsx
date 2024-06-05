import React from "react";

const ForecasteImage = ({ name }: { name: string | undefined }) => {
  // console.log("name--", name);

  return (
    <div className="mx-5 mb-5">
      <img src={`images/${name}.png`} />
    </div>
  );
};

export default ForecasteImage;
