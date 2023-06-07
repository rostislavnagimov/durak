import Link from "next/link";
import { useState } from "react";

const NewGame = () => {
  const [mode, setMode] = useState(true)
  
  return (
  <>
    <div className='profile'>
      <div className='newgame__header'>
        <Link
          href={'/'}
        >
          <div className="user__image__small"></div>
        </Link>
        <p className='profile__text'>NEW GAME</p>
      </div>
    </div>
    <div className='profile__body'>
      <div className='bid_mode'>
        <span>Bid mode</span>
        <div className='bid_select'>
          <div
            className={mode ? 'bid_option' : 'bid_option__selected'}
            onClick={()=>{setMode(!mode)}}
          >
            First
          </div>
          <div
            className={!mode ? 'bid_option' : 'bid_option__selected'}
            onClick={()=>{setMode(!mode)}}
          >
            Second
          </div>
        </div>
        <div>
          <div>Bid size</div>
          <div>Bid</div>
        </div>
      </div>
      <div className="game_mode">
        <div>Flip</div>
        <div>Transfer</div>
      </div>
      <div>
        <span>Team</span>
        <ol>
          <li>member</li>
          <li>member</li>
          <li>member</li>
          <li>member</li>
        </ol>
      </div>
      <div className='playbutton'>
        <Link
          href={'/play'}
        >
          PLAY
        </Link>
      </div>
    </div>
  </>
)}

export default NewGame;