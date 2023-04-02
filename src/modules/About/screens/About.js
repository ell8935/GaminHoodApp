import React from 'react';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../../../shared/styles';
import {sendEmail} from '../../../shared/api/apis';
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
      <KeyboardAvoiding>
        <CustomText
          type={'normal'}
          style={styles.text}
          label="Alpha stage, Free games offers from Steam and EpicGames, Any suggestion or fault please use the form below"
        />
        <CustomText type={'title'} style={styles.title} label="Contact Us" />
        <View style={styles.row}>
          <CustomTextField
            name="name"
            title="Name"
            onChange={handleSetForm}
            value={form.name}
          />
          <CustomTextField
            name="email"
            title="*Email"
            onChange={handleSetForm}
            value={form.email}
          />
        </View>
        <CustomTextField
          multiline
          name="body"
          numberOfLines={3}
          title="*Description"
          onChange={handleSetForm}
          value={form.body}
        />
        <CustomButton title="Submit" onPress={submitForm} />
      </KeyboardAvoiding>
    </ScreenWrapper>
  );
};

export default About;

const styles = StyleSheet.create({
  text: {color: COLORS.White},

  title: {marginVertical: 40, color: COLORS.White},

  row: {flexDirection: 'row'},
});
