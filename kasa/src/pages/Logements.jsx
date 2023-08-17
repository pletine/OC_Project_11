import React from 'react';
import { useParams } from 'react-router-dom';
import Error from '../components/Error';
import Carroussel from '../components/Carroussel';
import Collapse from '../components/Collapse';

import data from '../assets/data.json';
import '../styles/Logement.scss';

function Logement() {
  const { logementIndex } = useParams();
  const dataLogement = data[logementIndex];

  // Print Error Page if the index is unknown from the database
  if (!dataLogement) {
    return <Error />;
  }

  const listTags = dataLogement.tags.map((tag) => <li key={tag}>{tag}</li>);
  const listEquipements = dataLogement.equipments.map((equi) => (
    <li key={equi}>{equi}</li>
  ));

  return (
    <main className="logement">
      <Carroussel images={dataLogement.pictures} />

      <div className="presentation">
        <div className="title">
          <h1>{dataLogement.title}</h1>
          <p>{dataLogement.location}</p>
          <ul>{listTags}</ul>
        </div>

        <div className="owner">
          <figure>
            <img src={dataLogement.host.picture} alt="Propriétaire" />
            <figcaption>{dataLogement.host.name}</figcaption>
          </figure>
          <p>{dataLogement.rating}</p>
        </div>
      </div>

      <div className="details">
        <Collapse
          title={'Description'}
          content={<p>{dataLogement.description}</p>}
        />
        <Collapse title={'Equipements'} content={<ul>{listEquipements}</ul>} />
      </div>
    </main>
  );
}

export default Logement;
