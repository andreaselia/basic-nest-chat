import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Message from '../../components/message'
import Form from '../../components/form'
import { useContext, useEffect } from 'react'
import { SocketContext } from '../../context/socket'

const Room: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const socket = useContext(SocketContext)

  useEffect(() => {
    socket.emit('foo')

    socket.on('bar', () => console.log('bar'))

    return () => {}
  }, [socket])

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

          <Form />
        </form>
      </main>
    </div>
  )
}

export default Room
