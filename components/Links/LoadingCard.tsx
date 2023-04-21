import React from "react";

const LoadingCard = () => {
  return (
    <div className="animate-pulse">
      <div className="h-48 rounded-xl shadow-sm p-10 bg-white w-full">
        <div className="h-8 w-2/4 bg-gray-100 rounded-md mb-10" />
        <div className="h-8 w-full bg-gray-100 rounded-md" />
      </div>
    </div>
  );
};

export default LoadingCard;
