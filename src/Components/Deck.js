import React, { Component } from "react";
import { Card, StyledDeck } from "../Styles/Styled";
import Button from "./Button";

class Deck extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deck: this.shuffleDeck()
		}
	}
	shuffleDeck = () => {
		const deck = [];
		this.props.suits.forEach(suit => {
			this.props.values.forEach(value => {
				deck.push({
					suit,
					value,
					string: `${suit}${value}`,
					active: false
				})
			});
		});
		return deck;
	}
	// checkRandomNum = (nums) => {
	// 	const rndNum = Math.floor(Math.random() * this.state.deck.length);
	// 	if(nums.includes(rndNum)){
	// 		return this.checkRandomNum(nums);
	// 	} else {
	// 		return rndNum;
	// 	}
	// }
	dealHands = numberOfPlayers => {
		const dealtDeck = this.state.deck;
		const deckWithCardsRemoved = this.state.deck;
		const hands = [];
		console.log(numberOfPlayers)
		for(let i = 0; i < numberOfPlayers; i++) {
			const hand = [];
			for(let x = 0; x < 5; x++) {
				const rndNum = Math.floor(Math.random() * deckWithCardsRemoved.length);
				deckWithCardsRemoved.splice(rndNum, 1);
				const card = dealtDeck[rndNum];
				dealtDeck[rndNum].active = true;
				hand.push(card)
			}
			hands.push(hand);
		}
		this.setState({ deck: dealtDeck});
		return hands;
	}
	handleDealHands = () => {
		const hands = this.dealHands(this.props.numberOfPlayers);
		this.props.handleShuffleAndDeal(hands)
		console.log(hands);
	}
	render() {
		return (
			<StyledDeck>
				{this.state.deck.map(card => (
					<Card key={card.suit+card.value} suit={card.suit} value={card.value}>
						{card.value}
					</Card>
				))}
				<Button onClick={this.handleDealHands}>Deal</Button>
			</StyledDeck>
		)
	}
};

export default Deck;
