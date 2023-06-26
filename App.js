import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Home'
import store from './redux/store'
import { Provider } from 'react-redux'
import StackNavigation from './StackNavigation';

const App = () => {
  return (

    <Provider store={store}>
      <View style={styles.container}>
        {/* <Text style={styles.textStyle}>App</Text> */}
        <StackNavigation />
      </View>
    </Provider>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  textStyle: {
    color: 'black'
  }
})