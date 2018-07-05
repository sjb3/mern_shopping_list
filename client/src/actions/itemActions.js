import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from './types';

export const getItems = () => ({
  type: GET_ITEMS,
});

export const deleteItems = id => ({
  type: DELETE_ITEMS,
  payload: id,
});

export const addItems = item => ({
  type: ADD_ITEMS,
  payload: item,
});
