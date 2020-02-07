import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme, withTheme } from 'react-native-paper';

interface IProps {
  theme: Theme;
}

const NewGameScreen: FunctionComponent<IProps> = (props: IProps) => {
  return (
    <View>
      <Text>Welcome to the new game screen.</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default withTheme(NewGameScreen);
