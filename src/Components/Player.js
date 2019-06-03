import React, { Component } from 'react';

import Button from "./Button";

import { Card, PlayerHand } from "../Styles/Styled";

class Player extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	handleDeletePlayer = () => {
		console.log(this.props.index)
		this.props.onDelete(this.props.index);
	}
	render() {
		return (
			<article>
				<p>
					{this.props.name}
					<Button icon="✏️">Edit</Button>
					<button onClick={this.handleDeletePlayer} icon="🔥">Remove</button>
				</p>
				<PlayerHand>
						<Card suit="D" value="A" selected={true}>
							A
						</Card>
						<Card suit="D" value="K">
							K
						</Card>
						<Card suit="D" value="Q">
							Q
						</Card>
						<Card suit="D" value="J">
							J
						</Card>
						<Card suit="D" value="T">
							T
						</Card>
				</PlayerHand>
			</article>
		)
	}
};

export default Player;
