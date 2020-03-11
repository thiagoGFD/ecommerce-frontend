import React from 'react';
import Button from '..';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() })

const label = 'OK';

describe('Button', () => {
  it('should have text equals label property', () => {
    const wrapper = shallow(<Button label={label}/>);
    const button = wrapper.find('button');
    expect(button).toHaveLength(1);
    expect(button.text()).toEqual(label);
  });
  
  it('will execute click', () => {
    let count = 1;
    const incr = () => {
      count ++;
    }
    const wrapper = shallow(<Button label={label} handleClick={incr}/>);
    wrapper.find('button').simulate('click');
    expect(count).toBe(2);
  });  
});