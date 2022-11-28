import { gql, useQuery } from '@apollo/client';
import React from 'react';

const GET_LOCATIONS = gql`
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
  const { loading, error, data } = useQuery(GET_LOCATIONS, {
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
        <div className='py-5' />
        <div>
          <img src={large} />
          <h3 className='text-justify'>
            {first} {last}
          </h3>
          <p className='text-justify'>{description}</p>
        </div>
      </div>
    </div>
  );
}
