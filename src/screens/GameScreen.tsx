import React, { FunctionComponent } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import {
  Button,
  DataTable,
  Subheading,
  Surface,
  Theme,
  withTheme,
} from 'react-native-paper';
import GameRow, { Suit } from '../components/GameRow';

interface IProps {
  theme: Theme;
  route: any; // TODO: typing
  navigation: any;
}

const GameScreen: FunctionComponent<IProps> = (props: IProps) => {
  const { navigation } = props;

  const {
    teamOnePlayerOne,
    teamOnePlayerTwo,
    teamTwoPlayerOne,
    teamTwoPlayerTwo,
  } = props.route.params;

  const bids = [
    {
      bidAmount: 6,
      bidSuit: Suit.Hearts,
      team: 1,
      teamOnePoints: 100,
      teamTwoPoints: 40,
      success: true,
    },
  ];

  return (
    <View style={styles.container}>
      <Surface style={styles.surface}>
        <DataTable>
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

          {bids.map((bid, i) => (
            <GameRow key={i} {...bid} />
          ))}
        </DataTable>
      </Surface>

      <TouchableOpacity>
        <Button
          style={styles.buttonContent}
          mode="contained"
          onPress={() => navigation.navigate('NewBid')}
        >
          New Bid
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
    flex: 1,
    justifyContent: 'flex-start',
    padding: 10,
    marginBottom: 10,
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
