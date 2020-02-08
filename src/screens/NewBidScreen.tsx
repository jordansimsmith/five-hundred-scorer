import React, { FunctionComponent } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import {
  Button,
  Subheading,
  TextInput,
  HelperText,
  Theme,
  withTheme,
} from 'react-native-paper';

interface IProps {
  theme: Theme;
  navigation: any;
}

const NewBidScreen: FunctionComponent<IProps> = (props: IProps) => {
  const { navigation } = props;

  return (
    <View>
      <Subheading>Welcome to the new bid screen</Subheading>
    </View>
  );
};

export default withTheme(NewBidScreen);
