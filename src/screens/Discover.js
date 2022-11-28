import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Image, SafeAreaView} from 'react-native';
import {IMAGES} from '../assests';
import {CarouselCards} from '../components';
import {makeHttp} from '../api';

const Discover = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchGames = async () => {
      const res = await makeHttp({
        method: 'GET',
        endpoint: '/getData',
      });
      console.log({res});
      setData(res);
    };
    fetchGames();
  }, []);

  if (data) {
    return (
      <SafeAreaView style={styles.container2}>
        <CarouselCards data={data} />
      </SafeAreaView>
    );
  }
  return null;
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
