import React from "react";
import { Text, View, Image, FlatList } from 'react-native'
import { AntDesign, Ionicons, Octicons, MaterialCommunityIcons, FontAwesome5, FontAwesome, Foundation } from '@expo/vector-icons';
import { styles } from '../stylesheet/homeSix'
import { useFonts } from 'expo-font';
const DATA = [
    {
        img: require('../../assets/img/one.jpg'),
        heading: 'Creamy tomato lasgana florentine',
        content: 'This Creamy Tomato lasagna Florentine\nis so deliciously comforting and simple',
        Date: 'DECEMBER 17, 2020'
    },

    {
        img: require('../../assets/img/meatballs.jpg'),
        heading: 'Creamy tomato lasgana florentine',
        content: 'This Creamy Tomato lasagna Florentine\nis so deliciously comforting and simple',
        Date: 'DECEMBER 17, 2020'
    }
]
const HomeSix = () => {

    const [loaded] = useFonts({
        HomeSixMontserrat: require('../../assets/fonts/Montserrat-Regular.ttf')
      });
    
      if (!loaded) {
        return null;
      }

    return (
        <View style={{backgroundColor: "#fff"}}>
            <View style={styles.RectangleBox}>
                <Text style={styles.boxHeading}>Namdhari Stores</Text>

                <View style={{ flex: 2, flexDirection: "row" }}>
                    <Text style={styles.boxText}>4 Stores around you.</Text>
                    <Text style={{ textAlignVertical: "center", marginLeft: 210 }}>
                        <AntDesign name="rightcircle" size={24} color="white" />
                    </Text>

                </View>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={styles.firstBox}>
                    <Image style={{ alignSelf: "flex-end", margin: 15 }} source={require('../../assets/img/vector.jpg')} />
                    <Text style={styles.boxHeading1}>Kiosk</Text>

                    <View style={{ flex: 2, flexDirection: "row" }}>
                        <Text style={styles.boxText1}>Scan Pay Shop</Text>
                        <Text style={{ textAlignVertical: "center", marginLeft: 50 }}>
                            <AntDesign name="rightcircle" size={24} color="white" />
                        </Text>

                    </View>
                </View>
                <View style={styles.secBox}>
                    <Image style={{ alignSelf: "flex-end", margin: 15 }} source={require('../../assets/img/vector.jpg')} />
                    <Text style={styles.boxHeading2}>Wheels</Text>
                    <View style={{ flex: 2, flexDirection: "row" }}>
                        <Text style={styles.boxText2}>at your doorstep</Text>
                        <Text style={{ textAlignVertical: "center", marginLeft: 40 }}>
                            <AntDesign name="rightcircle" size={24} color="white" />
                        </Text>

                    </View>
                </View>
            </View>
           <View style={{backgroundColor: "#fff", padding:10}}>
           <Text style={{fontSize:18, fontWeight: "bold",fontFamily: "HomeSixMontserrat", marginLeft:10}}>Blogs and Recipes</Text>
             <FlatList horizontal
                    data={DATA}
                    renderItem={({ item }) =>
                        <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
                            
                            <View style={styles.listbox}>
                                <Image style={{width:200, height:133}} source={item.img}/>
                                <Text style={{fontWeight: "bold",fontFamily: "HomeSixMontserrat", paddingLeft:10, fontSize:15}}>{item.heading}</Text>
                                <Text style={{ paddingLeft:10,fontFamily: "HomeSixMontserrat", color: "#878686", marginTop:5,fontSize:12}}>{item.content}</Text>
                                <Text style={{paddingLeft:10,fontFamily: "HomeSixMontserrat", color: "#AEADAC", marginTop:10, fontSize:12}}>{item.Date}</Text>
                            </View>
                            
                        </View>

                    }
                    // keyExtractor={item => item.id}


                />
           </View>
        </View>
    )
}

export default HomeSix;

