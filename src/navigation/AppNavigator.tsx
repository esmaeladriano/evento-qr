import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import EventsScreen from '../screens/EventsScreen';
import { EventDetailScreen } from '../screens/EventDetailScreen';

export type EventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description?: string;
  image: string;
};

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Events: undefined;
  EventDetail: { event: EventItem };
  CreateEvent: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Events" component={EventsScreen} />
        <Stack.Screen name="EventDetail" component={EventDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
