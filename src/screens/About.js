import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  CustomButton,
  CustomText,
  TextField,
  ScreenWrapper,
  KeyboardAvoiding,
} from '../components';
import {useState} from 'react';
import {sendEmail} from '../apis';
import {COLORS} from '../styles';
import {emailValidate} from '../functions';

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
          <TextField
            name="name"
            title="Name"
            onChange={handleSetForm}
            value={form.name}
          />
          <TextField
            name="email"
            title="*Email"
            onChange={handleSetForm}
            value={form.email}
          />
        </View>
        <TextField
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
