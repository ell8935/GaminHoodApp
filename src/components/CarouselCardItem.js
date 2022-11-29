/* eslint-disable no-dupe-keys */
import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {IMAGES} from '../assets';
import {COLORS} from '../styles';
import CustomText from './CustomText';
export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCardItem = ({item, index}) => {
  const handlePress = () => {
    Linking.openURL(item.Link);
  };
  return (
    <View>
      <TouchableOpacity
        onPress={handlePress}
        style={styles.container}
        key={index}>
        <Image source={{uri: item.Image}} style={styles.image} />

        <CustomText label={item.Name} type={'title'} style={styles.title} />
        <CustomText label={item.Date} type={'normal'} />

        <View style={styles.platformContainer}>
          <CustomText label={'Get now from'} type={'subTitle'} />
          <Image
            style={styles.platformLogo}
            source={item.Platform === 'steam' ? IMAGES.Steam : IMAGES.EpicGames}
          />
        </View>
      </TouchableOpacity>
      <Image source={IMAGES.Logo} style={styles.tinyLogo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PrimaryColor,
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 20,
  },
  image: {
    width: '95%',
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {paddingVertical: 10},
  tinyLogo: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginTop: 20,
    position: 'absolute',
    top: '100%',
  },
  platformLogo: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginTop: 20,
    marginLeft: 10,
    top: '-2%',
  },
  platformContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default CarouselCardItem;
