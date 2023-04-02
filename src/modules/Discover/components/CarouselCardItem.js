import React from 'react';
import Price from './Price';
import {IMAGES} from '../../../assets';
import {COLORS} from '../../../shared/styles';
import CustomText from '../../../shared/components/CustomText';
import {View, StyleSheet, Image, TouchableOpacity, Linking} from 'react-native';

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

          <Price price={item.OriginalPrice} />
          <View style={styles.logoContainer}>
            <CustomText label={'Get it from '} />
            <Image
              source={
                item.Platform === 'steam' ? IMAGES.Steam : IMAGES.EpicGames
              }
              style={styles.tinyLogo}
            />
          </View>
        </View>
        <CustomText label={item.Date} type={'normal'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 400,
    borderRadius: 8,
    paddingBottom: 20,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    backgroundColor: COLORS.PrimaryColor,
  },

  image: {
    height: 200,
    width: '100%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },

  text: {paddingTop: 20},

  title: {paddingBottom: 15},

  logoContainer: {
    paddingTop: 10,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  tinyLogo: {
    width: 40,
    height: 40,
  },
});

export default CarouselCardItem;
