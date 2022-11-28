import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {IMAGES} from '../assests';
import {CustomButton} from '../components';
import {Routes} from '../navigation';

const Home = ({navigation}) => {
  const {navigate} = navigation;

  return (
    <View style={styles.container}>
      <Image source={IMAGES.Logo} style={styles.logo} />
      <View>
        <CustomButton title="Premium" />
        <CustomButton
          title="Discover"
          onPress={() => navigate(Routes.DISCOVER.name)}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'space-around'},
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 15,
  },
});
