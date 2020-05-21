import React from 'react';
import {StyleSheet, Text} from 'react-native';

const TitleText = props => (
  <Text style={{...props.style, ...styles.title}}>{props.children}</Text>
);

export default TitleText;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
  },
});
