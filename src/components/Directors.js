import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(diretores => (
          <div >
              <h3>Name: {diretores.name}</h3>
              <p>Movies:</p>
              {diretores.movies.map(movies => ( 
              <ul>
                <li>{movies}</li>
              </ul>))}
          </div>
      ))}
    </div>
  );
}

export default Directors
