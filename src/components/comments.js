import React from 'react';
import jsonData from "../../data/jsonformatinstagram.json";
import Carousel from 'react-multi-carousel';

export const comments = ({numberOfComments}) => {
  
  const maxComments = 3;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: {maxComments}
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

  const displayComments = `flex ${numberOfComments < maxComments ? 'md:justify-center' : ''}`;


  return (
    <div>
      <Carousel className={displayComments} responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]}> 
        {commentsToDisplay.map(comment => (
          <div key={comment.id}>
            <p className='text-center'>{comment.text}</p>
            <p className='text-center'> - {comment.user.username}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default comments;
