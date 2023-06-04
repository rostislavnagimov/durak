import Link from "next/link";
import { useTelegram } from "../telegram";

const Profile = () => {
  const { user, webApp } = useTelegram()


  
  return (
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
        <div className="user">
          {user ? (
            <div>
              <h1>Welcome {user?.username}</h1>
            </div>
          ) : (
            <div>Make sure web app is opened from telegram client</div>
          )}
        </div>
      </div>
    </>
)}

export default Profile;