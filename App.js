import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BUTTON from './Components/BUTTON';
import Input from './Components/Input';
import List from './Components/List';
export default function App() {
    return (
        <View style={styles.container} >
          <View >
              <Text style={styles.boldtext}>Hello...prashu...lets break</Text>
          </View>
          <View>
            <BUTTON/>
          </View>
          <View>
            <Input/>
          </View>
          <View>
            <List/>
          </View>
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
    boldtext:{
      fontWeight:'bold',
      color:'green',
    }
});