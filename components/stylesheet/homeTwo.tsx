import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({

    list: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: "#fff",
      padding: 8,
      margin: 8,
      marginTop: 0,
      fontFamily: "Home4Montserrat"
  
    },
  
    list1: {
      // backgroundColor: "",
      width: 230,
      height: 220,
      marginLeft: 0,
      paddingLeft: 0,
      borderRadius: 5,
      top: 5,
      // flex:1,
      flexDirection: "column",
      fontFamily: "Home4Montserrat"
  
    },
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      backgroundColor: "#533D9D",
      fontFamily: "Home2Montserrat"
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 0,
      marginLeft: 5,
      marginVertical: 8,
      marginHorizontal: 10,
      fontFamily: "Home2Montserrat"
    },
  
    menuItem: {
      flex: 1,
      flexDirection: "row",
      width: 230,
      padding: 5,
      height: 230,
      backgroundColor: "#fff",
      borderRadius: 5,
      margin: 0
  
    },
  
    text: {
      fontSize: 15,
      fontWeight: "bold",
      // textAlign: "left",
      fontFamily: "Home2Montserrat",
      position: "absolute",
      marginLeft: 10,
      color: "#000",
      marginTop: 10,
  
  
    },
  
    textTwo: {
      fontSize: 13,
      fontFamily: "Home2Montserrat",
      position: "absolute",
      marginLeft: 10,
      color: "gray",
      marginTop: 30,
    },
  
    textThree: {
      fontSize: 13,
      fontFamily: "Home2Montserrat",
      position: "absolute",
      color: "#CB8200",
      marginTop: 80,
      marginLeft: 10,
      backgroundColor: '#FDF3E8',
      fontWeight: "900"
  
    },
  
    text4: {
      fontSize: 13,
      fontFamily: "Home2Montserrat",
      position: "absolute",
      color: "#D4972C",
      marginTop: 135,
      marginLeft: 10,
      backgroundColor: '#FDF3E8'
  
    },
  });
  