import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({

    text: {
      color: "#ccc",
      fontSize: 14,
      marginLeft: 15,
      flexShrink: 2,
      fontFamily: "Montserrat-Thin"
  
    },
  
    text1: {
      color: "#fff",
      fontSize: 20,
      marginLeft: 15,
      marginTop: 15,
      flexShrink: 2,
      fontFamily: "Montserrat-Thin"
  
    },
  
    sectionStyle: {
      fontFamily: "Montserrat-Thin",
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#0C6436",
      borderWidth: 0.5,
      borderColor: '#000',
      height: 40,
      width: 280,
      borderRadius: 5,
      margin: 10,
    },
  
  
    wallet: {
      padding: 20,
      marginLeft: 12,
      fontSize:15,
      alignSelf: "center",
      fontFamily: "Montserrat-Thin"
  
  
    },
    subscribe: {
      padding: 20,
      marginLeft: 12,
      fontSize:15,
      alignSelf: "center",
      fontFamily: "Montserrat-Thin"
  
  
    },
  
    store: {
      padding: 20,
      marginLeft: 12,
      alignItems: "center",
      fontFamily: "Montserrat-Thin"
      
  
    },
    textIcon: {
  
      color: "#fff"
  
    },
  
    playBox: {
      backgroundColor: "#007366",
      width: 55,
      height: 42,
      marginTop: 10,
      borderRadius: 4,
      marginLeft: 15
    },
  
    base: {
  
      position: "relative",
      marginBottom:10
      
    },
    baseTop: {
      borderBottomWidth: 40,
      borderBottomColor: "transparent",
      borderLeftWidth: 40,
      borderLeftColor: "#7CB84B",
      borderRightWidth: 40,
      transform: [{ rotate: '-45deg' }],
      borderRightColor: "transparent",    
      left: 15,
      bottom: 21,    
      width: 0,
      height: 0,
      position: "absolute",
      borderRadius:8
    },
  
    baseTop1: {
      borderBottomWidth: 40,
      borderBottomColor: "transparent",
      borderLeftWidth: 40,
      borderLeftColor: "#7CB84B",
      borderRightWidth: 40,
      transform: [{ rotate: '-225deg' }],
      borderRightColor: "transparent",
      left: 319,
      bottom: 20,
      top:21,
      width: 0,
      height: 0,
      position: "absolute",
      borderRadius:8,
     
    },
    baseBottom: {
      backgroundColor: "#7CB84B",
      height: 55,
      left:39,
      width: 335,
      borderRadius:2,
      zIndex: -100,
     
      
      
    },
  
    shapeText: {
      position: "absolute",
      marginLeft: 50,
      color: "#fff",
      fontSize:16,
      top:15,
      
     
    },
  
    inText: {
      marginLeft:300,
      position: "absolute",
      color: "#fff",
      fontSize:16,
      top:15
    }
  
  
  })