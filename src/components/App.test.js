import React from 'react';
import {shallow} from 'enzyme';
import App from './App'; 

/* App component doesn't exsit yet */

const app = shallow(<App />);

it('renders correctly', ()=>{
    expect(app).toMatchSnapshot();
});

it('initializes the `state` to an empty array of gifts', () => {
    expect(app.state().gifts).toEqual([]);
});

it('Adds a new gift when `state` has a `add gift` button click event', ()=>{
    app.find('.btn-add').simulate('click');

    expect(app.state().gifts).toEqual([{ id: 1 }]);
});