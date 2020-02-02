import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DebitIcon from '../img/debit.svg';
import CreditIcon from '../img/credit.svg';
import {Colors} from '../Theme/Colors';

const Item = ({merchant, amount, type, balance, details}) => {
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
            {type === 'debit' ? '-' : '+'}
            {amount}
          </Text>
        </View>
        <View style={styles.largeColumn}>
          <Text style={[styles.textRight, styles.boldText]}>${balance}</Text>
        </View>
      </View>
      {details && (
        <View>
          <Text style={[styles.details, styles.semiBoldText]}>{details}</Text>
        </View>
      )}
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  semiBoldText: {
    fontFamily: 'NunitoSans-SemiBold',
  },
  details: {
    color: Colors.grey,
    marginLeft: '10%',
  },
  textRight: {
    textAlign: 'right',
  },
  boldText: {
    fontFamily: 'NunitoSans-Bold',
  },
  redText: {
    color: Colors.red,
  },
  greenText: {
    color: Colors.green,
  },
  smallColumn: {
    flex: 1,
  },
  largeColumn: {
    flex: 3,
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
