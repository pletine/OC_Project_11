import React, { useState } from 'react';

import '../styles/Carroussel.scss';
import previous from '../assets/arrow_previous.svg';
import next from '../assets/arrow_next.svg';

function Carroussel(props) {
  const listImages = props.images;
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const prevImage = () => {
    setCurrentImageIdx((prevIdx) =>
      prevIdx === 0 ? listImages.length - 1 : prevIdx - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIdx((prevIdx) =>
      prevIdx === listImages.length - 1 ? 0 : prevIdx + 1
    );
  };

  const numerotation = (numImages) => {
    return numImages > 1 ? (
      <p>
        {currentImageIdx + 1}/{numImages}
      </p>
    ) : (
      <p></p>
    );
  };

  return listImages.length > 1 ? (
    <div className="carroussel">
      <img src={previous} alt="Précédent" onClick={prevImage} />
      <div className="box_image">
        <img src={listImages[currentImageIdx]} alt={`${currentImageIdx}`} />
        {numerotation(listImages.length)}
      </div>
      <img src={next} alt="Suivant" onClick={nextImage} />
    </div>
  ) : (
    <div className="carroussel">
      <div className="box_image">
        <img src={listImages[currentImageIdx]} alt={`${currentImageIdx}`} />
      </div>
    </div>
  );
}

export default Carroussel;
