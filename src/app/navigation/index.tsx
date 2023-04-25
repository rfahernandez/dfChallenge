import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Routes } from '@/constants/routes';
import { Activity } from '@/screens/Activity';
import { Details } from '@/screens/Details';

const StackNavigator = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
        <StackNavigator.Screen name={Routes.Activity} component={Activity} />
        <StackNavigator.Screen name={Routes.Details} component={Details} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
