import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Discover from '../screens/Discover';
import Payment from '../screens/Payment';
import About from '../screens/About';
import Routes from './routes';
import {COLORS} from '../styles';

const Stack = createStackNavigator();

const RootStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShadowVisible: false,
      headerMode: 'float',
      headerTitleAlign: 'center',
      cardStyle: styles.cardStyle,
      headerTintColor: COLORS.White,
      headerStyle: styles.headerStyle,
      headerTitleStyle: styles.headerTitleStyle,
    }}>
    <Stack.Screen component={Home} {...Routes.HOME} />
    <Stack.Screen component={Discover} {...Routes.DISCOVER} />
    <Stack.Screen component={Payment} {...Routes.PAYMENT} />
    <Stack.Screen component={About} {...Routes.ABOUT} />
  </Stack.Navigator>
);

const StackNavigation = () => (
  <NavigationContainer>
    <RootStack />
  </NavigationContainer>
);

export default StackNavigation;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: COLORS.SecondaryColor,
    borderColor: COLORS.White,
    borderBottomWidth: 2,
  },
  headerTitleStyle: {color: COLORS.White, fontFamily: 'RussoOne-Regular'},
  cardStyle: {
    backgroundColor: COLORS.SecondaryColor,
  },
});
