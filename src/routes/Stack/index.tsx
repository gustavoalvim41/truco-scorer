import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { propsNavigationStack } from './Models';

import Scorer from '../../screens/Scorer';
import Result from '../../screens/Result';

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