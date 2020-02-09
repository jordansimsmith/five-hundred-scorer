import React, { useState, FunctionComponent } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
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
import { ScoringUtils, IScoredBid } from '../common/ScoringUtils';
import GameWin from '../components/GameWin';

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

  const {
    teamOnePlayerOne,
    teamOnePlayerTwo,
    teamTwoPlayerOne,
    teamTwoPlayerTwo,
  } = props.route.params;

  const [state, setState] = useState<IState>({ counter: 0, bids: [] });

  // retrieve bids from store
  // const bidStore: IBidStore = new StaticBidStore();
  // const bids = bidStore.allBids();

  // score all bids
  const scoringUtils = new ScoringUtils();
  const scoredBids: Array<IScoredBid> = scoringUtils.scoreBids(state.bids);

  // returns 0 for game not ended, 1 for team one win, 2 for team two win
  // TODO: refactor into common module
  const gameEnded = () => {
    const lastBid: IScoredBid = scoredBids[scoredBids.length - 1];
    if (!lastBid) return 0;

    if (lastBid.teamOneScore >= 500 || lastBid.teamTwoScore <= -500) {
      // team one wins
      return 1;
    }
    if (lastBid.teamTwoScore >= 500 || lastBid.teamOneScore <= -500) {
      // team two wins
      return 2;
    } else {
      // no winner
      return 0;
    }
  };

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
      </Surface>

      <TouchableOpacity>
        <Button
          style={styles.buttonContent}
          mode="contained"
          onPress={() => navigation.navigate('NewBid', { onBidSave })}
        >
          New Bid
        </Button>
      </TouchableOpacity>

      <GameWin
        teamOnePlayerOne={teamOnePlayerOne}
        teamOnePlayerTwo={teamOnePlayerTwo}
        teamTwoPlayerOne={teamTwoPlayerOne}
        teamTwoPlayerTwo={teamTwoPlayerTwo}
        gameEnded={gameEnded()}
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
