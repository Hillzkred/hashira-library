import React from 'react';
import Heading from './Heading';
import Character from './Character';

const characters = [
  'Giyuu',
  'Shinobu Kocho',
  'Rengoku',
  'Tokito',
  'Kanroji',
  'Obanai Iguro',
  'Uzui',
  'Shinazugawa',
  'Gyoumei',
];

export default function Layout() {
  return (
    <div>
      <div className='max-w-5xl m-auto'>
        <div className='py-5' />
        <Heading />
        <div className='grid grid-rows-4'>
          {characters.map((character) => (
            <Character key={character} characterName={character} />
          ))}
        </div>
      </div>
    </div>
  );
}
