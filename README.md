# React Poker

### Introduction
A react UI that evaluates poker hands for between 2 and 6 players. Made for the Grabyo tech test.
As this is my first foray into a more complicated react front end, I started by refactoring some components and getting the simple functionality of adding and removing players. This enabled me to pick up how the state and props work and how data can be passed between parent and child components, and vice versa.

### How It Works

Building upon the original code, I refactored the classes and made adjustments. I refactored the deck component into a class which deals the randomized hands to the players. I created an array of card objects, containing the suit, value, string and active status. I had 2 implementations for ensuring the unique hands were dealt, the first was using a recursive RNG function however this was verbose so I settle for a shorter alternative.

Due to the asynchronos nature of the setState method, I had some trouble with rendering the correct data. For example, after dealing the cards, I wanted to update the `state.deck` with a new deck in which the cards had been selected.