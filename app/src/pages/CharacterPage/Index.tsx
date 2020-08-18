import React from 'react';

import { useQuery } from '@apollo/client';
import { CHARACTER_BY_ID } from '../../services/Queries/Index';

import { RouteComponentProps } from 'react-router-dom';

import './styles.css';

interface CharacterPageParams {
  id: string
}

interface Serie {
  resourceURI: string,
  name: string
}

const CharacterPage: React.FC<RouteComponentProps<CharacterPageParams>> = ({match}) => {
  const { id } = match.params;
  const { error, loading, data } = useQuery(CHARACTER_BY_ID, {
    variables: {
      id: Number(id)
    }
  });
  
  if (error) return <h2>Error fetching from data source:<br/> {error.message}</h2>;
  if (loading) return <h2>Loading Character Data...</h2>;

  const [character] = data.characters;
  const { name, description, thumbnail, series } = character;
  return (
    <div className="container">
      <h1 className="pageTitle">Character Page</h1>
      <div>
        <h1 className="characterName">{name}</h1>
        <img className="characterImage" src={thumbnail} alt={`${name} Thumbnail`} />
        <p className="characterDescription">{description}</p>
        <h2>Series</h2>
        <ul>
          {
            series.map((serie: Serie) => {
              const { resourceURI, name } = serie;
              return (
                <ol className="characterSeries">
                  <a
                    key={name}
                    href={resourceURI}
                    className="serieLink"
                  >
                    <li className="serieName">{name}</li>
                  </a>
                </ol>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default CharacterPage; 