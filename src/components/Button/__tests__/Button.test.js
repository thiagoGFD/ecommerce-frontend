import Button from '..';
import React from "react";
import { render, act } from '@testing-library/react';

const label = 'OK';
// let wrapped;

// beforeEach(() => {
//   wrapped = mount(<Button label={label} onClick={() => {}} />);
// });

// afterEach(() => {
//   wrapped.unmount();
// });


it('should have innerText equals label property', () => {
  const { getByText } = render(<Button label={label}/>);
  const linkElement = getByText(label);
  expect(linkElement).toBeInTheDocument();
});

it('will execute click', () => {
  const button = render(<Button label={label} handleClick={console.log('bla')}/>);
  act(() => {
    button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });
});
