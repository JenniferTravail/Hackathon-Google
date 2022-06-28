import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.css_profile}>
        <Image
          style={styles.profile}
          source={require('./assets/clavis_cake.png')} />
        <Text>Name of the person</Text>
      </View>
      <View style={styles.searchbarView}>
        <TextInput
          style={styles.searchbar}
          placeholder='The phone that you want' />
      </View>

      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  css_profile: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    alignContent: 'center',
    borderRadius: 50,
    height: 100,
    width: 100,
  },
  searchbarView: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  searchbar: {
    borderWidth: 1,
    borderColor: 'red',
  },

});