import { Link } from 'react-router-dom';

import '../styles/Home.scss';
import data from '../assets/data.json';

function Home() {
  return (
    <main className="home">
      <h1>Chez vous, partout et ailleurs</h1>
      {data.map((element) => (
        <Link to={`/logement/${element.id}`}>
          <h2 key={element.id}>{element.title}</h2>
        </Link>
      ))}
    </main>
  );
}

export default Home;
