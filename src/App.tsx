import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Carousel from './Carousel';
import {VideoPlayer} from '@amzn/react-native-kepler/Libraries/VideoPlayer/VideoPlayer';
import {sampleUrl} from './data';

// prettier-ignore
export const App = () => {
  const [isPlayerOpen, setIsPlayerOpen] = useState<Boolean>(false);

  const openVideoPlayer = () => {
    setIsPlayerOpen(true);
  };

  const closeVideoPlayer = () => {
    setIsPlayerOpen(false);
  };

  return (
    <View style={styles.container}>
      <View
        style={styles.headerContainer}>
        <Text style={styles.headerLabel}>Welcome to Accedo's Kepler Demo</Text>
      </View>
      { !isPlayerOpen ?
        <View style={styles.carouselsContainer}>
          <Carousel title={'Trending'} onPressItem={openVideoPlayer} />
          <Carousel title={'Your List'} onPressItem={openVideoPlayer} />
          <Carousel title={'Something New'} onPressItem={openVideoPlayer} />
        </View>
        :
        <View style={styles.playerContainer}>
          <TouchableOpacity style={styles.quitButtonContainer} onPress={closeVideoPlayer}>
            <Text style={styles.quitButtonText}>X</Text>
          </TouchableOpacity>
          <VideoPlayer videoUrl={sampleUrl} />
        </View>
      }
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
  playerContainer: {
    flex: 1,
  },
  quitButtonContainer: {
    position: 'absolute',
    zIndex: 1,
    left: 20,
    top: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    backgroundColor: 'black',
    borderWidth: 3,
    borderColor: 'white',
  },
  quitButtonText: {
    fontSize: 35,
    color: 'red',
  },
});
