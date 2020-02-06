import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { HomeScreen } from './src/screens/HomeScreen';

export default function Main() {
  return (
    <PaperProvider>
      <HomeScreen />
    </PaperProvider>
  );
}

AppRegistry.registerComponent('main', () => Main);
