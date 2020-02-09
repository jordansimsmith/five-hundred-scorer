import React, { useState, FunctionComponent } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Dialog, Portal } from 'react-native-paper';
import { Team } from '../enums/enums';

interface IProps {
  teamOnePlayerOne: string;
  teamOnePlayerTwo: string;
  teamTwoPlayerOne: string;
  teamTwoPlayerTwo: string;
  onTeamSelect(team: Team): void;
}

export const TeamMenu: FunctionComponent<IProps> = (props: IProps) => {
  const {
    teamOnePlayerOne,
    teamOnePlayerTwo,
    teamTwoPlayerOne,
    teamTwoPlayerTwo,
    onTeamSelect,
  } = props;

  const [visible, setVisible] = useState<boolean>(false);
  const [team, setTeam] = useState<Team>();

  const handleTeamSelect = (t: Team) => () => {
    // close dialog
    setVisible(false);

    // set team name for local display
    setTeam(t);

    // callback
    onTeamSelect(t);
  };

  const getPlayerNames = (t: Team) => {
    return t === Team.One
      ? `${teamOnePlayerOne} and ${teamOnePlayerTwo}`
      : `${teamTwoPlayerOne} and ${teamTwoPlayerTwo}`;
  };

  return (
    <View>
      <TouchableOpacity>
        <Button
          style={styles.button}
          mode="outlined"
          onPress={() => setVisible(true)}
        >
          {(team && getPlayerNames(team)) || 'Team'}
        </Button>
      </TouchableOpacity>

      <Portal>
        <Dialog visible={visible}>
          <Dialog.Title>Which team won the bid?</Dialog.Title>
          <Dialog.Content>
            <Button style={styles.button} onPress={handleTeamSelect(Team.One)}>
              {getPlayerNames(Team.One)}
            </Button>
            <Button style={styles.button} onPress={handleTeamSelect(Team.Two)}>
              {getPlayerNames(Team.Two)}
            </Button>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    justifyContent: 'center',
    marginBottom: 10,
  },
});
