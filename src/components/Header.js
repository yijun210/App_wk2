import React from "react";
import { StyleSheet, Text, View ,Image} from 'react-native';
const Header = () =>{
    return(
    <View style={styles.viewStyle}>
      <Text style = {styles.textStyle}>
        小君喜歡的專輯
      </Text>
      </View>
    );
}
const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: "#ff8fbc",
        justifyContent: "center",
        alignItems: "center",
        height: 90,
        paddingTop: 30,
        shadowColor: "#751d62",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        // Android Only
        elevation: 2
      },
      textStyle: {
        fontSize: 18 ,
        color:"#fff",
      }
});
export default Header;