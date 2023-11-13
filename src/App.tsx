import React, { useState } from 'react';
import './App.css';
import {Light} from './components/Light'

function App() {
  const [colors, setColor] = useState<string[]>(['#aea8a8', '#aea8a8', '#aea8a8']);
  const [buttonClicks, setButtonClicks] = useState<number>(0);

  function setLightColor() {
    if (buttonClicks === 2) {
      setButtonClicks(0);
    } else {
      setButtonClicks((prevCount) => prevCount + 1);
    }
  
    const currentColor = colors.map((_, index) => {
      if (index === 0 && buttonClicks === 0) {
        return '#f31048';

      } else if (index === 1 && buttonClicks === 1) {
        return '#f3c910';

      } else if (index === 2 && buttonClicks === 2) {
        return '#44e205';

      } else {
        return '#aea8a8';
      }
    });
  
    setColor(currentColor);
  }

  return (
    <div className='container'>
      <div className='traffic-light'>
        {colors.map((color, index) => (
          <Light key={index} style={{ backgroundColor: color }} />
        ))}
      </div>

      <button className='button' onClick={setLightColor}>switch the color</button>
    </div>

  );
}

export default App;
