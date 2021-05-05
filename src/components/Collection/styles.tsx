
import { StyleSheet, Dimensions } from 'react-native'
const win = Dimensions.get('window');

const ratio = win.width/1330

export default StyleSheet.create({

    collections_scroll: {
        height: 1664 * ratio,
        backgroundColor: "red",
        position: "relative",
        marginBottom: 10,
     
       
    },
    image: {
        width: win.width,
        height: 1664 * ratio,
        resizeMode: "center"
   
    },

    image_text_container : {
        // backgroundColor: "black",
        position: 'absolute', top: 200, left: 80, right: 80, bottom: 100, justifyContent: 'center', alignItems: 'center',
        height: 200,
        width: 250,
        padding: 50
     
       
       
    },
    image_text: {
        color: "#ffffff",
        fontSize: 20,
        fontFamily: "Poppins-Black",
        fontWeight: "800",
        letterSpacing: 1,
        textAlign: "center",

    },
    image_text_small : {
        color: "#ffffff",
        fontSize: 10,
        fontFamily: "Poppins-Regular",
        fontWeight: "400",
        letterSpacing: 1,
        textAlign: "center",
      

    },
    image_small_section: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "red",
        paddingLeft: 25,
        paddingRight: 25,

    },
    image_small : {
        width: 180,
        height: 200,
        resizeMode: "contain",
        // backgroundColor: "green"
        
    },
    collection_description :{
        marginTop: 10
    },
    amount_field: {marginTop: 20},

    shop_button :{
        backgroundColor: "#A8E6CE",
        width: 120,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    
    },
    button_text : {
        color: "#2A363B",
        fontSize: 16,
        fontFamily: "Poppins-Regular",
        fontWeight: "600",
        letterSpacing: 1,
        textAlign: "center",
      

    }

})