"use client";
import React from "react";
import Image from "next/image";
export const CarouselItems = () => {
  return (
    <div>
       <Image className="size-min" src="/images/Instagram-Template-Fix.jpeg" alt="post1" width={500} height={500}/>
    </div>
  );
}
export default CarouselItems;