import Link from "next/link";

const Play = () => {
  let deck = []
  if (deck.length === 0) {
    let i = 0
    while (i < 6) {
      let number = Math.floor(Math.random() * (49 - 11 + 1)) + 11
      if (String(number).includes('0')) {
        deck.push(number + 1)
      } else {
        deck.push(number)
      }
      i++
    }
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