import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import src page
import {
  Splash,
  Intro,
  Beranda,
  Kategori,
  Search,
  Bookmark,
  ResepList,
} from '../pages';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Beranda"
        component={Beranda}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#fff',
          },
          headerStyle: {backgroundColor: '#FB9300'},
          tabBarLabel: ({focused}) => (
            <Text
              style={{fontSize: 10, color: focused ? '#A35709' : '#9096A0'}}>
              Beranda
            </Text>
          ),
          tabBarIcon: tabInfo => (
            <Icon
              name={tabInfo.focused ? 'home' : 'home-outline'}
              size={28}
              color={tabInfo.focused ? '#FF8303' : '#9096A0'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Kategori"
        component={Kategori}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#fff',
          },
          headerStyle: {backgroundColor: '#FB9300'},
          tabBarLabel: ({focused}) => (
            <Text
              style={{fontSize: 10, color: focused ? '#A35709' : '#9096A0'}}>
              Kategori
            </Text>
          ),
          tabBarIcon: tabInfo => (
            <Icon
              name={tabInfo.focused ? 'fast-food' : 'fast-food-outline'}
              size={28}
              color={tabInfo.focused ? '#FF8303' : '#9096A0'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{fontSize: 10, color: focused ? '#A35709' : '#9096A0'}}>
              Pencarian
            </Text>
          ),
          tabBarIcon: tabInfo => (
            <Icon
              name={tabInfo.focused ? 'search' : 'search-outline'}
              size={28}
              color={tabInfo.focused ? '#FF8303' : '#9096A0'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#fff',
          },
          headerStyle: {backgroundColor: '#FB9300'},
          tabBarLabel: ({focused}) => (
            <Text
              style={{fontSize: 10, color: focused ? '#A35709' : '#9096A0'}}>
              Bookmark
            </Text>
          ),
          tabBarIcon: tabInfo => (
            <Icon
              name={tabInfo.focused ? 'bookmarks' : 'bookmarks-outline'}
              size={28}
              color={tabInfo.focused ? '#FF8303' : '#9096A0'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Resep"
        component={Resep}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="ResepList"
        component={ResepList}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
