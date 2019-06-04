import React, { Component } from 'react';
import poker from 'poker-hands';

import { suits, values } from "../utils";

import Layout from "./Layout";
import Deck from "./Deck";
import Player from "./Player";
import Button from "./Button";

import { Footer } from "../Styles/Styled";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			players: [{
				name: 'Player 1',
				isWinner: false
			},{
				name: 'Player 2',
				isWinner: false
			}],
			errorMessage: '',
			playerIndex: '',
			hands: [[], []]
		}
	}
	evaluateHands = () => {
		const handsToEvaluate = [];
		this.state.hands.forEach(hand => {
			const handStringArray = [];
			hand.forEach(card => {
				handStringArray.push(card.string);
			});
			const handString = handStringArray.join(' ');
			handsToEvaluate.push(handString);
		});
		const winnerIndex = poker.judgeWinner(handsToEvaluate);
		const players = this.state.players;
		players[winnerIndex].isWinner = true
		this.setState({players})
	}
	addPlayer = () => {
		if(this.state.players.length < 6) {
			const updatedPlayers = this.state.players;
			updatedPlayers.push({name: `Player ${this.state.players.length + 1}`, isWinner: false})
			const updatedHands = this.state.hands;
			updatedHands.push([]);
			this.setState({players: updatedPlayers, hands: updatedHands});
		} else {
			this.setState({errorMessage: 'The max number of players is 6'})
		}
	}
	handleRemovePlayer = index => {
		if(this.state.players.length > 2) {
			const players = this.state.players;
			players.splice(index, 1);
			const updatedHands = this.state.hands;
			updatedHands.pop();
			this.setState({players, hands: updatedHands});
		} else {
			this.setState({errorMessage: 'The min number of players is 2'})
		}
	}
	shuffleAndDeal = hands => {
		const players = this.state.players;
		players.forEach(player => {
			player.isWinner = false;
		});
		this.setState({hands, players})
	}
	render() {
		return (
			<Layout>
				<section>
					<h1>Cards deck</h1>
					<Deck
						suits={suits}
						values={values}
						numberOfPlayers={this.state.players.length}
						handleShuffleAndDeal={this.shuffleAndDeal}
						reset={this.reset}
					/>
				</section>
				<section>
					<header>
						<h1>Players</h1>
						<Button icon="🙋‍" onClick={this.addPlayer}>Add new player</Button>
						<Button icon="🏆" onClick={this.evaluateHands}>Find the winner</Button>
						<p>{this.state.errorMessage}</p>
					</header>
					<section>
						{this.state.players.map((playerObject, index) => {
							return <Player
								name={playerObject.name}
								hand={this.state.hands[index]}
								isWinner={playerObject.isWinner}
								index={index}
								key={index}
								onDelete={this.handleRemovePlayer}
							/>
						})}
					</section>
					<Footer>

					</Footer>
				</section>

			</Layout>
		);
	}
}

export default App;
