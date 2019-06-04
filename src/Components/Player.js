import React, { Component } from 'react';

import Button from "./Button";

import { Card, PlayerHand } from "../Styles/Styled";

class Player extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	handleDeletePlayer = () => {
		this.props.onDelete(this.props.index);
	}
	render() {
		return (
			<article>
				<p>
					{this.props.name}
					<Button icon="✏️">Edit</Button>
					<Button onClick={this.handleDeletePlayer} icon="🔥">Remove</Button>
				</p>
				<PlayerHand>
					{this.props.hand.map((card, index) => {
						return <Card suit={card.suit} value={card.value} key={index}>
						{card.value}
						</Card>
					})}
				</PlayerHand>
			</article>
		)
	}
};

export default Player;
