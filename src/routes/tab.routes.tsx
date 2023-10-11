import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import React from 'react'; // Import React
import HomeScreen from '../screens/homeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home" // Set your initial route here
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen} // Import and add your HomeScreen component
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          tabBarLabel: 'Inicio',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen} // Import and add your ProfileScreen component
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="users" color={color} size={size} />
          ),
          tabBarLabel: 'Perfil',
        }}
      />
      {/* You can add more screens here using the same pattern */}
    </Tab.Navigator>
  );
};

export { TabRoutes };
