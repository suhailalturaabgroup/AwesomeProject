import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

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
    }
})