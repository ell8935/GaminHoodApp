import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {COLORS} from '../styles';
import {StyleSheet} from 'react-native';

const CustomIcon = ({icon, onPress, type, style}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={[styles[type], style]}>
      <Icon name={icon} size={30} color={COLORS.PrimaryColor} />
    </TouchableWithoutFeedback>
  );
};

export default CustomIcon;

const styles = StyleSheet.create({});
