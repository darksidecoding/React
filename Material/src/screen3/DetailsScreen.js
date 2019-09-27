import React, { Component } from 'react'
import { Text, View, ScrollView, Image, StyleSheet} from 'react-native'
import { Header } from '../components/uikit'

class DetailsScreen extends Component {
    render() {
        //alert(this.props.navigation.state.params.image)
        const { description, price, type, image, size, name } = this.props.navigation.state.params
        const { coverImage, h1, paragraphSub, sizeStyle, container } = styles
        const { navigation } = this.props
        return(
            <View>
                <Header title = { name }/>
                <ScrollView>
                    <View style = { container }>
                        <Image source = {{uri: image}} style = {coverImage}/>
                        <Text style = { h1 }>{ name }</Text>
                        <Text style = { paragraphSub }> { description } </Text>
                        <Text style = { sizeStyle }> Size is: { size.toUpperCase() } </Text>
                        <Text style = { sizeStyle }> Price: { price } </Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center'
    },
    coverImage: {
        width: 240,
        height: 280,
        alignSelf: 'center'
    },
    h1: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: "AvenirNext-DemiBold"
    },
    paragraphSub: {
        fontSize: 16,
        fontFamily: "AvenirNext-DemiBold"
    },
    sizeStyle: {
        fontSize: 18,
        fontFamily: "AvenirNext-DemiBold"
    }
})

export default DetailsScreen