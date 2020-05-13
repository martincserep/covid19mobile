import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Appearance } from 'react-native-appearance';
import { darkTheme, lightTheme } from '../constants/Colors';

export default function NewsScreen() {
 
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text>
        Hamarosan
      </Text>
    </ScrollView>
  );
}
const userTheme = Appearance.getColorScheme();
let theme = null;
if (userTheme === 'light') {
	theme = lightTheme;
} else {
	theme = darkTheme;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fefefe',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
