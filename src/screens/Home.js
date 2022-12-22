// import {animations} from '../assets/lottie/index.js';
// import Lottie from 'lottie-react-native';
import React, {useState, useEffect} from 'react';
import {BannerAd, TestIds, BannerAdSize} from 'react-native-google-mobile-ads';
import {CustomButton, CustomIcon, ScreenWrapper} from '../components';
import {StyleSheet, View, Image} from 'react-native';
import {useAds} from '../functions';
import {Routes} from '../navigation';
import {IMAGES} from '../assets';
import {getData} from '../apis';
import {COLORS} from '../styles';

const Home = ({navigation}) => {
  const {showAd} = useAds();
  const {navigate} = navigation;

  const handleDiscoveryNavigate = () => {
    showAd();
    navigate(Routes.DISCOVER.name);
  };
  getData(); //wake up server

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* <TouchableOpacity onPress={() => navigate(Routes.PAYMENT.name)}>
          <Lottie
          source={animations.DollarCoin}
          style={styles.coin}
          autoPlay
          loop
          />
        </TouchableOpacity> */}

        <CustomIcon
          icon={'email-plus-outline'}
          onPress={() => navigate(Routes.ABOUT.name)}
          style={styles.smallIcon}
        />
        <Image source={IMAGES.Logo} style={styles.logo} />
        <CustomButton
          title="Discover"
          onPress={handleDiscoveryNavigate}
          style={styles.discoverButton}
        />
        <View style={styles.banner}>
          <BannerAd
            unitId={
              __DEV__
                ? TestIds.BANNER
                : 'ca-app-pub-9241365319577247/4617802283'
            }
            size={BannerAdSize.FULL_BANNER}
          />
        </View>
      </View>
    </ScreenWrapper>
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

  smallIcon: {paddingHorizontal: 20},

  discoverButton: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 40,
    shadowColor: COLORS.SecondaryColor,
    elevation: 20,
  },

  banner: {alignItems: 'center', position: 'absolute', bottom: 0},
});
