import React from 'react';
import { mount, shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Dealer from './Dealer';
import Player from './Player';

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
});