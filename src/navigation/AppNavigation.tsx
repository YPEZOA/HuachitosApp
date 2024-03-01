import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen'
import HomeScreen from '../screens/HomeScreen'
import AnimalProfileScreen from '../screens/AnimalProfileScreen/AnimalProfileScreen'
import { RootStackParamList } from '../utils/models'

const Stack = createNativeStackNavigator<RootStackParamList>()

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerTransparent: true,
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            statusBarTranslucent: true,
            statusBarColor: 'transparent',
            statusBarStyle: 'dark',
          }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="AnimalProfile"
          component={AnimalProfileScreen}
          options={{ statusBarTranslucent: true, statusBarColor: 'transparent' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
