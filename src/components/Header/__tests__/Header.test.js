import React from "react";
import Header from '..';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() })

describe('Header', () => {
    it('should render without user', () => {
        const noUser = null;
        const wrapper = shallow(<Header user={noUser}/>);
        
        const logo = wrapper.find('img');
        expect(logo).toHaveLength(1);

        const text = wrapper.find('h1');
        expect(text).toHaveLength(1);
        expect(text.text()).toEqual('welcome.title');

        const links = wrapper.find('Link');
        expect(links).toHaveLength(2);
    });

    it('should render with user', () => {
        const personName = 'Person';
        const fakeUser = {token: 1, firstName: personName};
        const wrapper = shallow(<Header user={fakeUser}/>);

        const logo = wrapper.find('img');
        expect(logo).toHaveLength(1);

        const text = wrapper.find('h1');
        expect(text).toHaveLength(1);
        expect(text.text()).toContain('welcome.title');

        const links = wrapper.find('Link');
        expect(links).toHaveLength(1);

        const userInfo = wrapper.find('.header-user-info');
        expect(userInfo).toHaveLength(1);
        expect(userInfo.text()).toContain(personName);
    }); 
  });