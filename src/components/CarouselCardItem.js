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
        <View>
          <Image source={{uri: item.Image}} style={styles.image} />

          <CustomText label={item.Name} type={'title'} style={styles.title} />
        </View>
        <CustomText label={item.Date} type={'normal'} />
      </TouchableOpacity>
      <Image
        source={item.Platform === 'steam' ? IMAGES.Steam : IMAGES.EpicGames}
        style={styles.tinyLogo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PrimaryColor,
    borderRadius: 8,
    paddingBottom: 20,
    minHeight: 400,
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  image: {
    width: '100%',
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
});

export default CarouselCardItem;
