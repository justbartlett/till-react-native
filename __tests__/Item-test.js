/**
 * @format
 */

import 'react-native';
import React from 'react';
import Item from '../Components/Item';
import renderer from 'react-test-renderer';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<Item />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when where is an item', () => {
  const item = {
    merchant: 'Till, Inc.',
    date: '2019-01-15',
    amount: 1000000,
    type: 'credit',
    details: 'Payroll',
  };
  const tree = renderer
    .create(
      <Item
        merchant={item.merchant}
        amount={item.amount}
        type={item.type}
        details={item.details}
        balance={item.balance}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
