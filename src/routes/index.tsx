import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import Stack from './Stack';

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack />
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}

export default Routes;
