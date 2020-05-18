
import * as React from 'react';

import Colors from '../constants/Colors';
import { StyleSheet, View, Text } from 'react-native';
import { Appearance } from 'react-native-appearance';
import { darkTheme, lightTheme } from '../constants/Colors';

export default function WhatToDo() {
  return (
    <View>
        <Text style={styles.headerText}>Teendők tünetek esetén</Text>
        <View>
          <Text style={styles.element}>
            Maradjon otthon, ne menjen közösségbe!
          </Text>
          <Text style={styles.element}>
            Kérjük, hogy ne személyesen menjen a háziorvosi rendelőbe, hanem telefonon hívja fel háziorvosát!
          </Text>
          <Text style={styles.element}>
            A háziorvos telefonon fogja kikérdezni Önt
          </Text>
          <Text style={styles.element}>
          Ha felmerült a koronavírus fertőzés gyanúja, és a tünetei enyhék, és nem tartozik a betegség szempontjából kockázati csoportba, tehát nem igényel kórházi kezelést, akkor otthoni karanténba kerül. A háziorvos értesíti az Országos Mentőszolgálatot (OMSZ) a légúti mintavétel céljából. Ennek eredményéről a háziorvos értesíti Önt.
          </Text>
          <Text style={styles.element}>
          Ha felmerült a koronavírus fertőzés gyanúja, ésa tünetei súlyosak (pl. nehézlégzés, tüdőgyulladás) és kórházi ellátást igényel, akkor a mentő a területileg illetékes kórház infektológiai osztályára vagy járványkórházba, vagy kijelölt intézménybe szállítja Önt, ahol az elkülönítése, az ellátása és a mintavételezés megtörténik.
          </Text>
          <Text style={styles.element}>
          A kórházban minden szükséges vizsgálatot elvégeznek és laborvizsgálatot végeznek, amely kimutatja, hogy koronavírussal fertőzött-e vagy nem.
          </Text>
          <Text style={styles.element}>
          Ha a laboreredmény megerősíti, hogy Ön koronavírussal-fertőzött,
          akkor kórházi megfigyelés alá kerül.
          A kezelés attól függ, hogy a betegség mennyire enyhe vagy súlyos lefolyású.
          </Text>
        </View>
    </View>
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
      margin: 20
    },
    headerText: {
      textAlign: 'center',
      fontSize: 25,
      fontWeight: 'bold',
      marginTop: 20,
      color: theme.tintColor
    },
    element: {
      marginLeft: 10,
      marginRight: 10,
      marginTop: 5,
      marginBottom: 5,
      fontSize: 15,
      color: theme.tintColor,
      borderColor: theme.borderColor,
      borderWidth: 1,
      padding: 5,
      borderRadius: 10,
    },
  });
  