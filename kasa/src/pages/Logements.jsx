// import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import data from '../assets/data.json';
import '../styles/Logement.scss';

function Logement() {
  const { logementIndex } = useParams();
  // const logementIndexInt = parseInt(logementIndex);
  // const prevLogementIndex =
  //   logementIndexInt === 1 ? data.length : logementIndexInt - 1;
  // const nextLogementIndex =
  //   logementIndexInt === data.length ? 1 : logementIndexInt + 1;

  return (
    <main class="logement">
      <h1>{data[logementIndex].title}</h1>
      <h2>{data[logementIndex].description}</h2>

      {/* <Link to={`/logement/${prevLogementIndex}`}>Précédent</Link>
      <Link to={`/logement/${nextLogementIndex}`}>Suivant</Link> */}
    </main>
  );
}

export default Logement;
