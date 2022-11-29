import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const CustomIcon = ({icon, focused, onPress}) => {
  const iconName = focused ? icon : `${icon}-outline`;
  const iconColor = focused ? 'white' : 'grey';
  const iconSize = focused ? 35 : 30;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Icon name={iconName} size={iconSize} color={iconColor} />
    </TouchableWithoutFeedback>
  );
};

export default CustomIcon;
