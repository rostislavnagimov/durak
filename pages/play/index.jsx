import Link from "next/link";

const Play = () => (
  <>
    <div className='profile'>
        <p className='profile__text'>START</p>
    </div>
    <div className='profile__body'>
      <ul>
        <li>
          <Link
          href={'/'}
          >
          HOME
          </Link>
        </li>
        <li>
          <Link
          href={'/start'}
          >
          CREATE NEW GAME
          </Link>
        </li>
        <li>
          <Link
          href={'/friends'}
          >
          FRIENDS
          </Link>
        </li>
      </ul>
    </div>
  </>
)

export default Play;