import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Siya</Text>
      <MapView 
        style={styles.map}
        coordinate={{ latitude : -34.02516803331711 , longitude : 18.670542535167005 }}
       />
    </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});
