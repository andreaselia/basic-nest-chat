function MessageItem(props) {
  console.log(props)
  return <div className="bg-gray-100 rounded-md text-sm p-4">
    <div className="flex justify-between">
      <strong>John Doe</strong>

      <p className="mt-1 text-xs font-semibold text-gray-500">
        19:10
      </p>
    </div>

    {props.message}
  </div>
}

export default MessageItem
