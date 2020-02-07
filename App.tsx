import React from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './src/screens/HomeScreen';

export default function Main() {
  return (
    <PaperProvider>
      <StatusBar barStyle="light-content" />
      <HomeScreen />
    </PaperProvider>
  );
}

AppRegistry.registerComponent('main', () => Main);
