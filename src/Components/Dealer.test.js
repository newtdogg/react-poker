import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Dealer from './Dealer';
import Player from './Player';
import { Card } from '../Styles/Styled';
import testData from './testData'

describe('<Dealer />', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Dealer />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders the dealer with 2 players', () => {
		const wrapper = shallow(<Dealer/>);
    	expect(wrapper.find(Player)).toHaveLength(2);
	});

	it('can add a player', () => {
		const wrapper = shallow(<Dealer/>);
		wrapper.instance().addPlayer()
    	expect(wrapper.find(Player)).toHaveLength(3);
	});

	it('can remove a player', () => {
		const wrapper = shallow(<Dealer/>);
		wrapper.instance().addPlayer();
		wrapper.instance().handleRemovePlayer(0);
    	expect(wrapper.find(Player)).toHaveLength(2);
	});

	it('cannot remove a player if there is only 2 players', () => {
		const wrapper = shallow(<Dealer/>);
		wrapper.instance().handleRemovePlayer(0);
		expect(wrapper.find(Player)).toHaveLength(2);
		expect(wrapper.state().errorMessage).toEqual('The min number of players is 2')
	});

	it('cannot add a player if there is already 6 players', () => {
		const wrapper = shallow(<Dealer/>);
		wrapper.instance().addPlayer();
		wrapper.instance().addPlayer();
		wrapper.instance().addPlayer();
		wrapper.instance().addPlayer();
		wrapper.instance().addPlayer();
		expect(wrapper.find(Player)).toHaveLength(6);
		expect(wrapper.state().errorMessage).toEqual('The max number of players is 6')
	});

	it('players start with no cards in their hands', () => {
		const wrapper = shallow(<Dealer/>);
		expect(wrapper.find(Card)).toHaveLength(0);
		expect(wrapper.state().players).toHaveLength(2);
		expect(wrapper.state().players[0].hand).toHaveLength(0);
		expect(wrapper.state().players[1].hand).toHaveLength(0);
	});

	it('can evaluate 2 hands and declare a winner', () => {
		const data = testData.testData1;
		const wrapper = shallow(<Dealer {...{data}}/>);
		wrapper.instance().evaluateHands();
		const players = wrapper.find(Player);
		expect(players.get(0).props.isWinner).toBe(true);
		expect(wrapper.state().players[0].isWinner).toBe(true);
	});

});