import React from 'react';
import Heading from './Heading';

function App() {
  return (
    <div className='h-screen w-screen bg-gradient-to-r from-primary to-[#000E0D]'>
      <div className='max-w-5xl m-auto'>
        <div className='py-5' />
        <Heading />
      </div>
    </div>
  );
}

export default App;
