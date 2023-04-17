import Header from '@/components/Header'
import Head from 'next/head'

export default function Favorites() {
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
