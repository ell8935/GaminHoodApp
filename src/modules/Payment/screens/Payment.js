import React from 'react';
import {COLORS} from '../../../shared/styles';
import CustomText from '../../../shared/components/CustomText';
import {Linking, StyleSheet, ScrollView, View} from 'react-native';
import CustomButton from '../../../shared/components/CustomButton';
import ScreenWrapper from '../../../shared/components/ScreenWrapper';

const Donation = () => {
  const handleDonation = () => {
    Linking.openURL(
      'https://www.paypal.com/donate/?hosted_button_id=YAGBVGV9YFZK4',
    );
  };
  const paragraph =
    "We're glad you're enjoying our app.\nCreating and maintaining it takes a lot of effort. If you're able and willing, we would be grateful if you could make a donation to help us.\n Orly's team thanks you for your support!";

  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.container}>
          <CustomText label={paragraph} type={'title'} style={styles.text} />
          <CustomButton onPress={handleDonation} title="Buy me a coffee" />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Donation;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-around',
  },

  text: {color: COLORS.White},
});
