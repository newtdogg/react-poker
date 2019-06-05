export default {
	testData1: {
		players: [{
			name: 'Player 1',
			hand: [
				{suit: "S", value: "T", string: "ST", active: false},
				{suit: "S", value: "8", string: "S8", active: false},
				{suit: "S", value: "K", string: "SK", active: false},
				{suit: "S", value: "7", string: "S7", active: false},
				{suit: "S", value: "9", string: "S9", active: false}
			],
			isWinner: false
		},{
			name: 'Player 2',
			hand: [
				{suit: "D", value: "T", string: "ST", active: false},
				{suit: "C", value: "8", string: "H8", active: false},
				{suit: "H", value: "K", string: "HK", active: false},
				{suit: "H", value: "7", string: "D7", active: false},
				{suit: "D", value: "9", string: "H9", active: false}
			],
			isWinner: false
		}]
	},
	testData2: {
		hands: [
			[
				{suit: "S", value: "T", string: "ST", active: false},
				{suit: "S", value: "8", string: "S8", active: false},
				{suit: "S", value: "K", string: "SK", active: false},
				{suit: "S", value: "7", string: "S7", active: false},
				{suit: "S", value: "9", string: "S9", active: false}
			],
			[
				{suit: "D", value: "T", string: "ST", active: false},
				{suit: "C", value: "8", string: "H8", active: false},
				{suit: "H", value: "K", string: "HK", active: false},
				{suit: "H", value: "7", string: "D7", active: false},
				{suit: "D", value: "9", string: "H9", active: false}
			],
		],
		additionalHands: [
			[
				{suit: "D", value: "2", string: "ST", active: false},
				{suit: "C", value: "3", string: "H8", active: false},
				{suit: "H", value: "4", string: "HK", active: false},
				{suit: "H", value: "5", string: "D7", active: false},
				{suit: "D", value: "6", string: "H9", active: false}
			]
		],
	}
}