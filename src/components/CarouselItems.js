"use client";
import React from "react";
import {Card, CardBody, CardHeader, CardFooter, Image, Avatar} from "@nextui-org/react";

export const CarouselItems = ({review}) => {
  return (
    <div className="">
      <Card shadow="none" className="items-center bg-red-50 md:w-4/5">
        <CardBody>
            <p className = "text-xs lg:text-base text-center">{review.review}</p>
            <p className='font-bold text-sm lg:text-lg text-center'>By {review.username}</p>
        </CardBody>
        <Avatar src={review.profile_avatar} size="md"/>
      </Card>
    </div>
  );
}
export default CarouselItems;