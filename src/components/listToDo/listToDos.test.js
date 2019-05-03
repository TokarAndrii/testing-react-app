import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import ListToDos from './ListToDos';

configure({ adapter: new Adapter() });

describe("ListToDos tests", () => {

    it('should be toDos pass', () => {
        const wrapper = shallow(<ListToDos toDos={[]} ></ListToDos >)
        const empty = <div>Empty</div>
        expect(wrapper.contains(empty)).toEqual(true);
    })


})