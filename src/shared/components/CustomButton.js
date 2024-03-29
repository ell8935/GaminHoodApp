import React from 'react';
import {COLORS} from '../styles';
import CustomText from './CustomText';
import {StyleSheet, TouchableOpacity} from 'react-native';

const CustomButton = ({title, onPress, style, type}) => (
  <TouchableOpacity
    style={[styles.button, styles[type], style]}
    onPress={onPress}>
    <CustomText label={title} type={'big'} style={styles.buttonTitle} />
  </TouchableOpacity>
);

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: '75%',
    borderRadius: 15,
    marginVertical: 30,
    paddingVertical: 15,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.PrimaryColor,
  },
  buttonTitle: {color: COLORS.Black},
});
