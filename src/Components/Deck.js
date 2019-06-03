import React, { Fragment, Component } from "react";
import { Card, StyledDeck } from "../Styles/Styled";

class Deck extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deck: this.shuffleDeck()
		}
	}
	componentDidMount() {
		this.shuffleDeck();
	}
	shuffleDeck = () => {
		const deck = [];
		this.props.suits.forEach(suit => {
			this.props.values.forEach(value => {
				deck.push({suit, value, string: `${suit}${value}`})
			});
		});
		return deck;
	}
	render() {
		return (
			<StyledDeck>
				{this.state.deck.map(card => (
					<Card key={card.suit+card.value} suit={card.suit} value={card.value}>
						{card.value}
					</Card>
				))}
			</StyledDeck>
		)
	}
};

export default Deck;
