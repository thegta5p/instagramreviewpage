import {CarouselItems} from './carauselItems';
import React from 'react';

export const posts = () => {
  const items = [
    {title: "post1",
    description: "description1",
    image: "image1",
    },
  ]
  return (
    <>      
    <div>
        <div>
          {items.map((item) => {
            return <CarouselItems key = {item.id} item={item}/>;
          })}
        </div>
      </div>
    </>
  );
}