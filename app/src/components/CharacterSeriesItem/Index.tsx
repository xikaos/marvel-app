import React from 'react';

import './styles.css';

export interface Series {
  title: string,
  thumbnail: string
}

const CharacterSeriesItem: React.FC<Series> = ({ title, thumbnail }) => {
  return <div className="seriesListItem">
      <div className="seriesThumbnail">
        <img src={thumbnail} alt="" className="seriesThumbnailImage" />
      </div>
      <div className="seriesInfo">
        <p className="seriesName">{title}</p>
      </div>
    </div>
}

export default CharacterSeriesItem;