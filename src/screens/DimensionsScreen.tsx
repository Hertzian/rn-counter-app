import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  //Dimensions,
  useWindowDimensions,
} from 'react-native';

//fixed  window/screen dimension
//const {width, height} = Dimensions.get('window');

export const DimensionsScreen = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View style={{...styles.violetBox, width: width * 0.6}} />
        <View style={styles.orangeBox} />
      </View>
      <Text style={styles.title}>
        W: {width}, H: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: 'red',
  },
  violetBox: {
    backgroundColor: '#5856D6',
    width: '50%',
    height: '50%',
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
  },
  title: {
    fontSize: 30,
  },
});
