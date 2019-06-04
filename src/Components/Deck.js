import React, { Component } from "react";
import { Card, StyledDeck } from "../Styles/Styled";
import Button from "./Button";

class Deck extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deck: this.shuffleDeck(),
			hands: []
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
	checkRandomNum = (nums) => {
		const rndNum = Math.floor(Math.random() * this.state.deck.length);
		if(nums.includes(rndNum)){
			return this.checkRandomNum(nums);
		} else {
			return rndNum;
		}
	}
	dealHands = numberOfPlayers => {
		this.setState({ deck: this.shuffleDeck()}, () => {
			const dealtDeck = this.state.deck;
			const hands = [];
			const randomNumbers = [];
			for(let i = 0; i < numberOfPlayers; i++) {
				const hand = [];
				for(let x = 0; x < 5; x++) {
					const rndNum = this.checkRandomNum(randomNumbers)
					const card = dealtDeck[rndNum];
					dealtDeck[rndNum].active = true;
					hand.push(card);
				}
				hands.push(hand);
			}
			this.setState({hands, deck: dealtDeck})
		})
	}
	handleDealHands = async () => {
		await this.dealHands(this.props.numberOfPlayers);
		await this.props.handleShuffleAndDeal(this.state.hands)
		await console.log(this.state.hands);
	}
	render() {
		return (
			<StyledDeck>
				{this.state.deck.map(card => (
					<Card
						key={card.suit+card.value}
						suit={card.suit}
						value={card.value}
						selected={card.active}
					>
						{card.value}
					</Card>
				))}
				<Button onClick={this.handleDealHands}>Deal</Button>
			</StyledDeck>
		)
	}
};

export default Deck;
