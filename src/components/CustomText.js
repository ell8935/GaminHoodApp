import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {COLORS} from '../styles';

const CustomText = ({label, style, type, ...props}) => {
  return (
    <Text style={[styles.normal, styles[type], style]} {...props}>
      {label}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  normal: {
    fontSize: 18,
    textAlign: 'center',
    color: COLORS.Black,
    fontFamily: 'RussoOne-Regular',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  subTitle: {
    fontSize: 16,
    color: '#5A5A5A',
  },
  big: {fontSize: 32, fontFamily: 'RussoOne-Regular', color: '#454545'},
});
