import styles from './index.module.css'
import Link from 'next/link'
import { useContext } from 'react'
import Context from '../../helpers/context'

const Header = () => {
  const store = useContext(Context);
  const title = store.state.title
  const image = store.state.image
  const names = {
    "/": "PROFILE",
    "/friends": "FIRENDS",
    "/play": "FOOL",
    "/start": "NEW GAME",
  }
  console.log(store.state)
  return (
  <header className={styles['header']}>
      {title != "/" && (
        <Link
          href={'/'}
        >
          <div className={styles['user__image__small']}>
            <img src={image} />
          </div>
        </Link>
      )}
      <div>{names[title] ? names[title] : <p>{title}</p>}</div>
  </header>
)}

export default Header