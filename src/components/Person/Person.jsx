import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const partnerRole = sex === 'm' ? 'wife' : 'husband';

  return (
    <div className="Person">
      <p className="Person__name">My name is {name}</p>
      {age !== undefined && <p className="Person__age">I am {age}</p>}
      {isMarried ? (
        <p className="Person__partner">
          {partnerName} is my {partnerRole}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </div>
  );
};
