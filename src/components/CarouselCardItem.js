/* eslint-disable no-dupe-keys */
import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Linking} from 'react-native';
import {IMAGES} from '../assets';
import {COLORS} from '../styles';
import CustomText from './CustomText';

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
    minHeight: 400,
    borderRadius: 8,
    paddingBottom: 20,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    backgroundColor: COLORS.PrimaryColor,
  },
  image: {
    height: 200,
    width: '100%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  title: {paddingVertical: 10},
  tinyLogo: {
    width: 50,
    height: 50,
    marginTop: 20,
    top: '100%',
    alignSelf: 'center',
    position: 'absolute',
  },
});

export default CarouselCardItem;
