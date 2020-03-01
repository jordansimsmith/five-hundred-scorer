import React, { useState, FunctionComponent } from 'react';
import { View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import {
  Button,
  DataTable,
  Subheading,
  Surface,
  Theme,
  withTheme,
} from 'react-native-paper';
import GameRow from '../components/GameRow';
import { IBid } from '../common/BidStore';
import { ScoringUtils } from '../common/ScoringUtils';
import { GameUtils } from '../common/GameUtils';
import GameWin from '../components/GameWin';
import { IScoredBid, ITeamNames } from '../interfaces/interfaces';

interface IProps {
  theme: Theme;
  route: any; // TODO: typing
  navigation: any;
}

interface IState {
  counter: number;
  bids: Array<IBid>;
}

const GameScreen: FunctionComponent<IProps> = (props: IProps) => {
  const { navigation } = props;

  const teamNames: ITeamNames = props.route.params;

  const {
    teamOnePlayerOne,
    teamOnePlayerTwo,
    teamTwoPlayerOne,
    teamTwoPlayerTwo,
  } = teamNames;

  const [state, setState] = useState<IState>({ counter: 0, bids: [] });

  // score all bids
  const scoringUtils: ScoringUtils = new ScoringUtils();
  const scoredBids: Array<IScoredBid> = scoringUtils.scoreBids(state.bids);

  const gameUtils: GameUtils = new GameUtils();

  // callback for adding a new bid from the new bid screen
  const onBidSave = (bid: IBid) => {
    const { counter, bids } = state;

    // set id and append to bid list
    bid.id = counter;
    bids.push(bid);

    setState({ counter: counter + 1, bids });
  };

  return (
    <View style={styles.container}>
      <Surface style={styles.surface}>
        <ScrollView>
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

            {scoredBids.map((scoredBid: IScoredBid) => (
              <GameRow key={scoredBid.id} {...scoredBid} />
            ))}
          </DataTable>
        </ScrollView>
      </Surface>

      <TouchableOpacity>
        <Button
          style={styles.buttonContent}
          mode="contained"
          onPress={() =>
            navigation.navigate('NewBid', { onBidSave, teamNames })
          }
        >
          New Bid
        </Button>
      </TouchableOpacity>

      <GameWin
        teamOnePlayerOne={teamOnePlayerOne}
        teamOnePlayerTwo={teamOnePlayerTwo}
        teamTwoPlayerOne={teamTwoPlayerOne}
        teamTwoPlayerTwo={teamTwoPlayerTwo}
        gameEnded={gameUtils.gameEnded(scoredBids)}
      />
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
