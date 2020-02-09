import React, { useState, FunctionComponent } from 'react';
import { Button, Dialog, Paragraph } from 'react-native-paper';

interface IProps {
  teamOnePlayerOne: string;
  teamOnePlayerTwo: string;
  teamTwoPlayerOne: string;
  teamTwoPlayerTwo: string;
  gameEnded: number;
}

const GameWin: FunctionComponent<IProps> = (props: IProps) => {
  const {
    teamOnePlayerOne,
    teamOnePlayerTwo,
    teamTwoPlayerOne,
    teamTwoPlayerTwo,
    gameEnded,
  } = props;

  const winningTeamName =
    gameEnded !== 0 && gameEnded === 1
      ? `${teamOnePlayerOne} and ${teamOnePlayerTwo}`
      : `${teamTwoPlayerOne} and ${teamTwoPlayerTwo}`;

  const [closed, setClosed] = useState<boolean>(false);

  return (
    <Dialog
      visible={gameEnded !== 0 && !closed}
      onDismiss={() => setClosed(true)}
    >
      <Dialog.Title>Game Finished!</Dialog.Title>
      <Dialog.Content>
        <Paragraph>{`Congratulations to the winners ${winningTeamName}!`}</Paragraph>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={() => setClosed(true)}>Close</Button>
      </Dialog.Actions>
    </Dialog>
  );
};

export default GameWin;
