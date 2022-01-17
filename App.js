import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/homeScreen';

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>CityPop</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: '60%',    
  },
});
