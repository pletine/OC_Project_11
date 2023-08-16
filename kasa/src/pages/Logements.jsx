import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Logement() {
  const { logementIndex } = useParams();
  const logementIndexInt = parseInt(logementIndex);
  const prevLogementIndex = logementIndexInt === 1 ? 1 : logementIndexInt - 1;
  const nextLogementIndex = logementIndexInt + 1;

  return (
    <div>
      <h1>Logements 🧮</h1>
      <h2>Logement {logementIndex}</h2>
      <Link to={`/logement/${prevLogementIndex}`}>Précédent</Link>
      {logementIndexInt === 10 ? (
        <Link to="/about">A propos</Link>
      ) : (
        <Link to={`/logement/${nextLogementIndex}`}>Suivant</Link>
      )}
    </div>
  );
}

export default Logement;
