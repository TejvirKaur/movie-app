import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';

import MoviesScreen from './src/screens/MoviesScreen';
import TVScreen from './src/screens/TVScreen';
import SearchScreen from './src/screens/SearchScreen';
import ShowScreen from './src/screens/ShowScreen';

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

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Tabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Show"
            component={ShowScreen}
            options={{ title: 'Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
