import React from 'react';
import Navbar from '../Navbar/index.jsx';
const index = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default index;
