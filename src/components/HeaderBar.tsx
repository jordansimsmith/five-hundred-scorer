import React, { FunctionComponent } from 'react';
import {} from 'react-native';
import { Appbar, Theme, withTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

interface IProps {
  // TODO: type this propery interface
  scene: any;
  previous: any;
  navigation: any;
}

const HeaderBar: FunctionComponent<IProps> = (props: IProps) => {
  const { scene, previous, navigation } = props;
  const { options } = scene.descriptor;

  const title: string =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={navigation.goBack} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default HeaderBar;
