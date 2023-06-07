import Link from "next/link";
import { useState } from "react";

const NewGame = () => {
  const [mode, setMode] = useState(true)
  const [value, setValue] = useState(0)
  const [game, setGame] = useState(true)

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  
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
          <div>
            <input
              type="range"
              min={0}
              max={100}
              value={value}
              onChange={handleChange}
              style={{  scale: '3', margin: '30px' }}
            />
          </div>
          <div>{`Your bid is ${value}`}</div>
        </div>
      </div>
      <div className="game_mode">
        <div
          className={game ? 'game_option' : 'game_option__selected'}
          onClick={()=>{setGame(!game)}}
        >
          First
        </div>
        <div
          className={!game ? 'game_option' : 'game_option__selected'}
          onClick={()=>{setGame(!game)}}
        >
          Second
        </div>
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