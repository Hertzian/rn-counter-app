import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
//import HelloWorldScreen from './src/screens/HelloWorldScreen';
//import {CounterScreen} from './src/screens/CounterScreen';
//import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
//import {DimensionsScreen} from './src/screens/DimensionsScreen';
//import {PositionScreen} from './src/screens/PositionScreen';
//import {FlexScreen} from './src/screens/FlexScreen';
import {HomeWorkScreen} from './src/screens/HomeWorkScreen';

export const App = () => {
  return (
    <SafeAreaView style={styles.areaView}>
      <HomeWorkScreen />
    </SafeAreaView>
    //<FlexScreen />
    //<PositionScreen />
    //<DimensionsScreen />
    //<BoxObjectModelScreen />
    //<HelloWorldScreen />
    //<CounterScreen />
  );
};

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
    //height: 400,
    //width: 300,
  },
});
