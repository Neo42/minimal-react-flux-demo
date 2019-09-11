import React from 'react';

const ItemList = ({ items }) => (
  <ul className="item-list">
    {items.map(function(listItem, i) {
      return <li key={i}>{listItem}</li>;
    })}
  </ul>
);

export default ItemList;
