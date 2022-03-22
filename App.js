/**
 * React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Route from './src/navigation/Route';
import { LogBox } from 'react-native';

const App=()=>{
  
  //ignoring the log for gesture handler
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ]);

  return (
    <Route/>
  );
};

export default App;