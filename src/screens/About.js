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
          <CustomText label="Alpha stage, Free games offers from Steam and EpicGames, Any suggestion or fault please use the form below" />
          <CustomText style={styles.title} label="Contact Us" type="title" />
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
  title: {marginVertical: 40},
  row: {flexDirection: 'row'},
});
