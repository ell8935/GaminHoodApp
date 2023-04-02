import React, {useState, useRef} from 'react';
import {COLORS} from '../../../shared/styles';
import CarouselCardItem from './CarouselCardItem';
import {View, Dimensions, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const CarouselCards = ({data}) => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  return (
    <View>
      <Carousel
        layout="default"
        data={data}
        ref={isCarousel}
        useScrollView={true}
        layoutCardOffset={9}
        itemWidth={ITEM_WIDTH}
        sliderWidth={SLIDER_WIDTH}
        renderItem={CarouselCardItem}
        onSnapToItem={index => setIndex(index)}
      />
      <Pagination
        activeDotIndex={index}
        dotsLength={data.length}
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
    height: 20,
    borderRadius: 5,
    backgroundColor: COLORS.PrimaryColor,
  },
});
