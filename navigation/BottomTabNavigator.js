import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SymptomsScreen from '../screens/SymptomsScreen';
import MapScreen from '../screens/MapScreen';
import NewsScreen from '../screens/NewsScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Kezdőlap',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-home" />,
        }}
      />
      <BottomTab.Screen
        name="Symptoms"
        component={SymptomsScreen}
        options={{
          title: 'Tünetek',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-pulse" />,
        }}
      />
      <BottomTab.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: 'Megyék',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-map" />,
        }}
      />
      <BottomTab.Screen
        name="News"
        component={NewsScreen}
        options={{
          title: 'Hírek',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-paper" />,
        }}
      />
    </BottomTab.Navigator>
  );
}


function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Kezdőlap';
    case 'Symptoms':
      return 'Tünetek';
    case 'Map':
      return 'Összes fertőzött megyékre bontva';
    case 'News':
      return 'Hírek';
  }
}
