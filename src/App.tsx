import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// prettier-ignore
export const App = () => {

  return (
    <View style={styles.container}>
      <View
        style={styles.header}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#000000',
    borderColor: 'navy',
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  headerLabel: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'Amazon Ember',
  },
  colorLabel: {
    color: 'white',
    position: 'absolute',
    top: 32,
    right: 32,
    fontSize: 32,
  },
});
