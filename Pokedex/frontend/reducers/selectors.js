import * as _ from 'lodash';

export const selectAllPokemon = (state) => (
  _.values(state.entities.pokemon)
);

export const selectPokemon = (state, id) => (
  state.entities.pokemon[id]
);
