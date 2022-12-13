import {useEffect} from 'react';
import {TestIds, useInterstitialAd} from 'react-native-google-mobile-ads';

// const adUnitId = TestIds.APP_OPEN;

const useAds = () => {
  const {isLoaded, load, show} = useInterstitialAd(
    __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-9241365319577247/7307301263',
    {
      requestNonPersonalizedAdsOnly: true,
    },
  );

  useEffect(() => {
    load();
  }, [load]);

  const showAd = () => {
    if (isLoaded) {
      show();
    }
  };

  return {showAd};
};

export default useAds;
