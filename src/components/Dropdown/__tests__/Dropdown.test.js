import Dropdown from '..';
import React from "react";
import { render, act } from '@testing-library/react';

const label = 'OK';

it('should have innerText equals label property', () => {
  const { getByText } = render(<Dropdown label={label}/>);
  const linkElement = getByText(label);
  expect(linkElement).toBeInTheDocument();
});

it('click will toggle open state', () => {
  const dropdown = render(<Dropdown label={label} handleClick={console.log('bla')}/>);
  act(() => {
    dropdown.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });
});
