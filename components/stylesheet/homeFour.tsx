import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({

    heading: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "HomeFourMontserrat"
    },

    text: {
        fontSize: 14,
        color: "gray",
        fontWeight: "900",
        fontFamily: "HomeFourMontserrat"
    },
    list: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#fff",
        padding: 8,
        margin: 8,
        marginTop: 0,
        fontFamily: "HomeFourMontserrat"

    },

    list1: {
        backgroundColor: "#00A445",
        width: 160,
        height: 220,
        marginLeft: 10,
        paddingLeft: 10,
        borderRadius: 5,
        fontFamily: "HomeFourMontserrat"
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
        fontFamily: "HomeFourMontserrat"

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
        fontFamily: "HomeFourMontserrat"

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
        fontFamily: "HomeFourMontserrat"
    },

    icon: {
        paddingVertical: 15,
        paddingHorizontal: 0,
        flexDirection: "row",
        top: 20,
        fontFamily: "HomeFourMontserrat"

    },

    iconText: {
        fontSize: 16,
        color: "#000",
        fontFamily: "HomeFourMontserrat"
    },

    iconBorderBlue: {
        width: 40,
        height: 40,
        padding: 10,
        resizeMode: "stretch",
        borderWidth: 2,
        borderColor: '#5EBCF9',
        borderRadius: 25,
        fontFamily: "HomeFourMontserrat"
    },


    iconBorderGreen: {
        width: 40,
        height: 40,
        padding: 10,
        left: 18,
        // resizeMode: "stretch",
        // Set border width.
        borderWidth: 2,
        // Set border color.
        borderColor: '#4ED36B',
        borderRadius: 25,
        fontFamily: "HomeFourMontserrat"
    },

    shop: {
        fontSize: 17,
        fontFamily: "HomeFourMontserrat",
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
        // resizeMode: 'stretch',
        alignSelf: "center",
        marginLeft: 24,
        marginTop:0
        
    }
})