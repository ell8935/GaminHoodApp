import React from 'react';
import {COLORS} from './src/shared/styles';
import {Platform, StatusBar} from 'react-native';
import {StackNavigation} from './src/navigation';

const App = () => {
  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor(COLORS.SecondaryColor);
  }
  StatusBar.setBarStyle('light-content');

  return <StackNavigation />;
};

export default App;
