"use client";
import React from "react";
import Image from "next/image";
export const CarouselItems = ({post}) => {
  return (
    <div>
       <Image className="size-min" src={post.image_url} alt={post.caption} width={500} height={500}/>
    </div>
  );
}
export default CarouselItems;