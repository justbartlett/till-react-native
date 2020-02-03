/**
 * @format
 */

import 'react-native';
import React from 'react';
import UserInfo from '../Components/UserInfo';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<UserInfo />).toJSON();
  expect(tree).toMatchSnapshot();
});
