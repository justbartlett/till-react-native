/**
 * @format
 */

import 'react-native';
import React from 'react';
import Header from '../Components/Header';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
