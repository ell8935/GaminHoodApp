import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {IMAGES} from '../assets';
import {CustomButton, CustomIcon} from '../components';
import {Routes} from '../navigation';
import {BannerAd, TestIds, BannerAdSize} from 'react-native-google-mobile-ads';
import useAds from '../functions/useAds';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {animations} from '../assets/lottie/index.js';
import Lottie from 'lottie-react-native';

const Home = ({navigation}) => {
  const {showAd} = useAds();
  const {navigate} = navigation;

  const handleDiscoveryNavigate = () => {
    showAd();
    navigate(Routes.DISCOVER.name);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {/* <TouchableOpacity onPress={() => navigate(Routes.PAYMENT.name)}>
          <Lottie
            source={animations.DollarCoin}
            style={styles.coin}
            autoPlay
            loop
          />
        </TouchableOpacity> */}
        <CustomIcon
          icon={'email'}
          onPress={() => navigate(Routes.ABOUT.name)}
        />
      </View>
      <Image source={IMAGES.Logo} style={styles.logo} />
      <CustomButton title="Discover" onPress={handleDiscoveryNavigate} />
      <BannerAd
        unitId={
          __DEV__ ? TestIds.BANNER : 'ca-app-pub-9241365319577247/4617802283'
        }
        size={BannerAdSize.FULL_BANNER}
      />
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
  coin: {width: 50, height: 50, marginTop: -6},

  headerContainer: {flexDirection: 'row', justifyContent: 'space-between'},
});
