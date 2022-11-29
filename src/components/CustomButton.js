/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {COLORS} from '../styles';
import CustomText from './CustomText';

const CustomButton = ({title, onPress}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <CustomText label={title} type={'big'} style={styles.buttonTitle} />
  </TouchableOpacity>
);

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 15,
    marginVertical: 30,
    paddingVertical: 15,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.PrimaryColor,
  },
  buttonTitle: {color: COLORS.LightBlack},
});
