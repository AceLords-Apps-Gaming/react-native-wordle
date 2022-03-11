import React from 'react';
import {Linking, Platform, StyleSheet, Text, View} from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HOME_URL = 'https://github.com/AceLords-Apps-Gaming/react-native-wordle';

const SourceLink = () => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.subtitle}
        accessibilityRole="link"
        // @ts-ignore (web only prop)
        href={HOME_URL}
        onPress={
          Platform.OS !== 'web' ? () => Linking.openURL(HOME_URL) : undefined
        }>
        <MaterialCommunityIcons name="github" size={40} color="white" />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 12,
    top: 16,
    paddingTop: Constants.statusBarHeight,
  },
  subtitle: {
    color: '#5998c5',
    fontWeight: '400',
    fontSize: 16,
  },
});

export default SourceLink;
