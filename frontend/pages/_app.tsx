import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { store } from '../app/store'
import { Provider } from 'react-redux'
import { SocketContext, socket } from '../context/socket'

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <SocketContext.Provider value={socket}>
      <Component {...pageProps} />
    </SocketContext.Provider>
  </Provider>
}

export default MyApp
