import React, { useState, FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
      <TextInput
        onChangeText={(text: string) =>
          handleInputChange({ name: 'teamOnePlayerTwo', value: text })
        }
        value={input.teamOnePlayerTwo}
        mode="outlined"
        placeholder="Player two"
        label="Player two"
      />

      <Subheading>Team 1</Subheading>
      <TextInput
        onChangeText={(text: string) =>
          handleInputChange({ name: 'teamTwoPlayerOne', value: text })
        }
        value={input.teamTwoPlayerOne}
        mode="outlined"
        placeholder="Player one"
        label="Player one"
      />
      <TextInput
        onChangeText={(text: string) =>
          handleInputChange({ name: 'teamTwoPlayerTwo', value: text })
        }
        value={input.teamTwoPlayerTwo}
        mode="outlined"
        placeholder="Player two"
        label="Player two"
      />

      <Button mode="contained">Start</Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default withTheme(NewGameScreen);
