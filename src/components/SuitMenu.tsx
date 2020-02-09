import React, { useState, FunctionComponent } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Dialog, Portal } from 'react-native-paper';
import { Suit } from '../enums/enums';

interface IProps {
  onSuitSelect(suit: Suit): void;
}

export const SuitMenu: FunctionComponent<IProps> = (props: IProps) => {
  const { onSuitSelect } = props;

  const [visible, setVisible] = useState<boolean>(false);
  const [suit, setSuit] = useState<Suit>();

  const handleSuitSelect = (s: Suit) => () => {
    // close dialog
    setVisible(false);

    // set suit name for local display
    setSuit(s);

    // callback
    onSuitSelect(s);
  };

  return (
    <View>
      <TouchableOpacity>
        <Button
          style={styles.button}
          mode="outlined"
          onPress={() => setVisible(true)}
        >
          {suit || 'Suit'}
        </Button>
      </TouchableOpacity>

      <Portal>
        <Dialog visible={visible}>
          <Dialog.Title>Which suit was bidded?</Dialog.Title>
          <Dialog.Content>
            <Button
              style={styles.button}
              onPress={handleSuitSelect(Suit.Spades)}
            >
              Spades
            </Button>
            <Button
              style={styles.button}
              onPress={handleSuitSelect(Suit.Clubs)}
            >
              Clubs
            </Button>
            <Button
              style={styles.button}
              onPress={handleSuitSelect(Suit.Diamonds)}
            >
              Diamonds
            </Button>
            <Button
              style={styles.button}
              onPress={handleSuitSelect(Suit.Hearts)}
            >
              Hearts
            </Button>
            <Button
              style={styles.button}
              onPress={handleSuitSelect(Suit.NoTrumps)}
            >
              No Trumps
            </Button>
            <Button
              style={styles.button}
              onPress={handleSuitSelect(Suit.ClosedMisere)}
            >
              Closed Misere
            </Button>
            <Button
              style={styles.button}
              onPress={handleSuitSelect(Suit.OpenMisere)}
            >
              Open Misere
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
