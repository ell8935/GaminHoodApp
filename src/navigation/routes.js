const Routes = {
  HOME: {name: 'home', options: {headerShown: false}},
  DISCOVER: {
    name: 'discover',
    options: {
      title: 'Discover',
      headerShadowVisible: false,
      headerTitleStyle: {
        fontFamily: 'RussoOne-Regular',
      },
    },
  },
  PAYMENT: {
    name: 'payment',
    options: {
      title: 'Donate',
    },
  },
  ABOUT: {
    name: 'about',
    options: {
      title: 'About',
      headerShadowVisible: false,
      headerTitleStyle: {
        fontFamily: 'RussoOne-Regular',
      },
    },
  },
};

export default Routes;
