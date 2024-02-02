"use client"
import React, {Component} from 'react';
import Carousel from 'react-elastic-carousel';
import Image from 'next/image';
//import { CarouselItems } from './CarouselItems';

export const posts = () => {
  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4
  }

  ];
  const items = [
    {title: "post1",
    description: "description1",
    image: "image1",
    },
  ]
  return (
    <>      
    <div>
      <Carousel breakPoints={breakPoints}>
        <Image src="/images/Instagram-Template.png" alt="post1" width={300} height={300} />
        <Image src="/images/Instagram-Template.png" alt="post1" width={300} height={300} />
        <Image src="/images/Instagram-Template.png" alt="post1" width={300} height={300} />
        <Image src="/images/Instagram-Template.png" alt="post1" width={300} height={300} />
      </Carousel>
    </div>
    </>
  );
}

export default posts;