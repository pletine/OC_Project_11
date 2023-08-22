import '../styles/Home.scss';
import data from '../assets/data.json';
import HomeFigure from '../components/HomeFigure';

function Home() {
  const listLogements = data.map((element) => (
    <HomeFigure key={element.id} value={element} />
  ));

  return (
    <main className="home">
      <h1>
        Chez vous,
        <br /> partout et ailleurs
      </h1>
      <ul>{listLogements}</ul>
    </main>
  );
}

export default Home;
