import styles from './index.module.css'
import Link from 'next/link'
import { useContext } from 'react'
import Context from '../../helpers/context'

const Actions = ({ params }) => {
  const names = {
    "/": "PROFILE",
    "/friends": "FIRENDS",
    "/play": "FOOL",
    "/start": "NEW GAME"
  }

  const store = useContext(Context);
    return (
      <section className={styles['actions']}>
        <div className="button-block">
          {params === "/" && (
            <>
              <button>
                <Link
                  href={'/start'}
                >
                  NEW GAME
                </Link>
              </button>
              <button>
                <Link
                href={'/friends'}
                >
                FRIENDS
                </Link>
              </button>
            </>
          )}
          {params === "/play" && (<div></div>)}
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
        </div>
      </section>
    )
  }


export default Actions