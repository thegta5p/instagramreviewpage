import React from "react";

export const CarouselItems = ({item}) => {
  return (
    <div>
      <img src={item.image} alt={item.title} />
    </div>
  );
}