import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView, TouchableWithoutFeedback, FlatList, StyleSheet, Image, Text, StatusBar } from 'react-native';
import { MaterialIcons, AntDesign, Feather, Ionicons, Octicons, MaterialCommunityIcons, FontAwesome5, FontAwesome, Foundation } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const price = 95.5;
const price1 = 105;

const Home3 = () => {
    const [loaded] = useFonts({
        Home3Montserrat: require('../../assets/fonts/Montserrat-Regular.ttf')
      });
    
      if (!loaded) {
        return null;
      }
    return (
        <View style={{marginTop: 10}}>
            <View style={styles.gradient}>
                <Text>yor are a</Text>
                <Text>SimpleZen Gold Member 245 pts</Text>
            </View>
            <View style={{ flexDirection: 'row', backgroundColor: "#fff", padding: 15 }}>
                <View>
                    <Text style={styles.subheading}>Season Special</Text>
                    <Text style={styles.subtext1}>Limited Products, By Now!</Text>
                    <View style={styles.icon}>
                    <Text style={styles.subtext2}>View all
                    <MaterialIcons name="keyboard-arrow-right" size={22} color="green" />
                    </Text>

                    </View>
                    
                </View>

                <View style={{ left: 80 }}>
                    <Image style={{ width: 150, height: 120 }} source={require('../../assets/img/beg.jpg')} />
                </View>
            </View>
            <ScrollView horizontal>             
                    <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#fff", padding: 8, margin: 8, marginTop: 0 }}>
                    <View style={styles.list3}>
                            <Text style={styles.discount}>33% OFF</Text>
                            <Image source={require('../../assets/img/kiwi.jpg')}
                                style={{ width: 200, height: 150, top: 20, alignSelf: "center" }}
                            />
                            <Text style={{ color: "#000", top: 30, fontSize:16 }}>Namdhari Kiwi 100% fresh and new
                            </Text>
                            <View style={styles.icon}>
                                <Text style={styles.iconText}>250g{"\n"}</Text>
                                <MaterialIcons name="keyboard-arrow-down" size={22} color="#000" />
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ flex: 2, flexDirection: "row", justifyContent: "flex-start", }}>

                             
                                    <Text style={{ color: "#000", fontSize: 16, marginTop: 0, fontWeight: "bold" }}>
                                    <FontAwesome name="rupee" size={12} color="#000" />{price}{"\n"}
                                    <FontAwesome name="rupee" size={10} color="#000" />
                           
                                    <Text style={{ fontSize: 12, fontWeight: "500", textDecorationLine: 'line-through' }}>{price1}</Text>
                                </Text>
                               
                                                            
                                </View>
                                <View style={{ flexDirection: "row", width: 120, justifyContent: "flex-start" }}>
                                <Text style={styles.iconBorderBlue}>
                                        <Feather name="layout" size={20} color="#5EBCF9" />
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </Text>
                                    <Text style={styles.iconBorderGreen}>
                                        <AntDesign name="shoppingcart" size={20} color="#4ED36B" />
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.list4}>
                            <Text style={styles.discount}>33% OFF</Text>
                            <Image source={require('../../assets/img/dragon_fruit.jpg')}
                                style={{ width: 200, height: 150, top: 20, alignSelf: "center" }}
                            />
                            <Text style={{ color: "#000", top: 30, fontSize:16 }}>Namdhari Dragon fruit fresh and new
                            </Text>
                            <View style={styles.icon}>
                                <Text style={styles.iconText}>250g{"\n"}</Text>
                                <MaterialIcons name="keyboard-arrow-down" size={22} color="#000" />
                            </View>
                            
                            {/* {
                                price > 0   &&<Text>hello suhail</Text>
                            
                            } */}

                            <View style={{ flexDirection: "row" }}>
                                <View style={{ flex: 2, flexDirection: "row", justifyContent: "flex-start", }}>
                                    <Text style={{ color: "#000", fontSize: 16, marginTop: 0, fontWeight: "bold" }}>
                                        <FontAwesome name="rupee" size={12} color="#000" />{price}{"\n"}
                                        <FontAwesome name="rupee" size={10} color="#000" />
                                        <Text style={{ fontSize: 12, fontWeight: "500", textDecorationLine: 'line-through' }}>{price1}</Text>
                                    </Text>
                                </View>
                                <View style={{ flexDirection: "row", width: 120, justifyContent: "flex-start" }}>
                                    <Text style={styles.iconBorderBlue}>
                                        <Feather name="layout" size={20} color="#5EBCF9" />
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </Text>
                                    <Text style={styles.iconBorderGreen}>
                                        <AntDesign name="shoppingcart" size={20} color="#4ED36B" />
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
            </ScrollView>
        </View>
    )

}



