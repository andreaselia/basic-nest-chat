import type { NextPage } from 'next'
import Head from 'next/head'
import RoomItem from '../components/RoomItem'

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Nest Chat</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-12">
        <h1 className="text-xl font-semibold">
          Welcome to Nest Chat!
        </h1>

        <div className="mt-8 space-y-4">
          <RoomItem />
        </div>
      </main>
    </div>
  )
}

export default Home
