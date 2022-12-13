import React from 'react';

const DateTimeDisplay = ({ valueD, valueH, valueM, valueS, typeD, typeH, typeM, typeS }) => {
  return (
    <div>
      <h2>{valueD}{typeD} {valueH}{typeH} {valueM}{typeM} {valueS}{typeS}</h2>
    </div>
  );
};

export default DateTimeDisplay;
