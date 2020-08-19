import React from 'react';

import { useQuery } from '@apollo/client';
import { SERIES_BY_CHARACTER_ID } from '../../services/Queries/Index';

import './styles.css';

import CharacterSeriesItem, { Series } from '../CharacterSeriesItem/Index';

interface CharacterSeriesProps {
  id: Number
}

const CharacterSeries: React.FC<CharacterSeriesProps> = ({ id }) => {
  const { error, loading, data } = useQuery(SERIES_BY_CHARACTER_ID, {
    variables: {
      id
    }
  });

  if (loading) return <h3>Loading Character Series...</h3>;
  if (error) return <h3>Error Fetching Character Series from datasource.</h3>
  
  const { series } = data;
  return <ul className="characterSeries">
    {
      series.map((serie: Series) => {
        const { title, thumbnail } = serie;
        return (
          <CharacterSeriesItem key={title} title={title} thumbnail={thumbnail}/>
        );
      })
    }
  </ul>;
}

export default CharacterSeries;