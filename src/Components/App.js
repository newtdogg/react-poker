import React, { Component } from 'react';

import { suits, values } from "../utils";

import Layout from "./Layout";
import Deck from "./Deck";
import Player from "./Player";
// import Button from "./Button";

import { Footer } from "../Styles/Styled";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			players: ['Ted', 'Penny'],
			errorMessage: '',
			playerIndex: ''
		}
	}
	addPlayer = () => {
		if(this.state.players.length < 6) {
			const updatedPlayers = this.state.players;
			updatedPlayers.push(`Player ${this.state.players.length + 1}`)
			this.setState({players: updatedPlayers});
		} else {
			this.setState({errorMessage: 'The max number of players is 6'})
		}
	}
	handleRemovePlayer = index => {
		if(this.state.players.length > 2) {
			const players = this.state.players;
			players.splice(index, 1);
			this.setState({players});
		} else {
			this.setState({errorMessage: 'The min number of players is 2'})
		}
	}
	render() {
		return (
				<Layout>
					<section>
						<h1>Cards deck</h1>
						<Deck suits={suits} values={values} />
					</section>
					<section>
						<header>
							<h1>Players</h1>
						</header>
						<section>
							{this.state.players.map((name, index) => {
								return <Player onDelete={this.handleRemovePlayer} name={name} index={index} key={index}/>
							})}
						</section>
						<Footer>
							<button onClick={this.addPlayer}>Add new player</button>
							<button icon="🏆">Find the winner</button>
							<p>{this.state.errorMessage}</p>
						</Footer>
					</section>

				</Layout>
		);
	}
}

export default App;
