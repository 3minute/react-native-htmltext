/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import HtmlText from './lib/HtmlText'

export default class HtmlTextDemo extends Component {
  render() {
    let html = `<p>Hello world <b>world</b> <i>foo</i> bar hahh</p>`
    return (
      <View style={styles.container}>
        <HtmlText html={html}></HtmlText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HtmlTextDemo', () => HtmlTextDemo);
