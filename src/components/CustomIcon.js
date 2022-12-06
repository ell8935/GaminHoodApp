import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {COLORS} from '../styles';

const CustomIcon = ({icon, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Icon name={icon} size={30} color={COLORS.PrimaryColor} />
    </TouchableWithoutFeedback>
  );
};

export default CustomIcon;
