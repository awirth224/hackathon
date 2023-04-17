import Header from '@/components/Header'
import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from "next/router";


export default function Favorites() {
  const router = useRouter();
  const query = router.query;
  console.log('FAVORITES', query)
  // const [favorites, setFavorites] = useState(query)


  
  return (
    <div>
      <Head>
        <title>Disney Made Easy</title>
        <meta name='description' content='Genereate Next App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header/>
  </div>
  )
}
