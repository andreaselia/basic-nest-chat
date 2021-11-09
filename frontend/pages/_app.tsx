import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { SocketContext, socket } from '../context/socket'

function MyApp({ Component, pageProps }: AppProps) {
  return <SocketContext.Provider value={socket}>
    <Component {...pageProps} />
  </SocketContext.Provider>
}

export default MyApp
