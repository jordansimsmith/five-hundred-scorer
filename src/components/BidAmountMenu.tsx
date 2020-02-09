import React, { useState, FunctionComponent } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Dialog, Portal } from 'react-native-paper';
import { BidAmount } from '../enums/enums';

interface IProps {
  onBidAmountSelect(amount: BidAmount): void;
}

export const BidAmountMenu: FunctionComponent<IProps> = (props: IProps) => {
  const { onBidAmountSelect } = props;

  const [visible, setVisible] = useState<boolean>(false);
  const [bidAmount, setBidAmount] = useState<BidAmount>();

  const handleBidAmountSelect = (b: BidAmount) => () => {
    // close dialog
    setVisible(false);

    // set suit name for local display
    setBidAmount(b);

    // callback
    onBidAmountSelect(b);
  };
  return (
    <View>
      <TouchableOpacity>
        <Button
          style={styles.button}
          mode="outlined"
          onPress={() => setVisible(true)}
        >
          {bidAmount || 'Amount'}
        </Button>
      </TouchableOpacity>

      <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Dialog.Title>How many tricks are in the bid?</Dialog.Title>
          <Dialog.Content>
            <Button
              style={styles.button}
              onPress={handleBidAmountSelect(BidAmount.Six)}
            >
              6
            </Button>
            <Button
              style={styles.button}
              onPress={handleBidAmountSelect(BidAmount.Seven)}
            >
              7
            </Button>
            <Button
              style={styles.button}
              onPress={handleBidAmountSelect(BidAmount.Eight)}
            >
              8
            </Button>
            <Button
              style={styles.button}
              onPress={handleBidAmountSelect(BidAmount.Nine)}
            >
              9
            </Button>
            <Button
              style={styles.button}
              onPress={handleBidAmountSelect(BidAmount.Ten)}
            >
              10
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
