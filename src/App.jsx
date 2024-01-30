import React, { useState } from 'react';
import './mystyles.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const randomHex = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);

    return '#' + n.slice(0, 6);
  }

  const handleButtonClick = () => {
    const newColor = randomHex();
    setBackgroundColor(newColor);
  };

  return (
    <>
      <div className='tuts' style={{ backgroundColor }}>
        <button className='green' onClick={handleButtonClick}>Random Color</button>
      </div>
    </>
  );
}

export default App;
