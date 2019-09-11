import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

// storing all methods to be call, using event emitter to track changes.
const store = Object.assign(EventEmitter.prototype, {
  items: [],

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getItems() {
    return this.items;
  },

  addItem(text) {
    console.log(text);
    this.items.push(text);
  },

  removeItem() {
    this.items.pop(this.items[-1]);
  }
});

export default store;
