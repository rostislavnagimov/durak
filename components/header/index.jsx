import styles from './index.module.css'
import Link from 'next/link'

const Header = ({ title }) => {
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
      <div>{names[title] ? names[title] : title}</div>
  </header>
)}

export default Header