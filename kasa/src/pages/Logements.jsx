import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Logement() {
  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const prevQuestionNumber =
    questionNumberInt === 1 ? 1 : questionNumberInt - 1;
  const nextQuestionNumber = questionNumberInt + 1;
  return (
    <div>
      <h1>Logements 🧮</h1>
      <h2>Logement {questionNumber}</h2>
      <Link to={`/logement/${prevQuestionNumber}`}>Précédent</Link>
      {questionNumberInt === 10 ? (
        <Link to="/about">A propos</Link>
      ) : (
        <Link to={`/logement/${nextQuestionNumber}`}>Suivant</Link>
      )}
    </div>
  );
}

export default Logement;
