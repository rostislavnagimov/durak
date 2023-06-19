import styles from './index.module.css'
import Link from 'next/link'
import { useContext } from 'react'
import Context from '../../helpers/context'
import { CopyToClipboard } from 'react-copy-to-clipboard';


const Actions = () => {
  const store = useContext(Context);
  const params = store.state.title
    return (
      <section className={styles['actions']}>
        <div>
          {params === "/" && (
            <>
              <Link
                href={'/start'}
              >
                NEW GAME
              </Link>
              <Link
              href={'/friends'}
              >
              FRIENDS
              </Link>
            </>
          )}
          {params === "/play" && (
            <div>

            </div>
          )}
          {params === "/start" && (
            <Link
              onClick={() => (
                alert(`Играем на ${store.state.mode ? 'деньги' : 'фишки'}, ставка ${store.state.value}, в ${store.state.game ? 'подкидной' : 'переводной'}`)
              )}
              href={'/play'}
            >
              PLAY
            </Link>
            )}
          {params === "/friends" && (
            <CopyToClipboard text='ССЫЛКА'>
              <a
              className="actions-button">
                SEND LINK
              </a>
            </CopyToClipboard>
            )}
          
          
        </div>
      </section>
    )
  }


export default Actions