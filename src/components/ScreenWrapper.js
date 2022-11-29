import React from 'react';
import {StyleSheet, View} from 'react-native';

const ScreenWrapper = ({style, children}) => (
  <View style={[styles.container, style]}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 85,
    paddingHorizontal: 20,
  },
});

export default ScreenWrapper;
