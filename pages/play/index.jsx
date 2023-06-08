import Link from "next/link";
import { useEffect } from "react";

const Play = () => {
  const fullDeck = [11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 48, 49]
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const getRandomNumbers = () => {
    let randomNumbers = [];

    while (randomNumbers.length < 6) {
      let randomNumber = getRandomNumber(0, fullDeck.length - 1);

      if (!randomNumbers.includes(fullDeck[randomNumber])) {
        randomNumbers.push(fullDeck[randomNumber]);
      }
    }

  return randomNumbers;
}
 let deck =[]
 if (deck.length === 0) {
  deck = getRandomNumbers()
 }


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
          <div className='point'><div></div></div>
          <div className='point'><div></div></div>
          <div className='point'><div></div></div>
        </div>
        <div className='field'>
          <div className='point'><div></div></div>
          <div className='point'><div></div></div>
          <div className='point'><div></div></div>
        </div>

        <div className='deck'>
          {deck.map((card) => (
            <img
              src={process.env.PUBLIC_URL ? `${process.env.PUBLIC_URL}/cards/${card}.png` : `https://rostislavnagimov.github.io/durak/cards/${card}.png`}
              width='50px'
              key={card}
            />
          ))}
        </div>
      </div>
    </>
  )}

export default Play;