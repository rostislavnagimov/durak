
const friends = [
  {
    name: 'Friend Friendovich',
    status: 'Online',
    games: 10,
    wins: 5,
    id: 144415
  },
  {
    name: 'Friend Friendovich',
    status: 'Online',
    games: 10,
    wins: 5,
    id: 144415
  },
  {
    name: 'Friend Friendovich',
    status: 'Online',
    games: 10,
    wins: 5,
    id: 144415
  },
  {
    name: 'Friend Friendovich',
    status: 'Online',
    games: 10,
    wins: 5,
    id: 144415
  },
  {
    name: 'Friend Friendovich',
    status: 'Online',
    games: 10,
    wins: 5,
    id: 144415
  },
  {
    name: 'Friend Friendovich',
    status: 'Online',
    games: 10,
    wins: 5,
    id: 144415
  },
  {
    name: 'Friend Friendovich',
    status: 'Online',
    games: 10,
    wins: 5,
    id: 144415
  },
]


const Friends = () => {
  return (
  <>
    <div className='profile'>
        <p className='profile__text'>FRIENDS</p>
    </div>
    <div className='profile__body'>
      <div className='friends'>
        {friends.map((friend) => (
          <div className='friend' key={friend.id}>
            <div className='friend__image__small'></div>
            <div className="friend__info">
              <h1>{friend.name}</h1>
              <h2>{friend.status}</h2>
              <span>{`Games: ${friend.games} / Wins: ${friend.wins}`}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="invite">
        <button>SEND LINK</button>

      </div>
    </div>
  </>
)}

export default Friends;