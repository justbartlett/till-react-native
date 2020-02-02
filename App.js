/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  // ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
import DebitIcon from './img/debit.svg';
import CreditIcon from './img/credit.svg';
import RectangleSvg from './img/rectangle.svg';

const Colors = {
  white: '#FFFFFF',
  peachy: '#FFBBCF',
  purpley: '#A665D1',
  black: '#1C1C1C',
  red: '#FF3131',
  green: '#00CE67',
  grey: '#8A8A8A',
  shadow: '#9495CC',
};

const DATA = {
  name: 'Johnny Ray',
  avatar: 'http://www.fillmurray.com/200/200',
  balance: 212,
  transactions: [
    {
      merchant: 'Starbucks',
      date: '2019-01-02',
      amount: 4.67,
      type: 'debit',
    },
    {
      merchant: 'Till, Inc.',
      date: '2019-01-15',
      amount: 1000000,
      type: 'credit',
      details: 'Payroll',
    },
    {
      merchant: 'Sweet Green',
      date: '2019-01-16',
      amount: 8.72,
      type: 'debit',
    },
    {
      merchant: 'Amazon',
      date: '2019-01-19',
      amount: 2785,
      type: 'debit',
    },
    {
      merchant: 'IRS',
      date: '2019-02-15',
      amount: 1500,
      type: 'credit',
      details: 'Federal Income Tax Refund',
    },
  ],
};

const TRANSACTIONS = DATA.transactions.map(transaction => {
  if (transaction.type === 'credit') {
    DATA.balance += transaction.amount;
    transaction.balance = DATA.balance;
  } else {
    DATA.balance -= transaction.amount;
    transaction.balance = DATA.balance;
  }
  return transaction;
});

function Item({merchant, amount, type, balance, details}) {
  return (
    <View style={styles.listItem}>
      <View style={styles.listItemInfo}>
        <View style={styles.smallColumn}>
          {type === 'debit' ? (
            <DebitIcon width={26} height={26} />
          ) : (
            <CreditIcon width={26} height={26} />
          )}
        </View>
        <View style={styles.largeColumn}>
          <Text style={styles.boldText}>{merchant}</Text>
        </View>
        <View style={styles.largeColumn}>
          <Text
            style={[
              styles.textRight,
              type === 'debit' ? styles.redText : styles.greenText,
              styles.boldText,
            ]}>
            {amount}
          </Text>
        </View>
        <View style={styles.largeColumn}>
          <Text style={[styles.textRight, styles.boldText]}>{balance}</Text>
        </View>
      </View>
      {details && (
        <View>
          <Text style={[styles.details, styles.semiBoldText]}>{details}</Text>
        </View>
      )}
    </View>
  );
}

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
            style={{position: 'absolute', top: -50, left: -20}}
            width={124}
            height={132}
          />
          <RectangleSvg
            style={{position: 'absolute', top: 15, left: '35%'}}
            width={124}
            height={132}
          />
          <RectangleSvg
            style={{position: 'absolute', top: -20, right: -40}}
            width={124}
            height={132}
          />
        </View>
        <View style={{margin: -80}} />
        <View style={{height: 80, marginLeft: '10%'}}>
          <View style={styles.userInfo}>
            <View style={{marginRight: 15}}>
              <Image
                source={{
                  uri: DATA.avatar,
                }}
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 100,
                  borderWidth: 4,
                  borderColor: Colors.white,
                }}
              />
            </View>
            <View>
              <Text style={styles.name}>{DATA.name}</Text>
              <Text style={styles.balance}>My Balance: ${balance}</Text>
            </View>
          </View>
        </View>
        <View style={{height: 20}}>
          <Text style={styles.heading}>Transactions</Text>
        </View>

        <FlatList
          style={styles.flatList}
          contentContainerStyle={{paddingTop: 0, paddingBottom: 40}}
          data={TRANSACTIONS}
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
  boldText: {
    fontFamily: 'NunitoSans-Bold',
  },
  semiBoldText: {
    fontFamily: 'NunitoSans-SemiBold',
  },
  flatList: {
    marginTop: 8,
  },
  redText: {
    color: Colors.red,
  },
  greenText: {
    color: Colors.green,
  },
  details: {
    color: Colors.grey,
    marginLeft: '10%',
  },
  smallColumn: {
    flex: 1,
  },
  largeColumn: {
    flex: 3,
  },
  textRight: {
    textAlign: 'right',
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
    //flex: 1,
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
    flex: 1,
    fontFamily: 'NunitoSans-ExtraBold',
  },
  listItem: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.white,
    marginHorizontal: 20,
    marginVertical: 8,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 25,
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  listItemInfo: {
    flex: 1,
    flexDirection: 'row',
    color: Colors.black,
    fontSize: 14,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default App;
