"use client";
import React from "react";
import Image from "next/image";
export const CarouselItems = ({post}) => {
  return (
    <div>
      <p className="text-center">Post by {post.user.username}</p>
       <Image className="size-min mt-4 mb-12 px-4" src={post.image_url} alt={post.caption} width={500} height={500}/>
       <p className="text-center">Likes: {post.likes}</p>
    </div>
  );
}
export default CarouselItems;