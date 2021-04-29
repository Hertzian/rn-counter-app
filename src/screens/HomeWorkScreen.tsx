import React from 'react';
import {View, StyleSheet} from 'react-native';

export const HomeWorkScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.violetBox} />
      <View style={styles.orangeBox} />
      <View style={styles.blueBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  violetBox: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
    //alignSelf: 'flex-end',
    //position: 'absolute',
    //right: 0,
    //top: 0,
  },

  orangeBox: {
    width: 100,
    height: 100,
    //flex: 1,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
    //alignSelf: 'center',
    top: 50,
  },

  blueBox: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
    //alignSelf: 'center',
    //position: 'absolute',
    //left: 0,
    //bottom: 0,
  },
});
