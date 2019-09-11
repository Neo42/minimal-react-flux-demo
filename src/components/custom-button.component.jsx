import React from 'react';

const CustomButton = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

export default CustomButton;
