import React, { ReactNode } from "react";

const BaseCard = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`rounded-3xl w-72 p-7 h-52 shadow-xl ${className}`}>
      {children}
    </div>
  );
};

export default BaseCard;
