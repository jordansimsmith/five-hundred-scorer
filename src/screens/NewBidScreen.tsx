import React, { useState, FunctionComponent } from 'react';
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
import { IBid } from '../interfaces/interfaces';
import { TeamMenu } from '../components/TeamMenu';
import { SuitMenu } from '../components/SuitMenu';
import { BidAmountMenu } from '../components/BidAmountMenu';
import { Suit, Team, BidAmount } from '../enums/enums';

interface IProps {
  theme: Theme;
  route: any;
  navigation: any;
}

const NewBidScreen: FunctionComponent<IProps> = (props: IProps) => {
  const { route, navigation } = props;
  const { teamNames } = route.params;
  const emptyBid: IBid = {
    id: -1,
    team: Team.One,
    suit: Suit.Spades,
    amount: BidAmount.Six,
    teamOneTricks: 0,
    teamTwoTricks: 0,
  };
  const [bid, setBid] = useState<IBid>(emptyBid);

  const validateTricks = (): boolean => {
    // result is valid if totalTricks is 0 (no result) or 10
    const totalTricks: number = bid.teamOneTricks + bid.teamTwoTricks;
    return totalTricks === 0 || totalTricks === 10;
  };

  const handleSubmit = () => {
    if (!validateTricks()) {
      return;
    }

    // update bid list
    route.params.onBidSave(bid);

    // clear fields
    setBid(emptyBid);

    // return to game page
    navigation.goBack();
  };

  const onTeamSelect = (team: Team) => {
    setBid({ ...bid, team });
  };

  const onSuitSelect = (suit: Suit) => {
    setBid({ ...bid, suit });
  };

  const onBidAmountSelect = (amount: BidAmount) => {
    setBid({ ...bid, amount });
  };

  return (
    <View style={styles.container}>
      <Surface style={styles.surface}>
        <Subheading>Bid information</Subheading>
        <TeamMenu onTeamSelect={onTeamSelect} {...teamNames} />
        <SuitMenu onSuitSelect={onSuitSelect} />
        <BidAmountMenu onBidAmountSelect={onBidAmountSelect} />
      </Surface>

      <Surface style={styles.surface}>
        <Subheading>Result information</Subheading>
        <TextInput
          mode="outlined"
          label="Team 1 tricks"
          keyboardType="number-pad"
          returnKeyType="done"
          value={bid.teamOneTricks.toString()}
          onChangeText={(tricks: string) =>
            setBid({ ...bid, teamOneTricks: Number(tricks) })
          }
        />
        <TextInput
          mode="outlined"
          label="Team 2 tricks"
          keyboardType="number-pad"
          returnKeyType="done"
          value={bid.teamTwoTricks.toString()}
          onChangeText={(tricks: string) =>
            setBid({ ...bid, teamTwoTricks: Number(tricks) })
          }
        />
        <HelperText type="error" visible={!validateTricks()}>
          Tricks do not total 10
        </HelperText>
      </Surface>

      <TouchableOpacity>
        <Button
          style={styles.submitButton}
          mode="contained"
          onPress={handleSubmit}
        >
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
