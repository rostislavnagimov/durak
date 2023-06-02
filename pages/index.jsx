import Link from "next/link";

const Profile = () => (
  <>
    <div className='profile'>
      <p className='profile__text'>PROFILE</p>
    </div>
    <div className='profile__body'>
      <ul>
        <li>
          <Link
          href={'/start'}
          >
          CREATE NEW GAME
          </Link>
        </li>
        <li>
          <Link
          href={'/play'}
          >
          PLAY
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

export default Profile;