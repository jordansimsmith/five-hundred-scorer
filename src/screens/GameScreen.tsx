import React, { FunctionComponent } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import {
  Button,
  DataTable,
  Subheading,
  Theme,
  withTheme,
} from 'react-native-paper';

interface IProps {
  theme: Theme;
  route: any; // TODO: typing
  navigation: any;
}

const GameScreen: FunctionComponent<IProps> = (props: IProps) => {
  const {
    teamOnePlayerOne,
    teamOnePlayerTwo,
    teamTwoPlayerOne,
    teamTwoPlayerTwo,
  } = props.route.params;

  return (
    <View style={styles.container}>
      <DataTable style={styles.dataTable}>
        <DataTable.Header>
          <DataTable.Title style={styles.tableCell}>
            <Subheading>
              {`${teamOnePlayerOne} & ${teamOnePlayerTwo}`}
            </Subheading>
          </DataTable.Title>
          <DataTable.Title style={styles.tableCell}>
            <Subheading>
              {`${teamTwoPlayerOne} & ${teamTwoPlayerTwo}`}
            </Subheading>
          </DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell style={styles.tableCell}>6 Spades</DataTable.Cell>
          <DataTable.Cell style={styles.tableCell}>40</DataTable.Cell>
          <DataTable.Cell style={styles.tableCell}></DataTable.Cell>
          <DataTable.Cell style={styles.tableCell}>20</DataTable.Cell>
        </DataTable.Row>
      </DataTable>

      <TouchableOpacity>
        <Button style={styles.buttonContent} mode="contained">
          New Bid
        </Button>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  dataTable: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  tableCell: {
    justifyContent: 'center',
  },
  buttonContent: {
    height: 50,
    justifyContent: 'center',
  },
});

export default withTheme(GameScreen);
