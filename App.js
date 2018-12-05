/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
'use strict'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import SearchPage from './SearchPage';
type Props = {};


const App = createStackNavigator({
  Home: {
    screen: SearchPage
    }
})
export default createAppContainer(App)
