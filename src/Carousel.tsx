import React from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {DATA} from './data';

const Carousel = ({title, onPressItem}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={onPressItem} style={styles.item}>
        <Text style={styles.itemName}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

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

const styles = StyleSheet.create({
  carouselContainer: {
    marginBottom: 30,
    justifyContent: 'flex-start',
  },
  carouselTitle: {
    fontSize: 40,
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

export default Carousel;
