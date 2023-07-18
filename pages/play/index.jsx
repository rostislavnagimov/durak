import Link from "next/link";
import { useEffect, useState } from "react";
import { deck, shuffle, baseField } from "../../helpers/helpers";
import { useContext } from 'react'
import Context from '../../helpers/context'

const Play = () => {
  const [select, setSelect] = useState()
  const [trump, setTrump] = useState()
  const [cards, setCards] = useState([])
  const [field, setField] = useState(baseField)

  const store = useContext(Context);

  useEffect (() => {
    store.setState({...store.state, title: '/play'})
    shuffle(deck)
    setCards(deck.splice(0,6))
    setTrump(deck[7])
  }, [])

  const selectCard = (card) => {
    setSelect(card)
  }

  const placeCard = (f) => {
    const updatedField = { ...field }
    if (select && !field[f]) {
      updatedField[f] = select
      setField(updatedField)
      setSelect(null)
      setCards((prevCards) => prevCards.filter((card) => card !== select))
    } else if (!select && field[f]) {
      updatedField[f] = undefined
      setField(updatedField)
      setSelect(null)
      const hand = [...cards]
      hand.push(field[f])
      setCards(hand)
    } else if (select && field[f]) {
      updatedField[f] = select
      setField(updatedField)
      const hand = [...cards].filter((card) => card !== select)
      hand.push(field[f])
      setSelect(null)
      setCards(hand)
    }
  };



  return (
    <>
      <div className='profile__body'>
        <div className="trump">
          <img
            src={`cards/${trump}.png`}
          />
        </div>
        <div className="cover">
          <img
            src={`cards/00.png`}
          />
        </div>
        <div className="enemies">

        </div>
        <div className='field'>
          {Object.keys(field).map((f) => (
            <div
              className='point'
              onClick = {() => (placeCard(f))}
              >
              {field[f] && (
                <div>
                  <img
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