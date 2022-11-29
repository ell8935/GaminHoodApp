import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import CustomText from './CustomText';
import {colors} from '@shared/styles';

const TextField = ({name, title, value, style, onChange, ...rest}) => {
  const handleChange = val => {
    onChange(val, name);
  };

  return (
    <View style={styles.container}>
      <CustomText label={title} style={styles.title} />
      <TextInput
        style={[styles.input, style]}
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
  title: {color: 'white'},
  input: {
    margin: 10,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'blue',
    color: 'grey',
    paddingHorizontal: 5,
    textAlignVertical: 'top',
  },
});
