import React, { useContext, useEffect } from 'react'
import { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { addMessage } from './roomSlice'
import { SocketContext } from '../../context/socket'
import MessageItem from '../../components/MessageItem'

export function MessageList() {
  const socket = useContext(SocketContext)
  const messages = useSelector((state: RootState) => state.room.messages)
  const dispatch = useDispatch()

  useEffect(() => {
    socket.on('message', (payload) => dispatch(addMessage(payload)))
  }, [socket])

  return (
    <div className="space-y-4">
      {messages.map((message: Message, index: number) => {
        return <MessageItem message={message} key={index} />
      })}
    </div>
  )
}
