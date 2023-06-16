import styles from './index.module.css'
import Link from 'next/link'
import { useContext } from 'react'
import Context from '../../helpers/context'

const Header = () => {
  const store = useContext(Context);
  const title = store.state.title
  const names = {
    "/": "PROFILE",
    "/friends": "FIRENDS",
    "/play": "FOOL",
    "/start": "NEW GAME",
  }
  return (
  <header className={styles['header']}>
      {title != "/" && (
        <Link
          href={'/'}
        >
          <div className={styles['user__image__small']}></div>
        </Link>
      )}
      <div>{names[title] ? names[title] : <p>{title}</p>}</div>
  </header>
)}

export default Header