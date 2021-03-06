import React, { Component } from 'react';
import Button from "./Button";

import { Card, PlayerHand } from "../Styles/Styled";

class Player extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.name,
			nameInput: false
		}
		this.handleNameChange = this.handleNameChange.bind(this);
	}
	handleDeletePlayer = () => {
		this.props.onDelete(this.props.index);
	}
	enterNameToggle = () => {
		if (this.state.nameInput === false) {
			this.setState({nameInput: true})
		} else {
			this.setState({nameInput: false})
		}
	}
	handleNameChange = event => {
		this.setState({name: event.target.value})
	}
	toggleFormOff = () => {
		this.setState({nameInput: false})
	}
	render() {
		let nameForm;
		let isWinner;
		if (this.state.nameInput === true) {
			nameForm = <form>
				<label>New Name:
				<input value={this.state.name} onChange={this.handleNameChange} type="text" />
		  		</label>
				<Button onClick={this.toggleFormOff}>Done</Button>
			</form>
		}
		if (this.props.isWinner) {
			isWinner = ' is the Winner!!!'
		}
		return (
			<article>
					<h5>{this.state.name}{isWinner}</h5>
					<Button class="editToggle" onClick={this.enterNameToggle} icon="✏️">Edit</Button>
					<Button onClick={this.handleDeletePlayer} icon="🔥">Remove</Button>
				{nameForm}
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
