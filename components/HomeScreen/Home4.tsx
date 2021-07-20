import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView, TouchableWithoutFeedback, FlatList, StyleSheet, Image, Text, StatusBar } from 'react-native';
import { MaterialIcons, AntDesign, Feather, Ionicons, Octicons, MaterialCommunityIcons, FontAwesome5, FontAwesome, Foundation } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const price = 95.5;
const price1 = 105;

const Home4 = () => {
    const [loaded] = useFonts({
        Home4Montserrat: require('../../assets/fonts/Montserrat-Regular.ttf')
    });

    if (!loaded) {
        return null;
    }
    return (
        <View>
            <View style={{ padding: 15, backgroundColor: "#fff" }}>
                <Text style={styles.heading}>Recommended for you</Text>
                <Text style={styles.text}>Based on your shopping history</Text>
            </View>
            <ScrollView horizontal>
                <View style={styles.list}>
                    <View style={styles.list3}>
                        <Text style={styles.discount}>33% OFF</Text>
                        <Image source={{ uri: 'https://www.jiomart.com/images/product/420x420/590003517/tomato-per-kg-0-20200710.jpg' }}
                            style={styles.img} />
                        <Text style={{ color: "#000", top: 30, fontSize: 16 }}>Tomato 100% Farm fresh
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
                        <Image source={{ uri: 'https://www.jiomart.com/images/product/420x420/590003517/tomato-per-kg-0-20200710.jpg' }}
                            style={styles.img} />
                        <Text style={{ color: "#000", top: 30, fontSize: 16 }}>Tomato 100% Farm fresh
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
                </View>
            </ScrollView>
            {/* List */}
            <View style={{ padding: 15, backgroundColor: "#fff" }}>
                <Text style={styles.heading}>Cheif's Recommendations</Text>
                <Text style={styles.text}>The best of the best culinary experience</Text>
            </View>
            <ScrollView horizontal>
                <View style={styles.list}>
                    <View style={styles.list3}>
                        <Text style={styles.discount}>33% OFF</Text>
                        <Image source={require('../../assets/img/MasalaPasta.jpg')}
                            style={styles.img}
                        />
                        <Text style={{ color: "#000", top: 30, fontSize: 16 }}>Macaroni Pasta
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
                        <Image source={require('../../assets/img/achraiPaneer.jpg')}
                            style={styles.img}
                        />
                        <Text style={{ color: "#000", top: 30, fontSize: 16 }}>Achari Paneer
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
                </View>
            </ScrollView>
            <View style={{backgroundColor: '#fff'}}>
            <Text style={styles.shop}>Shop By Brand</Text>
            <View style={{ flexDirection: "row", marginLeft: 6}}>
                <View style={styles.shadow}>
                    <Image source={require('../../assets/img/nestle-logo.png') }
                        style={styles.imgSize} />
                </View>
                <View style={styles.shadow}>
                <Image source={require('../../assets/img/dabar.png') }
                        style={styles.imgSize} />
                </View>
                <View style={styles.shadow}>
                <Image source={require('../../assets/img/parle.png') }
                        style={styles.imgSize} />
                </View>
            </View>

            
            <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 6 }}>
                <View style={styles.shadow}>
                <Image source={require('../../assets/img/nestle-logo.png') }
                        style={styles.imgSize} />
                </View>
                <View style={styles.shadow}>
                <Image source={require('../../assets/img/dabar.png') }
                        style={styles.imgSize} />
                </View>
                <View style={styles.shadow}>
                <Image source={require('../../assets/img/parle.png') }
                        style={styles.imgSize} />
                </View>
            </View>
            </View>

        </View>
    )

}

export default Home4;
const styles = StyleSheet.create({

    heading: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Home4Montserrat"
    },

    text: {
        fontSize: 14,
        color: "gray",
        fontWeight: "900",
        fontFamily: "Home4Montserrat"
    },
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
        backgroundColor: "#00A445",
        width: 160,
        height: 220,
        marginLeft: 10,
        paddingLeft: 10,
        borderRadius: 5,
        fontFamily: "Home4Montserrat"
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
        fontFamily: "Home4Montserrat"

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
        fontFamily: "Home4Montserrat"

    },

    img: {
        width: 200,
        height: 100,
        top: 20,
        resizeMode: 'stretch',
        
    },

    

    discount: {
        color: "#FF7612",
        backgroundColor: "#FFEEE2",
        fontSize: 14,
        width: 80,
        top: 10,
        textAlign: "center",
        padding: 1,
        fontFamily: "Home4Montserrat"
    },

    icon: {
        paddingVertical: 15,
        paddingHorizontal: 0,
        flexDirection: "row",
        top: 20,
        fontFamily: "Home4Montserrat"

    },

    iconText: {
        fontSize: 16,
        color: "#000",
        fontFamily: "Home4Montserrat"
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
        fontFamily: "Home4Montserrat"
    },


    iconBorderGreen: {
        width: 40,
        height: 40,
        padding: 10,
        left: 18,
        resizeMode: "stretch",
        // Set border width.
        borderWidth: 2,
        // Set border color.
        borderColor: '#4ED36B',
        borderRadius: 25,
        fontFamily: "Home4Montserrat"
    },

    shop: {
        fontSize: 17,
        fontFamily: "Home4Montserrat",
        textAlign: "left",
        fontWeight: "bold",
        marginTop: 20,
        padding:10,
        marginLeft:9
    },

    shadow: {
        // borderColor:'', // if you need 
        borderWidth: 0,
        overflow: 'hidden',
        shadowColor: '#fff',
        shadowRadius: 10,
        backgroundColor: "#fff",
        shadowOpacity: 1,
        width: 110,
        height: 110,
        elevation: 8,
        marginLeft: 16,
        flexDirection: "row",
        marginTop: 10
    },

    imgSize: {
        width:65,
        height: 65,
        resizeMode: 'stretch',
        alignSelf: "center",
        marginLeft: 24,
        marginTop:0
        
    },
})