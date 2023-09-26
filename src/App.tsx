import React from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-143208390ufiud',
    name: 'Fourth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1418eruhuiwhf0w',
    name: 'Fifth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-284852eed0',
    name: 'Sixth Item',
  },
];

const renderItem = ({ item }) => {
  return (
    <TouchableOpacity
      onPress={() => console.debug(item.id)}
      style={styles.item}>
      <Text style={styles.itemName}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const Carousel = ({title}) => {
  return (
    <View style={styles.carouselContainer}>
      <Text style={styles.carouselTitle}>{title}</Text>
      <FlatList
        horizontal={true}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

// prettier-ignore
export const App = () => {

  return (
    <View style={styles.container}>
      <View
        style={styles.headerContainer}
        testID="sampleHeader">
        <Text style={styles.headerLabel}>Welcome to Accedo's Kepler Demo</Text>
      </View>
      <View style={styles.carouselsContainer}>
        <Carousel title={'Trending'} />
        <Carousel title={'Your List'} />
        <Carousel title={'Something New'} />
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
  carouselsContainer: {
    padding: 20,
    margin: 20,
    backgroundColor: 'blue',
  },
  carouselContainer: {
    marginBottom: 20,
  },
  carouselTitle: {
    fontSize: 50,
    color: '#FFFFFF',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#6e3b6e',
    height: 200,
    width: 350,
  },
  itemName: {
    fontSize: 32,
    color: 'white',
  },
});
