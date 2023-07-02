import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigatorRef } from './index';

import App from 'screens/App';

type MainStackParams = {
  App: undefined;
};

const MainStackCreator = createStackNavigator<MainStackParams>();

export const Navigator: React.FC = () => {
  return (
    <NavigationContainer ref={navigatorRef}>
      <MainStackCreator.Navigator>
        <MainStackCreator.Screen name="App" component={App} />
      </MainStackCreator.Navigator>
    </NavigationContainer>
  );
};
