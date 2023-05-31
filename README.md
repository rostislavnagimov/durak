# durak
## Pages:
- / - self profile
- /[id]/profile/ - other person's profile
- /start/ - creating new game page
- /play/ - game page - main app
- /friends/ - friends page and invitation link
- *suggestion* /top/ - rating page


## Abstraction:
Durak's card deck contains 36 cards in 4 suits. Each suit contains 9 cards. In that case I want to mark each card as a two digits number, where first digit stays for suit:
- 1: clubs (крести/трефы),
- 2: diamonds (буби),
- 3: hearts (черви),
- 4: spades (пики).


..and second number stays for the card weight:
- 1: 6,
- 2: 7,
- 3: 8,
- 4: 9,
- 5: 10,
- 6: jack (валет),
- 7: queen (дама),
- 8: king (король),
- 9: ace (туз).

In that system card deck is an array of two-digit numbers between 11 and 49 (except 0-ended 20, 30 and 40)

### New game page
- create game id and number of players as a game data
- send request with a game data to the backend: should return array of 6 two-digit numbers for player and create accsesable deck with a game id on a backend.
- go to the game page

### Profile page
- get from backend profile information based on users telegram ID
- *suggestion* have a button to give daily reward

### Friends page
-  get from backend friends information based on users telegram ID
- implement good-shariable "invite friend button"

### Game page
- shows user cards
- have an attack action
- have a defend action
- checks defend ability (can user or not to defend with the selected card, suit number should be equal to the card or to the trump, weight number should be bigger)
- first move system for the player who owns lowest trump card in a hand (should be done on a backend in order to not giving acces to enemy's cards) or who have lost the previous game
- have a trump selector which always takes the last card from the deck
- have 6 game fields
- have an enemies row
