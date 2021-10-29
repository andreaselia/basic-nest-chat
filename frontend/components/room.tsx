import Link from 'next/link'

function Room() {
  return <div className="flex justify-between items-center bg-gray-100 rounded-md text-sm p-4">
    <div>
      <strong>Room Name</strong>
    </div>

    <Link href="/rooms/test123">Join</Link>
  </div>
}

export default Room
