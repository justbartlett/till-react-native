/**
 * Till Inc Homework - React Native App
 * https://github.com/justbartlett/till-react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, FlatList} from 'react-native';
import Item from './Components/Item';
import Header from './Components/Header';
import {TRANSACTIONS} from './Services/Transactions';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header />
        <FlatList
          style={styles.flatList}
          contentContainerStyle={styles.containerStyle}
          data={TRANSACTIONS.reverse()}
          renderItem={({item}) => (
            <Item
              merchant={item.merchant}
              amount={item.amount}
              type={item.type}
              details={item.details}
              balance={item.balance}
            />
          )}
          keyExtractor={item => item.merchant}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  containerStyle: {paddingTop: 0, paddingBottom: 40},
  flatList: {
    marginTop: 8,
  },
});

export default App;
