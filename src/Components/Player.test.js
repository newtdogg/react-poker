import React from 'react';
import { shallow } from 'enzyme';
// import ReactDOM from 'react-dom';
import Player from './Player';
import { Card } from "../Styles/Styled";

describe('<Player />', () => {
	it('starts with an empty hand', () => {
		const wrapper = shallow(<Player {...{hand: []}}/>);
		expect(wrapper.find(Card)).toHaveLength(0);
	});

	it('props provides the player name', () => {
		const wrapper = shallow(<Player {...{hand: [], name: 'Ted'}}/>);
		expect(wrapper.state().name).toEqual('Ted');
	});

	it('can toggle the ability to edit player name', () => {
		const wrapper = shallow(<Player {...{hand: [], name: 'Ted'}}/>);
		expect(wrapper.find('form')).toHaveLength(0);
		const toggle = wrapper.find('Button').at(0)
		toggle.simulate('click');
		expect(wrapper.find('form')).toHaveLength(1);
		toggle.simulate('click');
		expect(wrapper.find('form')).toHaveLength(0);
	});

	it('can update the players name', () => {
		const wrapper = shallow(<Player {...{hand: [], name: 'Ted'}}/>);
		expect(wrapper.find('form')).toHaveLength(0);
		wrapper.setState({nameInput: true})
		const nameInput = wrapper.find('input')
		nameInput.simulate('change', { target: { value: 'Player 2' } })
		expect(wrapper.state().name).toEqual('Player 2');
	});
});