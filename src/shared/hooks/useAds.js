import {useEffect, useState} from 'react';
import {TestIds, useInterstitialAd} from 'react-native-google-mobile-ads';

const useAds = () => {
  const [shouldShowAd, setShouldShowAd] = useState(false);
  const {isLoaded, load, show} = useInterstitialAd(
    __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-9241365319577247/7307301263',
    {
      requestNonPersonalizedAdsOnly: true,
    },
  );

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    if (shouldShowAd && isLoaded) {
      show();
    }
  }, [shouldShowAd, isLoaded, show]);

  const showAd = async () => {
    setShouldShowAd(true);
  };

  return {showAd};
};

export default useAds;
