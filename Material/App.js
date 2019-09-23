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
import { Header, ShopCard } from './src/components/uikit'

//Variables

const DBUrl = "https://raw.githubusercontent.com/darksidecoding/React/master/resMaterial/db/material_db.json"

//Functions
export default class App extends Component  {
    state = {
        DBJson: []
    }
    
    componentDidMount = async() => {
        
        try {
            const response = await fetch(DBUrl)
            const DBJson = await response.json()
            this.setState({DBJson})   
        } 
        catch(e){
            throw e
        }

    }

    render(){
    const { DBJson } = this.state
    const {containerList } = styles
    return (
        <View>
            <Header/>
            <ScrollView>
                <View style = { containerList }>
                {
                    DBJson.map(item => (
                        <ShopCard date = {item} key = {item.id} />
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