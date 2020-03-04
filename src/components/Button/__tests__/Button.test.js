import Button from '..';
import { render } from '@testing-library/react';

const label = 'OK';
let wrapped;

beforeEach(() => {
  wrapped = mount(<Button label={label} onClick={() => {}} />);
});

afterEach(() => {
  wrapped.unmount();
});


it('should have innerText equals label property', () => {
  const text = wrapped.find('span').text();
  expect(text).toEqual(label);
});
