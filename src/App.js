import React from 'react';

import CustomButton from './components/custom-button.component.jsx';
import ItemList from './components/item-list.component';
import store from './flux/store';
import { dispatchedActions } from './flux/actions';

const { addItem, removeItem } = dispatchedActions;

export default class AppRoot extends React.Component {
  state = { items: store.getItems() };

  componentWillMount() {
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    store.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({ items: store.getItems() });
  }

  addItem() {
    addItem('New Item');
  }

  removeItem() {
    removeItem();
  }

  render() {
    return (
      <div className="buttons">
        <CustomButton onClick={this.addItem}>Add Item</CustomButton>
        <CustomButton onClick={this.removeItem}>Remove Item</CustomButton>
        <ItemList items={this.state.items} />
      </div>
    );
  }
}
