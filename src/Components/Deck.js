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
	reset = () => {
		const hands = [];
		for(let i = 0; i < this.props.numberOfPlayers; i++) {
			hands.push([]);
		}
		this.setState({deck: this.shuffleDeck()});
		this.props.handleShuffleAndDeal(hands);
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
		const rndNum = Math.floor(Math.random() * 52);
		if(nums.includes(rndNum)){
			return this.checkRandomNum(nums);
		} else {
			console.log(rndNum);
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
					randomNumbers.push(rndNum)
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
				<Button onClick={this.reset}>Reset</Button>
			</StyledDeck>
		)
	}
};

export default Deck;
