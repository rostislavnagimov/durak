import Link from "next/link";
import { useTelegram } from "../../telegram";


const Friends = () => {
  const { user } = useTelegram()
  return (
  <>
    <div className='profile'>
        <p className='profile__text'>START</p>
    </div>
    <div className='profile__body'>
      {user && (
        <>
          <div>{user.photo_url}</div>
          <img src={user.photo_url} width='100px'/>
        </>
      )}
    </div>
  </>
)}

export default Friends;