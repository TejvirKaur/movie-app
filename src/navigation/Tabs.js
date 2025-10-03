import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MoviesScreen from '../screens/MoviesScreen';
import SearchScreen from '../screens/SearchScreen';
import TVScreen from '../screens/TVScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShowScreen from '../screens/ShowScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movies" component={MoviesScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="TV" component={TVScreen} />
    </Tab.Navigator>
  );
}

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Tabs} options={{ headerShown:false }} />
      <Stack.Screen name="Show" component={ShowScreen} />
    </Stack.Navigator>
  );
}


 