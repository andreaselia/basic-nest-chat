import { useEffect } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Message from '../../components/message'

const Room: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    // const ws = new WebSocket('http://localhost')
  }, [])

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-12">
        <form action="#" method="POST" className="space-y-4">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Room {id}
            </h3>
          </div>

          <div className="space-y-4">
            <Message />
            <Message />
            <Message />
          </div>

          <div className="flex space-x-2">
            <input type="text" name="message" placeholder="Enter a message" className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md" />

            <button type="submit" className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Send
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default Room
