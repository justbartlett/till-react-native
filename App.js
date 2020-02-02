/**
 * Till Inc Homework - React Native App
 * https://github.com/justbartlett/till-react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RectangleSvg from './img/rectangle.svg';
import Item from './Components/Item';
import {Colors} from './Theme/Colors';
import {TRANSACTIONS, DATA} from './Services/Transactions';

const App: () => React$Node = () => {
  let balance = DATA.balance;
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.linearGradientMask}>
          <LinearGradient
            start={{x: 1.0, y: 1.0}}
            end={{x: 0.0, y: 0.0}}
            colors={[Colors.peachy, Colors.purpley]}
            style={styles.linearGradient}
          />
          <RectangleSvg
            style={styles.firstRectangle}
            width={124}
            height={132}
          />
          <RectangleSvg
            style={styles.secondRectangle}
            width={124}
            height={132}
          />
          <RectangleSvg
            style={styles.thirdRectangle}
            width={124}
            height={132}
          />
        </View>
        <View style={styles.layoutOffset} />
        <View style={styles.userInfoWrapper}>
          <View style={styles.userInfo}>
            <View>
              <Image
                source={{
                  uri: DATA.avatar,
                }}
                style={styles.avatar}
              />
            </View>
            <View>
              <Text style={styles.name}>{DATA.name}</Text>
              <Text style={styles.balance}>My Balance: ${balance}</Text>
            </View>
          </View>
        </View>
        <View style={styles.transactions}>
          <Text style={styles.heading}>Transactions</Text>
        </View>

        <FlatList
          style={styles.flatList}
          contentContainerStyle={styles.containerStyle}
          data={TRANSACTIONS.reverse()} // woops, quickly reversing for chronological order
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
  transactions: {height: 20},
  avatar: {
    marginRight: 15,
    width: 52,
    height: 52,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: Colors.white,
  },
  userInfoWrapper: {height: 80, marginLeft: '10%'},
  layoutOffset: {margin: -80},
  firstRectangle: {
    position: 'absolute',
    top: -50,
    left: -20,
  },
  secondRectangle: {
    position: 'absolute',
    top: 15,
    left: '35%',
  },
  thirdRectangle: {
    position: 'absolute',
    top: -20,
    right: -40,
  },
  flatList: {
    marginTop: 8,
  },
  userInfo: {
    flex: 1,
    flexDirection: 'row',
  },
  linearGradientMask: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: 'hidden',
  },
  linearGradient: {
    height: 200,
  },
  name: {
    color: Colors.white,
    fontSize: 22,
    marginBottom: 4,
    fontFamily: 'NunitoSans-Black',
  },
  balance: {
    color: Colors.white,
    fontSize: 13,
    fontFamily: 'NunitoSans-ExtraBold',
  },
  heading: {
    color: Colors.white,
    fontSize: 16,
    marginLeft: 35,
    height: 20,
    flex: 1,
    fontFamily: 'NunitoSans-ExtraBold',
  },
});

export default App;
