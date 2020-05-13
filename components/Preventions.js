
import * as React from 'react';

import Colors from '../constants/Colors';
import { StyleSheet, View, Text } from 'react-native';

export default function Preventions() {
  return (
    <View>
        <Text style={styles.headerText}>Megelőzés</Text>
        <View>
          
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 20
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
      fontWeight: 'bold'
    },
    symptomName: {
      fontSize: 20,
      width: '50%',
      justifyContent: 'center', 
      alignItems: 'center',
    },
    symptomImage: {
      width: 100,
      height: 100,
    }
  });
  