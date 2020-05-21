import React from 'react';
import {StyleSheet, Text} from 'react-native';

const BodyText = props => (
  <Text style={{...props.style, ...styles.body}}>{props.children}</Text>
);

export default BodyText;

const styles = StyleSheet.create({
  body: {
    fontFamily: 'OpenSans-Regular',
  },
});
