import '@/styles/globals.css'
import { useState } from 'react'
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }) {
  const [favorites, setFavorites] = useState([])
  const addToFavorites = (ride) => setFavorites([...favorites, ride])

  return (
    <Layout>
      <Component 
        {...pageProps}
        addToFavorites={addToFavorites}
        favorites={favorites}
      />
    </Layout>
  );
}