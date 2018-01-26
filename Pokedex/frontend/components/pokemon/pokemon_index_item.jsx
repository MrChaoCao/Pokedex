import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const PokemonIndexItem = ({ pokemon }) => (
  <li className = "pokemon_index_item">
    <Link to={`/pokemon/${pokemon.id}`} >
      <span>{pokemon.id}</span>
      <img src={pokemon.image_url} alt={pokemon.name} />
      <span>{pokemon.name}</span>
  </Link>
  </li>
);


export default PokemonIndexItem;
