/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import handler from './Components/Activities/Handler.js'

AppRegistry.registerComponent(appName, () => App);

AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => handler);
