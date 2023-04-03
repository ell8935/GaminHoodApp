import React from 'react';
import {useState} from 'react';
import Lottie from 'lottie-react-native';
import {COLORS} from '../../../shared/styles';
import {animations} from '../../../assets/lottie';
import {sendEmail} from '../../../shared/api/apis';
import {ScrollView, StyleSheet, View} from 'react-native';
import CustomText from '../../../shared/components/CustomText';
import CustomButton from '../../../shared/components/CustomButton';
import emailValidate from '../../../shared/functions/emailValidate';
import ScreenWrapper from '../../../shared/components/ScreenWrapper';
import CustomTextField from '../../../shared/components/CustomTextField';
import KeyboardAvoiding from '../../../shared/components/KeyboardAvoiding';

const About = () => {
  const [form, setForm] = useState({});

  const handleSetForm = (value, name) => {
    setForm({...form, [name]: value});
  };

  const submitForm = () => {
    if (emailValidate(form.email)) {
      sendEmail(form);
      alert('Email sent successfully!');
      setForm({});
    } else {
      alert('Email is not valid');
    }
  };

  return (
    <ScreenWrapper style={styles.container}>
      <ScrollView>
        <KeyboardAvoiding>
          <CustomText
            type={'normal'}
            style={styles.text}
            label="Get free games from Steam and EpicGames with this app! It's in alpha stage, so we'd love to hear your suggestions or feedback."
          />
          <CustomText type={'title'} style={styles.title} label="Contact Us" />
          <CustomTextField
            name="email"
            title="Your Email"
            onChange={handleSetForm}
            value={form.email}
          />
          <CustomTextField
            multiline
            name="body"
            numberOfLines={3}
            title="Description"
            onChange={handleSetForm}
            value={form.body}
          />
        </KeyboardAvoiding>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Lottie
          source={animations.Mailbox}
          style={styles.mailbox}
          autoPlay
          loop
        />
        <CustomButton title="Submit" onPress={submitForm} />
      </View>
    </ScreenWrapper>
  );
};

export default About;

const styles = StyleSheet.create({
  text: {color: COLORS.White},

  title: {marginVertical: 40, color: COLORS.White},

  row: {flexDirection: 'row'},

  buttonContainer: {
    position: 'relative',
    padding: 10,
  },

  mailbox: {
    width: 150,
    height: 150,
    position: 'absolute',
    bottom: 40,
    left: 20,
  },
});
