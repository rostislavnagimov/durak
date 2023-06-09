import Link from "next/link";
import { useTelegram } from "../telegram../telegram";


const Friends = () => {
  const { user } = useTelegram()
  return (
  <>
    <div className='profile'>
        <p className='profile__text'>START</p>
    </div>
    <div className='profile__body'>
      {user && Object.keys(user).map((i) => (
        <p>{user[i]}</p>
      ))}
    </div>
  </>
)}

export default Friends;