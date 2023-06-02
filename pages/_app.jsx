import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
  if (typeof window !== 'undefined') {
    const tg = window.Telegram?.WebApp
  
    if(tg) {
      tg.expand()
    }
  }
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default App
