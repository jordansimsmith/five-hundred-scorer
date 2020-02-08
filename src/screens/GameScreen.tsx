import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DataTable, Theme, withTheme } from 'react-native-paper';

interface IProps {
  theme: Theme;
  route: any; // TODO: typing
  navigation: any;
}

const GameScreen: FunctionComponent<IProps> = (props: IProps) => {
  const { route } = props;

  console.log(route.params);

  return (
    <View>
      <Text>Welcome to the game screen.</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default withTheme(GameScreen);
