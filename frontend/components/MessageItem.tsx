import React from 'react'

export const MessageItem: React.FC<Props> = ({ message }) => {
  return <div className="bg-gray-100 rounded-md text-sm p-4">
    <div className="flex justify-between">
      <strong>John Doe</strong>

      <p className="mt-1 text-xs font-semibold text-gray-500">
        {message.date.getHours()}:{message.date.getMinutes()}
      </p>
    </div>

    {message.text}
  </div>
}

export default MessageItem
