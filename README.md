# React Poker

### Introduction
A react UI that evaluates poker hands for between 2 and 6 players. Made for the Grabyo tech test.
I tried to use ES6 syntax where possible.

### My Approach

**1. Understanding React**
As this is my first foray into a more complicated react front end, I started by refactoring some components and getting the simple functionality of adding and removing players. This enabled me to pick up how the state and props work and how data can be passed between parent and child components, and vice versa.

**2. Object-Oriented Desgin**
Building upon the original code, I refactored the classes and made adjustments. I refactored the deck component into a class which deals the randomized hands to the players, and made it so the suits and values weren't props as they didn't need to be accessed in the parent. I created an array of card objects, containing the suit, value, string and active status. I had 2 implementations for ensuring the unique hands were dealt. The deck dealt the hands to the app which distributed the hands to the players. The players are an array in the app state: objects containing name and isWinner boolean.

**3. Core functionality**
I moved onto completing the key parts of the challenge, including solving the hands. The deck deals the cards to the players, and the dealer evaluates the hands and announces the winner with a message the winning player component. I also implemented a simple change update the deck state so it updated with dealt cards so they were represented as selected.

**4. Additional functionality**
Added a reset button to make sure the hands can be reset. I also added functionality so if a player is added or removed the hands are updated accordingly. This was an uneccessary feature but allowed me to further practice and understand the flow of data between parent and child components. This did complicate my code, and

**5. Testing**
As I wanted to get the basics of react understood, I started to write tests later than I should have done. This being said I implemented tests on the basic functionality that all passed. Some more complicated tests I found difficult as I was unsure how the focused the tests should be on individual bits of functionality. For example in one of the deck tests, in order to test the reset button I wanted to ensure the players hands were empty, but to do this I needed to access the dealer. I couldn't establish if this was neccessary but the more tests the better so I kept it.

###Challenges

- Limited experience with react, best practices unknown
- Not sure of best implementation of tests. Not used unit tests on a components much before.

###What I would do next time
- Test earlier on
- More styling
