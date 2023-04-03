import React from 'react';
import {StyleSheet} from 'react-native';
import Lottie from 'lottie-react-native';
import ScreenWrapper from './ScreenWrapper';
import {animations} from '../../assets/lottie';

const Loader = () => {
  return (
    <ScreenWrapper style={styles.container}>
      <Lottie source={animations.Loader} style={styles.loader} autoPlay loop />
    </ScreenWrapper>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },

  loader: {
    width: 300,
    height: 300,
  },
});
