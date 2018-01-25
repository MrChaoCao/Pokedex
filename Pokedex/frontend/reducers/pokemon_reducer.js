import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

export const pokemonReducer = ( state = {}, action ) => {
  let newState = {};

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
    console.log(state);
    console.log(action);
      return action.pokemon;

    default:
      return state;
  }

};
