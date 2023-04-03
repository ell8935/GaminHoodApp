import {StyleSheet, View} from 'react-native';
import {getData} from '../../../shared/api/apis';
import React, {useEffect, useState} from 'react';
import Loader from '../../../shared/components/Loader';
import CarouselCards from '../components/CarouselCards';
import ScreenWrapper from '../../../shared/components/ScreenWrapper';

const Discover = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      const res = await getData();
      setData(res.data);
    };

    fetchGames();
  }, []);

  if (!data) {
    return <Loader />;
  }

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <CarouselCards data={data} />
      </View>
    </ScreenWrapper>
  );
};

export default Discover;

const styles = StyleSheet.create({
  header: {color: 'white'},

  tinyLogo: {width: 50, height: 50, alignSelf: 'center', marginBottom: 20},

  container: {
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
