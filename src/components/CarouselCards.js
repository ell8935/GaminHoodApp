/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem from './CarouselCardItem';

const SLIDER_WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCards = ({data}) => (
  <View>
    <Carousel
      layout="default"
      layoutCardOffset={9}
      data={data}
      renderItem={CarouselCardItem}
      sliderWidth={SLIDER_WIDTH}
      itemWidth={ITEM_WIDTH}
      useScrollView={true}
      loop={true}
    />
  </View>
);

export default CarouselCards;
