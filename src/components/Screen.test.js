import React from 'react';
import renderer from 'react-test-renderer';
import Screen from './Screen';

it('renders', () => {
  const tree = renderer
    .create(<Screen value={123} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
