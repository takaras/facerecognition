import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div style={{ marginTop: '-90px' }}>
      <div className="white f3">{`${name}, your current entry count is ${entries}`}</div>
      {/* <div className="white f1">{'#3'}</div> */}
    </div>
  );
};

export default Rank;
