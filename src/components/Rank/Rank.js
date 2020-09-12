import React from 'react';
import './Rank.css';

const Rank = ({ name, entries }) => {
  return (
    <div className="rank-info">
      <div className="white f3">{`${name}, your current entry count is ${entries}`}</div>
    </div>
  );
};

export default Rank;
