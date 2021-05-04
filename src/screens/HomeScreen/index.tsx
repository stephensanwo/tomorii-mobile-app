import React from 'react'
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaView, Text, Image ,StatusBar, useColorScheme, View} from 'react-native';
import styles from "./styles"

const HomeScreen = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      };
    return (
        <SafeAreaView  style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View>
           <View style = {styles.header} >
            <Text style = {styles.header_text}>TOMORII GBENLE</Text>
           </View>
           <View style = {styles.collections_scroll}>
            <Image  style = {styles.image} source={require ("../../../assets/img/collection-gallery/playsuits.png")}/>
           </View>
         
           <View style = {styles.image_text_container}>
           <Text style = {styles.image_text} >Taylor Lauran Collection</Text>
           </View>

        </View>
        </SafeAreaView>
    )
}

export default HomeScreen
