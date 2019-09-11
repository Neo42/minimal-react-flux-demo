import { Dispatcher } from 'flux';
import { actionTypes } from './constants';
import store from './store';

const flux = new Dispatcher();
const { ADD_ITEM, REMOVE_ITEM } = actionTypes;

// Dispatcher registering reducer function, calling different methods stored in store, export at last.
flux.register(function(action) {
  switch (action.type) {
    case ADD_ITEM:
      store.addItem(action.text);
      break;
    case REMOVE_ITEM:
      store.removeItem();
      break;
    default:
      break;
  }
  store.emitChange();
});

export default flux;
