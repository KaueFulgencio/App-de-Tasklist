import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook

export default function ProfileScreen() {
  const navigation = useNavigation(); // Use the useNavigation hook to get the navigation object

  return (
    <View>
      {/* Header */}
      <View>
        <Image source={{ uri: 'https://i.pinimg.com/564x/1c/03/26/1c0326e1f7aa89855ab1677bd023f0ff.jpg' }} style={{ width: 30, height: 24 }} />
        <Text>GymLink</Text>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Usuarios')}>
          <Text>Usuários Registrados</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Dropdown')}>
          <Text>Dropdown</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Disabled')}>
          <Text>Disabled</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View>
        <TextInput placeholder="Search" />
        <TouchableOpacity>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export { ProfileScreen }
