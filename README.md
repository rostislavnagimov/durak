# durak
## Pages:
- /profile/ - self profile
- /[id]/profile/ - other person's profile
- /start/ - creating new game page
- /play/ - game page - main app
- /friends/ - friends page and invitation link
- *suggestion* /top/ - rating page


## Abstraction:
Durak's card deck contains 36 cards in 4 suits. Each suit contains 9 cards. In that case I want to mark each card as a two digits number, where first digit stays for suit:
- 1:clubs (крести/трефы),
- 2:diamonds (буби),
- 3:hearts (черви),
- 4:spades (пики).
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
