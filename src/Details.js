import React from 'react';

export const Details = ({ name, email }) => {
  return (
    <div className="user-details">
      <h1>{name}</h1>
      <h5>{email}</h5>
    </div>
  );
};
