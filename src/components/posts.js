"use client";
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from "next/image";
import CarouselItems from './CarouselItems';
import jsonData from "../../data/jsonformatinstagram.json";

export const posts = ({numberOfPosts}) => {
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

  const displayPosts = `flex ${numberOfPosts < 5 ? 'md:justify-center' : ''}`;

  const postsToDisplay = jsonData.posts.slice(0, numberOfPosts);
  return (
    <>      
      <div>
        <Carousel className={displayPosts} responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]}>
          {postsToDisplay.map(post => (
            <CarouselItems key={post.id} post={post} />          
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default posts;