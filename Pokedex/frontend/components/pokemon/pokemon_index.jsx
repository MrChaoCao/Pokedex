import React, { Component } from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import {Route} from 'react-router';

class PokemonIndex extends Component  {
  componentDidMount() {
    console.log(this.props);
    this.props.requestAllPokemon();
  }

  render () {
    const { pokemon } = this.props;

    return(
    <section className="pokedex">
      <ul>
        {pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />)}
      </ul>
      <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
    </section>
      );
  }

}

export default PokemonIndex;
