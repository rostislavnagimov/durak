import '../styles/globals.css'
import { TelegramProvider } from "../telegram";

const App = ({ Component, pageProps }) => {
  return (
    <TelegramProvider>
      <Component {...pageProps} />
    </TelegramProvider>
  )
}

export default App
