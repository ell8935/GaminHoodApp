import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {COLORS} from '../styles';
import CustomText from './CustomText';

const TextField = ({name, title, value, style, onChange, focused, ...rest}) => {
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

export default TextField;

const styles = StyleSheet.create({
  container: {flex: 1},
  title: {color: COLORS.White},
  input: {
    margin: 10,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.PrimaryColor,
    color: COLORS.White,
    paddingHorizontal: 5,
    textAlignVertical: 'top',
  },
});
