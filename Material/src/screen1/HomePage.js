//Imports
import React, {Fragment, Component} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions
} from 'react-native'
import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'
import { Header, ShopCard } from '../components/uikit'
import {
    MATERIAL_DETAILS
} from '../routes'

//Variables

const DBUrl = "https://raw.githubusercontent.com/darksidecoding/React/master/resMaterial/db/material_db.json"

//Functions
export default class HomePage extends Component  {
    state = {
       data: []
    }
    
    componentDidMount = async() => {
        
        try {
            const response = await fetch(DBUrl)
            const data = await response.json()
            this.setState({data})   
        } 
        catch(e){
            throw e
        }

    }

    render(){
    const { data } = this.state
    const {containerList } = styles
    const { navigation } = this.props
    return (
        <View>
            <Header/>
            <ScrollView>
                <View style = { containerList }>
                {
                    data.map(item => (
                        <ShopCard 
                            date = {item} 
                            key = {item.id}
                            onPress = {() => navigation.navigate(MATERIAL_DETAILS, (item))}
                        />
                    ))
                }
                </View>
            </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerList: {
        marginTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexShrink: 2,
        justifyContent: 'space-around',
        marginBottom: 150
    } 
})