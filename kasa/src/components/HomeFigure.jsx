import { Link } from 'react-router-dom';
import data from '../assets/data.json';

function HomeFigure(props) {
  const element = props.value;
  return (
    <li>
      <Link to={`/logement/${data.indexOf(element)}`}>
        <figure>
          <img src={`${element.cover}`} alt="Couverture du logement" />
          <figcaption>{element.title}</figcaption>
        </figure>
      </Link>
    </li>
  );
}

export default HomeFigure;
