import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";
import albumData from "./src/json/album.json";
const App = () => {
  return(
    <View>
      <Header /> 
      <AlbumList />
      <Text>{albumData[0].title}</Text>
      <View style={styles.blank}></View>
      </View>
  );
}

const styles = StyleSheet.create({
blank:{
  height: 100,
},
});

export default App;