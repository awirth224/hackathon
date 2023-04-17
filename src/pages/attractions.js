import Card from '@/components/Card'
import Header from '@/components/Header'
import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function Attractions() {
  const [favorites, setFavorites] = useState([])
  
  return (
    <div>
      <Head>
        <title>Disney Made Easy</title>
        <meta name='description' content='Genereate Next App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header/>
      <div className="bg-gray-700 text-gray-200 p-5 gap-3 select-none sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        <Card />
      </div>
    </div>
  )
}
