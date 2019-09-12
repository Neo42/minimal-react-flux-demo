import { Dispatcher } from 'flux';
import actionTypes from './constants';
import store from './store';

const flux = new Dispatcher();
const { ADD_ITEM, REMOVE_ITEM } = actionTypes;

// Dispatcher registering reducer function, calling different methods stored in store, export at last.
flux.register(function(action) {
  const { type } = action;
  switch (type) {
    case ADD_ITEM:
      const { text } = action.payload;
      store.addItem(text);
      console.log(
        `%c Action "${type}": ${text} `,
        'background: #eeeeee; color: #4bbb8b'
      );
      break;
    case REMOVE_ITEM:
      store.removeItem();
      console.log(
        `%c Action "${type}" `,
        'background: #eeeeee; color: #e8647c'
      );
      break;
    default:
      break;
  }
  store.emitChange();
});

export default flux;
