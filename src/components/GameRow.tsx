import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import { IScoredBid } from '../common/GameUtils';
import { Team } from '../enums/enums';

const GameRow: FunctionComponent<IScoredBid> = (props: IScoredBid) => {
  const { team, suit, amount, teamOneScore, teamTwoScore } = props;

  return (
    <DataTable.Row>
      <DataTable.Cell style={styles.tableCell}>
        {team === Team.One && `${amount} ${suit}`}
      </DataTable.Cell>
      <DataTable.Cell style={styles.tableCell}>{teamOneScore}</DataTable.Cell>
      <DataTable.Cell style={styles.tableCell}>
        {team === Team.Two && `${amount} ${suit}`}
      </DataTable.Cell>
      <DataTable.Cell style={styles.tableCell}>{teamTwoScore}</DataTable.Cell>
    </DataTable.Row>
  );
};

const styles = StyleSheet.create({
  tableCell: {
    justifyContent: 'center',
  },
});

export default GameRow;
