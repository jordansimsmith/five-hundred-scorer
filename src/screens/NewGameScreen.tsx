import React, { useState, FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Button,
  Subheading,
  TextInput,
  Theme,
  withTheme,
} from 'react-native-paper';

interface IProps {
  theme: Theme;
}

interface IFormData {
  teamOnePlayerOne: string;
  teamOnePlayerTwo: string;
  teamTwoPlayerOne: string;
  teamTwoPlayerTwo: string;
}

interface ITextChangeEvent {
  name: string;
  value: string;
}

const NewGameScreen: FunctionComponent<IProps> = (props: IProps) => {
  const initialState: IFormData = {
    teamOnePlayerOne: '',
    teamOnePlayerTwo: '',
    teamTwoPlayerOne: '',
    teamTwoPlayerTwo: '',
  };

  const [input, setInput] = useState<IFormData>(initialState);

  const handleInputChange = (e: ITextChangeEvent) => {
    setInput({
      ...input,
      [e.name]: e.value,
    });
  };

  return (
    <View>
      <Subheading>Team 1</Subheading>
      <TextInput
        onChangeText={(text: string) =>
          handleInputChange({ name: 'teamOnePlayerOne', value: text })
        }
        value={input.teamOnePlayerOne}
        mode="outlined"
        placeholder="Player one"
        label="Player one"
      />
      <TextInput />

      <Subheading>Team 1</Subheading>
      <TextInput />
      <TextInput />

      <Button mode="contained">Start</Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default withTheme(NewGameScreen);
