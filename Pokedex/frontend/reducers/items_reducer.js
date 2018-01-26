import {combineReducers} from 'redux';
import {RECEIVE_POKEMON} from '../actions/pokemon_actions';
import merge from 'lodash/merge';

export const itemsReducer = ( state = {}, action ) => {
  let items;

  switch (action.type){
    case RECEIVE_POKEMON:
      return merge( {}, state, action.pokemon.items);

    default:
      return state;
  }
};
