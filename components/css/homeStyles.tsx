import { StyleSheet } from 'react-native';
 
export const homeStyles = StyleSheet.create({

  // firstHome: {
  //   paddingVertical: 10,
  //   paddingHorizontal: 10,
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   backgroundColor: "blue"
  // },

    text: {
      color: "#ccc",
      fontSize: 14,
      marginLeft: 10,
      flexShrink: 2,
      marginTop: 0,
      fontFamily: "Montserrat",
  
    },
  
    home: {
      color: "#fff",
      fontSize: 20,
      marginLeft:0,
      marginTop: 10,
      flexShrink: 2,
     
  
    },
  
    sectionStyle: {
      fontFamily: "Montserrat",
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
      fontFamily: "Montserrat"
  
  
    },
    subscribe: {
      padding: 20,
      marginLeft: 12,
      fontSize:15,
      alignSelf: "center",
      fontFamily: "Montserrat"
    },
  
    store: {
      padding: 20,
      marginLeft: 12,
      alignItems: "center",
      fontFamily: "Montserrat"
      
  
    },
    textIcon: {  
      color: "#fff",
      textAlign:"center"
  
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
      borderBottomWidth: 41,
      borderBottomColor: "transparent",
      borderLeftWidth: 41,
      borderLeftColor: "#7CB84B",
      borderRightWidth: 41,
      transform: [{ rotate: '-45deg' }],
      borderRightColor: "transparent",    
      left: 14,
      bottom: 35,    
      width: 0,
      height: 0,
      // zIndex: -100,
      position: "absolute",
      borderRadius:8
    },
  
    baseTop1: {
      borderBottomWidth: 41,
      borderBottomColor: "transparent",
      borderLeftWidth: 41,
      borderLeftColor: "#7CB84B",
      borderRightWidth: 41,
      transform: [{ rotate: '-225deg' }],
      borderRightColor: "transparent",
      left: 318,
      bottom: 20,
      top:5,
      width: 0,
      height: 0,
      position: "absolute",
      borderRadius:8,
      // zIndex: -100,
    },
    baseBottom: {
      backgroundColor: "#7CB84B",
      height: 55,
      left:39,
      width: 335,
      bottom:15,
      borderRadius:2,
      // zIndex: -10,   
    },
  
    shapeText: {
      position: "absolute",
      marginLeft: 50,
      color: "#fff",
      fontSize:16,
      top:2    
     
    },
  
    inText: {
      marginLeft:300,
      position: "absolute",
      color: "#fff",
      fontSize:16,
      top:2
    },

    heading: {
      fontSize: 24,
      color: "#fff",
      margin: 10
    },


    list: {
      color: "#fff",
      marginLeft: 10,
      lineHeight: 28
    },

    shadow: {
      backgroundColor: "#6C6CB6",
       marginLeft: 15, marginTop: 8, 
       width: 380, height: 32, 
       alignItems: "center" 
    },
    
    shadowText :{ color: "#FFF3AF", marginTop: 8, textTransform: 'uppercase' },

    button : {       
      backgroundColor: "#fff",
      width:380,
      padding:10,
      borderRadius:5,
      marginTop:15,
      paddingVertical: 10,
      paddingHorizontal: 10,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginLeft:18
    },

    textButton: {
      color: "#533D9D", fontSize: 16
    }
  
  
  })