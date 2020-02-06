import React from 'react';
import { View } from 'react-native';
import { Title, Button } from 'react-native-paper';

export const HomeScreen = props => {
  return (
    <View>
      <Title>500 Scorer</Title>
      <Button mode="contained">New Game</Button>
    </View>
  );
};
