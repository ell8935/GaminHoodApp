import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../styles';

const ScreenWrapper = ({style, children}) => (
  <LinearGradient
    locations={[0.4, 1]}
    colors={[COLORS.SecondaryColor, 'green']}
    style={[styles.container, style]}>
    {children}
  </LinearGradient>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScreenWrapper;
