"use client";
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from "next/image";
import CarouselItems from './CarouselItems';
import jsonData from "../../data/jsonformatinstagram.json";
import reviewData from "../../data/reviewdata.json";

export const posts = ({numberOfPosts}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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

  const displayPosts = `flex ${numberOfPosts < 5 ? 'md:justify-center' : ''}`;

  const postsToDisplay = reviewData.reviews.slice(0, numberOfPosts);
  return (
    <>      
      <div className=''>
        <Carousel partialVisbile={false} className={displayPosts} responsive={responsive} autoPlay={true} infinite={true} itemClass="" removeArrowOnDeviceType={["tablet", "mobile"]}>
          {postsToDisplay.map(review => (
            <CarouselItems key={review.id} review={review} />          
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default posts;