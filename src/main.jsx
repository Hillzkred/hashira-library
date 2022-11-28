import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co/',
  cache: new InMemoryCache(),
});

// client
//   .query({
//     query: gql`
//       query GetLocations {
//         Character(search: "Giyuu") {
//           id
//           name {
//             first
//             middle
//             last
//             full
//             native
//             userPreferred
//           }
//           image {
//             large
//           }
//           description
//           gender
//           dateOfBirth {
//             year
//             month
//             day
//           }
//           age
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
