import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
//Screens
import HomeScreen from '../screens/homeScreen'
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ 
              tabBarIcon: ({color, size}) => <Feather name="home" color={color} size={size}/>,
              tabBarLabel: 'Inicio'
            }} 
            />
            <Tab.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{ 
              tabBarIcon: ({color, size}) => <Feather name="users" color={color} size={size}/>,
              tabBarLabel: 'Perfil'
            }} 
            />
        </Tab.Navigator>
      );
}

export {TabRoutes}