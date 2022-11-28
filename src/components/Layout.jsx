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
        <div className='py-4' />
        <div className='grid grid-cols-3 gap-4'>
          {characters.map((character) => (
            <Character key={character} characterName={character} />
          ))}
        </div>
        <div className='py-4' />
      </div>
    </div>
  );
}
