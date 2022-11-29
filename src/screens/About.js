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

const About = () => {
  const [form, setForm] = useState({});

  const handleSetForm = (value, name) => {
    setForm({...form, [name]: value});
  };

  const submitForm = () => {
    console.log(form);
    sendEmail(form);
  };
  return (
    <KeyboardAvoiding>
      <ScrollView>
        <ScreenWrapper style={styles.container}>
          <CustomText
            type={'normal'}
            style={styles.text}
            label="Alpha stage, Free games offers from Steam and EpicGames, Any suggestion or fault please use the form below"
          />
          <CustomText type={'title'} style={styles.title} label="Contact Us" />
          <View style={styles.row}>
            <TextField name="name" title="Name" onChange={handleSetForm} />
            <TextField name="email" title="Email" onChange={handleSetForm} />
          </View>
          <TextField
            multiline
            name="body"
            numberOfLines={3}
            title="Description"
            onChange={handleSetForm}
          />
          <CustomButton title="Submit" onPress={submitForm} />
        </ScreenWrapper>
      </ScrollView>
    </KeyboardAvoiding>
  );
};

export default About;

const styles = StyleSheet.create({
  // container: {paddingBottom: 0},
  text: {color: COLORS.White},
  title: {marginVertical: 40, color: COLORS.White},
  row: {flexDirection: 'row'},
});
