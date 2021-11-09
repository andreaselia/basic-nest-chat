import Link from 'next/link'

function RoomItem() {
  return <div className="flex justify-between items-center bg-gray-100 rounded-md text-sm p-4">
    <div>
      <strong>Room Name</strong>
    </div>

    <Link href="/rooms/test123">
      <a className="text-blue-500 font-semibold">Join</a>
    </Link>
  </div>
}

export default RoomItem
