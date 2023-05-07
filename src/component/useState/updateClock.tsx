import React, { useState } from 'react';

const UpdateClock = () => {

  // state
  const [time, setTime] = useState<number>(1);

  // Event Handler
  const handleClick = () => {
    let newTime;
    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  }

  // check event
  console.log('Update!!');

  return (
    <div>
      <span>현재 시간: {time}시</span>
      <button onClick={handleClick}>Update</button>
    </div>
  );
};

export default UpdateClock;