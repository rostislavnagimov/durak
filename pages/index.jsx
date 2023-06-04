import Link from "next/link";
import { useTelegram } from "../telegram";

const Profile = () => {
  const { user, webApp } = useTelegram()
  {webApp && webApp.expand()}
  
  return (
    <>
      <div className='profile'>
        <p className='profile__text'>PROFILE</p>
      </div>
      <div className='profile__body'>
        <div className="user">
          {user ? (
            <div>
              <div className="user__image"></div>
              <h1>{`${user?.first_name} ${user?.last_name}`}</h1>
              <h2>{`ID: ${user?.id}`}</h2>
              <ul>
                <li>Сыграно игр: 000</li>
                <li>Побед: 000</li>
                <li>Фишек: 000</li>
                <li>Баланс: 000</li>
              </ul>
            </div>
          ) : (
            <div>Make sure web app is opened from telegram client</div>
          )}
        </div>
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
)}

export default Profile;