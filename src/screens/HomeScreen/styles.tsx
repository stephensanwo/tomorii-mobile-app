
import { StyleSheet, Dimensions } from 'react-native'
const win = Dimensions.get('window');

const ratio = win.width/1330

export default StyleSheet.create({
    header : {
        display: "flex",
        justifyContent: "center",
        height: 50,
        alignItems: "center",

    },
    header_text : {
        fontFamily: "Poppins-Black",
        fontSize: 16,
        fontWeight: "400",
        letterSpacing: 3
    },
    collections_scroll: {
        height: 1664 * ratio,
        backgroundColor: "red",
        position: "relative"
    
       
    },
    image: {
        width: win.width,
        height: 1664 * ratio,
        resizeMode: "center"
   
    },

    image_text_container : {
        // backgroundColor: "black",
        position: 'absolute', top: 350, left: 80, right: 80, bottom: 100, justifyContent: 'center', alignItems: 'center'
       
    },
    image_text: {
        color: "#ffffff",
        fontSize: 18,
        fontFamily: "Poppins-Black",
        fontWeight: "800",
        letterSpacing: 1,
        textAlign: "center"

    }
})