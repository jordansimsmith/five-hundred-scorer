import React, { FunctionComponent } from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import NewGameScreen from './src/screens/NewGameScreen';
import GameScreen from './src/screens/GameScreen';
import NewBidScreen from './src/screens/NewBidScreen';
import HeaderBar from './src/components/HeaderBar';

const Stack = createStackNavigator();

const App: FunctionComponent<void> = () => {
  return (
    <PaperProvider>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ header: HeaderBar }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NewGame"
            component={NewGameScreen}
            options={{ title: 'Start a New Game' }}
          />
          <Stack.Screen
            name="Game"
            component={GameScreen}
            options={{ title: 'Current Game' }}
          />
          <Stack.Screen
            name="NewBid"
            component={NewBidScreen}
            options={{ title: 'Create or Edit a Bid' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

AppRegistry.registerComponent('App', () => App);

export default App;
