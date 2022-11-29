/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {COLORS} from '../styles';

const CustomButton = ({title, onPress}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    marginVertical: 30,
    borderRadius: 15,
    paddingVertical: 15,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.PrimaryColor,
  },
  title: {fontSize: 32, fontFamily: 'RussoOne-Regular'},
});
