import Link from "next/link";
import { useEffect, useState } from "react";
import { deck, shuffle, baseField } from "../../helpers/helpers";
import { useContext } from 'react'
import Context from '../../helpers/context'
import { CompareCards } from "../../helpers/helpers";

const Play = () => {
  const [select, setSelect] = useState()
  const [trump, setTrump] = useState()
  const [cards, setCards] = useState([])
  const [enemy, setEnemy] = useState([])
  const [table, setTable] = useState([])
  const [ready, setReady] = useState(false)
  const [field, setField] = useState(baseField)

  const store = useContext(Context);

  useEffect (async () => {
    await store.setState({...store.state, title: '/play'})
    shuffle(deck)
    setCards(deck.slice(0, 6))
    setEnemy(deck.slice(7, 13))
    setTable(deck.slice(13, 35))
    setTrump(deck[35])
    setReady(true)
  }, [])

  useEffect(()=>{
    if (ready) {
      move()

    }
    
}, [ready])

  const selectCard = (card) => {
    setSelect(card)
  }

  const move = async () => {
    const updatedField = {...field}
    updatedField[0] = enemy[0]
    const uEnemy = enemy.slice(1, 6)
    setEnemy(uEnemy)
    setField(updatedField)
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
            src={`cards/${trump}.svg`}
          />
        </div>
        <div className="cover">
          <img
            src={`cards/00.svg`}
          />
        </div>
        <div className="enemies">
          {enemy.map(()=>(
            <img
              src={`cards/00.svg`}
              width='50px'
            />

          ))}

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
                    src={`cards/${field[f]}.svg`}
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
              src={`cards/${card}.svg`}
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