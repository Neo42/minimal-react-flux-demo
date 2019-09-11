// import dispatcher after registration.
import flux from './dispatcher';
import { actionTypes } from './constants';

const { ADD_ITEM, REMOVE_ITEM } = actionTypes;

// Dispatch all actions for further use.
export const dispatchedActions = {
  addItem: text => {
    flux.dispatch({ type: ADD_ITEM, text });
  },
  removeItem() {
    flux.dispatch({ type: REMOVE_ITEM });
  }
};
