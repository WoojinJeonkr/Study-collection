import React, { ChangeEvent, useState } from 'react';

const UploadText = () => {

  // state
  const heavywork = () => {
    console.log('heavy work!!!');
    return ['홍길동, 김민수'];
  }

  const [names, setNames] = useState<string[]>(() => {
    return heavywork();
  });
  const [input, setInput] = useState<string>('');
  
  // Event Handlers
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  }

  const handleUpload = () => {
    setNames((prevState) => {
      // check prevState
      console.log(`이전 state: ${prevState}`);

      // update Array state
      return ([...prevState, input])
    });
  }

  return (
    <>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>
      })}
    </>
  );
};

export default UploadText;