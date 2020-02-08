import React, { FunctionComponent } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import {
  Button,
  Subheading,
  Surface,
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
    <View style={styles.container}>
      <Surface style={styles.surface}>
        <Subheading>Bid information</Subheading>
        <TouchableOpacity>
          <Button style={styles.button} mode="outlined">
            Team
          </Button>
        </TouchableOpacity>
        <TouchableOpacity>
          <Button style={styles.button} mode="outlined">
            Suit
          </Button>
        </TouchableOpacity>
        <TouchableOpacity>
          <Button style={styles.button} mode="outlined">
            Amount
          </Button>
        </TouchableOpacity>
      </Surface>

      <Surface style={styles.surface}>
        <Subheading>Result information</Subheading>
        <TextInput
          mode="outlined"
          label="Team 1 tricks"
          keyboardType="number-pad"
          returnKeyType="done"
        />
        <TextInput
          mode="outlined"
          label="Team 2 tricks"
          keyboardType="number-pad"
          returnKeyType="done"
        />
        <HelperText type="error">Tricks do not total 10</HelperText>
      </Surface>

      <TouchableOpacity>
        <Button style={styles.submitButton} mode="contained">
          Save Bid
        </Button>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  surface: {
    flexGrow: 1,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    height: 50,
    marginTop: 10,
    justifyContent: 'center',
  },
  submitButton: {
    height: 50,
    justifyContent: 'center',
  },
});

export default withTheme(NewBidScreen);
