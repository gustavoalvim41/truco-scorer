import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { propsNavigationStack } from './Models';

import Scorer from '../../pages/Scorer';
import Result from '../../pages/Result';

const { Navigator,  Screen } = createNativeStackNavigator<propsNavigationStack>()

const Stack = () => {
  return (
    <Navigator 
      initialRouteName='Scorer'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen 
        name='Scorer' 
        component={Scorer}
        options={
          { 
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation: 'slide_from_right'
          }
        }  
      />
      <Screen 
        name='Result' 
        component={Result}
        options={
          { 
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation: 'slide_from_right'
          }
        }  
      />
    </Navigator>
  )
}

export default Stack;