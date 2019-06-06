import React, { Component } from 'react';
import poker from 'poker-hands';

import Layout from "./Layout";
import Deck from "./Deck";
import Player from "./Player";
import Button from "./Button";

import { Footer } from "../Styles/Styled";

class Dealer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			players: [{
				name: 'Player 1',
				hand: [],
				isWinner: false
			},{
				name: 'Player 2',
				hand: [],
				isWinner: false
			}],
			activeCards: [],
			additionalHands: [],
			errorMessage: '',
			playerIndex: ''
		}
	}
	evaluateHands = () => {
		const handsToEvaluate = [];
		this.state.players.forEach(player => {
			const handStringArray = [];
			player.hand.forEach(card => {
				handStringArray.push(card.string);
			});
			const handString = handStringArray.join(' ');
			handsToEvaluate.push(handString);
		});
		console.log(handsToEvaluate)
		const winnerIndex = poker.judgeWinner(handsToEvaluate);
		const players = this.state.players;
		players[winnerIndex].isWinner = true
		this.setState({players})
	}
	addPlayer = () => {
		if(this.state.players.length < 6) {
			const updatedPlayers = this.state.players;
			let hand = [];
			if(this.state.players[0].hand.length !== 0) {
				hand = this.state.additionalHands[this.state.players.length];
			}
			const activeCards = this.state.activeCards;
			activeCards.push(...hand);
			updatedPlayers.push({name: `Player ${this.state.players.length + 1}`, isWinner: false, hand})
			this.setState({players: updatedPlayers, activeCards, errorMessage: ''});
		} else {
			this.setState({errorMessage: 'The max number of players is 6'})
		}
	}
	handleRemovePlayer = index => {
		if(this.state.players.length > 2) {
			const players = this.state.players;
			const activeCards = [];
			players.splice(index, 1);
			players.forEach(player => {
				activeCards.push(...player.hand)
			});
			this.setState({players, activeCards, errorMessage: ''});
		} else {
			this.setState({errorMessage: 'The min number of players is 2'})
		}
	}
	shuffleAndDeal = (hands, additionalHands) => {
		const players = this.state.players;
		let i = 0;
		const activeCards = [];
		players.forEach(player => {
			player.isWinner = false;
			player.hand = hands[i]
			activeCards.push(...hands[i])
			i += 1;
		});
		this.setState({players, activeCards, additionalHands, errorMessage: ''})
	}
	render() {
		return (
			<Layout>
				<section>
					<h1>Cards deck</h1>
					<Deck
						activeCards={this.state.activeCards}
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
								hand={playerObject.hand}
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

export default Dealer;
