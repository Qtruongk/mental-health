// PostCard.js
import React from 'react';
import './PostCard.css';
import mentalhealth from "../assets/Mental+Health.png";
const PostCard = (props) => {
  const { title, content, imageSrc, link } = props;

  return (
    <div className="post-card">
      <div className="post-image">
        <img src={mentalhealth} alt={title} />
      </div>
      <div className="post-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <a href={'https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response'} target="_blank" rel="noopener noreferrer">Read more</a>
      </div>
    </div>
  );
};

export default PostCard;
