import React from 'react';
import { actors } from '../data';
import { render } from 'enzyme';

const Actors = () => {

  const renderActors = () => {
    return actors.map(actor=>{
      return (
        <div>
          <h3>Name: {actor.name}</h3>
        <p>Movies: {actor.movies.map(movie=> <li>{movie}</li>)}</p>
        </div>
      )
    })
  }

  return (
    <div>
      {<h1>Actors Page</h1>}
      {renderActors()}
    </div>
  );
};

export default Actors;
