import React from 'react'
import { Text, StyleSheet, View, Image, Button, TouchableOpacity } from 'react-native'
import { heightWindow, widthWindow } from '../../constants' 

const ShopCard = ({date, onPress}) => {
    const { containerCard, h1, coverImage, priceCard, buttonCard } = styles
    const {image, type, price} = date
    return (
        <TouchableOpacity onPress = {onPress}>
            <View style = { containerCard }>
                <Image source = {{uri: image}} style = { coverImage } />
                <Text style = { h1 }> {type.toUpperCase()} </Text>
                <Text style = { priceCard }>{price}$</Text>
                <Button title = "Order" color = "#5F4B8B" style = { buttonCard } onPress={() =>     Alert.alert('Simple Button pressed')}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerCard: {
        shadowColor: "#000",
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.4,
        elevation: 7,
        padding: 10,
        paddingVertical: 10,
        width: widthWindow / 2.1
    },
    h1: {
        fontFamily: "AvenirNext-DemiBold",
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
        width: widthWindow / 2.4
    },
    coverImage: {
        width: widthWindow / 2.4,
        height: widthWindow * 0.63
    },
    priceCard: {
        fontFamily: "AvenirNext-DemiBold",
        fontSize: 20,
        textAlign: 'center',
        color: "#555",
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonCard: {
        fontFamily: "AvenirNext-DemiBold",
        fontSize: 16,
        textTransform: 'uppercase',
        color: "#5F4B8B",
        borderColor: "#5F4B8B",
        borderRadius: 5,
        elevation: 7
    }
})

export { ShopCard }