import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Appnavigation from './screens/app.navigation';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Appnavigation />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
