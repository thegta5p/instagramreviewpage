import React from 'react';
import jsonData from "../../data/jsonformatinstagram.json";
import Carousel from 'react-multi-carousel';

export const comments = ({numberOfComments}) => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
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

  const allComments = jsonData.posts.reduce((acc, post) => {
    return acc.concat(post.comments);
  }, []);

  const commentsToDisplay = allComments.slice(0, numberOfComments);


  return (
    <div>
      <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]}> 
        {commentsToDisplay.map(comment => (
          <div key={comment.id}>
            <p className='text-center'>{comment.text}</p>
            <p className='text-center'> - {comment.username}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default comments;
