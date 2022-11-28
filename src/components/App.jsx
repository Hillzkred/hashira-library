import React from 'react';
import Layout from './Layout';
import Character from './Character';

export default function App() {
  const characters = [
    'Giyuu',
    'Tengen',
    'Rengoku',
    'Tokito',
    'Kanroji',
    'Obanai Iguro',
    'Uzui',
    'Shinazugawa',
    'Gyoumei',
  ];
  return (
    <div className='h-screen w-screen bg-gradient-to-r from-primary to-[#000E0D]'>
      <Layout />
      {characters.map((character) => (
        <Character key={character} characterName={character} />
      ))}
    </div>
  );
}
