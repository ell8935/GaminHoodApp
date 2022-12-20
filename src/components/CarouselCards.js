/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {COLORS} from '../styles';
import CarouselCardItem from './CarouselCardItem';

const SLIDER_WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCards = ({data}) => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  return (
    <View>
      <Carousel
        layout="default"
        data={data}
        loop={true}
        ref={isCarousel}
        useScrollView={true}
        layoutCardOffset={9}
        itemWidth={ITEM_WIDTH}
        sliderWidth={SLIDER_WIDTH}
        renderItem={CarouselCardItem}
        onSnapToItem={index => setIndex(index)}
      />
      <Pagination
        activeDotIndex={data.length > 1 ? index : 1} // this workaround is due to pagniation doesnt show 1 dot when there is only 1 page
        dotsLength={data.length > 1 ? data.length : 3}
        inactiveDotOpacity={data.length > 1 ? 0.5 : 0}
        dotStyle={styles.dotStyle}
        carouselRef={isCarousel}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

export default CarouselCards;

const styles = StyleSheet.create({
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.PrimaryColor,
  },
});
