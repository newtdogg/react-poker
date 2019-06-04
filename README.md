# React Poker

### Introduction
A react UI that evaluates poker hands for between 2 and 6 players. Made for the Grabyo tech test.
I tried to use ES6 syntax where possible.

### My Approach

**1. Understanding React**
As this is my first foray into a more complicated react front end, I started by refactoring some components and getting the simple functionality of adding and removing players. This enabled me to pick up how the state and props work and how data can be passed between parent and child components, and vice versa.

**2. Object-Oriented Desgin**
Building upon the original code, I refactored the classes and made adjustments. I refactored the deck component into a class which deals the randomized hands to the players. I created an array of card objects, containing the suit, value, string and active status. I had 2 implementations for ensuring the unique hands were dealt. The deck dealt the hands to the app which distributed the hands to the players. The players are an array in the app state: objects containing name and isWinner boolean.

###Challenges

