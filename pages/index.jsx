import { useTelegram } from "../telegram";
import { useContext, useEffect } from 'react'
import Context from '../helpers/context'
import { FetchUserImage } from "../helpers/helpers";

const Profile = () => {
  const { user, webApp } = useTelegram()
  {webApp && webApp.expand()}
  const store = useContext(Context);

  const load = async () => {
    const img = await FetchUserImage(user?.id)
    await store.setState({...store.state, title: '/', image: img})
  }

  useEffect(()=>{
    load()    
  },[])

  
  // https://api.telegram.org/bot6141999920:AAF8MOOTaSu9eCgBmls2xoMjhWBSCn43pcc/getFile?file_id=<file_id>
  // https://api.telegram.org/file/bot6065372321:AAHjNaFZDVJZKIxRFDijIjW26GFLjTVqLvw/photos/file_62.jpg




  return (
    <>
      <div className='profile__body'>
        <div className="user">
          <div className="user__info">
            <div className="user__image">
              {store.state.image && <img src={store.state.image} />}
              {!store.state.image && <span>Loading...</span>}
              
            </div>
            <div>
              <h1>{`${user?.first_name || 'Name'} ${user?.last_name || 'Placeholder'}`}</h1>
              <h2>{`ID: ${user?.id || 'ID'}`}</h2>
              <ul className='user__info__stats'>
                <li>Сыграно игр: 000</li>
                <li>Побед: 000</li>
                <li>Фишек: 000</li>
                <li>Баланс: 000</li>
              </ul>
            </div>
            
          </div>
          <div className="additional_info">
            <h1>Дополнительная информация</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
        </div>
      </div>
    </>
)}

export default Profile;