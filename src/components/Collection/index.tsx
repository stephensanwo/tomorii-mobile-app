import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from "./styles"

const Collection = ({item}) => {
    const image_title = "lauran"
    return (
        <View>
           <View style = {styles.collections_scroll}>
            <Image  style = {styles.image} source={require (`../../../assets/img/collection-gallery/${image_title}.png`)}/>
            
           </View>         
           <View style = {styles.image_text_container}>
           <Text style = {styles.image_text} >{item.collection_name}</Text>
           <Text style = {styles.image_text} >Collection</Text>
           <View style = {styles.collection_description}>
           <Text style = {styles.image_text_small} >{item.description}</Text>

           </View>
           <TouchableOpacity style = {styles.shop_button}>
               <Text style = {styles.button_text}>Shop Now</Text>
           </TouchableOpacity>
           
           <View style = {styles.amount_field}>
            <Text style = {styles.image_text_small}>from </Text>
            <Text style = {styles.image_text}>₦{item.amount}</Text>

           </View>
          
         
           </View>
           <View style = {styles.image_small_section} >
                <View>
                    <Image  style = {styles.image_small} source={require (`../../../assets/img/collection-gallery/${image_title}.png`)}/>
                    {/* <Text  style = {styles.image_text_small}>Featured Style in Collection</Text> */}
               </View>
               <View>
                    <Image  style = {styles.image_small} source={require ("../../../assets/img/collection-gallery/playsuits.png")}/>
                    {/* <Text  style = {styles.image_text_small}>Top Picks in Collection</Text> */}
               </View>
            
           </View>     
        </View>
    )
}



export default Collection
