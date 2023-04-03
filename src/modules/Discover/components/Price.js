import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../../../shared/styles';
import CustomText from '../../../shared/components/CustomText';

const Price = ({price}) => {
  return (
    <View style={styles.container}>
      <CustomText label={'-100%'} style={styles.percentage} />
      <View style={styles.amountWrapper}>
        <CustomText label={price} style={styles.amountText} />
        <View style={styles.diagonalLine} />
      </View>
    </View>
  );
};

export default Price;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  amountWrapper: {
    position: 'relative',
  },

  amountText: {
    padding: 10,
    borderLeftWidth: 4,
    color: COLORS.White,
    borderColor: COLORS.Grey,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: COLORS.SecondaryColor,
  },

  diagonalLine: {
    top: 20,
    left: 25,
    width: 40,
    borderBottomWidth: 2,
    position: 'absolute',
    transform: [{rotate: '15deg'}],
    borderBottomColor: COLORS.Grey,
  },

  percentage: {
    padding: 10,
    color: COLORS.White,

    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: COLORS.SecondaryColor,
  },
});
