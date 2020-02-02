import React from 'react';
import UserInfo from '../Components/UserInfo';
import {Colors} from '../Theme/Colors';
import LinearGradient from 'react-native-linear-gradient';
import RectangleSvg from '../img/rectangle.svg';

import {StyleSheet, View, Text} from 'react-native';

const Header = () => {
  return (
    <>
      <View style={styles.linearGradientMask}>
        <LinearGradient
          start={{x: 1.0, y: 1.0}}
          end={{x: 0.0, y: 0.0}}
          colors={[Colors.peachy, Colors.purpley]}
          style={styles.linearGradient}
        />
        <RectangleSvg style={styles.firstRectangle} width={124} height={132} />
        <RectangleSvg style={styles.secondRectangle} width={124} height={132} />
        <RectangleSvg style={styles.thirdRectangle} width={124} height={132} />
      </View>
      <View style={styles.layoutOffset} />
      <UserInfo />
      <View style={styles.transactions}>
        <Text style={styles.heading}>Transactions</Text>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  transactions: {height: 20},
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
  heading: {
    color: Colors.white,
    fontSize: 16,
    marginLeft: 35,
    height: 20,
    flex: 1,
    fontFamily: 'NunitoSans-ExtraBold',
  },
  layoutOffset: {margin: -80},
  linearGradient: {
    height: 200,
  },
  linearGradientMask: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: 'hidden',
  },
});
