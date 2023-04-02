/**
 * @format
 */
import App from './App';
import {name as appName} from './app.json';
import {AppRegistry, I18nManager} from 'react-native';
import mobileAds from 'react-native-google-mobile-ads';

I18nManager.allowRTL(false);
I18nManager.forceRTL(false);

mobileAds().initialize();

AppRegistry.registerComponent(appName, () => App);
