/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
'use strict'
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
type Props = {};

class SearchPage extends React.Component {
  static navigationOptions = {
    title: 'Property Finder',
  }
  render() {
    return React.createElement(Text, {style: styles.description}, "Search for houses to buy!")
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: SearchPage
    }
})
export default createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
})
