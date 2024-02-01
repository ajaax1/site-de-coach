import React from 'react';
import { useState } from 'react';
import 'tailwindcss/tailwind.css';

const App = () => {
  const [result, setRandom] = useState();
  const getApi = async () => {
    const api = await fetch('https://api.adviceslip.com/advice');
    const obj = await api.json();
    setRandom(obj.slip.advice);
  }

  return (
    <div className="App">
      <div className='title'>
        <h1 className='text-white text-2xl italic'>
          {result}
        </h1>
      </div>
      <div className='person'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={getApi}>click for advice</button>
      </div>
    </div>
  );
};

export default App;