import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../styles/Rate.scss';

const Rate = ({ rating }) => {
  // Check if the value is between 0 and 5
  const filledStars = Math.min(5, Math.max(0, rating));
  const grayStars = 5 - filledStars;

  return (
    <div className="star-rating">
      {[...Array(filledStars)].map((_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} className="star filled" />
      ))}
      {[...Array(grayStars)].map((_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} className="star gray" />
      ))}
    </div>
  );
};

export default Rate;
