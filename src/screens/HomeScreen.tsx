import React, { FunctionComponent } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Title, Button, Theme, withTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface IProps {
  theme: Theme;
  navigation: any; // TODO: type the navigation prop
}

const HomeScreen: FunctionComponent<IProps> = (props: IProps) => {
  const { theme, navigation } = props;

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.colors.primary,
      }}
    >
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons
          name="cards-spade"
          size={150}
          color={theme.colors.surface}
        />
        <Title style={{ ...styles.header, color: theme.colors.surface }}>
          500 SCORER
        </Title>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Button
            style={styles.button}
            contentStyle={styles.buttonContent}
            mode="contained"
            color={theme.colors.surface}
            onPress={() => navigation.navigate('NewGame')}
          >
            New Game
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  header: {
    fontSize: 30,
    marginTop: 20,
  },
  buttonContainer: {
    padding: 40,
  },
  button: {
    marginBottom: 20,
  },
  buttonContent: {
    height: 50,
  },
});

export default withTheme(HomeScreen);
