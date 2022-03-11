import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import { RootSiblingParent } from 'react-native-root-siblings';
import Constants from 'expo-constants';

import SourceLink from './app/components/SourceLink';
import ScreenHeader from './app/components/ScreenHeader';
import GameScreen from './app/GameScreen';

export default function App() {
  return (
    <RootSiblingParent>
    <View style={styles.container}>
      <SafeAreaView style={styles.wrapper}>
        <ScreenHeader />
        <GameScreen />
        <SourceLink />
      </SafeAreaView>
    </View>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  wrapper: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
