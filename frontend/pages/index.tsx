import type { NextPage } from 'next'
import Head from 'next/head'
import Room from '../components/room'

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-xl font-semibold">
          Welcome to Nest Chat!
        </h1>

        <div className="mt-8 space-y-4">
          <Room />
        </div>
      </main>
    </div>
  )
}

export default Home
