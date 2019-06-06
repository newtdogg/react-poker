# React Poker

### Introduction
A react UI that evaluates poker hands for between 2 and 6 players. Made for the Grabyo tech test.

To start:
`yarn && yarn start`
To test:
`yarn test`

### Requirements
- A game can have between 2 and 6 players.
- You can add, remove, and edit a player
- The same card can not be present in two players hand
- A card needs to be "selected" in the card deck if it is added to a player's hand
- You are free to display the winner the way you want after clicking on the "Find the winner" button

### My Approach

**1. Understanding React**<br/>
As this is my first foray into a more complicated react front end, I started by refactoring some components and getting the simple functionality of adding and removing players. This enabled me to pick up how the state and props work and how data can be passed between parent and child components, and vice versa.

**2. Object-Oriented Desgin**<br/>
Building upon the original code, I refactored the classes and made adjustments. I refactored the deck component into a class which deals the randomized hands to the players, and made it so the suits and values weren't props as they didn't need to be accessed in the parent. I created an array of card objects, containing the suit, value, string and active status. The deck dealt the hands to the dealer which distributed the hands to the players. The players are an array in the dealer state: objects containing name and isWinner boolean.

**3. Core functionality**<br/>
I moved onto completing the key parts of the challenge, including solving the hands. The deck deals the cards to the players, and the dealer evaluates the hands and announces the winner with a message to the winning player component. I also implemented a simple method to establish if dealt cards were selected by passing the deck an array of all active cards.

**4. Additional functionality**<br/>
Added a reset button to make sure the hands can be reset. I also added functionality so if a player is added or removed the hands are updated accordingly. This was an uneccessary feature but allowed me to further practice and understand the flow of data between parent and child components.

**5. Testing**<br/>
As I wanted to get the basics of react understood, I started to write tests later than I should have done. This being said I implemented tests on the basic functionality that all passed. Some more complicated tests I found difficult as I was unsure how the focused the tests should be on individual bits of functionality. For example in one of the deck tests, in order to test the reset button I wanted to ensure the players hands were empty, but to do this I needed to access the dealer. I couldn't establish if this was neccessary but the more tests the better so I kept it. I attempted to seperate the tests into a seperate file but this broke the runner.

### Challenges

- This is my first react project outside of simple tutorials like tic-tac-toe. I felt I understood it well but with experience comes knowledge of best practices and implementations
- Understanding what to test was difficult. For example I was unsure if my tests should cover the state and props being correct or the final rendering of the component.

### What I would do next time
- Due to learning as react I went and wanting to get stuck in, I left tests to later than I should have. If I had taken a more TDD approach my code and implementation would have likely been cleaner
- I would have liked to implement nice UX and build upon the UI but this was not neccessary for the test considering time contraints
- Add cleaner and more comprehensive tests
