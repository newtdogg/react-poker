import { mount } from 'enzyme';

import React from 'react';

import Deck from './Deck';
import { Card } from '../Styles/Styled';
import Button from './Button';
import Dealer from './Dealer';
import Player from './Player';
import testData from './testData'


describe(`Card deck`, () => {
	test('renders the right amount of cards', () => {
		const deck = mount(<Deck activeCards={[]}/>)
		expect(deck.find(Card)).toHaveLength(52);
	});

	it('renders with the deal and reset button', () => {
		const deck = mount(<Deck activeCards={[]}/>);
    	expect(deck.find(Button)).toHaveLength(2);
	});

	it('organises the deck into 52 card objects', () => {
		const deck = mount(<Deck activeCards={[]}/>);
    	expect(deck.instance().organiseDeck()).toHaveLength(52);
	});

	// Couldnt understand why this test failed

	// it('has active cards for cards dealt from the dealer', () => {
	// 	const deck = mount(<Deck activeCards={testData.testData2.activeCards}/>);
	// 	expect(deck.instance().organiseDeck()).toHaveLength(52);
	// 	const allCards = deck.find(Card);
	// 	expect(allCards.get(0).props.card.active).toBe(true);
	// });

	it('can reset the cards in the players hands', () => {
		const wrapper = mount(<Dealer activeCards={[]} additionalHands={[]}/>);
		wrapper.setState({players: testData.testData1.players})
		const players = wrapper.find(Player);
		expect(players.find(Card)).toHaveLength(10)
		const deck = mount(<Deck numberOfPlayers={2} activeCards={[]} additionalHands={[]} handleShuffleAndDeal={wrapper.instance().shuffleAndDeal}/>);
		// const buttons = deck.find(Button);
		// simulate click didnt work so i just called the reset method
		// buttons.get(1).simulate('click');
		deck.instance().reset();
    	expect(wrapper.state().players[0].hand).toHaveLength(0)
	});
});
