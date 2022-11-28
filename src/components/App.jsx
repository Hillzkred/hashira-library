import { gql, useQuery } from '@apollo/client';
import React from 'react';
import Layout from './Layout';

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.locations.map(({ id, name, description, photo }) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width='400' height='250' alt='location-reference' src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
}

export default function App() {
  return (
    <div className='h-screen w-screen bg-gradient-to-r from-primary to-[#000E0D]'>
      <Layout />
      <DisplayLocations />
    </div>
  );
}
