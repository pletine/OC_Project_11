import React from 'react';
import { useParams } from 'react-router-dom';
import Error from '../components/Error';

import data from '../assets/data.json';
import '../styles/Logement.scss';

function Logement() {
  const { logementIndex } = useParams();

  if (!data[logementIndex]) {
    return <Error />;
  }

  return (
    <main className="logement">
      <h1>{data[logementIndex].title}</h1>
      <h2>{data[logementIndex].description}</h2>
    </main>
  );
}

export default Logement;
