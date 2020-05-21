import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';

import Colors from '../constants/color';
import DefaultStyles from '../constants/default-styles';
import TitleText from './TItleText';

const Header = props => {
  return (
    <View
      style={{
        ...styles.header,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}>
      <TitleText style={styles.title}>{props.title}</TitleText>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Platform.OS === 'ios' ? Colors.primary : 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: Platform.OS === 'android' ? '#ccc' : 'transparent',
    borderBottomWidth: Platform.OS === 'android' ? 2 : 1,
  },
  headerIOS: {
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: 'black',
    borderBottomColor: 'skyblue',
    borderBottomWidth: 3,
  },
  title: {
    color: Platform.OS === 'android' ? Colors.primary : 'white',
  },
});
