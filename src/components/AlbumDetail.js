import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import albumData from "../json/album";
import { AuthSession } from "expo";
const AlbumDetail = () => {
  return (
   <View style={styles.cardContainerStyle}>
      <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
         <Image
         style={styles.thumbnailStyle}
         source={{
          uri: albumData[0].thumbnail_image
         }}
         />
         <View style={styles.headerContentStyle}>
         <Text>郭頂</Text>
         <Text>飛行器的執行週期</Text>
         </View>
      </View>
      <View style={styles.cardSectionStyle}>
         <Image
         style={styles.imageStyle}
         source={{
          uri: albumData[0].image
         }}
         />
      </View>
      <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
         <Image
         style={styles.thumbnailStyle}
         source={{
          uri: albumData[1].thumbnail_image
         }}
         />
         <View style={styles.headerContentStyle}>
         <Text>鄭宜農</Text>
         <Text>給天王星</Text>
         </View>
      </View>
      <View style={styles.cardSectionStyle}>
         <Image
         style={styles.imageStyle}
         source={{
          uri: albumData[1].image
         }}
         />
      </View>
      <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
         <Image
         style={styles.thumbnailStyle}
         source={{
          uri: albumData[2].thumbnail_image
         }}
         />
         <View style={styles.headerContentStyle}>
         <Text>帶我去找夜生活 </Text>
         <Text>告五人 </Text>
         </View>
      </View>
      <View style={styles.cardSectionStyle}>
         <Image
         style={styles.imageStyle}
         source={{
          uri: albumData[2].image
         }}
         />
      </View>
      <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
         <Image
         style={styles.thumbnailStyle}
         source={{
          uri: albumData[3].thumbnail_image
         }}
         />
         <View style={styles.headerContentStyle}>
         <Text>蔡健雅 </Text>
         <Text>遺書</Text>
         </View>
      </View>
      <View style={styles.cardSectionStyle}>
         <Image
         style={styles.imageStyle}
         source={{
          uri: albumData[3].image
         }}
         />
      </View>
      <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
         <Image
         style={styles.thumbnailStyle}
         source={{
          uri: albumData[4].thumbnail_image
         }}
         />
         <View style={styles.headerContentStyle}>
         <Text>吾十有五而志於學 </Text>
         <Text>老王樂隊 </Text>
         </View>
      </View>
      <View style={styles.cardSectionStyle}>
         <Image
         style={styles.imageStyle}
         source={{
          uri: albumData[4].image
         }}
         />
      </View>
   </View>
  );
};

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    margin: 5,
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "center",
    justifyContent: "space-around",
    padding:5,
  },
  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
   
    // borderColor: "#ddd",
    // shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#ffce2e",
    borderColor: "#4d3a26",
    borderBottomWidth: 1
  },
  imageStyle: {
    height: 300,
    width: null
  }
});

export default AlbumDetail;
