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
import { IBidStore, StaticBidStore } from '../common/BidStore';
import { ScoringUtils, IScoredBid } from '../common/ScoringUtils';

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

  // HACK: refreshes game list after bid is edited/created
  const [state, setState] = useState({});
  const refreshBidList = () => setState({});

  // retrieve bids from store
  const bidStore: IBidStore = new StaticBidStore();
  const bids = bidStore.allBids();

  // score all bids
  const scoringUtils = new ScoringUtils();
  const scoredBids: Array<IScoredBid> = scoringUtils.scoreBids(bids);

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

          {scoredBids.map((scoredBid, i) => (
            <GameRow key={i} {...scoredBid} />
          ))}
        </DataTable>
      </Surface>

      <TouchableOpacity>
        <Button
          style={styles.buttonContent}
          mode="contained"
          onPress={() => navigation.navigate('NewBid', { refreshBidList })}
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
