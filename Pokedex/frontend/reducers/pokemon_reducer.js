import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

export const pokemonReducer = ( state = {}, action ) => {
  let newState = {};

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;

    case RECEIVE_POKEMON:
      return merge( {}, state, action.pokemon);


    default:
      return state;
  }

};
