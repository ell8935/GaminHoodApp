import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CarouselCards} from '../components';
import {getData} from '../apis';

const Discover = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      const res = await getData();
      console.log(res.data);
      setData(res.data);
    };

    fetchGames();
  }, []);
  console.log(data);
  if (!data) {
    return <Text style={{color: 'white'}}>No data</Text>;
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