export default Home3;

const styles = StyleSheet.create({

    heading: {
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: "Home3Montserrat"
    },

    text: {
        fontSize: 14,
        color: "gray",
        fontWeight: "900",
        fontFamily: "Home3Montserrat"

    },

    text1: {
        fontSize: 13,
        color: "#555",
        fontWeight: "500",
        textTransform: "uppercase",
        fontFamily: "Home3Montserrat"
        

    },

    list: {
        width: 160,
        height: 220,
        margin: 0,
        paddingLeft: 10,
        backgroundColor: "#003529",
        borderRadius: 5,
        position: 'relative',
        fontFamily: "Home3Montserrat"

    },

    list1: {
        backgroundColor: "#00A445",
        width: 160,
        height: 220,
        marginLeft: 10,
        paddingLeft: 10,
        borderRadius: 5,
        fontFamily: "Home3Montserrat"

    },

    list2: {
        backgroundColor: "#8CCF54",
        width: 160,
        height: 220,
        marginLeft: 10,
        paddingLeft: 10,
        borderRadius: 5,
        fontFamily: "Home3Montserrat"

    },

    list3: {
        backgroundColor: "#fff",
        width: 220,
        height: 270,
        marginLeft: 10,
        paddingLeft: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#CCD0CD",
        fontFamily: "Home3Montserrat"

    },

    list4: {
        backgroundColor: "#fff",
        width: 220,
        height: 270,
        marginLeft: 10,
        paddingLeft: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#CCD0CD",
        fontFamily: "Home3Montserrat"

    },

    img: {
        width: 140,
        height: 80,
        marginTop: 70,
        marginLeft: 80,
        transform: [{ rotate: '14deg' }],
        position: 'absolute'

    },
    //Sale Corner
    subheading: {
        fontSize: 28,
        color: "#FF7612",
        fontFamily: "Home3Montserrat"
    },

    subtext1: {
        color: "#2D2D2D",
        top: 10,
        fontFamily: "Home3Montserrat"
    },


    subtext2: {
        color: "#27AE60",
        fontSize: 14,
        top: 20,
        fontFamily: "Home3Montserrat"
    },

    discount: {
        color: "#FF7612",
        backgroundColor: "#FFEEE2",
        fontSize: 14,
        width: 80,
        top: 10,
        textAlign: "center",
        padding: 1,
        fontFamily: "Home3Montserrat"
    },

    gram: {
        color: "#000",
        marginTop: 40,
        fontWeight: "bold",
        backgroundColor: "gray",
        fontFamily: "Home3Montserrat"
    },

    icon: {
        paddingVertical: 15,
        paddingHorizontal: 0,
        flexDirection: "row",
        top: 20,
        fontFamily: "Home3Montserrat"
        // justifyContent: "center",
        // alignItems: "center"
    },

    iconText: {
        fontSize: 16,
        color: "#000",
        fontFamily: "Montserrat1"
    },

    iconBorderBlue: {
        width: 40,
        height: 40,
        padding: 10,
        
        resizeMode: "stretch",
        // Set border width.
        borderWidth: 2,
        // Set border color.
        borderColor: '#5EBCF9',
        borderRadius: 25,
        fontFamily: "Montserrat1"
    },


    iconBorderGreen: {
        width: 40,
        height: 40,
        padding: 10,
        left:18,
        resizeMode: "stretch",
        // Set border width.
        borderWidth: 2,
        // Set border color.
        borderColor: '#4ED36B',
        borderRadius: 25,
        fontFamily: "Montserrat1"
    },

    gradient: {
        
    }
})