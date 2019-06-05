import React, { Component } from "react";
import { Card, StyledDeck } from "../Styles/Styled";
import { suits, values } from "../utils";

import Button from "./Button";

class Deck extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deck: this.organiseDeck(),
			hands: [],
			additionalHands: []
		}
	}
	reset = () => {
		const hands = [];
		for(let i = 0; i < this.props.numberOfPlayers; i++) {
			hands.push([]);
		}
		this.setState({deck: this.organiseDeck()});
		this.props.handleShuffleAndDeal(hands);
	}
	organiseDeck = () => {
		const deck = [];
		suits.forEach(suit => {
			values.forEach(value => {
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
	setActiveCard = card => {
		if(this.props.activeCards.includes(card)) {
			return true;
		}
		return false;
	}
	checkRandomNum = (nums) => {
		const rndNum = Math.floor(Math.random() * 52);
		if(nums.includes(rndNum)){
			return this.checkRandomNum(nums);
		} else {
			console.log(rndNum);
			return rndNum;
		}
	}
	dealHands = numberOfPlayers => {
		this.setState({ deck: this.organiseDeck()}, () => {
			const dealtDeck = this.state.deck;
			const hands = [];
			const additionalHands = [];
			const randomNumbers = [];
			for(let i = 0; i < 6; i++) {
				const hand = [];
				for(let x = 0; x < 5; x++) {
					const rndNum = this.checkRandomNum(randomNumbers)
					randomNumbers.push(rndNum)
					const card = dealtDeck[rndNum];
					hand.push(card);
				}
				if(i < numberOfPlayers) {
					hands.push(hand);
					additionalHands.push([])
				} else {
					additionalHands.push(hand)
				}
			}
			this.setState({hands, deck: dealtDeck, additionalHands})
		})
	}
	handleDealHands = async () => {
		await this.dealHands(this.props.numberOfPlayers);
		await this.props.handleShuffleAndDeal(this.state.hands, this.state.additionalHands);
	}
	render() {
		return (
			<StyledDeck>
				{this.state.deck.map(card => (
					<Card
						key={card.suit+card.value}
						suit={card.suit}
						value={card.value}
						selected={this.setActiveCard(card)}
					>
						{card.value}
					</Card>
				))}
				<Button onClick={this.handleDealHands}>Deal</Button>
				<Button onClick={this.reset}>Reset</Button>
			</StyledDeck>
		)
	}
};

export default Deck;
