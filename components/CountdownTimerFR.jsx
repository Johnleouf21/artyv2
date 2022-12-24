import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from '../hooks/useCountdown';

const ExpiredNoticeFR = () => {
  return (
    <div>
      <h2>Patientez pour un nouveau tirage!!!</h2>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <h2>
        <DateTimeDisplay 
        valueD={days} typeD={'j'} 
        valueH={hours} typeH={'h'}
        valueM={minutes} typeM={'m'} 
        valueS={seconds} typeS={'s'}
        />
    </h2>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNoticeFR />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
