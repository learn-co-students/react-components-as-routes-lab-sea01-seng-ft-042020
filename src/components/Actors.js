import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const renderActors = () => {
    return actors.map(actor => {
      return <div>
        {actor.name}
        <ul>
          {actor.movies.map(movie => {
            return <li>{movie}</li>
          })}
        </ul>
      </div>
    })
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
