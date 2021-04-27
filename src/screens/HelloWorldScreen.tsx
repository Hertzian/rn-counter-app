import React from 'react';
import {View, Text} from 'react-native';

const HelloWorldScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 55,
          textAlign: 'center',
        }}>
        Hellou prrro!
      </Text>
    </View>
  );
};

export default HelloWorldScreen;
