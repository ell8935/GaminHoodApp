import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CarouselCards, CustomText} from '../components';
import {getData} from '../apis';

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
    return <CustomText label={'No Free Games'} />;
  }

  return (
    <View style={styles.container2}>
      <CarouselCards data={data} />
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'flex-end'},
  header: {color: 'white'},
  tinyLogo: {width: 50, height: 50, alignSelf: 'center', marginBottom: 20},
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
});
