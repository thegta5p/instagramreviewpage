"use client";
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from "next/image";
import CarouselItems from './CarouselItems';
import jsonData from "../../data/jsonformatinstagram.json";

export const posts = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>      
      <div>
        <Carousel className="" responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]}>
          {jsonData.posts.map(post => (
            <CarouselItems key={post.id} post={post} />
          
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default posts;