import React from 'react';
import Dropdown from '..';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() })

const label = 'OK';

describe('Dropdown', () => {
  it('render children as expected', () => {
    const wrapper = mount(<Dropdown label={label}/>);
    const dropdownBtn = wrapper.find('Button');
    expect(dropdownBtn).toHaveLength(1);
    expect(dropdownBtn.text()).toEqual('OK');
    const closedContent = wrapper.find('.dropdown-closed');
    expect(closedContent).toHaveLength(1);

  });
  
  it('click will toggle state', () => {
    const wrapper = mount(<Dropdown label={label} />);
    wrapper.find('button').simulate('click');
    const closedContent = wrapper.find('.dropdown-closed');
    expect(closedContent).toHaveLength(0);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.dropdown-closed')).toHaveLength(1);
  });  
});