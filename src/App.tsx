import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// prettier-ignore
export const App = () => {

  return (
    <View style={styles.container}>
      <View
        style={styles.headerContainer}
        testID="sampleHeader">
        <Text style={styles.headerLabel}>Welcome to Accedo's Kepler Demo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#283593',
  },
  headerContainer: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#232F3E',
    width: '100%',
  },
  headerLabel: {
    fontSize: 50,
    fontWeight: '700',
    color: '#FC4C02',
  },
});
