import React from 'react'
import {SafeAreaView, Text, Image ,StatusBar, useColorScheme, View, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import styles from "./styles"
import Icon from 'react-native-vector-icons/FontAwesome5';
import Collection from '../../components/Collection';
import {collections} from "../../data/collections"


const HomeScreen = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView  >
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       
           <View style = {styles.header} >
            <Text style = {styles.header_text}>TOMORII GBENLE</Text>
           </View>
               <FlatList
               data = {collections}
               renderItem = {({item}) => <Collection item ={item} />}
               />       
        </SafeAreaView>
    )
}

export default HomeScreen
