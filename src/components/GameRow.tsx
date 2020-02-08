import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// TODO: move to seperate file
export enum Suit {
  Spades,
  Clubs,
  Diamonds,
  Hearts,
  NoTrumps,
}

interface IProps {
  bidAmount: number;
  bidSuit: Suit;
  team: number;
  teamOnePoints: number;
  teamTwoPoints: number;
  success: boolean;
}

const GameRow: FunctionComponent<IProps> = (props: IProps) => {
  const { bidAmount, bidSuit, team, teamOnePoints, teamTwoPoints } = props;

  return (
    <DataTable.Row>
      <DataTable.Cell style={styles.tableCell}>
        {team === 1 && `${bidAmount} ${bidSuit}`}
      </DataTable.Cell>
      <DataTable.Cell style={styles.tableCell}>{teamOnePoints}</DataTable.Cell>
      <DataTable.Cell style={styles.tableCell}>
        {team === 2 && `${bidAmount} ${bidSuit}`}
      </DataTable.Cell>
      <DataTable.Cell style={styles.tableCell}>{teamTwoPoints}</DataTable.Cell>
    </DataTable.Row>
  );
};

const styles = StyleSheet.create({
  tableCell: {
    justifyContent: 'center',
  },
});

export default GameRow;
