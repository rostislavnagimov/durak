import Link from "next/link";
import { useEffect, useState } from "react";
import { deck, shuffle, baseField } from "../../helpers/helpers";

const Play = () => {
  const [select, setSelect] = useState()
  const [cards, setCards] = useState([])
  const [field, setField] = useState(baseField)

  useEffect (() => {
    console.log(deck)
    shuffle(deck)
    console.log(deck)
    setCards(deck.splice(0,6))
  }, [])

  const selectCard = (card) => {
    setSelect(card)
  }

  const placeCard = (f) => {
    if (select) {
      const updatedField = { ...field }
      updatedField[f] = select
      setField(updatedField)
      setSelect(null)
      setCards((prevCards) => prevCards.filter((card) => card !== select))
    }
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
          <p className='profile__text'>PLAY</p>
        </div>
      </div>
      <div className='profile__body'>
        <div className='field'>
          {Object.keys(field).map((f) => (
            <div
              className='point'
              onClick = {() => (placeCard(f))}
              >
              {field[f] && (
                <div>
                  <img
                    // src={process.env.PUBLIC_URL ? `${process.env.PUBLIC_URL}/cards/${card}.png` : `https://rostislavnagimov.github.io/durak/cards/${card}.png`}
                    src={`cards/${field[f]}.png`}
                    width='100px'
                  />
                </div>
              )}
              {!field[f] && <div></div>}
            </div>
          ))}
        </div>

        <div className='deck'>
          {cards.map((card) => {
            return (
            <img
              // src={process.env.PUBLIC_URL ? `${process.env.PUBLIC_URL}/cards/${card}.png` : `https://rostislavnagimov.github.io/durak/cards/${card}.png`}
              src={`cards/${card}.png`}
              width='50px'
              onClick={() => (
                selectCard(card)
              )}
            />
          )})}
        </div>
      </div>
    </>
  )}

export default Play;