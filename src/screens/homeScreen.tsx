import React from "react";
import {View, Text} from 'react-native'
import { StatusBar } from 'expo-status-bar';

import { styles } from "../styles/styles";

export default function HomeScreen() {
  return(
    <View style={styles.container}>
      <Text>Home!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export { HomeScreen };