import React, {useEffect, useState} from 'react';
import {CarouselCards, ScreenWrapper} from '../components';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {COLORS} from '../styles';
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
    return (
      <ScreenWrapper>
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={COLORS.PrimaryColor} />
        </View>
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper>
      <View style={styles.container2}>
        <CarouselCards data={data} />
      </View>
    </ScreenWrapper>
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

  loader: {
    flex: 1,
    justifyContent: 'center',
  },
});
