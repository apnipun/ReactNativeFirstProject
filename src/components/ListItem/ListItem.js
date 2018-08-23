
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem} >
        <Image resizeMode="contain" source={props.placeImage}/>
        <Text style={styles.placeName}>{props.placeName}</Text>
    </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem:{
        width:"100%",
        marginBottom: 4,
        padding: 10,
        backgroundColor: "#eee",
        flexDirection: 'row',
        alignItems: 'center',
    },
    placeName:{
        padding:20
    },
    placeImage:{
        marginRight: 8,
        width:30,
        height:30
    }
});

export default listItem;
