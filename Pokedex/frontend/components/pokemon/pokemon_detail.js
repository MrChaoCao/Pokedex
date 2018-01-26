import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const PokemonDetail = ({ pokemon }) => (
  <li className = "pokemon_details">

      <span>{pokemon.id}</span>
      <span>{pokemon.items}</span>
      <img src={pokemon.image_url} alt={pokemon.name} />
      <span>{pokemon.name}</span>

  </li>
);


export default PokemonDetail;
