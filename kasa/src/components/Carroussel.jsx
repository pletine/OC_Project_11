import '../styles/Carroussel.scss';
import previous from '../assets/arrow_previous.svg';
import next from '../assets/arrow_next.svg';

let indexCurrentImage = 0;

function prevImage() {
  indexCurrentImage--;
  console.log(indexCurrentImage);
}

function nextImage() {
  indexCurrentImage++;
  console.log(indexCurrentImage);
}

function Carroussel(props) {
  indexCurrentImage = 0;

  const listImages = props.images;
  const imagesDivs = listImages.map((image) =>
    listImages.indexOf(image) === 0 ? (
      <img src={image} alt="" key={image} className="carrou-show" />
    ) : (
      <img src={image} alt="" key={image} className="carrou-hidden" />
    )
  );

  return (
    <div className="carroussel">
      <img src={previous} alt="Précédent" onClick={prevImage} />
      <div className="box_images">{imagesDivs}</div>
      <img src={next} alt="Suivant" onClick={nextImage} />
    </div>
  );
}

export default Carroussel;
