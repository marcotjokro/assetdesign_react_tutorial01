import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from "./comps/Counter";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Counter />
      </View>
    );
  }
}
