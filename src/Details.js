import React from 'react';

export const Details = ({ name, email }) => {
  return (
    <div className="user-details">
      <h1>
        {name?.title}. {name?.first} {name?.last}
      </h1>
      <h5>{email}</h5>
    </div>
  );
};
