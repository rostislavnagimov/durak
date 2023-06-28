import { useState } from "react";
import Context from "../../helpers/context";
import { useContext } from "react";
import { useEffect } from "react";

const NewGame = () => {
  const [mode, setMode] = useState(true)
  const [value, setValue] = useState(0)
  const [game, setGame] = useState(true)

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const store = useContext(Context);
  useEffect(()=>{
    store.setState({
      ...store.state,
      title: '/start',
      mode: mode,
      value: value,
      game:game
    })

  }, [mode, value, game])

  
  return (
  <>
    <div className='profile__body'>
      <div className='bid_mode'>
        <span>Bid mode</span>
        <div className='bid_select'>
          <div
            className={mode ? 'bid_option__selected' : 'bid_option'}
            onClick={()=>{setMode(!mode)}}
          >
            <span>Money</span>
          </div>
          <div
            className={!mode ? 'bid_option__selected' : 'bid_option'}
            onClick={()=>{setMode(!mode)}}
          >
            <span>Coins</span>
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
              style={{  scale: '2.7', margin: '30px' }}
            />
          </div>
          <div>{`Your bid is ${value} ${mode ? 'moneys' : 'coins'}`}</div>
        </div>
      </div>
      <div className="game_mode">
        <div
          className={game ? 'game_option__selected' : 'game_option'}
          onClick={()=>{setGame(!game)}}
        >
          Throw-in
        </div>
        <div
          className={!game ? 'game_option__selected' : 'game_option'}
          onClick={()=>{setGame(!game)}}
        >
          Transfer
        </div>
      </div>
      <div>
        <span>Team</span>
        <ol>
          <li>mem</li>
          <li>member</li>
          <li>member</li>
          <li>member</li>
        </ol>
      </div>
    </div>
  </>
)}

export default NewGame;