"use client";
import React, {useState, useEffect} from "react";
//import {Carousel} from "react-responsive-carousel";
import "react-multi-carousel/lib/styles.css";
import Posts from "@/components/posts";
import Image from "next/image";
import "../app/globals.css";

const InstagramReviews = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 45) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [count]);
 
  return(
  <>
    <div className="flex ">
      <div className="flex flex-col items-center max-w-md md:ml-24 my-28 flex-auto">
        <h1 className="font-serif text-base md:text-4xl font-bold">As seen on instagram</h1>
        <p className="text-xs md:text-lg text-center mr-4">Tag #usesweettooth to be featured</p>
      </div>
      <div className="my-28">
        <div class="notif">
          <div class="notifItem">{count}</div>
        </div>
      </div>
      <div className="my-28 ml-2 mr-2">
        <Image src="/images/Instagram_icon.png" alt="instagram" width={25} height={25} />
      </div>
      <div className="my-28">
        <p className="text-xs">@sweettooth app</p>
      </div>
    </div>
    <div className="mx-24">
      <Posts />
    </div>
    <div>
      <h1 className="text-center my-12 font-bold text-xl font-serif">Seller Reviews</h1>
      <p className="text-center text-xs">test test test test test</p>
    </div>
  </>
  );
};

export default InstagramReviews;