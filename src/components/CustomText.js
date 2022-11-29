import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {colors} from '@shared/styles';

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
    color: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  subTitle: {
    fontSize: 16,
  },
});
