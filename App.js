import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { useEffect } from 'react';

export default function App() {

  var datum;
  
  const fetchApi = async () => {
    console.log('inside fetchapi');
    try {
      const res = await axios.get('http://104.2.186.154:8096');
      console.log(res.data);
      datum = res.data;
    } catch (error) {
      console.log(error.message);
    }
    // const Http = new XMLHttpRequest();
    // const url='http://104.2.186.154:8096';
    // Http.open("GET", url);
    // Http.send();

    // Http.onreadystatechange = (e) => {
    // console.log(Http.responseText)
    // data = Http.responseText.toString();
// }
  }

  useEffect(() => {
    console.log('using fetchApi');
    fetchApi()
  }, [])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{datum}</Text>
      <StatusBar style="auto" />
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
});
