import Link from "next/link";

const Play = () => {
  let deck = []
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

   const playerDeck = deck.forEach((card) => (
    <img src={`/cards/${card}.png`} width='50px'/>
  ))

  console.log(deck)

  return (
    <>
      <div className='profile'>
          <p className='profile__text'>START</p>
      </div>
      <div className='profile__body'>
        <ul>
          <li>
            <Link
            href={'/'}
            >
            HOME
            </Link>
          </li>
          <li>
            <Link
            href={'/start'}
            >
            CREATE NEW GAME
            </Link>
          </li>
          <li>
            <Link
            href={'/friends'}
            >
            FRIENDS
            </Link>
          </li>
        </ul>
        <div className='deck'>
          {deck.map((card) => (
            <img src={`/cards/${card}.png`} width='50px'/>
          ))}
        </div>
      </div>
    </>
  )}

export default Play;