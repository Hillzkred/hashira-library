import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';

const GET_CHARACTERS = gql`
  query GetCharacter($characterName: String!) {
    Character(search: $characterName) {
      id
      name {
        first
        middle
        last
        full
        native
        userPreferred
      }
      image {
        large
        medium
      }
      description
      gender
      dateOfBirth {
        year
        month
        day
      }
      age
    }
  }
`;

export default function Characters({ characterName }) {
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { characterName },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const {
    Character: {
      id,
      name: { first, middle, last, full, native, userPreferred },
      image: { large, medium },
      description,
      gender,
      dateOfBirth: { year, month, day },
      age,
    },
  } = data;
  return (
    <div>
      <div className='text-white' key={id}>
        <div className='flex flex-col items-center'>
          <div>
            <img
              className='object-cover w-40 h-80 hover:w-48 hover:cursor-pointer duration-300'
              src={large}
            />
          </div>
          <div className='py-1' />
          <h3 className='text-justify text-3xl font-BloodCrow'>
            {first} {last}
          </h3>
          <h3 className='text-justify text-2xl font-BloodCrow text-secondary'>
            {native}
          </h3>
        </div>
      </div>
    </div>
  );
}
