import * as APIUtil from '../util/api_util';

export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const RECEIVE_ITEM = "RECEIVE_ITEM";

export const receiveItems = (items) => ({
  type: RECEIVE_ITEMS,
  items
});

export const receiveItem = (item) => ({
  type: RECEIVE_ITEM,
  item
});

export const requestItems = () => (dispatch) => (
  APIUtil.fetchPokemon.fetchItems().
    then(items => dispatch(receiveItems(items)))
);

export const requestItem = () => (dispatch) => (
  APIUtil.fetchItem().
    then(item => dispatch(receiveItems(item)))
);
