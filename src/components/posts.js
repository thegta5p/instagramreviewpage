"use client";
import React, {useEffect, useCallback} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

export const Posts = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: false})
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes())
    }
  }, [emblaApi])
  const items = [
    {title: "post1",
    description: "description1",
    image: "image1",
    },
  ]
  return (
    <>      
      <div className="overflow-hidden" ref={emblaRef}>
       <div className="grid grid-flow-col gap-x-32">
         <Image className="" src="/images/Instagram-Template.png" alt="post 1" width={500} height={500}/>
         <Image className="" src="/images/Instagram-Template.png" alt="post 1" width={500} height={500}/>
         <Image className="" src="/images/Instagram-Template.png" alt="post 1" width={500} height={500}/>
         <Image className="" src="/images/Instagram-Template.png" alt="post 1" width={500} height={500}/>
       </div>
      </div>
    </>
  );
}
export default Posts;