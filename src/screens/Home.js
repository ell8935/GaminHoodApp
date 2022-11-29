import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {IMAGES} from '../assets';
import {CustomButton, CustomIcon} from '../components';
import {Routes} from '../navigation';
import {BannerAd, TestIds, BannerAdSize} from 'react-native-google-mobile-ads';
import useAds from '../functions/useAds';

const Home = ({navigation}) => {
  const {showAd} = useAds();
  const {navigate} = navigation;

  const handleDiscoveryNavigate = () => {
    showAd();
    navigate(Routes.DISCOVER.name);
  };

  return (
    <View style={styles.container}>
      <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.FULL_BANNER} />
      <Image source={IMAGES.Logo} style={styles.logo} />
      <View>
        <CustomButton title="Premium" />
        <CustomButton title="Discover" onPress={handleDiscoveryNavigate} />
      </View>
      <CustomIcon icon={'email'} onPress={() => navigate(Routes.ABOUT.name)} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'space-around', padding: 5},
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 15,
  },
});
