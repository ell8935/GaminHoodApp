import React from 'react';
import {COLORS} from '../styles';
import CustomText from './CustomText';
import {StyleSheet, TextInput, View} from 'react-native';

const CustomTextField = ({
  name,
  title,
  value,
  style,
  onChange,
  focused,
  ...rest
}) => {
  const handleChange = val => {
    onChange(val, name);
  };

  return (
    <View style={styles.container}>
      <CustomText label={title} style={styles.title} />
      <TextInput
        style={[styles.input]}
        onChangeText={handleChange}
        value={value}
        {...rest}
      />
    </View>
  );
};

export default CustomTextField;

const styles = StyleSheet.create({
  container: {flex: 1},

  title: {color: COLORS.White},

  input: {
    margin: 10,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 10,
    color: COLORS.White,
    textAlignVertical: 'top',
    borderColor: COLORS.PrimaryColor,
  },
});
