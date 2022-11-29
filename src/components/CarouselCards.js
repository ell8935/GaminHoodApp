/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, {SLIDER_WIDTH, ITEM_WIDTH} from './CarouselCardItem';

const CarouselCards = ({data}) => (
  <View>
    <Text style={{color: 'white'}}>{Array.data}</Text>
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
