
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
        letterSpacing: 3,
        
       
    }

})