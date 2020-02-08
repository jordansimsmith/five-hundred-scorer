import React, { useState, FunctionComponent } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import {
  Button,
  Subheading,
  TextInput,
  HelperText,
  Surface,
  Theme,
  withTheme,
} from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface IProps {
  theme: Theme;
  navigation: any;
}

interface IFormData {
  teamOnePlayerOne: string;
  teamOnePlayerTwo: string;
  teamTwoPlayerOne: string;
  teamTwoPlayerTwo: string;
  submitted: boolean;
}

interface ITextChangeEvent {
  name: string;
  value: string;
}

const NewGameScreen: FunctionComponent<IProps> = (props: IProps) => {
  const { navigation } = props;

  const initialState: IFormData = {
    teamOnePlayerOne: 'Jordan',
    teamOnePlayerTwo: 'Emma',
    teamTwoPlayerOne: 'Mark',
    teamTwoPlayerTwo: 'Carina',
    submitted: false,
  };

  const [input, setInput] = useState<IFormData>(initialState);

  const handleInputChange = (e: ITextChangeEvent) => {
    setInput({
      ...input,
      [e.name]: e.value,
    });
  };

  const handleSubmit = () => {
    setInput({ ...input, submitted: true });

    // check for blank player names
    if (
      !input.teamOnePlayerOne ||
      !input.teamOnePlayerTwo ||
      !input.teamTwoPlayerOne ||
      !input.teamTwoPlayerTwo
    ) {
      return;
    }

    // all names are filled
    // navigate to game screen with player details
    setInput({ ...input, submitted: false });
    navigation.navigate('Game', input);
  };

  // TODO: refactor input into reusable component
  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Surface style={styles.surface}>
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
        <HelperText
          type="error"
          visible={input.submitted && !input.teamOnePlayerOne}
        >
          Player name cannot be blank
        </HelperText>
        <TextInput
          onChangeText={(text: string) =>
            handleInputChange({ name: 'teamOnePlayerTwo', value: text })
          }
          value={input.teamOnePlayerTwo}
          mode="outlined"
          placeholder="Player two"
          label="Player two"
        />
        <HelperText
          type="error"
          visible={input.submitted && !input.teamOnePlayerTwo}
        >
          Player name cannot be blank
        </HelperText>
      </Surface>

      <Surface style={styles.surface}>
        <Subheading>Team 2</Subheading>
        <TextInput
          onChangeText={(text: string) =>
            handleInputChange({ name: 'teamTwoPlayerOne', value: text })
          }
          value={input.teamTwoPlayerOne}
          mode="outlined"
          placeholder="Player one"
          label="Player one"
        />
        <HelperText
          type="error"
          visible={input.submitted && !input.teamTwoPlayerOne}
        >
          Player name cannot be blank
        </HelperText>
        <TextInput
          onChangeText={(text: string) =>
            handleInputChange({ name: 'teamTwoPlayerTwo', value: text })
          }
          value={input.teamTwoPlayerTwo}
          mode="outlined"
          placeholder="Player two"
          label="Player two"
        />
        <HelperText
          type="error"
          visible={input.submitted && !input.teamTwoPlayerTwo}
        >
          Player name cannot be blank
        </HelperText>
      </Surface>

      <TouchableOpacity>
        <Button
          contentStyle={styles.buttonContent}
          mode="contained"
          onPress={handleSubmit}
        >
          Start
        </Button>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  contentContainer: {
    flexGrow: 1,
  },
  surface: {
    flexGrow: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContent: {
    height: 50,
  },
});

export default withTheme(NewGameScreen);
