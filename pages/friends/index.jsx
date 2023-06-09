import Link from "next/link";
import { useTelegram } from "../../telegram";


const Friends = () => {
  const { user, webApp } = useTelegram()
  return (
  <>
    <div className='profile'>
        <p className='profile__text'>START</p>
    </div>
    <div className='profile__body'>
      {user && Object.keys(webApp.initData).map((i) => (
        <p>{webApp.initData[i]}</p>
      ))}
    </div>
  </>
)}

export default Friends;