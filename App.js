import React, {useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';
import {activateAdapty} from 'react-native-adapty';
import {ShowAd} from './src/components';
import {StackNavigation} from './src/navigation';
import {COLORS} from './src/styles';

const App = () => {
  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor(COLORS.SecondaryColor);
  }
  StatusBar.setBarStyle('light-content');

  // useEffect(() => {
  //   activateAdapty({sdkKey: 'public_live_Jzltkadr.LPjB4pt2axX6DzvPpyQ4'});
  // }, []);
  return <StackNavigation />;
};

export default App;
