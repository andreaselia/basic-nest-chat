import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import MessageItem from '../../components/MessageItem'
import MessageForm from '../../components/MessageForm'
import React, { useContext, useEffect } from 'react'
import { SocketContext } from '../../context/socket'

const Room: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const socket = useContext(SocketContext)
  const [messages, setMessages] = React.useState<any[]>([])

  useEffect(() => {
    socket.on('bar', (payload) => {
      console.log('bar received', payload)

      setMessages([messages, ...payload])
    })

    return () => {
      // leave room
    }
  }, [socket])

  return (
    <div className="container">
      <Head>
        <title>Room {id}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-12 space-y-4">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Room {id}
          </h3>
        </div>

        <div className="space-y-4">
          {messages.map((message: string, index: number) => {
            return <MessageItem key={index} />
          })}
        </div>

        <MessageForm />
      </main>
    </div>
  )
}

export default Room
