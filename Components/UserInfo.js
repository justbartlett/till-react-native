import React from 'react';
import {Colors} from '../Theme/Colors';
import {DATA} from '../Services/Transactions';
import {StyleSheet, View, Text, Image} from 'react-native';

const UserInfo = () => {
  return (
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
          <Text style={styles.balance}>My Balance: ${DATA.balance}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  userInfo: {
    flex: 1,
    flexDirection: 'row',
  },
  userInfoWrapper: {height: 80, marginLeft: '10%'},
  avatar: {
    marginRight: 15,
    width: 52,
    height: 52,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: Colors.white,
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
});
