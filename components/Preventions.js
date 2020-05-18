
import * as React from 'react';

import Colors from '../constants/Colors';
import { StyleSheet, View, Text } from 'react-native';
import { Appearance } from 'react-native-appearance';
import { darkTheme, lightTheme } from '../constants/Colors';

export default function Preventions() {
  return (
    <View>
        <Text style={styles.headerText}>Megelőzés</Text>
        <View>
        <Text style={styles.element}>
          Maradjon otthon, és ha rosszul érzi magát, különítse el magát az Önnel egy háztartásban élőktől!
        </Text>
        <Text style={styles.element}>
          Rendszeresen mosson kezet 20 másodpercig szappannal és vízzel, vagy alkoholos kézfertőtlenítővel!
        </Text>
        <Text style={styles.element}>
          Köhögés, illetve tüsszentés közben takarja el az orrát és a
          száját eldobható zsebkendővel, vagy köhögjön, illetve tüsszentsen a könyökhajlatába!
        </Text>
        <Text style={styles.element}>
          Kerülje a betegség jeleit mutató személyekkel való közeli (1 méteren belüli) érintkezést!
        </Text>
        <Text style={styles.element}>
          Koszos kézzel ne nyúljon a szeméhez, az orrához és a szájához!
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
      margin: 20,
      color: theme.tintColor
    },
    symptomContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center', 
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10
    },
    headerText: {
      textAlign: 'center',
      fontSize: 25,
      fontWeight: 'bold',
      marginTop: 10,
      color: theme.tintColor
    },
    element: {
      margin: 10,
      fontSize: 15,
      color: theme.tintColor,
      borderColor: theme.borderColor,
      borderWidth: 1,
      padding: 5,
      borderRadius: 10,
    }
  });
  